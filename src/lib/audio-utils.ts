/**
 * Encodes audio samples to WAV format.
 */
function encodeWav(samples: Float32Array, sampleRate: number, bitsPerSample: number): ArrayBuffer {
    const buffer = new ArrayBuffer(44 + samples.length * 2);
    const view = new DataView(buffer);

    // WAV header
    const writeString = (offset: number, str: string) => {
        for (let i = 0; i < str.length; i++) {
            view.setUint8(offset + i, str.charCodeAt(i));
        }
    };

    writeString(0, 'RIFF');
    view.setUint32(4, 36 + samples.length * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); // PCM
    view.setUint16(22, 1, true); // Mono
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, bitsPerSample, true);
    writeString(36, 'data');
    view.setUint32(40, samples.length * 2, true);

    // Write audio data
    let offset = 44;
    for (let i = 0; i < samples.length; i++) {
        const s = Math.max(-1, Math.min(1, samples[i]));
        view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        offset += 2;
    }

    return buffer;
}

/**
 * Converts a WebM Audio Blob to a WAV Blob (16kHz Mono) compatible with Azure Speech.
 */
export async function convertWebMToWav(webmBlob: Blob): Promise<Blob> {
    // Guard: Check if blob has content
    if (!webmBlob || webmBlob.size === 0) {
        throw new Error('No audio data recorded. Please try recording again.');
    }

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
    const arrayBuffer = await webmBlob.arrayBuffer();

    // Guard: Check if buffer has content
    if (arrayBuffer.byteLength === 0) {
        throw new Error('Audio recording is empty. Please speak into the microphone.');
    }

    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    // Process: Downmix to mono if needed (usually decodeAudioData handles channel access)
    // We just take the first channel
    const samples = audioBuffer.getChannelData(0);

    // Encode
    const wavBuffer = encodeWav(samples, 16000, 16);
    return new Blob([wavBuffer], { type: 'audio/wav' });
}

// Deprecated: old Buffer helper if needed, but the Blob one is better
export function audioBufferToWav(buffer: AudioBuffer): Blob {
    // ... logic folded into convertWebMToWav pipeline for simplicity
    const samples = buffer.getChannelData(0);
    const wavBuffer = encodeWav(samples, buffer.sampleRate, 16);
    return new Blob([wavBuffer], { type: 'audio/wav' });
}
