'use client';

// ============================================================
// GES SOLAR PRO — Image Upload Component
// Sürükle-bırak, önizleme ve /api/upload'a otomatik yükleme
// ============================================================
import { useState, useRef, useCallback, type DragEvent, type ChangeEvent } from 'react';
import { Upload, X, Loader2, Image as ImageIcon, AlertCircle } from 'lucide-react';

type ImageUploadProps = {
  name: string;                          // Hidden input name (formData key)
  defaultValue?: string;                 // Mevcut resim URL'si (düzenleme için)
  accept?: string;                       // Kabul edilen dosya türleri
  maxSize?: number;                      // Maksimum boyut (byte), varsayılan 10 MB
  className?: string;
  label?: string;
  helpText?: string;
};

export function ImageUpload({
  name,
  defaultValue = '',
  accept = 'image/jpeg,image/png,image/webp,image/avif,image/gif,image/svg+xml',
  maxSize = 10 * 1024 * 1024,
  className = '',
  label = 'Görsel Yükle',
  helpText = 'Sürükle-bırak veya tıkla. JPEG, PNG, WebP, AVIF, SVG, GIF • Maks 10 MB',
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string>(defaultValue);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    async (file: File) => {
      // Client-side validasyon
      const allowedTypes = accept.split(',');
      if (!file.type || !allowedTypes.some((t) => t.trim() === file.type)) {
        setError(`Geçersiz dosya türü: ${file.type || 'bilinmiyor'}`);
        return;
      }

      if (file.size > maxSize) {
        setError(`Dosya çok büyük. Maksimum ${Math.round(maxSize / 1024 / 1024)} MB.`);
        return;
      }

      if (file.size === 0) {
        setError('Dosya boş.');
        return;
      }

      setError(null);
      setUploading(true);

      try {
        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || `Sunucu hatası: ${res.status}`);
        }

        setPreview(data.url);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Bilinmeyen bir hata oluştu.';
        setError(message);
        console.error('Upload failed:', err);
      } finally {
        setUploading(false);
      }
    },
    [accept, maxSize]
  );

  const onFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const onDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  }, []);

  const onDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  }, []);

  const onDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragOver(false);
      const file = e.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const removeImage = useCallback(() => {
    setPreview('');
    setError(null);
    if (inputRef.current) inputRef.current.value = '';
  }, []);

  return (
    <div className={`space-y-1.5 ${className}`}>
      {/* Label */}
      <span className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {label}
      </span>

      {/* Hidden input — form'a URL değerini taşır */}
      <input type="hidden" name={name} value={preview} />

      {preview ? (
        /* == PREVIEW STATE == */
        <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
          <img
            src={preview}
            alt="Önizleme"
            className="h-48 w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/50 px-4 py-2 backdrop-blur-sm">
            <span className="truncate text-xs text-white/80">
              {preview.slice(0, 40)}...
            </span>
            <button
              type="button"
              onClick={removeImage}
              className="flex items-center gap-1 rounded-lg bg-red-500/80 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-500 transition-colors"
            >
              <X size={14} />
              Kaldır
            </button>
          </div>
        </div>
      ) : (
        /* == UPLOAD ZONE == */
        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={`
            relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-10 transition-all duration-200
            ${dragOver
              ? 'border-solar-400 bg-solar-50 dark:bg-solar-950/30 scale-[1.02]'
              : 'border-neutral-300 bg-neutral-50 hover:border-solar-300 hover:bg-solar-50/50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-solar-600 dark:hover:bg-solar-950/20'
            }
          `}
        >
          {uploading ? (
            <>
              <Loader2 size={32} className="animate-spin text-solar-500" />
              <span className="text-sm text-neutral-500 dark:text-neutral-400">Yükleniyor...</span>
            </>
          ) : (
            <>
              {dragOver ? (
                <Upload size={32} className="text-solar-500" />
              ) : (
                <ImageIcon size={32} className="text-neutral-400 dark:text-neutral-500" />
              )}
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {dragOver ? 'Bırakın' : 'Tıklayın veya sürükleyin'}
              </span>
              <span className="text-[11px] text-neutral-400 dark:text-neutral-500 text-center leading-relaxed">
                {helpText}
              </span>
            </>
          )}

          <input
            ref={inputRef}
            type="file"
            accept={accept}
            onChange={onFileChange}
            className="hidden"
            disabled={uploading}
          />
        </div>
      )}

      {/* Hata mesajı */}
      {error && (
        <div className="flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600 dark:bg-red-950/30 dark:text-red-400">
          <AlertCircle size={14} />
          {error}
        </div>
      )}
    </div>
  );
}
