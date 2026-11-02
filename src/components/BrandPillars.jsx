import React from 'react';
import { 
  Repeat, ShieldAlert, Fingerprint, Layers, Shuffle, HeartHandshake, Sparkles, BookOpen 
} from 'lucide-react';
import { brandPillars, aphroditeStory, colorPaletteData } from '../data/brandStory';

const iconMap = {
  Repeat: Repeat,
  ShieldAlert: ShieldAlert,
  Fingerprint: Fingerprint,
  Layers: Layers,
  Shuffle: Shuffle,
  HeartHandshake: HeartHandshake
};

export default function BrandPillars() {
  return (
    <section id="philosophy" className="py-24 relative overflow-hidden bg-white border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* PART 1: APHRODITE (1902) ARTISTIC INSPIRATION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#E8E2D8] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DDD6CA] bg-white text-xs font-mono uppercase tracking-widest text-[#B89047] font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{aphroditeStory.title}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1815] font-semibold">
                {aphroditeStory.artwork}
              </h3>
              <div className="text-xs font-mono text-[#666057]">
                {aphroditeStory.artist} • {aphroditeStory.medium}
              </div>

              <blockquote className="border-l-2 border-[#B89047] pl-4 py-1 italic font-serif text-lg text-[#33302B] leading-relaxed">
                "{aphroditeStory.manifesto}"
              </blockquote>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#666057] font-mono block">
                    Our Core Philosophy
                  </span>
                  <span className="font-cinzel text-base text-[#1A1815] font-bold">
                    {aphroditeStory.philosophy}
                  </span>
                </div>
                <Sparkles className="w-5 h-5 text-[#B89047]" />
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-[#E8E2D8] text-center space-y-2 shadow-sm">
              <div className="font-cinzel text-xs uppercase tracking-widest text-[#B89047] font-bold">
                Couture Provenance
              </div>
              <div className="font-serif text-2xl font-bold text-[#1A1815] italic">
                Aphrodite
              </div>
              <p className="text-xs text-[#666057] font-light leading-relaxed">
                Surrounded by animal archetypes of strength, instinct and individuality — creating communion between feminine form and the wild.
              </p>
            </div>

          </div>
        </div>

        {/* PART 2: 6 BRAND PILLARS */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1815] font-semibold">
              What We <span className="italic text-[#B89047]">Stand For</span>
            </h3>
            <p className="text-xs uppercase tracking-widest font-mono text-[#666057]">
              Start Minimal. Build Your Expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandPillars.map((pillar) => {
              const Icon = iconMap[pillar.icon] || Repeat;
              return (
                <div
                  key={pillar.id}
                  className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#B89047] transition-all space-y-3 shadow-sm hover:shadow-luxury"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD6CA] flex items-center justify-center text-[#B89047]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono italic text-[#666057]">
                      "{pillar.motto}"
                    </span>
                  </div>

                  <h4 className="font-cinzel text-lg font-bold text-[#1A1815]">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
