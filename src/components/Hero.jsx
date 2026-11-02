import React, { useState, useEffect } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { soundscape } from '../utils/soundscape';
import {
  ArrowRight, Sparkles, RefreshCw, Compass,
  Layers, ShieldCheck, ShoppingBag
} from 'lucide-react';

const OCCASIONS = [
  { name: 'Conference', time: '09:00 AM', look: 'Sovereign Silk Column Sheath', tag: 'The Base Foundation', arch: 'Minimalism' },
  { name: 'Dinner', time: '06:30 PM', look: 'Brocade Sleeve & Organza Collar Kit', tag: '+ Expression Kit', arch: 'Subtle Artistry' },
  { name: 'Cocktail', time: '08:30 PM', look: 'Sculptured Butterfly Peplum & Cincher', tag: '+ Statement Kit', arch: 'Audacious Volume' },
  { name: 'Grand Gala', time: '10:00 PM', look: 'Cascading Organza Wings & 2m Plumage Train', tag: '+ Couture Kit', arch: 'Apex Royalty' }
];

export default function Hero() {
  const { navigateTo } = useConvertelle();
  const [activeOccasionIndex, setActiveOccasionIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOccasionIndex((prev) => (prev + 1) % OCCASIONS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const activeOccasion = OCCASIONS[activeOccasionIndex];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAF8F5]">
      {/* Soft Ambient Warmth & Luxury Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-[#B89047]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FAF8F5] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Vision & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            {/* Top Luxury Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#DDD6CA] bg-white text-xs uppercase tracking-[0.22em] text-[#666057] font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#B89047] animate-pulse" />
              <span>Modular Luxury Fashion & Digital World</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.06] tracking-tight text-[#1A1815]">
                One Garment. <br />
                <span className="italic text-[#B89047] font-light">Endless you.</span>
              </h1>
              <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase text-[#666057] font-medium pt-1">
                One woman. Many identities. Endless possibilities.
              </p>
            </div>

            {/* Readable Body Copy */}
            <p className="text-base sm:text-lg text-[#33302B] max-w-2xl font-light leading-relaxed font-sans">
              ConvertElle transforms sophisticated formalwear into expressive evening and couture looks through interchangeable and detachable elements. Wear one tailored base all day, then metamorphose for any room in 30 seconds.
            </p>

            {/* Occasion Metamorphosis Card */}
            <div className="p-5 sm:p-6 rounded-sm bg-white border border-[#E8E2D8] shadow-md space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F2EDE4]">
                <div className="flex items-center gap-2 text-[#1A1815]">
                  <RefreshCw className="w-4 h-4 text-[#B89047]" />
                  <span className="text-xs uppercase tracking-widest font-semibold font-mono">Occasion Metamorphosis</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {OCCASIONS.map((occ, idx) => (
                    <button
                      key={occ.name}
                      onClick={() => {
                        soundscape.playChime('click');
                        setActiveOccasionIndex(idx);
                      }}
                      className={`text-xs px-3 py-1 rounded-sm transition-all duration-300 font-medium ${
                        activeOccasionIndex === idx
                          ? 'bg-[#1A1815] text-white shadow-sm'
                          : 'bg-[#F2EDE4] text-[#666057] hover:text-[#1A1815]'
                      }`}
                    >
                      {occ.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs tracking-wider uppercase text-[#B89047] font-mono font-semibold">
                    {activeOccasion.time} • {activeOccasion.tag}
                  </div>
                  <div className="text-xl font-serif text-[#1A1815] font-semibold mt-0.5">
                    {activeOccasion.look}
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] tracking-wider uppercase text-[#666057] block font-mono">Conversion Speed</span>
                  <span className="text-xs font-mono font-bold text-[#1A1815]">under 30 sec</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 justify-center lg:justify-start">
              <button
                onClick={() => navigateTo('shop')}
                className="w-full sm:w-auto px-7 py-4 bg-[#B89047] hover:bg-[#8C6B26] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Explore Shop Catalog
              </button>

              <button
                onClick={() => navigateTo('studio')}
                className="w-full sm:w-auto px-7 py-4 bg-[#1A1815] hover:bg-[#B89047] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#F0E2C8]" /> Transformation Studio
              </button>

              <button
                onClick={() => navigateTo('forest')}
                className="w-full sm:w-auto px-6 py-4 bg-white border border-[#DDD6CA] hover:border-[#B89047] text-[#1A1815] text-xs uppercase tracking-[0.16em] font-semibold rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#B89047]" /> Digital Forest
              </button>
            </div>

            {/* Quality Guarantees */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-3 text-xs text-[#666057] border-t border-[#E8E2D8]/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Cruelty-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#B89047]" />
                <span>Magnetic Docking System</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B89047]" />
                <span>Zero Animal Exploitation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Metamorphosis Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] bg-white p-4 rounded-sm border border-[#DDD6CA] shadow-2xl overflow-hidden group">
              <div className="relative w-full h-full overflow-hidden rounded-sm bg-[#FAF8F5]">
                <img
                  src="/images/butterfly/butterfly-couture-gold.png"
                  alt="ConvertElle Sovereign Metamorphosis Gown"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-[#1A1815]/90 text-[#F0E2C8] text-[9px] uppercase tracking-widest font-semibold backdrop-blur-sm border border-[#B89047]/30 shadow-md">
                    Haute Metamorphosis 2.0
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#1A1815]/90 via-[#1A1815]/40 to-transparent text-white">
                  <span className="text-[9px] uppercase tracking-widest text-[#B89047] font-semibold">
                    The Butterfly Suite
                  </span>
                  <h3 className="font-serif text-xl text-[#FAF8F5]">
                    Sovereign Metamorphosis Gown
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-[#FAF8F5]">₹78,500</span>
                    <button
                      onClick={() => navigateTo('studio')}
                      className="text-xs uppercase tracking-wider text-[#F0E2C8] hover:text-white flex items-center gap-1"
                    >
                      Customize Ensemble <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
