import React, { useState } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { X, Heart, ShoppingBag, ArrowRight, Sparkles, Layers, ShieldCheck, Check } from 'lucide-react';

export default function QuickViewModal() {
  const {
    isQuickViewOpen,
    quickViewProduct,
    closeQuickViewModal,
    openProductDetail,
    addToCart,
    toggleWishlist,
    isInWishlist,
    formatPrice
  } = useConvertelle();

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!isQuickViewOpen || !quickViewProduct) return null;

  const inWishlist = isInWishlist(quickViewProduct.id);

  // Compile image list
  const imageList = quickViewProduct.gallery && quickViewProduct.gallery.length > 0
    ? quickViewProduct.gallery
    : [
        { id: '1', src: quickViewProduct.images.primary, title: 'Primary Look' },
        { id: '2', src: quickViewProduct.images.hover, title: 'Transformation Detail' },
        { id: '3', src: quickViewProduct.images.sketch, title: 'Technical Sketch' }
      ].filter((img) => Boolean(img.src));

  const handleAdd = () => {
    setAdded(true);
    addToCart(quickViewProduct, {
      size: selectedSize,
      color: quickViewProduct.colorOptions?.[selectedColor]?.name || 'Standard',
      quantity
    });
    setTimeout(() => {
      setAdded(false);
      closeQuickViewModal();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-[#1A1815]/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] border border-[#DDD6CA] shadow-2xl rounded-sm overflow-hidden animate-scale-up max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={closeQuickViewModal}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#1A1815] shadow-md flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Gallery */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between bg-white border-b md:border-b-0 md:border-r border-[#E8E2D8]">
          <div className="relative aspect-[3/4] w-full bg-[#FAF8F5] overflow-hidden rounded-sm border border-[#E8E2D8]">
            <img
              src={imageList[activeImageIndex]?.src || quickViewProduct.images.primary}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
            {quickViewProduct.badge && (
              <span className="absolute top-3 left-3 px-2.5 py-1 text-[9px] tracking-widest uppercase font-semibold bg-[#1A1815]/90 text-[#F0E2C8] backdrop-blur-sm border border-[#B89047]/30">
                {quickViewProduct.badge}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {imageList.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
              {imageList.map((img, idx) => (
                <button
                  key={img.id || idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-18 rounded-sm overflow-hidden border flex-shrink-0 transition-all ${
                    activeImageIndex === idx ? 'border-[#B89047] ring-1 ring-[#B89047]' : 'border-[#DDD6CA] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Garment Specs & Controls */}
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Collection & Category */}
            <div className="flex items-center justify-between text-[10px] tracking-widest uppercase mb-2">
              <span className="font-semibold text-[#8C6B26]">
                {quickViewProduct.collectionName}
              </span>
              <span className="text-[#999083]">
                {quickViewProduct.categoryName}
              </span>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl text-[#1A1815] leading-tight">
              {quickViewProduct.name}
            </h2>
            <p className="text-xs text-[#666057] mt-1 font-light italic">
              {quickViewProduct.subtitle}
            </p>

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-serif text-2xl font-semibold text-[#1A1815]">
                {formatPrice(quickViewProduct.price)}
              </span>
              {quickViewProduct.originalPrice && (
                <span className="text-sm text-[#999083] line-through">
                  {formatPrice(quickViewProduct.originalPrice)}
                </span>
              )}
              <span className="text-[10px] uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200 rounded-sm">
                In Stock • Ready for Atelier Dispatch
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-[#666057] mt-3 leading-relaxed">
              {quickViewProduct.description}
            </p>

            {/* Modular Highlights */}
            {quickViewProduct.transformationDetails?.isModular && (
              <div className="mt-4 p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded-sm">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C6B26] flex items-center gap-1.5 mb-1">
                  <Layers className="w-3.5 h-3.5" /> Modular Transformation Anatomy
                </span>
                <p className="text-[11px] text-[#33302B]">
                  Metamorphosis speed: <strong className="font-semibold">{quickViewProduct.transformationDetails.transformationTime}</strong>. Features interchangeable magnetic components.
                </p>
              </div>
            )}

            {/* Color Selection */}
            {quickViewProduct.colorOptions && quickViewProduct.colorOptions.length > 0 && (
              <div className="mt-5">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-semibold text-[#1A1815]">Colourway</span>
                  <span className="text-[#8C6B26]">{quickViewProduct.colorOptions[selectedColor]?.name}</span>
                </div>
                <div className="flex gap-2">
                  {quickViewProduct.colorOptions.map((c, idx) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(idx)}
                      className={`w-7 h-7 rounded-full border transition-all ${
                        selectedColor === idx ? 'ring-2 ring-[#B89047] scale-110' : 'border-[#DDD6CA]'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {quickViewProduct.sizes && quickViewProduct.sizes.length > 0 && (
              <div className="mt-5">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-semibold text-[#1A1815]">Size</span>
                  <span className="text-[#8C6B26]">Selected: {selectedSize}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 text-xs rounded-sm border transition-colors ${
                        selectedSize === s
                          ? 'bg-[#1A1815] text-[#FAF8F5] border-[#1A1815]'
                          : 'bg-white text-[#33302B] border-[#DDD6CA] hover:border-[#B89047]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-5 flex items-center gap-4">
              <span className="text-xs font-semibold text-[#1A1815]">Quantity</span>
              <div className="flex items-center border border-[#DDD6CA] bg-white rounded-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 text-sm hover:bg-[#F2EDE4] transition-colors"
                >
                  -
                </button>
                <span className="px-3 py-1 text-xs font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 text-sm hover:bg-[#F2EDE4] transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-5 border-t border-[#E8E2D8] flex flex-col gap-3">
            <div className="flex gap-3">
              <button
                onClick={handleAdd}
                disabled={added}
                className={`flex-1 py-3 px-6 text-xs tracking-widest uppercase font-semibold rounded-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#B89047] hover:bg-[#8C6B26] text-white'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Add to Shopping Bag
                  </>
                )}
              </button>

              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className={`p-3 rounded-sm border transition-colors flex items-center justify-center ${
                  inWishlist
                    ? 'bg-[#B89047] text-white border-[#B89047]'
                    : 'bg-white text-[#1A1815] border-[#DDD6CA] hover:border-[#B89047]'
                }`}
                title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
              </button>
            </div>

            <button
              onClick={() => {
                closeQuickViewModal();
                openProductDetail(quickViewProduct.id);
              }}
              className="w-full py-2 text-center text-xs tracking-wider uppercase text-[#8C6B26] hover:text-[#1A1815] flex items-center justify-center gap-1.5 transition-colors"
            >
              View Full Editorial Dossier & Transformation Anatomy <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

