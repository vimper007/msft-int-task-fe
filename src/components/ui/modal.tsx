import type { MouseEvent, ReactNode } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalComponentProps = {
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
};

const ModalComponent = ({ children, visible, onClose }: ModalComponentProps) => {
  useEffect(() => {
    if (!visible) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [visible, onClose]);

  if (!visible) return null;

  const handlePanelClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="mx-auto my-8 w-full max-w-2xl max-h-[calc(100dvh-4rem)] overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900"
        onClick={handlePanelClick}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default ModalComponent;
