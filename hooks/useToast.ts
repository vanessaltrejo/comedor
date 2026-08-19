"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ToastVariant } from "@/components/ui/Toast";

interface ToastState {
  title: string;
  message: string;
  isVisible: boolean;
  variant: ToastVariant;
}

interface UseToastResult {
  toast: ToastState;
  showToast: (title: string, message: string, variant?: ToastVariant) => void;
}

const TOAST_DURATION_MS = 3500;

export function useToast(): UseToastResult {
  const [toast, setToast] = useState<ToastState>({
    title: "",
    message: "",
    isVisible: false,
    variant: "success",
  });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const showToast = useCallback(
    (title: string, message: string, variant: ToastVariant = "success") => {
      clearTimeout(timeoutRef.current);
      setToast({ title, message, isVisible: true, variant });
      timeoutRef.current = setTimeout(() => {
        setToast((prev) => ({ ...prev, isVisible: false }));
      }, TOAST_DURATION_MS);
    },
    []
  );

  // Evita que un temporizador pendiente intente actualizar el estado
  // después de que el componente se haya desmontado.
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return { toast, showToast };
}
