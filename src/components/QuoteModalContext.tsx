"use client";

import React, { createContext, useContext, useState } from "react";

interface QuoteInitialData {
  productName?: string;
  gsm?: string | number;
  colorName?: string;
}

interface QuoteContextType {
  isOpen: boolean;
  initialData: QuoteInitialData;
  openQuoteModal: (data?: QuoteInitialData) => void;
  closeQuoteModal: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<QuoteInitialData>({});

  const openQuoteModal = (data?: QuoteInitialData) => {
    if (data) {
      setInitialData(data);
    } else {
      setInitialData({});
    }
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteContext.Provider value={{ isOpen, initialData, openQuoteModal, closeQuoteModal }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteProvider");
  }
  return context;
}
