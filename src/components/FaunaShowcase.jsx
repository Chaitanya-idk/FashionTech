import React, { useState } from 'react';
import { Eye, ArrowRight, Sparkles, Layers, ShieldCheck, Check, Compass, Info } from 'lucide-react';
import { useConvertelle } from '../context/ConvertelleContext';
import { faunaArchetypes } from '../data/faunaCollection';

const INR_PRICES = {
  butterfly: { base: 34000, suite: 78500 },
  leopard: { base: 28500, suite: 68000 },
  peacock: { base: 36000, suite: 82000 },
  swan: { base: 31000, suite: 74500 },
  tiger: { base: 38500, suite: 76000 },
  jellyfish: { base: 35000, suite: 66000 }
};

export default function FaunaShowcase() {
  const { openAnimalWorld, formatPrice } = useConvertelle();
  const [hoveredPortal, setHoveredPortal] = useState(null);

  // 6 interactive hotspots
  const portals = [
    {
      id: 'swan',
      title: 'GRACE',
      subtitle: 'The Swan',
      archetypeId: 'swan',
      leftPercent: '0%',
      widthPercent: '16.6%',
      accent: '#FAF8F5'
    },
    {
      id: 'tiger',
      title: 'LEAD',
      subtitle: 'The Tiger',
      archetypeId: 'tiger',
      leftPercent: '16.6%',
      widthPercent: '16.6%',
      accent: '#B45A1D'
    },
    {
      id: 'butterfly',
      title: 'TRANSFORM',
      subtitle: 'The Butterfly',
      archetypeId: 'butterfly',
      leftPercent: '33.3%',
      widthPercent: '16.6%',
      accent: '#9C427B'
    },
    {
      id: 'peacock',
      title: 'EXPRESS',
      subtitle: 'The Peacock',
      archetypeId: 'peacock',
      leftPercent: '50%',
      widthPercent: '16.6%',
      accent: '#0D4D5C'
    },
    {
      id: 'leopard',
      title: 'CONFIDENCE',
      subtitle: 'The Leopard',
      archetypeId: 'leopard',
      leftPercent: '66.6%',
      widthPercent: '16.6%',
      accent: '#B89047'
    },
    {
      id: 'jellyfish',
      title: 'ADAPT',
      subtitle: 'The Jellyfish',
      archetypeId: 'jellyfish',
      leftPercent: '83.3%',
      widthPercent: '16.6%',
      accent: '#8A699C'
    }
  ];

  return (
    <section id="fauna" className="py-24 relative overflow-hidden bg-[#FAF8F5] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DDD6CA] bg-white text-xs uppercase tracking-[0.2em] text-[#B89047] font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>The Six Fauna Archetypes</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1815] font-normal">
            Fauna: Animal <span className="italic text-[#B89047]">Identities</span>
          </h2>
          <p className="text-[#666057] text-base sm:text-lg font-light leading-relaxed">
            Every animal world possesses its own unique silhouette language, colour palette, and modular kits. Choose your sovereign identity.
          </p>
        </div>

        {/* Master Interactive Artwork Board */}
        <div className="space-y-4">
          <div className="relative rounded-sm overflow-hidden border border-[#DDD6CA] shadow-xl bg-[#1A1815] group">
            <img
              src="/images/fauna-intro.jpg"
              alt="ConvertElle Master Fauna Collection"
              className="w-full h-auto object-cover max-h-[550px]"
            />

            {/* Dark vignette gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-sm bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase font-mono tracking-wider">
              <Sparkles className="w-3 h-3 text-[#B89047]" />
              <span>Interactive Artwork • Click to enter any world</span>
            </div>

            {/* Hover Column Overlays */}
            <div className="absolute inset-0 hidden md:flex">
              {portals.map((p) => {
                const isHovered = hoveredPortal === p.id;
                return (
                  <div
                    key={p.id}
                    onMouseEnter={() => setHoveredPortal(p.id)}
                    onMouseLeave={() => setHoveredPortal(null)}
                    onClick={() => openAnimalWorld(p.archetypeId)}
                    style={{ left: p.leftPercent, width: p.widthPercent }}
                    className={`h-full absolute cursor-pointer transition-all duration-300 flex flex-col justify-end p-4 z-10 ${
                      isHovered ? 'bg-white/10 backdrop-brightness-110' : 'bg-transparent'
                    }`}
                  >
                    <div
                      className={`transition-all duration-300 ${
                        isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'
                      }`}
                    >
                      <span
                        className="text-[9px] uppercase font-bold tracking-widest block"
                        style={{ color: p.accent }}
                      >
                        {p.title}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-white drop-shadow">
                        {p.subtitle}
                      </h4>
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-[#F0E2C8] uppercase tracking-wider font-semibold">
                        <span>Enter Collection</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 6 Quick Select Buttons below image */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap pt-2">
            {portals.map((p) => (
              <button
                key={p.id}
                onClick={() => openAnimalWorld(p.archetypeId)}
                className="px-4 py-2 rounded-sm bg-white border border-[#DDD6CA] hover:border-[#B89047] text-xs font-serif font-bold text-[#1A1815] hover:text-[#B89047] transition-all shadow-sm flex items-center gap-2"
              >
                <span className="text-[10px] font-mono text-[#8C6B26] uppercase font-semibold">{p.title}:</span>
                <span>{p.subtitle}</span>
                <ArrowRight className="w-3 h-3 text-[#B89047]" />
              </button>
            ))}
          </div>
        </div>

        {/* 6 Archetype Showcase Cards */}
        <div className="space-y-8 pt-8 border-t border-[#E8E2D8]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8C6B26] font-semibold block">
                Atelier Catalog
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1815] font-normal">
                Choose an Archetype to Explore
              </h3>
            </div>
            <p className="text-xs text-[#666057] max-w-md font-light leading-relaxed">
              Every archetype is tailored with concealed magnetic docking, allowing instant conversion between The Base Garment and The Full Haute Couture Suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faunaArchetypes.map((arch) => {
              const prices = INR_PRICES[arch.id] || { base: 28500, suite: 72000 };

              return (
                <div
                  key={arch.id}
                  onClick={() => openAnimalWorld(arch.id)}
                  className="rounded-sm bg-white border border-[#E8E2D8] hover:border-[#B89047] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden group cursor-pointer"
                >
                  <div>
                    {/* Visual Stage */}
                    <div className="relative aspect-[4/3] bg-[#FAF8F5] overflow-hidden border-b border-[#F2EDE4]">
                      <img
                        src={arch.images.couture || arch.images.base}
                        alt={arch.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold text-white rounded-sm shadow-md"
                          style={{ backgroundColor: arch.accentHex || '#1A1815' }}
                        >
                          {arch.identity}
                        </span>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="p-6 space-y-3">
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-serif text-2xl font-bold text-[#1A1815] group-hover:text-[#8C6B26] transition-colors">
                          {arch.name}
                        </h4>
                        <span className="text-xs font-mono italic text-[#666057]">
                          {arch.latin}
                        </span>
                      </div>

                      <p className="text-xs text-[#666057] leading-relaxed line-clamp-2 font-light">
                        {arch.designLanguage}
                      </p>

                      <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded-sm space-y-1 text-xs">
                        <div className="flex justify-between text-[#666057]">
                          <span>Base Foundation:</span>
                          <span className="font-semibold text-[#1A1815]">{formatPrice(prices.base)}</span>
                        </div>
                        <div className="flex justify-between text-[#8C6B26]">
                          <span>Full Couture Suite:</span>
                          <span className="font-bold font-serif text-sm">{formatPrice(prices.suite)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openAnimalWorld(arch.id);
                      }}
                      className="w-full py-2.5 bg-[#FAF8F5] hover:bg-[#1A1815] text-[#1A1815] hover:text-[#FAF8F5] border border-[#DDD6CA] hover:border-[#1A1815] text-xs uppercase tracking-widest font-semibold rounded-sm flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>Explore {arch.name} World</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
