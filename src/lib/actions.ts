'use server';

// ============================================================
// GES SOLAR PRO — Server Actions
// Tüm CRUD işlemleri, form submit, dosya yükleme
// ============================================================
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { sendContactNotification } from '@/lib/email';
import { uploadFile, deleteFileByUrl } from '@/lib/upload';

// ============================================================
// DOSYA YÜKLEME (Server Action — direkt form'dan)
// ============================================================
export async function uploadMediaAction(formData: FormData): Promise<{
  success: boolean;
  url?: string;
  id?: string;
  error?: string;
}> {
  try {
    const file = formData.get('file');

    if (!file || !(file instanceof Blob)) {
      return { success: false, error: 'Lütfen bir dosya seçin.' };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = (file as File).name || 'dosya';
    const mimeType = file.type || 'application/octet-stream';

    const result = await uploadFile(buffer, filename, mimeType);

    return {
      success: true,
      url: result.url,
      id: result.id,
    };
  } catch (err) {
    console.error('uploadMediaAction error:', err);
    return { success: false, error: 'Dosya yüklenirken hata oluştu.' };
  }
}

// ============================================================
// PROJELER
// ============================================================
export async function createProject(formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const description = formData.get('description') as string;
    const capacity = formData.get('capacity') as string;
    const location = formData.get('location') as string;
    const area = formData.get('area') as string;
    const year = formData.get('year') as string;
    const category = formData.get('category') as string;
    const coverImage = formData.get('coverImage') as string || null;
    const featured = formData.get('featured') === 'on';

    await prisma.project.create({
      data: { title, slug, description, capacity, location, area, year, category, coverImage, featured },
    });

    revalidatePath('/admin/projeler');
    revalidatePath('/projeler');
    revalidatePath('/');
  } catch (err) {
    console.error('createProject error:', err);
    throw new Error('Proje kaydedilirken bir hata oluştu.');
  }
  redirect('/admin/projeler');
}

export async function updateProject(id: string, formData: FormData) {
  try {
    const data: Record<string, unknown> = {};
    const fields = ['title', 'slug', 'description', 'capacity', 'location', 'area', 'year', 'category', 'coverImage'];
    for (const f of fields) {
      const val = formData.get(f);
      if (val) data[f] = val;
    }
    data.featured = formData.get('featured') === 'on';
    data.published = formData.get('published') === 'on';

    await prisma.project.update({ where: { id }, data });
    revalidatePath('/admin/projeler');
    revalidatePath('/projeler');
    revalidatePath('/');
  } catch (err) {
    console.error('updateProject error:', err);
    throw new Error('Proje güncellenirken bir hata oluştu.');
  }
  redirect('/admin/projeler');
}

export async function deleteProject(id: string) {
  try {
    // Silmeden önce varsa kapak görselini temizle
    const project = await prisma.project.findUnique({ where: { id } });
    if (project?.coverImage) {
      await deleteFileByUrl(project.coverImage);
    }

    await prisma.project.delete({ where: { id } });
    revalidatePath('/admin/projeler');
    revalidatePath('/projeler');
    revalidatePath('/');
  } catch (err) {
    console.error('deleteProject error:', err);
    throw new Error('Proje silinirken bir hata oluştu.');
  }
}

// ============================================================
// BLOG
// ============================================================
export async function createBlogPost(formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const category = formData.get('category') as string;
    const coverImage = formData.get('coverImage') as string || null;
    const readTime = formData.get('readTime') as string || '5 dk';
    const published = formData.get('published') === 'on';

    await prisma.blogPost.create({
      data: {
        title, slug, excerpt, content, category, coverImage, readTime,
        published, publishedAt: published ? new Date() : null,
      },
    });

    revalidatePath('/admin/blog');
    revalidatePath('/blog');
    revalidatePath('/');
  } catch (err) {
    console.error('createBlogPost error:', err);
    throw new Error('Blog yazısı kaydedilirken bir hata oluştu.');
  }
  redirect('/admin/blog');
}

export async function updateBlogPost(id: string, formData: FormData) {
  try {
    const data: Record<string, unknown> = {};
    const fields = ['title', 'slug', 'excerpt', 'content', 'category', 'coverImage', 'readTime'];
    for (const f of fields) {
      const val = formData.get(f);
      if (val) data[f] = val;
    }
    const wasPublished = formData.get('published') === 'on';
    data.published = wasPublished;

    const existing = await prisma.blogPost.findUnique({ where: { id } });
    if (wasPublished && existing && !existing.published) {
      data['publishedAt'] = new Date();
    }

    await prisma.blogPost.update({ where: { id }, data });
    revalidatePath('/admin/blog');
    revalidatePath('/blog');
    revalidatePath('/');
  } catch (err) {
    console.error('updateBlogPost error:', err);
    throw new Error('Blog yazısı güncellenirken bir hata oluştu.');
  }
  redirect('/admin/blog');
}

