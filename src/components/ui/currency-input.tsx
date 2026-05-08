'use client';

import React, { useState, useEffect } from 'react';
import { Input } from './input';

interface CurrencyInputProps {
  id?: string;
  name?: string;
  defaultValue?: number | null;
  value?: number | null;
  onChange?: (value: number | null) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function CurrencyInput({
  id,
  name,
  defaultValue,
  value,
  onChange,
  placeholder,
  className,
  disabled,
}: CurrencyInputProps) {
  const [displayValue, setDisplayValue] = useState('');
  const [rawValue, setRawValue] = useState<number | null>(defaultValue ?? null);

  // Format number to Indonesian currency format
  const formatNumber = (num: number): string => {
    return num.toLocaleString('id-ID');
  };

  // Parse formatted string back to number
  const parseNumber = (str: string): number | null => {
    // Remove all non-numeric characters except minus
    const cleaned = str.replace(/[^0-9-]/g, '');
    if (cleaned === '' || cleaned === '-') return null;
    const num = parseInt(cleaned, 10);
    return isNaN(num) ? null : num;
  };

  // Initialize display value
  useEffect(() => {
    if (value !== undefined) {
      setRawValue(value);
      setDisplayValue(value !== null ? formatNumber(value) : '');
    } else if (defaultValue !== undefined) {
      setDisplayValue(defaultValue !== null ? formatNumber(defaultValue) : '');
    }
  }, [defaultValue, value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Allow empty input
    if (inputValue === '') {
      setDisplayValue('');
      setRawValue(null);
      onChange?.(null);
      return;
    }

    // Parse the raw number
    const num = parseNumber(inputValue);
    
    if (num !== null) {
      setRawValue(num);
      setDisplayValue(formatNumber(num));
      onChange?.(num);
    }
  };

  // Handle key down to allow navigation keys
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter
    if (['Backspace', 'Delete', 'Tab', 'Escape', 'Enter'].includes(e.key)) {
      return;
    }
    
    // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
    if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) {
      return;
    }
    
    // Allow: home, end, left, right
    if (['Home', 'End', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      return;
    }

    // Allow: numbers and minus sign at start
    if (/^[0-9]$/.test(e.key)) {
      return;
    }
    
    if (e.key === '-' && !displayValue.includes('-')) {
      return;
    }

    // Prevent default for other keys
    e.preventDefault();
  };

  return (
    <Input
      id={id}
      name={name}
      type="text"
      inputMode="numeric"
      value={displayValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
    />
  );
}
