import React, { useState } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';

export default function ProductCard({ product }) {
  const {
    openProductDetail,
    openQuickViewModal,
    addToCart,
    toggleWishlist,
    isInWishlist,
    formatPrice
  } = useConvertelle();

  const [isHovered, setIsHovered] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [addedAnim, setAddedAnim] = useState(false);

  const inWishlist = isInWishlist(product.id);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    setAddedAnim(true);
    addToCart(product, {
      color: product.colorOptions?.[selectedColorIndex]?.name || 'Standard',
      size: 'M',
      quantity: 1
    });
    setTimeout(() => setAddedAnim(false), 1200);
  };

  const activeImage = isHovered && product.images.hover
    ? product.images.hover
    : product.images.primary;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => openProductDetail(product.id)}
      className="group relative flex flex-col bg-[#0A1409]/90 border border-[rgba(74,229,74,0.12)] hover:border-[#D4AF37]/60 transition-all duration-500 rounded-sm overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_12px_36px_rgba(0,0,0,0.8)]"
    >
      {/* Visual Image Showcase */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#060D06]">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 text-[9px] tracking-widest uppercase font-semibold bg-[#060C05]/90 text-[#D4AF37] backdrop-blur-sm border border-[#D4AF37]/30 shadow-md">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            inWishlist
              ? 'bg-[#B89047] text-[#060C05] shadow-md'
              : 'bg-[#060C05]/70 backdrop-blur-sm text-[#E8E4DC] hover:text-[#D4AF37] hover:bg-[#060C05]'
          }`}
          title={inWishlist ? 'Remove from Wishlist' : 'Save to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
        </button>

        {/* Dynamic Image with Smooth Crossfade */}
        <img
          src={activeImage}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Floating Action Overlay on Hover */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#060C05] via-[#060C05]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openQuickViewModal(product);
            }}
            className="flex-1 py-2 px-3 text-[10px] tracking-widest uppercase font-semibold text-[#E8E4DC] bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-sm flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>

          <button
            onClick={handleQuickAdd}
            disabled={addedAnim}
            className={`flex-1 py-2 px-3 text-[10px] tracking-widest uppercase font-semibold rounded-sm flex items-center justify-center gap-1.5 transition-all ${
              addedAnim
                ? 'bg-emerald-600 text-white'
                : 'bg-[#D4AF37] hover:bg-[#B89047] text-[#060C05] font-bold shadow-md'
            }`}
          >
            {addedAnim ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" /> Add to Bag
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editorial Card Metadata */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-[#081208]/95 border-t border-[rgba(74,229,74,0.08)]">
        <div>
          {/* Identity & Archetype tag */}
          <div className="flex items-center justify-between mb-1.5 text-[9px] tracking-widest uppercase">
            <span className="font-semibold text-[#D4AF37]">
              {product.collectionName}
            </span>
            <span className="text-[rgba(232,228,220,0.45)]">
              {product.categoryName}
            </span>
          </div>

          {/* Garment Title */}
          <h3 className="font-serif text-lg text-[#E8E4DC] group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-[rgba(232,228,220,0.5)] mt-1 line-clamp-1 font-light">
            {product.subtitle}
          </p>
        </div>

        {/* Pricing & Color Swatches */}
        <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-base font-semibold text-[#E8E4DC]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[rgba(232,228,220,0.35)] line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Color Swatch Dots */}
          {product.colorOptions && product.colorOptions.length > 0 && (
            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              {product.colorOptions.slice(0, 3).map((col, idx) => (
                <button
                  key={col.name}
                  onClick={() => setSelectedColorIndex(idx)}
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    selectedColorIndex === idx
                      ? 'ring-1 ring-[#D4AF37] scale-110'
                      : 'border-white/20 hover:scale-105'
                  }`}
                  style={{ backgroundColor: col.hex }}
                  title={col.name}
                />
              ))}
              {product.colorOptions.length > 3 && (
                <span className="text-[9px] text-[rgba(232,228,220,0.4)]">+{product.colorOptions.length - 3}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
