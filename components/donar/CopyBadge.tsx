"use client";

interface CopyBadgeProps {
  displayValue: string;
  onCopy: () => void;
}

export function CopyBadge({ displayValue, onCopy }: CopyBadgeProps) {
  return (
    <div className="copy-badge-premium">
      <span>{displayValue}</span>
      <button
        type="button"
        onClick={onCopy}
        className="text-purple-500 hover:text-purple-700 ml-2 focus:outline-none"
        title="Copiar sin espacios"
      >
        <i className="far fa-copy" />
      </button>
    </div>
  );
}
