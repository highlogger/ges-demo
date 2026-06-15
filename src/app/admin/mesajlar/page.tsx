// ============================================================
// GES SOLAR PRO — Admin Messages Inbox
// ============================================================
import prisma from '@/lib/prisma';
import { Card } from '@/components/ui/card';
import { DeleteMessageButton } from '@/components/admin/delete-button';
import { MarkReadButton, MarkRepliedButton } from '@/components/admin/message-actions';

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const unreadCount = messages.filter((m) => !m.isRead).length;

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-0">Mesajlar</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {messages.length} mesaj, {unreadCount} okunmamış
        </p>
      </div>

      <div className="space-y-3">
        {messages.length === 0 ? (
          <Card padding="xl" variant="elevated">
            <p className="text-center text-neutral-400 py-12">Henüz mesaj yok.</p>
          </Card>
        ) : (
          messages.map((msg) => (
            <Card key={msg.id} padding="lg" variant={msg.isRead ? 'default' : 'elevated'} className={`${!msg.isRead ? 'border-l-4 border-l-solar-500' : ''}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-0">{msg.name}</span>
                    {!msg.isRead && <span className="rounded-full bg-solar-500 px-2 py-0.5 text-[10px] font-bold text-white">Yeni</span>}
                    {msg.isReplied && <span className="text-[10px] text-emerald-600">✅ Yanıtlandı</span>}
                  </div>
                  <div className="mt-0.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-400">
                    <span>{msg.email}</span>
                    {msg.phone && <span>{msg.phone}</span>}
                    {msg.company && <span>{msg.company}</span>}
                    {msg.service && <span className="rounded bg-primary-50 px-2 py-0.5 text-primary-600 dark:bg-primary-900/30 dark:text-primary-300">{msg.service}</span>}
                  </div>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 whitespace-pre-wrap">{msg.message}</p>
                  <span className="mt-2 block text-[10px] text-neutral-400">
                    {msg.createdAt.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  {!msg.isRead && <MarkReadButton id={msg.id} />}
                  {!msg.isReplied && <MarkRepliedButton id={msg.id} />}
                  <DeleteMessageButton id={msg.id} />
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
