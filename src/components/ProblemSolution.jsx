import React from 'react';
import { Briefcase, Utensils, Wine, Crown, CheckCircle2, XCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProblemSolution() {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Foundation',
      subtitle: 'The Daytime Base',
      desc: 'Select an impeccably tailored column dress, jumpsuit, or pencil duo. Built for 10+ hours of executive presence with concealed magnetic receivers.',
      tag: 'Office & Conferences'
    },
    {
      num: '02',
      title: 'Snap On Your Kit',
      subtitle: 'Expression or Statement',
      desc: 'Heading to dinner or a vernissage? Unpack your pocket-sized kit. Magnetic fasteners snap directly onto the shoulders and waistline.',
      tag: 'Dinners & Cocktails'
    },
    {
      num: '03',
      title: 'Ascend to Grand Couture',
      subtitle: 'The Sovereign Metamorphosis',
      desc: 'For black-tie galas and red carpets, attach the full-volume train and sculptural wings. No trip home to change required.',
      tag: 'Galas & Red Carpets'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-white border-y border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DDD6CA] bg-[#FAF8F5] text-xs uppercase tracking-[0.2em] text-[#B89047] font-semibold">
            The Innovation
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1815] font-normal">
            How ConvertElle <span className="italic text-[#B89047]">Works</span>
          </h2>
          <p className="text-[#666057] text-base sm:text-lg font-light leading-relaxed">
            Buy the base. Build your expression. Transform whenever you want in three simple steps.
          </p>
        </div>

        {/* 3 Clear Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#B89047] transition-all space-y-4 relative group shadow-sm hover:shadow-luxury"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-bold text-[#B89047]">
                  {st.num}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666057] px-2.5 py-1 rounded-full bg-white border border-[#DDD6CA]">
                  {st.tag}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#1A1815]">
                  {st.title}
                </h3>
                <div className="text-xs font-mono uppercase tracking-wider text-[#B89047] mt-0.5">
                  {st.subtitle}
                </div>
              </div>

              <p className="text-sm text-[#4A453F] font-light leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* The Problem vs The Solution Comparison */}
        <div className="pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* The Old Way */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-red-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-red-200/60">
                  <div className="flex items-center gap-2 text-red-700 font-semibold text-xs uppercase tracking-wider">
                    <XCircle className="w-4 h-4" />
                    <span>The Conventional Dilemma</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#666057]">Single-Occasion Waste</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1815] font-medium">
                  Multiple Occasions. Multiple Purchases.
                </h3>

                <p className="text-sm text-[#4A453F] font-light leading-relaxed">
                  Fast luxury forces women to buy, transport, and store four separate garments for a single day: Work suit ➔ Dinner dress ➔ Cocktail outfit ➔ Evening gown. Resulting in closet clutter and high financial waste.
                </p>

                <div className="grid grid-cols-4 gap-2 pt-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-red-200">
                    <Briefcase className="w-4 h-4 mx-auto mb-1 text-[#666057]" />
                    <span className="font-bold text-[#1A1815] text-[11px] block">WORK</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-red-200">
                    <Utensils className="w-4 h-4 mx-auto mb-1 text-[#666057]" />
                    <span className="font-bold text-[#1A1815] text-[11px] block">DINNER</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-red-200">
                    <Wine className="w-4 h-4 mx-auto mb-1 text-[#666057]" />
                    <span className="font-bold text-[#1A1815] text-[11px] block">PARTY</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-red-200">
                    <Crown className="w-4 h-4 mx-auto mb-1 text-[#666057]" />
                    <span className="font-bold text-[#1A1815] text-[11px] block">GALA</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-red-200/60 flex items-center justify-between text-xs font-mono text-[#666057]">
                <span>Typical Formal Spend: $6,500+</span>
                <span className="text-red-700 font-bold">75% Closet Inactivity</span>
              </div>
            </div>

            {/* The ConvertElle Way */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#B89047] shadow-luxury space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
                  <div className="flex items-center gap-2 text-[#B89047] font-semibold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>The ConvertElle Solution</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#B89047] font-bold">Modular Freedom</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1815] font-medium">
                  One Core Foundation. Endless Expressions.
                </h3>

                <p className="text-sm text-[#4A453F] font-light leading-relaxed">
                  Start with a beautifully cut daytime base. Carry your detachable evening or gala kits in your handbag. Snap them on in 30 seconds.
                </p>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center gap-2 text-[#1A1815]">
                    <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
                    <span><strong>Carry-on couture:</strong> Fits in a handbag with protective travel pouch.</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#1A1815]">
                    <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
                    <span><strong>Compounding value:</strong> Mix-and-match kits across any animal design.</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#1A1815]">
                    <Sparkles className="w-3.5 h-3.5 text-[#B89047]" />
                    <span><strong>100% Cruelty-Free:</strong> Pure biomimicry crafted without fur, feathers, or skins.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E2D8] flex items-center justify-between text-xs font-mono">
                <span className="text-[#666057]">Wardrobe Cost Reduction: ~60%</span>
                <span className="text-[#B89047] font-bold">Infinite Flexibility</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
