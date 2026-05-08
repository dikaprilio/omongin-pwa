'use client';

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  memo,
} from 'react';

// ============================================================================
// Types
// ============================================================================

export interface PlacedText {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  fontSize: number;
}

export type AnnotationMode = 'draw' | 'text';

export interface AnnotationOverlayRef {
  clear: () => void;
  setTexts: (texts: PlacedText[]) => void;
  getTexts: () => PlacedText[];
}

interface AnnotationOverlayProps {
  isActive: boolean;
  mode: AnnotationMode;
  color: string;
  lineWidth: number;
}

interface Point {
  x: number;
  y: number;
}

type ResizeHandle = 'nw' | 'ne' | 'sw' | 'se' | null;

// ============================================================================
// Constants
// ============================================================================

const MIN_TEXT_WIDTH = 80;
const MIN_TEXT_HEIGHT = 40;
const DEFAULT_TEXT_WIDTH = 200;
const DEFAULT_TEXT_HEIGHT = 60;
const DEFAULT_FONT_SIZE = 30; // 1.5x larger than before (was 20)

// ============================================================================
// DraggableTextBox Component
// ============================================================================

interface DraggableTextBoxProps {
  text: PlacedText;
  isSelected: boolean;
  isEditing: boolean;
  containerWidth: number;
  containerHeight: number;
  onUpdate: (updates: Partial<PlacedText>) => void;
  onDelete: () => void;
  onSelect: () => void;
  onStartEditing: () => void;
  onStopEditing: () => void;
}

