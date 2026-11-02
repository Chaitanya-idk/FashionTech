import React, { useState } from 'react';
import { Compass, Sparkles, Heart, Shield, Feather, RefreshCw, Palette } from 'lucide-react';
import { convertelleWoman } from '../data/brandStory';

export default function TheWoman() {
  const [activeTraitIndex, setActiveTraitIndex] = useState(0);
  const activeTrait = convertelleWoman.attributes[activeTraitIndex];

  return (
    <section id="woman" className="py-24 relative overflow-hidden bg-white border-y border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DDD6CA] bg-[#FAF8F5] text-xs uppercase tracking-[0.2em] text-[#B89047] font-semibold">
            Muse & Persona
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1815] font-normal">
            The <span className="italic text-[#B89047]">ConvertElle</span> Woman
          </h2>
          <p className="text-[#666057] text-base sm:text-lg font-light leading-relaxed">
            "{convertelleWoman.description}"
          </p>
        </div>

        {/* 7 Traits Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {convertelleWoman.attributes.map((attr, idx) => {
            const isSelected = activeTraitIndex === idx;
            return (
              <div
                key={attr.trait}
                onClick={() => setActiveTraitIndex(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'border-[#1A1815] bg-[#FAF8F5] shadow-luxury'
                    : 'border-[#E8E2D8] bg-white hover:border-[#DDD6CA]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#B89047]">
                    0{idx + 1}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#1A1815]" />}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1A1815]">
                  {attr.trait}
                </h3>
                <p className="text-xs text-[#666057] font-light mt-1.5 leading-relaxed">
                  {attr.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
