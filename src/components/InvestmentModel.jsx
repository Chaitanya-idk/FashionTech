import React, { useState } from 'react';
import { DollarSign, PieChart, TrendingUp, Sparkles } from 'lucide-react';
import { investmentAllocation, revenueModelData } from '../data/brandStory';

export default function InvestmentModel() {
  const [activeSegment, setActiveSegment] = useState(0);

  return (
    <section id="investment" className="py-24 relative overflow-hidden bg-[#FAF8F5] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DDD6CA] bg-white text-xs uppercase tracking-[0.2em] text-[#B89047] font-semibold">
            Economics & Transparency
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1815] font-normal">
            Business Model & <span className="italic text-[#B89047]">Investment</span>
          </h2>
          <p className="text-[#666057] text-base sm:text-lg font-light leading-relaxed">
            "We invest in craftsmanship, conscious materials and customization to create fashion with lasting value."
          </p>
        </div>

        {/* 2 Columns: Revenue Streams vs Investment Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Revenue Streams (Deck Page 20) */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-[#E8E2D8] shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#F2EDE4]">
              <span className="text-xs uppercase tracking-widest text-[#1A1815] font-cinzel font-bold flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#B89047]" />
                <span>Revenue Streams</span>
              </span>
              <span className="text-[10px] font-mono text-[#666057]">Deck Page 20</span>
            </div>

            <div className="space-y-3">
              {revenueModelData.map((stream, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] space-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif font-bold text-[#1A1815]">
                      {stream.stream}
                    </span>
                    <span className="text-[10px] font-mono text-[#B89047] font-bold">
                      Stream 0{idx + 1}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#4A453F] leading-snug">
                    {stream.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Allocation (Deck Page 21) */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-[#E8E2D8] shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#F2EDE4]">
              <span className="text-xs uppercase tracking-widest text-[#1A1815] font-cinzel font-bold flex items-center gap-2">
                <PieChart className="w-4 h-4 text-[#B89047]" />
                <span>Cost Allocation</span>
              </span>
              <span className="text-[10px] font-mono text-[#666057]">Deck Page 21</span>
            </div>

            {/* Allocation Bar */}
            <div className="w-full h-4 rounded-full overflow-hidden flex bg-[#FAF8F5] border border-[#E8E2D8]">
              {investmentAllocation.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActiveSegment(i)}
                  style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                  className="h-full cursor-pointer hover:opacity-80 transition-opacity"
                  title={`${item.category}: ${item.percent}%`}
                />
              ))}
            </div>

            {/* Selected Segment Highlight */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#B89047] font-bold block">
                  Category Breakdown
                </span>
                <span className="text-base font-serif font-bold text-[#1A1815]">
                  {investmentAllocation[activeSegment].category} ({investmentAllocation[activeSegment].percent}%)
                </span>
                <p className="text-xs text-[#666057] mt-0.5">
                  {investmentAllocation[activeSegment].desc}
                </p>
              </div>
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs text-white flex-shrink-0"
                style={{ backgroundColor: investmentAllocation[activeSegment].color }}
              >
                {investmentAllocation[activeSegment].percent}%
              </div>
            </div>

            {/* List */}
            <div className="space-y-1.5">
              {investmentAllocation.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveSegment(idx)}
                  className={`p-2.5 rounded-xl cursor-pointer transition-all border flex items-center justify-between text-xs ${
                    activeSegment === idx 
                      ? 'border-[#1A1815] bg-[#FAF8F5] font-bold' 
                      : 'border-transparent bg-white hover:border-[#E8E2D8]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[#1A1815]">{item.category}</span>
                  </div>
                  <span className="font-mono text-[#B89047] font-bold">{item.percent}%</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
