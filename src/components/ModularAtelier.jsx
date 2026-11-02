import React, { useState } from 'react';
import { 
  Sparkles, Layers, Check, ShoppingBag, RotateCcw, 
  ArrowRight, ShieldCheck, Feather, Sliders, Info
} from 'lucide-react';
import { baseGarments, modularStages } from '../data/modularData';
import { faunaArchetypes } from '../data/faunaCollection';

export default function ModularAtelier({ onAddToCart, onOpenCustomFit }) {
  const [selectedBaseId, setSelectedBaseId] = useState(baseGarments[0].id);
  const [selectedArchetypeId, setSelectedArchetypeId] = useState(faunaArchetypes[0].id);
  const [activeStage, setActiveStage] = useState(4); // 1 = Base, 2 = Expression, 3 = Statement, 4 = Couture
  const [addedAnimation, setAddedAnimation] = useState(false);

  const selectedBase = baseGarments.find((b) => b.id === selectedBaseId) || baseGarments[0];
  const selectedArchetype = faunaArchetypes.find((a) => a.id === selectedArchetypeId) || faunaArchetypes[0];

  const expressionPrice = parseInt(selectedArchetype.kits[0].price.replace(/[^0-9]/g, ''), 10);
  const statementPrice = parseInt(selectedArchetype.kits[1].price.replace(/[^0-9]/g, ''), 10);
  const couturePrice = parseInt(selectedArchetype.kits[2].price.replace(/[^0-9]/g, ''), 10);

  let totalPrice = selectedBase.price;
  if (activeStage >= 2) totalPrice += expressionPrice;
  if (activeStage >= 3) totalPrice += statementPrice;
  if (activeStage >= 4) totalPrice += couturePrice;

  const handleAddConfiguration = () => {
    const configItem = {
      id: `${selectedBase.id}-${selectedArchetype.id}-stage${activeStage}-${Date.now()}`,
      baseName: selectedBase.name,
      baseFabric: selectedBase.fabric,
      archetypeName: selectedArchetype.name,
      stage: activeStage,
      stageName: modularStages[activeStage - 1].title,
      occasion: modularStages[activeStage - 1].occasion,
      price: totalPrice,
      size: 'US 4',
      includedKits: selectedArchetype.kits.slice(0, activeStage - 1)
    };
    onAddToCart(configItem);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <section id="atelier" className="py-24 relative overflow-hidden bg-white border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#DDD6CA] bg-[#FAF8F5] text-xs uppercase tracking-[0.2em] text-[#B89047] font-semibold">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Customizer</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1815] font-normal">
            The Modular <span className="italic text-[#B89047]">Atelier</span>
          </h2>
          <p className="text-[#666057] text-base sm:text-lg font-light leading-relaxed">
            Test and preview how the 4-stage modular system snaps together in real-time.
          </p>
        </div>

        {/* 4-Stage Ribbon */}
        <div className="p-3 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {modularStages.map((stg) => {
              const isActive = activeStage === stg.stage;
              const isIncluded = activeStage >= stg.stage;

              return (
                <button
                  key={stg.stage}
                  onClick={() => setActiveStage(stg.stage)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 relative border ${
                    isActive 
                      ? 'bg-white border-[#1A1815] shadow-sm' 
                      : isIncluded
                        ? 'bg-white/70 border-[#DDD6CA]'
                        : 'bg-transparent border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${
                      isActive ? 'text-[#B89047] font-bold' : 'text-[#666057]'
                    }`}>
                      Stage 0{stg.stage} • {stg.time}
                    </span>
                    {isIncluded && (
                      <span className="w-2 h-2 rounded-full bg-[#B89047]" />
                    )}
                  </div>
                  <div className="text-base font-serif font-bold text-[#1A1815]">
                    {stg.title}
                  </div>
                  <div className="text-[11px] text-[#666057]">
                    {stg.occasion}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Customizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Controls (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Step 1: Base */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E8E2D8]">
                <span className="text-xs uppercase tracking-widest text-[#1A1815] font-cinzel font-bold">
                  1. Choose Base Garment
                </span>
                <span className="text-[10px] font-mono text-[#666057]">Stage 01</span>
              </div>

              <div className="space-y-2">
                {baseGarments.map((base) => {
                  const isSelected = selectedBaseId === base.id;
                  return (
                    <div
                      key={base.id}
                      onClick={() => setSelectedBaseId(base.id)}
                      className={`p-3 rounded-xl cursor-pointer transition-all border ${
                        isSelected 
                          ? 'border-[#1A1815] bg-white shadow-sm' 
                          : 'border-transparent bg-white/50 hover:border-[#DDD6CA]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-serif font-bold text-[#1A1815]">
                          {base.name}
                        </span>
                        <span className="text-xs font-mono font-bold text-[#B89047]">
                          ${base.price}
                        </span>
                      </div>
                      <div className="text-[10px] text-[#666057]">
                        {base.baseOccasion}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Archetype Kit */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E8E2D8]">
                <span className="text-xs uppercase tracking-widest text-[#1A1815] font-cinzel font-bold">
                  2. Choose FAUNA Kit
                </span>
                <span className="text-[10px] font-mono text-[#666057]">Archetype</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {faunaArchetypes.map((arch) => {
                  const isSelected = selectedArchetypeId === arch.id;
                  return (
                    <button
                      key={arch.id}
                      onClick={() => setSelectedArchetypeId(arch.id)}
                      className={`p-2.5 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'border-[#1A1815] bg-white shadow-sm'
                          : 'border-transparent bg-white/50 hover:border-[#DDD6CA]'
                      }`}
                    >
                      <div className="text-xs font-serif font-bold text-[#1A1815]">
                        {arch.name.replace('The ', '')}
                      </div>
                      <div className="text-[10px] text-[#666057]">
                        {arch.identity}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* CENTER: Visual Canvas (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full aspect-[4/5] rounded-3xl bg-white border border-[#E8E2D8] p-6 flex flex-col justify-between relative shadow-luxury">
              
              <div className="flex items-center justify-between z-10 w-full pb-2 border-b border-[#E8E2D8]">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B89047] font-mono font-bold block">
                    Modular Silhouette
                  </span>
                  <h3 className="text-sm font-serif font-bold text-[#1A1815]">
                    {selectedBase.name} + {selectedArchetype.name}
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-[#1A1815]">
                  Stage {activeStage} of 4
                </span>
              </div>

              {/* Dynamic Silhouette SVG */}
              <div className="relative flex-1 flex items-center justify-center my-2">
                <svg viewBox="0 0 320 440" className="w-full h-full max-h-[360px]">
                  {/* Layer 4 */}
                  <g opacity={activeStage >= 4 ? 1 : 0.08} className="transition-opacity duration-400">
                    <path d="M160,160 C70,70 15,120 25,230 C35,280 110,260 145,235 Z" fill="#C5A059" opacity="0.6" stroke="#B89047" strokeWidth="1.2" />
                    <path d="M160,160 C250,70 305,120 295,230 C285,280 210,260 175,235 Z" fill="#C5A059" opacity="0.6" stroke="#B89047" strokeWidth="1.2" />
                    <path d="M115,330 C65,395 35,420 5,428 C75,428 130,410 160,410 C190,410 245,428 315,428 C285,420 255,395 205,330 Z" 
                          fill="#F2EDE4" stroke="#B89047" strokeWidth="1" />
                  </g>

                  {/* Layer 3 */}
                  <g opacity={activeStage >= 3 ? 1 : 0.12} className="transition-opacity duration-400">
                    <path d="M120,225 C95,280 88,315 80,360 C125,368 195,368 240,360 C232,315 225,280 200,225 Z" fill="#E8E2D8" stroke="#1A1815" strokeWidth="1.8" />
                  </g>

                  {/* Layer 2 */}
                  <g opacity={activeStage >= 2 ? 1 : 0.15} className="transition-opacity duration-400">
                    <path d="M110,130 C75,145 60,185 72,225 C85,225 98,185 116,160 Z" fill="#33302B" />
                    <path d="M210,130 C245,145 260,185 248,225 C235,225 222,185 204,160 Z" fill="#33302B" />
                  </g>

                  {/* Layer 1: Base */}
                  <g>
                    <circle cx="160" cy="65" r="16" fill="#1A1815" />
                    <path d="M148,95 L172,95 L182,125 L208,135 L200,225 L190,370 L130,370 L120,225 L112,135 L138,125 Z" fill="#1A1815" />
                    <circle cx="125" cy="140" r="3" fill="#B89047" />
                    <circle cx="195" cy="140" r="3" fill="#B89047" />
                    <circle cx="132" cy="225" r="3" fill="#B89047" />
                    <circle cx="188" cy="225" r="3" fill="#B89047" />
                  </g>
                </svg>
              </div>

              {/* Slider */}
              <div className="z-10 bg-[#FAF8F5] rounded-xl p-3 border border-[#E8E2D8] flex items-center justify-between text-xs">
                <span className="font-mono text-[#666057]">Drag Stage:</span>
                <input 
                  type="range" 
                  min="1" 
                  max="4" 
                  value={activeStage} 
                  onChange={(e) => setActiveStage(parseInt(e.target.value, 10))}
                  className="w-48 accent-[#1A1815] cursor-pointer"
                />
                <span className="font-serif font-bold text-[#1A1815]">Stage {activeStage}</span>
              </div>

            </div>
          </div>

          {/* RIGHT: Summary & Cart (3 Cols) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] shadow-sm space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666057]">
                  Configuration Total
                </span>
                <div className="text-3xl font-serif font-bold text-[#1A1815]">
                  ${totalPrice.toLocaleString()}
                </div>
                <div className="text-xs text-[#B89047] font-semibold mt-0.5">
                  Base + {activeStage - 1} Modular Kits
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-1.5 text-xs border-t border-[#E8E2D8] pt-3">
                <div className="flex items-center justify-between font-medium text-[#1A1815]">
                  <span>The Base Garment</span>
                  <span className="font-mono">${selectedBase.price}</span>
                </div>
                <div className={`flex items-center justify-between ${activeStage >= 2 ? 'text-[#1A1815]' : 'text-[#666057]/40'}`}>
                  <span>+ Expression Kit</span>
                  <span className="font-mono">${expressionPrice}</span>
                </div>
                <div className={`flex items-center justify-between ${activeStage >= 3 ? 'text-[#1A1815]' : 'text-[#666057]/40'}`}>
                  <span>+ Statement Kit</span>
                  <span className="font-mono">${statementPrice}</span>
                </div>
                <div className={`flex items-center justify-between ${activeStage >= 4 ? 'text-[#1A1815]' : 'text-[#666057]/40'}`}>
                  <span>+ Couture Kit</span>
                  <span className="font-mono">${couturePrice}</span>
                </div>
              </div>

              <button
                onClick={handleAddConfiguration}
                className={`w-full py-3.5 rounded-full font-semibold text-xs uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 shadow-sm ${
                  addedAnimation
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#1A1815] hover:bg-[#33302B] text-white'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-[#B89047]" />
                <span>{addedAnimation ? 'Added to Bag!' : 'Add Capsule to Bag'}</span>
              </button>

              <button
                onClick={onOpenCustomFit}
                className="w-full text-center text-xs text-[#666057] hover:text-[#1A1815] font-mono underline"
              >
                Request Custom Fit Fitting
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
