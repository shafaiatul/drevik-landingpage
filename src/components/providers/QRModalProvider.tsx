"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { QRDownloadModal } from "@/components/ui/QRDownloadModal";

type QRModalContextValue = {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
};

const QRModalContext = createContext<QRModalContextValue | null>(null);

export function QRModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({
      openModal,
      closeModal,
      isOpen,
    }),
    [openModal, closeModal, isOpen],
  );

  return (
    <QRModalContext.Provider value={value}>
      {children}
      <QRDownloadModal open={isOpen} onOpenChange={setIsOpen} />
    </QRModalContext.Provider>
  );
}

export function useQRModal() {
  const context = useContext(QRModalContext);

  if (!context) {
    throw new Error("useQRModal must be used within a QRModalProvider");
  }

  return context;
}
