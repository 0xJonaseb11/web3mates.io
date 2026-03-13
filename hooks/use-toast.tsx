import React, { useCallback, useState } from "react";

type ToastVariant = "success" | "destructive";

interface ToastOptions {
  title: string;
  description: string;
  variant?: ToastVariant;
}

interface ToastState extends ToastOptions {
  id: string;
  isVisible: boolean;
}

export const ToastContainer: React.FC<{ toasts: ToastState[] }> = ({ toasts }) => {
  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-lg p-4 shadow-lg max-w-sm transition-all duration-300 ${
            toast.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } ${
            toast.variant === "success"
              ? "bg-green-50 border-green-200 border text-green-800"
              : "bg-red-50 border-red-200 border text-red-800"
          }`}
        >
          <h3 className="font-semibold">{toast.title}</h3>
          <p className="text-blue-700 text-sm">{toast.description}</p>
        </div>
      ))}
    </div>
  );
};

export function useToast() {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const toast = useCallback(({ title, description, variant = "success" }: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, title, description, variant, isVisible: true }]);

    setTimeout(() => {
      setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, isVisible: false } : t)));
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 300);
    }, 5000);
  }, []);

  return { toast, toasts };
}