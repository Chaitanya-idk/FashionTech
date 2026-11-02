import React from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, Gift } from 'lucide-react';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    shippingCost,
    packagingFee,
    estimatedTax,
    cartTotal,
    giftPackaging,
    setGiftPackaging,
    setIsCheckoutOpen,
    setCheckoutStep,
    formatPrice,
    navigateTo
  } = useConvertelle();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCheckoutStep(1);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-[130] flex justify-end bg-[#1A1815]/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#DDD6CA] animate-slide-left">
        {/* Drawer Header */}
        <div className="p-6 bg-white border-b border-[#E8E2D8] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#B89047]" />
            <h2 className="font-serif text-2xl text-[#1A1815]">Shopping Bag</h2>
            <span className="text-xs bg-[#F2EDE4] text-[#8C6B26] px-2.5 py-0.5 rounded-full font-semibold">
              {cart.reduce((s, i) => s + i.quantity, 0)} Items
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-[#F2EDE4] text-[#1A1815] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-6 py-2.5 bg-[#FAF8F5] border-b border-[#E8E2D8] text-xs">
          {cartSubtotal >= 30000 ? (
            <p className="text-emerald-700 font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Complimentary White-Glove Courier Delivery Unlocked
            </p>
          ) : (
            <div className="space-y-1.5">
              <p className="text-[#666057]">
                Add <span className="font-semibold text-[#8C6B26]">{formatPrice(30000 - cartSubtotal)}</span> more for complimentary courier delivery.
              </p>
              <div className="w-full bg-[#E8E2D8] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#B89047] h-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (cartSubtotal / 30000) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="py-24 text-center text-[#666057]">
              <ShoppingBag className="w-12 h-12 mx-auto text-[#DDD6CA] stroke-1 mb-3" />
              <p className="font-serif text-2xl text-[#1A1815] mb-1">Your Bag is Empty</p>
              <p className="text-xs text-[#999083] mb-6 max-w-xs mx-auto">
                Discover our modular couture foundations and detachable fauna components.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigateTo('shop');
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B89047] text-white text-xs tracking-widest uppercase font-semibold rounded-sm hover:bg-[#8C6B26] transition-colors shadow-md"
              >
                Explore Catalog <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.cartId}
                className="p-4 bg-white border border-[#E8E2D8] rounded-sm flex gap-4 hover:border-[#B89047]/40 transition-colors"
              >
                {/* Image */}
                <div className="w-20 h-28 bg-[#FAF8F5] overflow-hidden border border-[#E8E2D8] flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif text-sm font-semibold text-[#1A1815] leading-snug line-clamp-2">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#999083] hover:text-red-700 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Size and Color specifications */}
                    <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-[#666057]">
                      <span>Size: <strong className="text-[#1A1815]">{item.size}</strong></span>
                      <span>•</span>
                      <span>Color: <strong className="text-[#1A1815]">{item.color}</strong></span>
                    </div>

                    {/* Custom components tag if customized ensemble */}
                    {item.isCustomEnsemble && item.customComponents?.length > 0 && (
                      <div className="mt-2 p-2 bg-[#FAF8F5] border border-[#E8E2D8] rounded-sm text-[10px] text-[#8C6B26]">
                        <strong className="block text-[#1A1815] mb-0.5 font-semibold">Custom Atelier Ensemble:</strong>
                        <ul className="list-disc list-inside space-y-0.5">
                          {item.customComponents.map((c, i) => (
                            <li key={i}>{typeof c === 'string' ? c : c.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Quantity & Item Subtotal */}
                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#F2EDE4]">
                    <div className="flex items-center border border-[#DDD6CA] rounded-sm bg-white">
                      <button
                        onClick={() => updateQuantity(item.cartId, -1)}
                        className="px-2.5 py-0.5 text-xs hover:bg-[#F2EDE4] transition-colors"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartId, 1)}
                        className="px-2.5 py-0.5 text-xs hover:bg-[#F2EDE4] transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-serif text-base font-semibold text-[#1A1815]">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary & Checkout Trigger */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E8E2D8] space-y-4">
            {/* Gift Box Toggle */}
            <div className="flex items-center justify-between p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded-sm">
              <label className="flex items-center gap-2.5 text-xs text-[#1A1815] cursor-pointer">
                <input
                  type="checkbox"
                  checked={giftPackaging}
                  onChange={(e) => setGiftPackaging(e.target.checked)}
                  className="rounded text-[#B89047] focus:ring-[#B89047]"
                />
                <span className="flex items-center gap-1.5 font-medium">
                  <Gift className="w-3.5 h-3.5 text-[#B89047]" /> Signature Gold Box & Ribbon (+₹1,500)
                </span>
              </label>
              <span className="text-[10px] uppercase font-bold text-[#8C6B26]">Bespoke</span>
            </div>

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-[#666057]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-serif font-semibold text-[#1A1815]">{formatPrice(cartSubtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>White-Glove Shipping</span>
                <span>{shippingCost === 0 ? <strong className="text-emerald-700">COMPLIMENTARY</strong> : formatPrice(shippingCost)}</span>
              </div>
              {giftPackaging && (
                <div className="flex justify-between">
                  <span>Signature Packaging</span>
                  <span>{formatPrice(packagingFee)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Textile GST (5%)</span>
                <span>{formatPrice(estimatedTax)}</span>
              </div>
              <div className="pt-2 border-t border-[#E8E2D8] flex justify-between items-baseline text-sm font-semibold text-[#1A1815]">
                <span className="uppercase tracking-wider text-xs">Estimated Total (INR)</span>
                <span className="font-serif text-2xl font-bold text-[#8C6B26]">{formatPrice(cartTotal)}</span>
              </div>
            </div>

            {/* Simulated Checkout Button */}
            <button
              onClick={handleCheckout}
              className="w-full py-3.5 bg-[#B89047] hover:bg-[#8C6B26] text-white text-xs tracking-widest uppercase font-semibold rounded-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              Proceed to Simulated Checkout <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#999083]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Simulated Academic Demonstration • No Real Payment Required</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

