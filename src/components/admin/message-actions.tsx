'use client';

// ============================================================
// GES SOLAR PRO — Message Action Buttons
// ============================================================
import { useRouter } from 'next/navigation';
import { markMessageRead, markMessageReplied } from '@/lib/actions';

export function MarkReadButton({ id }: { id: string }) {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await markMessageRead(id);
        router.refresh();
      }}
      className="rounded-lg px-2 py-1 text-[10px] font-medium text-solar-600 hover:bg-solar-50 dark:text-solar-400 dark:hover:bg-solar-900/20"
      title="Okundu işaretle"
    >
      📖
    </button>
  );
}

export function MarkRepliedButton({ id }: { id: string }) {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await markMessageReplied(id);
        router.refresh();
      }}
      className="rounded-lg px-2 py-1 text-[10px] font-medium text-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
      title="Yanıtlandı işaretle"
    >
      ✅
    </button>
  );
}
