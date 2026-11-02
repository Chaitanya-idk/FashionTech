import React from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { Sparkles } from 'lucide-react';

export default function Toast() {
  const { toastMessage } = useConvertelle();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9990] animate-fade-in-up">
      <div className="flex items-center gap-3 px-6 py-3.5 bg-[#1A1815]/95 backdrop-blur-md text-[#FAF8F5] border border-[#B89047]/40 shadow-2xl rounded-full text-xs tracking-wider uppercase">
        <Sparkles className="w-3.5 h-3.5 text-[#B89047] animate-pulse" />
        <span className="font-light">{toastMessage}</span>
      </div>
    </div>
  );
}

