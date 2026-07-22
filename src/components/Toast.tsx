import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Info } from 'lucide-react';

export type ToastType = 'success' | 'info';

interface ToastEvent {
  message: string;
  type?: ToastType;
}

export const showToast = (message: string, type: ToastType = 'success') => {
  window.dispatchEvent(new CustomEvent<ToastEvent>('show-toast', { detail: { message, type } }));
};

export default function Toast() {
  const [toasts, setToasts] = useState<(ToastEvent & { id: number })[]>([]);

  useEffect(() => {
    const handleToast = (e: CustomEvent<ToastEvent>) => {
      const id = Date.now();
      setToasts(prev => [...prev, { ...e.detail, id }]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 3000);
    };

    window.addEventListener('show-toast', handleToast as EventListener);
    return () => window.removeEventListener('show-toast', handleToast as EventListener);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="bg-[#1a3d1a] text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 min-w-[200px]"
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-[#90D26D]" />
            ) : (
              <Info className="w-5 h-5 text-[#E86A10]" />
            )}
            <span className="font-medium text-sm">{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
