"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showClose?: boolean;
  onClose?: () => void;
}

const Modal = ({ open, onOpenChange, children }: ModalProps) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <ModalContext.Provider value={{ onOpenChange }}>
      {children}
    </ModalContext.Provider>
  );
};

const ModalContext = React.createContext<{
  onOpenChange?: (open: boolean) => void;
}>({});

const ModalOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, onClick, ...props }, ref) => {
  const { onOpenChange } = React.useContext(ModalContext);

  return (
    <div
      ref={ref}
      className={cn(
        "fixed inset-0 z-[var(--z-modal-backdrop)] bg-black/50 backdrop-blur-sm animate-fade-in",
        className
      )}
      onClick={(e) => {
        onClick?.(e);
        onOpenChange?.(false);
      }}
      {...props}
    />
  );
});
ModalOverlay.displayName = "ModalOverlay";

const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  (
    { className, size = "md", showClose = true, onClose, children, ...props },
    ref
  ) => {
    const { onOpenChange } = React.useContext(ModalContext);

    const handleClose = () => {
      onClose?.();
      onOpenChange?.(false);
    };

    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };

      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    return (
      <div
        className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <div
          ref={ref}
          className={cn(
            "relative bg-card rounded-2xl shadow-2xl animate-scale-in max-h-[90vh] overflow-auto",
            size === "sm" && "w-full max-w-sm",
            size === "md" && "w-full max-w-md",
            size === "lg" && "w-full max-w-lg",
            size === "xl" && "w-full max-w-2xl",
            size === "full" && "w-full max-w-4xl",
            className
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {showClose && (
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 rounded-full p-1 hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="닫기"
            >
              <svg
                className="h-5 w-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          {children}
        </div>
      </div>
    );
  }
);
ModalContent.displayName = "ModalContent";

const ModalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 pb-4", className)}
    {...props}
  />
));
ModalHeader.displayName = "ModalHeader";

const ModalTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-xl font-semibold leading-tight", className)}
    {...props}
  />
));
ModalTitle.displayName = "ModalTitle";

const ModalDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
ModalDescription.displayName = "ModalDescription";

const ModalBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-6 py-4", className)} {...props} />
));
ModalBody.displayName = "ModalBody";

const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-end gap-3 p-6 pt-4", className)}
    {...props}
  />
));
ModalFooter.displayName = "ModalFooter";

export {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
};

