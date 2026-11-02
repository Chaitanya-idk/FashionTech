import React from 'react';
import { Sparkles } from 'lucide-react';

const TICKER_ITEMS = [
  'NEW ARRIVAL — Sovereign Metamorphosis Couture Gown',
  '✦ ELLE AI — YOUR PERSONAL FASHION COMPANION',
  'SIX ANIMAL WORLDS — BUTTERFLY · LEOPARD · PEACOCK · SWAN · TIGER · JELLYFISH',
  '✦ MAGNETIC DOCKING TECHNOLOGY — TRANSFORM IN 30 SECONDS',
  'DISCOVER YOUR ANIMAL IDENTITY — TAKE THE QUIZ',
  '✦ FREE LUXURY GIFT PACKAGING ON ALL ORDERS',
  'COUTURE BESPOKE FITTING AVAILABLE — CONTACT ATELIER',
  '✦ 100% CRUELTY-FREE · ZERO ANIMAL EXPLOITATION · PEACE SILK CERTIFIED',
  'TRANSFORMATION STUDIO — ONE GARMENT. INFINITE EXPRESSIONS.',
];

export default function LuxuryTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop

  return (
    <div className="bg-[#1A1815] text-[#F0E2C8] py-2.5 overflow-hidden border-b border-[#B89047]/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-8 text-[10px] tracking-[0.22em] uppercase font-medium shrink-0">
            <Sparkles className="w-2.5 h-2.5 text-[#B89047] shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