export async function deleteBlogPost(id: string) {
  try {
    const post = await prisma.blogPost.findUnique({ where: { id } });
    if (post?.coverImage) {
      await deleteFileByUrl(post.coverImage);
    }

    await prisma.blogPost.delete({ where: { id } });
    revalidatePath('/admin/blog');
    revalidatePath('/blog');
    revalidatePath('/');
  } catch (err) {
    console.error('deleteBlogPost error:', err);
    throw new Error('Blog yazısı silinirken bir hata oluştu.');
  }
}

// ============================================================
// İLETİŞİM FORMU
// ============================================================
export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string || null;
  const company = formData.get('company') as string || null;
  const service = formData.get('service') as string || null;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Lütfen zorunlu alanları doldurun.' };
  }

  try {
    await prisma.contactMessage.create({
      data: { name, email, phone, company, service, message },
    });

    // Admin'e email bildirimi gönder
    try {
      await sendContactNotification({ name, email, phone, company, service, message });
    } catch (err) {
      console.error('Contact notification email failed:', err);
    }

    return { success: true, message: 'Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağız.' };
  } catch (err) {
    console.error('submitContactForm error:', err);
    return { error: 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.' };
  }
}

export async function markMessageRead(id: string) {
  await prisma.contactMessage.update({ where: { id }, data: { isRead: true } });
  revalidatePath('/admin/mesajlar');
}

export async function markMessageReplied(id: string) {
  await prisma.contactMessage.update({ where: { id }, data: { isReplied: true } });
  revalidatePath('/admin/mesajlar');
}

export async function deleteMessage(id: string) {
  await prisma.contactMessage.delete({ where: { id } });
  revalidatePath('/admin/mesajlar');
}

// ============================================================
// REFERANSLAR
// ============================================================
export async function createReference(formData: FormData) {
  try {
    await prisma.reference.create({
      data: {
        quote: formData.get('quote') as string,
        author: formData.get('author') as string,
        role: formData.get('role') as string,
        company: formData.get('company') as string,
        capacity: formData.get('capacity') as string,
        avatar: formData.get('avatar') as string || null,
        published: formData.get('published') === 'on',
      },
    });
    revalidatePath('/admin/referanslar');
    revalidatePath('/referanslar');
    revalidatePath('/');
  } catch (err) {
    console.error('createReference error:', err);
    throw new Error('Referans kaydedilirken bir hata oluştu.');
  }
  redirect('/admin/referanslar');
}

export async function deleteReference(id: string) {
  try {
    const reference = await prisma.reference.findUnique({ where: { id } });
    if (reference?.avatar) {
      await deleteFileByUrl(reference.avatar);
    }

    await prisma.reference.delete({ where: { id } });
    revalidatePath('/admin/referanslar');
    revalidatePath('/referanslar');
    revalidatePath('/');
  } catch (err) {
    console.error('deleteReference error:', err);
    throw new Error('Referans silinirken bir hata oluştu.');
  }
}

// ============================================================
// SİTE AYARLARI
// ============================================================
export async function updateSiteConfig(formData: FormData) {
  try {
    const data: Record<string, unknown> = {
      name: formData.get('name'),
      shortName: formData.get('shortName'),
      tagline: formData.get('tagline'),
      description: formData.get('description'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      phoneDisplay: formData.get('phoneDisplay'),
      addressTr: formData.get('addressTr'),
      addressEn: formData.get('addressEn'),
      googleMaps: formData.get('googleMaps'),
      whatsapp: formData.get('whatsapp'),
      linkedin: formData.get('linkedin'),
      instagram: formData.get('instagram'),
      twitter: formData.get('twitter'),
      youtube: formData.get('youtube'),
      facebook: formData.get('facebook'),
      installedCapacity: formData.get('installedCapacity'),
      totalProjects: Number(formData.get('totalProjects')) || 0,
      carbonReduction: formData.get('carbonReduction'),
      yearsExperience: Number(formData.get('yearsExperience')) || 0,
      happyCustomers: Number(formData.get('happyCustomers')) || 0,
    };

    await prisma.siteConfig.upsert({
      where: { id: 'default' },
      update: data,
      create: { id: 'default', ...data },
    });

    revalidatePath('/admin/ayarlar');
    revalidatePath('/');
  } catch (err) {
    console.error('updateSiteConfig error:', err);
    throw new Error('Site ayarları güncellenirken bir hata oluştu.');
  }
  redirect('/admin/ayarlar');
}
