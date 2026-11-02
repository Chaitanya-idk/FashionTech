import React, { useState } from 'react';
import { Clock, Briefcase, Utensils, Wine, Crown, CheckCircle2, ArrowRight } from 'lucide-react';

const timelineSteps = [
  {
    time: "09:00 AM",
    title: "Global Leadership Summit",
    location: "Auditorium & Boardroom",
    icon: Briefcase,
    stage: "Stage 01: The Base",
    action: "Wearing Clean Core Foundation",
    description: "Architectural crepe column dress or jumpsuit. Minimalist, crease-resistant, engineered for 8 hours of keynotes and intense negotiations.",
    whatToChange: "None. You start your day with sleek, understated authority."
  },
  {
    time: "01:30 PM",
    title: "Executive Private Luncheon",
    location: "Private Dining Salon",
    icon: Utensils,
    stage: "Stage 01.5: Subtle Reversal",
    action: "Reversible Collar Flip",
    description: "Reverse the dual-finish satin lapels to reveal subtle champagne gold edging. Takes 15 seconds without leaving your seat.",
    whatToChange: "Magnetic collar trim reversed to accent color."
  },
  {
    time: "06:30 PM",
    title: "Art Biennale VIP Vernissage",
    location: "Contemporary Gallery",
    icon: Wine,
    stage: "Stage 02: Expression Kit",
    action: "Snap-on Sleeves & Brooch",
    description: "Retire to the lounge. Unfurl the Expression Kit from your handbag: snap on tactile brocade sleeves and cast metallic animal brooch.",
    whatToChange: "+ Flocked jacquard sleeves + artisanal brooch (30 seconds)."
  },
  {
    time: "08:30 PM",
    title: "Black-Tie Charity Gala & Opera",
    location: "National Performing Arts Center",
    icon: Crown,
    stage: "Stage 04: Haute Couture Kit",
    action: "Attach Sculptural Wings & Train",
    description: "The full metamorphosis. Snap on the volumetric organza overskirt and sovereign wings. You walk the red carpet in high-couture glory without having gone home to change.",
    whatToChange: "+ Tiered cascading train + sculpted organza wings (45 seconds)."
  }
];

export default function OccasionTimeline({ onLaunchAtelier }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = timelineSteps[activeStepIndex];

  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DDD6CA] bg-white text-xs uppercase tracking-[0.2em] text-[#B89047] font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>24-Hour Metamorphosis</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1815] font-normal">
            A Day in <span className="italic text-[#B89047]">ConvertElle</span>
          </h2>
          <p className="text-[#666057] text-base sm:text-lg font-light leading-relaxed">
            Zero garment bags. Zero trips home to change. Watch how one base garment effortlessly navigates a full day of high-stakes transitions.
          </p>
        </div>

        {/* 4 Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {timelineSteps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            const Icon = step.icon;

            return (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-6 rounded-2xl text-left transition-all border ${
                  isSelected
                    ? 'border-[#1A1815] bg-white shadow-luxury scale-[1.02]'
                    : 'border-[#E8E2D8] bg-[#FAF8F5] hover:border-[#DDD6CA]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#B89047]">
                    {step.time}
                  </span>
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#1A1815] text-white' : 'bg-white text-[#666057] border border-[#E8E2D8]'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-base font-serif font-bold text-[#1A1815] mb-1">
                  {step.title}
                </div>
                <div className="text-[11px] text-[#666057] font-mono">
                  {step.stage}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E2D8] shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-[#B89047] font-bold px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD6CA]">
                  {activeStep.time} • {activeStep.location}
                </span>
                <span className="text-xs font-mono text-[#666057]">
                  {activeStep.stage}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#1A1815]">
                {activeStep.title}
              </h3>

              <p className="text-sm text-[#4A453F] font-light leading-relaxed">
                {activeStep.description}
              </p>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B89047] flex-shrink-0" />
                <div className="text-xs text-[#1A1815]">
                  <strong>Transformation Action:</strong> {activeStep.whatToChange}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] text-center space-y-3">
              <div className="text-xs font-mono text-[#666057] uppercase">Occasion Ready</div>
              <div className="text-4xl font-serif font-bold text-[#1A1815]">100%</div>
              <button
                onClick={onLaunchAtelier}
                className="w-full py-3 rounded-full bg-[#1A1815] hover:bg-[#33302B] text-white text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2"
              >
                <span>Customize in Atelier</span>
                <ArrowRight className="w-4 h-4 text-[#B89047]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
