// ============================================================
// GES SOLAR PRO — File Upload Utility
// Local storage (dev) + S3-compatible (prod)
// ============================================================
import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import prisma from '@/lib/prisma';

const UPLOAD_DIR = process.env.UPLOAD_DIR || './public/uploads';

export interface UploadResult {
  id: string;
  url: string;
  filename: string;
  mimeType: string;
  size: number;
  width?: number;
  height?: number;
}

export async function uploadFile(
  buffer: Buffer,
  originalName: string,
  mimeType: string,
): Promise<UploadResult> {
  const ext = path.extname(originalName).toLowerCase();
  const safeExt = ext || '.jpg';
  const uniqueName = `${uuidv4()}${safeExt}`;
  const uploadPath = path.join(UPLOAD_DIR, uniqueName);

  // Ensure directory exists
  await mkdir(UPLOAD_DIR, { recursive: true });

  // Write file
  await writeFile(uploadPath, buffer);

  const relativeUrl = `/uploads/${uniqueName}`;

  // Save to DB
  const media = await prisma.media.create({
    data: {
      filename: originalName,
      url: relativeUrl,
      mimeType,
      size: buffer.length,
      alt: originalName.replace(ext, ''),
    },
  });

  return {
    id: media.id,
    url: relativeUrl,
    filename: originalName,
    mimeType,
    size: buffer.length,
  };
}

export async function deleteFile(mediaId: string): Promise<void> {
  const media = await prisma.media.findUnique({ where: { id: mediaId } });
  if (!media) return;

  const filePath = path.join(UPLOAD_DIR, path.basename(media.url));
  try {
    await unlink(filePath);
  } catch {
    // File may not exist on disk — continue to delete DB record
  }

  await prisma.media.delete({ where: { id: mediaId } });
}

/**
 * Belirtilen URL'ye sahip media kaydını ve dosyayı siler.
 * Proje/blog/referans silinirken çağrılır.
 */
export async function deleteFileByUrl(url: string): Promise<void> {
  if (!url || !url.startsWith('/uploads/')) return;

  const media = await prisma.media.findFirst({ where: { url } });
  if (!media) return;

  const filePath = path.join(UPLOAD_DIR, path.basename(media.url));
  try {
    await unlink(filePath);
  } catch {
    // File may not exist on disk
  }

  await prisma.media.delete({ where: { id: media.id } });
}