const DraggableTextBox = memo(function DraggableTextBox({
  text,
  isSelected,
  isEditing,
  containerWidth,
  containerHeight,
  onUpdate,
  onDelete,
  onSelect,
  onStartEditing,
  onStopEditing,
}: DraggableTextBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeHandle, setResizeHandle] = useState<ResizeHandle>(null);
  const dragStartRef = useRef<Point>({ x: 0, y: 0 });
  const initialRectRef = useRef<PlacedText | null>(null);

  // Auto-focus textarea when editing starts
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.select();
    }
  }, [isEditing]);

  // Handle drag start
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (isEditing) return;
      
      e.stopPropagation();
      e.preventDefault();
      onSelect();
      
      setIsDragging(true);
      dragStartRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
      initialRectRef.current = { ...text };
    },
    [isEditing, text, onSelect]
  );

  // Handle resize start
  const handleResizeStart = useCallback(
    (e: React.MouseEvent, handle: ResizeHandle) => {
      e.stopPropagation();
      e.preventDefault();
      
      setIsResizing(true);
      setResizeHandle(handle);
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      initialRectRef.current = { ...text };
      onSelect();
    },
    [text, onSelect]
  );

  // Calculate new font size based on resize ratio (keeping aspect ratio)
  const calculateNewFontSize = useCallback((newWidth: number, newHeight: number) => {
    if (!initialRectRef.current) return text.fontSize;
    const initial = initialRectRef.current;
    // Use the average of width and height ratios to scale font
    const widthRatio = newWidth / initial.width;
    const heightRatio = newHeight / initial.height;
    const avgRatio = (widthRatio + heightRatio) / 2;
    return Math.max(12, Math.round(initial.fontSize * avgRatio));
  }, [text.fontSize]);

  // Global mouse move handler for drag/resize
  useEffect(() => {
    if (!isDragging && !isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && initialRectRef.current) {
        const deltaX = e.clientX - dragStartRef.current.x;
        const deltaY = e.clientY - dragStartRef.current.y;
        const initial = initialRectRef.current;
        
        onUpdate({
          x: Math.max(0, Math.min(initial.x + deltaX, containerWidth - text.width)),
          y: Math.max(0, Math.min(initial.y + deltaY, containerHeight - text.height)),
        });
      } else if (isResizing && initialRectRef.current && resizeHandle) {
        const deltaX = e.clientX - dragStartRef.current.x;
        const deltaY = e.clientY - dragStartRef.current.y;
        const initial = initialRectRef.current;

        let newX = initial.x;
        let newY = initial.y;
        let newWidth = initial.width;
        let newHeight = initial.height;

        switch (resizeHandle) {
          case 'se':
            newWidth = Math.max(MIN_TEXT_WIDTH, initial.width + deltaX);
            newHeight = Math.max(MIN_TEXT_HEIGHT, initial.height + deltaY);
            break;
          case 'sw':
            newWidth = Math.max(MIN_TEXT_WIDTH, initial.width - deltaX);
            newHeight = Math.max(MIN_TEXT_HEIGHT, initial.height + deltaY);
            newX = initial.x + initial.width - newWidth;
            break;
          case 'ne':
            newWidth = Math.max(MIN_TEXT_WIDTH, initial.width + deltaX);
            newHeight = Math.max(MIN_TEXT_HEIGHT, initial.height - deltaY);
            newY = initial.y + initial.height - newHeight;
            break;
          case 'nw':
            newWidth = Math.max(MIN_TEXT_WIDTH, initial.width - deltaX);
            newHeight = Math.max(MIN_TEXT_HEIGHT, initial.height - deltaY);
            newX = initial.x + initial.width - newWidth;
            newY = initial.y + initial.height - newHeight;
            break;
        }

        // Calculate new font size based on resize
        const newFontSize = calculateNewFontSize(newWidth, newHeight);

        onUpdate({ 
          x: newX, 
          y: newY, 
          width: newWidth, 
          height: newHeight,
          fontSize: newFontSize
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
      setResizeHandle(null);
      initialRectRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, resizeHandle, containerWidth, containerHeight, text.width, text.height, onUpdate, calculateNewFontSize]);

  // Handle double click to edit
  const handleDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onStartEditing();
    },
    [onStartEditing]
  );

  // Handle key down in textarea
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onStopEditing();
      }
      if (e.key === 'Escape') {
        onStopEditing();
      }
    },
    [onStopEditing]
  );

  // Handle blur
  const handleBlur = useCallback(() => {
    onStopEditing();
  }, [onStopEditing]);

  return (
    <div
      ref={boxRef}
      className={`absolute select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} ${
        isSelected ? 'z-20' : 'z-10'
      }`}
      style={{
        left: text.x,
        top: text.y,
        width: text.width,
        height: text.height,
      }}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
    >
      {/* Main text container */}
      <div
        className={`relative w-full h-full rounded border-2 transition-colors ${
          isSelected
            ? 'border-blue-500 bg-blue-50/10'
            : 'border-transparent hover:border-blue-300/50'
        }`}
      >
        {/* Text content */}
        {isEditing ? (
          <textarea
            ref={textareaRef}
            value={text.text}
            onChange={(e) => onUpdate({ text: e.target.value })}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            className="w-full h-full resize-none border-none bg-transparent p-2 text-black outline-none"
            style={{
              fontSize: `${text.fontSize}px`,
              lineHeight: '1.3',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
            placeholder="Type text..."
          />
        ) : (
          <div
            className="h-full w-full overflow-hidden whitespace-pre-wrap break-words p-2 text-black"
            style={{
              fontSize: `${text.fontSize}px`,
              lineHeight: '1.3',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            {text.text || <span className="text-gray-400">Double-click to edit</span>}
          </div>
        )}

        {/* Delete button - X in top right corner (visible when selected) */}
        {isSelected && !isEditing && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition-all hover:scale-110 hover:bg-red-600 z-30"
            title="Delete text"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}

        {/* Resize handles (visible when selected and not editing) */}
        {isSelected && !isEditing && (
          <>
            <div
              className="absolute -left-1.5 -top-1.5 h-3 w-3 cursor-nw-resize rounded-full border border-blue-500 bg-white"
              onMouseDown={(e) => handleResizeStart(e, 'nw')}
            />
            <div
              className="absolute -right-1.5 -top-1.5 h-3 w-3 cursor-ne-resize rounded-full border border-blue-500 bg-white"
              onMouseDown={(e) => handleResizeStart(e, 'ne')}
            />
            <div
              className="absolute -bottom-1.5 -left-1.5 h-3 w-3 cursor-sw-resize rounded-full border border-blue-500 bg-white"
              onMouseDown={(e) => handleResizeStart(e, 'sw')}
            />
            <div
              className="absolute -bottom-1.5 -right-1.5 h-3 w-3 cursor-se-resize rounded-full border border-blue-500 bg-white"
              onMouseDown={(e) => handleResizeStart(e, 'se')}
            />
          </>
        )}
      </div>
    </div>
  );
});

// ============================================================================
// Main AnnotationOverlay Component
// ============================================================================

export const AnnotationOverlay = forwardRef<AnnotationOverlayRef, AnnotationOverlayProps>(
  function AnnotationOverlay({ isActive, mode, color, lineWidth }, ref) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const lastPoint = useRef<Point | null>(null);

    // Text state
    const [texts, setTexts] = useState<PlacedText[]>([]);
    const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
    const [editingTextId, setEditingTextId] = useState<string | null>(null);
    const [isPlacingText, setIsPlacingText] = useState(false);

    // Expose imperative handle
    useImperativeHandle(ref, () => ({
      clear: () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
        setTexts([]);
        setSelectedTextId(null);
        setEditingTextId(null);
      },
      setTexts: (newTexts: PlacedText[]) => {
        setTexts(newTexts);
      },
      getTexts: () => texts,
    }));

    // Drawing coordinate helper
    const getCoordinates = useCallback((e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return null;

      const rect = canvas.getBoundingClientRect();
      let clientX, clientY;

      if ('touches' in e) {
        if (e.touches.length === 0) return null;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      // Calculate scale factor from the bounding rect vs original width/height
      const currentScaleX = rect.width / canvas.width;
      const currentScaleY = rect.height / canvas.height;

      return {
        x: (clientX - rect.left) / currentScaleX,
        y: (clientY - rect.top) / currentScaleY
      };
    }, []);

    // Drawing handlers
    const startDrawing = useCallback((e: React.MouseEvent | React.TouchEvent) => {
      if (!isActive || mode !== 'draw') return;
      const coords = getCoordinates(e);
      if (!coords) return;

      setIsDrawing(true);
      lastPoint.current = coords;
    }, [isActive, mode, getCoordinates]);

    const draw = useCallback((e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
      if (!isDrawing || !isActive || mode !== 'draw') return;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const coords = getCoordinates(e);
      if (!coords || !lastPoint.current) return;

      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
      ctx.lineTo(coords.x, coords.y);
      ctx.stroke();

      lastPoint.current = coords;
    }, [isDrawing, isActive, mode, color, lineWidth, getCoordinates]);

    const stopDrawing = useCallback(() => {
      setIsDrawing(false);
      lastPoint.current = null;
    }, []);

    // Global mouse events for smooth drawing
    useEffect(() => {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        if (isDrawing) draw(e);
      };
      const handleGlobalMouseUp = () => {
        if (isDrawing) stopDrawing();
      };

      if (isDrawing) {
        window.addEventListener('mousemove', handleGlobalMouseMove);
        window.addEventListener('mouseup', handleGlobalMouseUp);
      }

      return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove);
        window.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    }, [isDrawing, draw, stopDrawing]);

    // Text placement handler
    const handleTextLayerClick = useCallback((e: React.MouseEvent) => {
      if (!isActive || mode !== 'text') return;
      if (isPlacingText) return;
      
      // Don't place text if clicking on an existing text box
      if ((e.target as HTMLElement).closest('[data-text-box]')) return;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const currentScaleX = rect.width / canvas.width;
      const currentScaleY = rect.height / canvas.height;

      const x = (e.clientX - rect.left) / currentScaleX;
      const y = (e.clientY - rect.top) / currentScaleY;

      const newText: PlacedText = {
        id: `text-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        x: x - DEFAULT_TEXT_WIDTH / 2,
        y: y - DEFAULT_TEXT_HEIGHT / 2,
        width: DEFAULT_TEXT_WIDTH,
        height: DEFAULT_TEXT_HEIGHT,
        text: '',
        fontSize: DEFAULT_FONT_SIZE,
      };

      setTexts((prev) => [...prev, newText]);
      setSelectedTextId(newText.id);
      setEditingTextId(newText.id);
      setIsPlacingText(true);
    }, [isActive, mode, isPlacingText]);

    // Deselect text when clicking background
    const handleBackgroundClick = useCallback((e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        setSelectedTextId(null);
        setEditingTextId(null);
      }
    }, []);

    // Text update handlers
    const handleTextUpdate = useCallback((id: string, updates: Partial<PlacedText>) => {
      setTexts((prev) =>
        prev.map((text) => (text.id === id ? { ...text, ...updates } : text))
      );
    }, []);

    const handleTextDelete = useCallback((id: string) => {
      setTexts((prev) => prev.filter((text) => text.id !== id));
      setSelectedTextId(null);
      setEditingTextId(null);
    }, []);

    const handleTextSelect = useCallback((id: string) => {
      setSelectedTextId(id);
    }, []);

    const handleStartEditing = useCallback((id: string) => {
      setSelectedTextId(id);
      setEditingTextId(id);
    }, []);

    const handleStopEditing = useCallback((id: string) => {
      setEditingTextId(null);
      // Remove empty texts
      setTimeout(() => {
        setTexts((prev) => prev.filter((text) => text.id !== id || text.text.trim() !== ''));
      }, 100);
    }, []);

    // Reset placing flag when editing ends
    useEffect(() => {
      if (!editingTextId) {
        setIsPlacingText(false);
      }
    }, [editingTextId]);

    // Keyboard shortcuts for text mode
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.key === 'Delete' || e.key === 'Backspace') && selectedTextId && !editingTextId) {
          e.preventDefault();
          handleTextDelete(selectedTextId);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedTextId, editingTextId, handleTextDelete]);

    return (
      <>
        {/* Drawing Canvas - Fixed 1920x1080 with CSS scaling */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className={`absolute inset-0 z-[100] ${isActive && mode === 'draw' ? 'cursor-crosshair touch-none' : 'pointer-events-none'}`}
          onMouseDown={startDrawing}
          onTouchStart={startDrawing}
          onTouchMove={(e) => {
            if (isDrawing) draw(e);
          }}
          onTouchEnd={stopDrawing}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent'
          }}
        />

        {/* Text Layer - Fixed 1920x1080 with CSS scaling */}
        {/* Text is always visible but only interactive in text mode */}
        <div
          className={`absolute inset-0 z-[101] ${isActive && mode === 'text' ? 'cursor-text' : 'pointer-events-none'}`}
          style={{ width: 1920, height: 1080 }}
          onClick={isActive && mode === 'text' ? handleTextLayerClick : undefined}
          onMouseDown={(e) => {
            if (isActive && mode === 'text' && (e.target as HTMLElement) === e.currentTarget) {
              e.preventDefault();
            }
          }}
        >
          {texts.map((text) => (
            <div key={text.id} data-text-box>
              <DraggableTextBox
                text={text}
                isSelected={selectedTextId === text.id && isActive && mode === 'text'}
                isEditing={editingTextId === text.id && isActive && mode === 'text'}
                containerWidth={1920}
                containerHeight={1080}
                onUpdate={(updates) => handleTextUpdate(text.id, updates)}
                onDelete={() => handleTextDelete(text.id)}
                onSelect={() => handleTextSelect(text.id)}
                onStartEditing={() => handleStartEditing(text.id)}
                onStopEditing={() => handleStopEditing(text.id)}
              />
            </div>
          ))}
          
          {/* Mode indicator - only show when active in text mode */}
          {isActive && mode === 'text' && !isPlacingText && (
            <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white shadow-sm">
              Click to place text • Drag to move • Resize corners • Double-click to edit
            </div>
          )}
        </div>
      </>
    );
  }
);

AnnotationOverlay.displayName = 'AnnotationOverlay';

export default AnnotationOverlay;
