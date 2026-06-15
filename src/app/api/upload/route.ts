// ============================================================
// GES SOLAR PRO — File Upload API Route
// POST /api/upload — multipart/form-data dosya yükleme
// ============================================================
import { NextResponse } from 'next/server';
import { uploadFile } from '@/lib/upload';

// İzin verilen MIME türleri
const ALLOWED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
  'image/svg+xml',
  'image/gif',
  'application/pdf',
];

// Maksimum dosya boyutu: 10 MB
const MAX_SIZE = 10 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json(
        { error: 'Dosya bulunamadı veya geçersiz formatta.' },
        { status: 400 }
      );
    }

    // Dosya adı kontrolü
    const filename = (file as File).name || 'dosya';
    if (!filename || filename.length > 255) {
      return NextResponse.json(
        { error: 'Dosya adı geçersiz veya çok uzun.' },
        { status: 400 }
      );
    }

    // MIME türü kontrolü
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `Geçersiz dosya türü: ${file.type}. İzin verilenler: ${ALLOWED_TYPES.join(', ')}` },
        { status: 400 }
      );
    }

    // Boyut kontrolü
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: `Dosya çok büyük. Maksimum ${MAX_SIZE / 1024 / 1024} MB.` },
        { status: 400 }
      );
    }

    // Dosyayı Buffer'a çevir ve kaydet
    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await uploadFile(buffer, filename, file.type);

    return NextResponse.json(result, { status: 201 });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json(
      { error: 'Dosya yüklenirken bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
