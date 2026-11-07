/**
 * NoPara - FFmpeg argument builder (moved out of App.jsx unchanged so it can be tested).
 * Note: the CRF slider and preset radios in the UI are not passed in; the codec
 * settings below are fixed per output format.
 */

/**
 * Build FFmpeg arguments based on input/output formats
 */
export function buildFFmpegArgs(input, output, format, category) {
  const baseArgs = ['-i', input];

  // Audio conversions
  if (['mp3', 'wav', 'aac', 'flac'].includes(format)) {
    if (format === 'mp3') {
      return [...baseArgs, '-vn', '-acodec', 'libmp3lame', '-q:a', '2', output];
    } else if (format === 'wav') {
      return [...baseArgs, '-vn', '-acodec', 'pcm_s16le', output];
    } else if (format === 'aac') {
      return [...baseArgs, '-vn', '-acodec', 'aac', '-b:a', '192k', output];
    } else if (format === 'flac') {
      return [...baseArgs, '-vn', '-acodec', 'flac', output];
    }
  }

  // Video conversions
  if (['mp4', 'webm', 'avi', 'mkv'].includes(format)) {
    if (format === 'mp4') {
      return [...baseArgs, '-c:v', 'libx264', '-preset', 'medium', '-crf', '23', '-c:a', 'aac', output];
    } else if (format === 'webm') {
      return [...baseArgs, '-c:v', 'libvpx', '-crf', '30', '-b:v', '0', '-c:a', 'libvorbis', output];
    } else if (format === 'avi') {
      return [...baseArgs, '-c:v', 'mpeg4', '-q:v', '5', '-c:a', 'mp3', output];
    } else if (format === 'mkv') {
      return [...baseArgs, '-c:v', 'copy', '-c:a', 'copy', output];
    }
  }

  // Image/GIF conversions - HIGH QUALITY
  if (['gif', 'png', 'jpg', 'webp'].includes(format)) {
    if (format === 'gif') {
      // High quality GIF: 15fps, lanczos scaling, keep original size
      return [
        ...baseArgs,
        '-vf', 'fps=15,scale=-1:-1:flags=lanczos',
        '-gifflags', '+transdiff',
        '-loop', '0',
        output
      ];
    } else if (format === 'png') {
      return [...baseArgs, '-vframes', '1', output];
    } else if (format === 'jpg') {
      return [...baseArgs, '-vframes', '1', '-q:v', '2', output];
    } else if (format === 'webp') {
      return [...baseArgs, '-vframes', '1', '-quality', '80', output];
    }
  }

  // Default: simple copy
  return [...baseArgs, '-c', 'copy', output];
}

/**
 * Get MIME type for output format
 */
export function getMimeType(format) {
  const mimeTypes = {
    mp3: 'audio/mpeg',
    wav: 'audio/wav',
    aac: 'audio/aac',
    flac: 'audio/flac',
    mp4: 'video/mp4',
    webm: 'video/webm',
    avi: 'video/x-msvideo',
    mkv: 'video/x-matroska',
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    webp: 'image/webp',
  };
  return mimeTypes[format] || 'application/octet-stream';
}

