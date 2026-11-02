import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WardrobeDrawer({ isOpen, onClose, items, onRemoveItem, onCheckout }) {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white border-l border-[#E8E2D8] h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
        
        {/* Drawer Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D8]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#B89047]" />
              <h3 className="font-serif text-2xl text-[#1A1815] font-bold">
                Wardrobe Capsule Bag
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#FAF8F5] text-[#666057] hover:text-[#1A1815] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#B89047] font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modular Efficiency</span>
            </div>
            <p className="text-[11px] text-[#4A453F] leading-relaxed">
              Every ConvertElle capsule replaces 4 separate formal garments, saving 80% closet space and eliminating single-occasion textile waste.
            </p>
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 my-6 space-y-3 overflow-y-auto pr-1">
          {items.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center space-y-3 text-[#666057]">
              <ShoppingBag className="w-12 h-12 stroke-1 text-[#DDD6CA]" />
              <div className="font-serif text-lg text-[#1A1815] font-bold">Your Capsule is Empty</div>
              <p className="text-xs max-w-xs">
                Explore the FAUNA collection to choose between Base Garments and Haute Couture suites.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] space-y-2.5 relative group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B89047] font-bold">
                      {item.archetypeName} • Stage 0{item.stage}
                    </span>
                    <h4 className="font-serif text-base font-bold text-[#1A1815]">
                      {item.baseName}
                    </h4>
                    <span className="text-[11px] text-[#666057] block font-mono">
                      Size: {item.size || 'US 4'} • Occasion: {item.occasion}
                    </span>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-[#666057] hover:text-red-600 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {item.includedKits && item.includedKits.length > 0 && (
                  <div className="pt-2 border-t border-[#E8E2D8] space-y-0.5">
                    <span className="text-[10px] uppercase font-mono text-[#666057] block">
                      Attached Kits:
                    </span>
                    {item.includedKits.map((k, i) => (
                      <div key={i} className="text-[11px] text-[#4A453F] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#B89047]" />
                        <span>{k.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2 border-t border-[#E8E2D8] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#666057]">Capsule Price</span>
                  <span className="font-bold text-[#1A1815] text-sm">
                    ${item.price.toLocaleString()}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#E8E2D8] space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-cinzel tracking-widest text-[#666057]">
              Total Investment:
            </span>
            <span className="font-serif text-3xl font-bold text-[#1A1815]">
              ${total.toLocaleString()}
            </span>
          </div>

          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className={`w-full py-4 rounded-full font-semibold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
              items.length > 0
                ? 'bg-[#1A1815] hover:bg-[#33302B] text-white cursor-pointer shadow-md'
                : 'bg-[#E8E2D8] text-[#666057] cursor-not-allowed'
            }`}
          >
            <span>Proceed to Atelier Reservation</span>
            <ArrowRight className="w-4 h-4 text-[#B89047]" />
          </button>

          <div className="flex items-center justify-center gap-2 text-[10px] text-[#666057] font-mono text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B89047]" />
            <span>Complimentary Insured Shipping & Lifetime Alterations</span>
          </div>
        </div>

      </div>
    </div>
  );
}
