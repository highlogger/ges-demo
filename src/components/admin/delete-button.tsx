'use client';

// ============================================================
// GES SOLAR PRO — Delete Confirmation Button
// ============================================================
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface DeleteButtonProps {
  id: string;
  action: (id: string) => Promise<void>;
  label?: string;
}

export function DeleteProjectButton({ id }: { id: string }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);

  if (confirming) {
    return (
      <span className="flex items-center gap-1">
        <button
          onClick={async () => {
            const { deleteProject } = await import('@/lib/actions');
            await deleteProject(id);
            router.refresh();
          }}
          className="rounded-lg bg-red-500 px-2 py-1 text-[11px] font-semibold text-white hover:bg-red-600"
        >
          Sil
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="rounded-lg bg-neutral-200 px-2 py-1 text-[11px] font-semibold text-neutral-600 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-300"
        >
          İptal
        </button>
      </span>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="rounded-lg px-2 py-1 text-[11px] font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
    >
      Sil
    </button>
  );
}

export function DeleteBlogButton({ id }: { id: string }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);

  if (confirming) {
    return (
      <span className="flex items-center gap-1">
        <button
          onClick={async () => {
            const { deleteBlogPost } = await import('@/lib/actions');
            await deleteBlogPost(id);
            router.refresh();
          }}
          className="rounded-lg bg-red-500 px-2 py-1 text-[11px] font-semibold text-white hover:bg-red-600"
        >
          Sil
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="rounded-lg bg-neutral-200 px-2 py-1 text-[11px] font-semibold text-neutral-600 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-300"
        >
          İptal
        </button>
      </span>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="rounded-lg px-2 py-1 text-[11px] font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
    >
      Sil
    </button>
  );
}

export function DeleteMessageButton({ id }: { id: string }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);

  if (confirming) {
    return (
      <span className="flex items-center gap-1">
        <button
          onClick={async () => {
            const { deleteMessage } = await import('@/lib/actions');
            await deleteMessage(id);
            router.refresh();
          }}
          className="rounded-lg bg-red-500 px-2 py-1 text-[11px] font-semibold text-white hover:bg-red-600"
        >
          Sil
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="rounded-lg bg-neutral-200 px-2 py-1 text-[11px] font-semibold text-neutral-600 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-300"
        >
          İptal
        </button>
      </span>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="rounded-lg px-2 py-1 text-[11px] font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
    >
      Sil
    </button>
  );
}

export function DeleteReferenceButton({ id }: { id: string }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);

  if (confirming) {
    return (
      <span className="flex items-center gap-1">
        <button
          onClick={async () => {
            const { deleteReference } = await import('@/lib/actions');
            await deleteReference(id);
            router.refresh();
          }}
          className="rounded-lg bg-red-500 px-2 py-1 text-[11px] font-semibold text-white hover:bg-red-600"
        >
          Sil
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="rounded-lg bg-neutral-200 px-2 py-1 text-[11px] font-semibold text-neutral-600 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-300"
        >
          İptal
        </button>
      </span>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="rounded-lg px-2 py-1 text-[11px] font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
    >
      Sil
    </button>
  );
}
