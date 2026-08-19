export type ToastVariant = "success" | "error";

interface ToastProps {
  title: string;
  message: string;
  isVisible: boolean;
  variant?: ToastVariant;
}

const VARIANT_STYLES: Record<ToastVariant, { icon: string; iconBox: string }> = {
  success: { icon: "fa-check", iconBox: "bg-green-500/20 text-green-400" },
  error: { icon: "fa-triangle-exclamation", iconBox: "bg-orange-500/20 text-orange-400" },
};

export function Toast({ title, message, isVisible, variant = "success" }: ToastProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className={`toast-notification ${isVisible ? "show" : ""}`}
      role="status"
      aria-live="polite"
    >
      <div
        className={`w-8 h-8 ${styles.iconBox} rounded-full flex items-center justify-center shadow-inner`}
      >
        <i className={`fas ${styles.icon} text-xs`} aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-black text-white uppercase tracking-wider">{title}</p>
        <p className="text-[11px] text-gray-400 font-medium">{message}</p>
      </div>
    </div>
  );
}
