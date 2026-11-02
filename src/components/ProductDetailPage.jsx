import React, { useState } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { PRODUCTS_BY_ID, PRODUCTS } from '../data/productsData';
import { soundscape } from '../utils/soundscape';
import ProductCard from './ProductCard';
import {
  Heart, ShoppingBag, Sparkles, Layers, ShieldCheck,
  Truck, RotateCcw, ArrowRight, Check, Eye, Share2,
  Scissors, Maximize2, Star, Ruler, Info
} from 'lucide-react';

export default function ProductDetailPage() {
  const {
    activeProductId,
    addToCart,
    toggleWishlist,
    isInWishlist,
    toggleComparison,
    openProductDetail,
    formatPrice,
    navigateTo,
    showToast
  } = useConvertelle();

  const product = PRODUCTS_BY_ID[activeProductId] || PRODUCTS[0];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomCoords, setZoomCoords] = useState({ x: 50, y: 50 });
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs', 'craft', 'care', 'delivery'

  const inWishlist = isInWishlist(product.id);

  // Gallery items
  const galleryItems = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [
        { id: '1', src: product.images.primary, title: 'Primary Runway View' },
        { id: '2', src: product.images.hover, title: 'Transformation Alternate' },
        { id: '3', src: product.images.sketch, title: 'Atelier Technical Sketch' },
        { id: '4', src: product.images.runway || product.images.peplum, title: 'Detail Close-Up' }
      ].filter((item) => Boolean(item.src));

  const activeImage = galleryItems[selectedImageIndex] || galleryItems[0];

  const handleMouseMoveZoom = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomCoords({ x, y });
  };

  const handleAddToCart = () => {
    setAddedSuccess(true);
    addToCart(product, {
      size: selectedSize,
      color: product.colorOptions?.[selectedColorIndex]?.name || 'Standard',
      quantity
    });
    setTimeout(() => setAddedSuccess(false), 1400);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `ConvertElle Modular Luxury Fashion: ${product.name}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard?.writeText(window.location.href);
      showToast('Garment dossier link copied to clipboard.');
    }
  };

  // Related products from same collection or compatible
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.collection === product.collection || p.category === 'accessory')
  ).slice(0, 4);

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-10 px-4 sm:px-6 lg:px-8 border-t border-[#DDD6CA]">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#666057] mb-8 uppercase tracking-widest">
          <button onClick={() => navigateTo('home')} className="hover:text-[#1A1815]">
            Runway
          </button>
          <span>/</span>
          <button onClick={() => navigateTo('shop')} className="hover:text-[#1A1815]">
            Collection
          </button>
          <span>/</span>
          <button
            onClick={() => navigateTo('animal', { archetypeId: product.archetypeId })}
            className="hover:text-[#1A1815] text-[#8C6B26] font-semibold"
          >
            {product.collectionName}
          </button>
          <span>/</span>
          <span className="text-[#1A1815] font-semibold truncate max-w-xs">{product.name}</span>
        </div>

        {/* Main Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Multi-View Interactive Gallery (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails list */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto max-h-[680px] pb-2 md:pb-0 scrollbar-none flex-shrink-0">
              {galleryItems.map((item, idx) => (
                <button
                  key={item.id || idx}
                  onClick={() => {
                    soundscape.playChime('click');
                    setSelectedImageIndex(idx);
                  }}
                  className={`w-16 h-22 sm:w-20 sm:h-26 rounded-sm overflow-hidden border transition-all flex-shrink-0 ${
                    selectedImageIndex === idx
                      ? 'border-[#B89047] ring-2 ring-[#B89047]'
                      : 'border-[#DDD6CA] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Large Zoomable Main Stage */}
            <div
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMoveZoom}
              className="relative aspect-[3/4] w-full bg-white border border-[#DDD6CA] rounded-sm overflow-hidden cursor-crosshair shadow-lg"
            >
              <img
                src={activeImage.src}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-200 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                style={
                  isZoomed
                    ? {
                        transformOrigin: `${zoomCoords.x}% ${zoomCoords.y}%`
                      }
                    : undefined
                }
              />

              {/* View Title Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-[#1A1815]/90 text-[#F0E2C8] text-[9px] uppercase tracking-widest font-semibold backdrop-blur-sm border border-[#B89047]/30 shadow-md">
                  {activeImage.title || 'Editorial Dossier'}
                </span>
              </div>

              {/* Hover Zoom Indicator */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[9px] uppercase tracking-wider text-[#666057] border border-[#DDD6CA] rounded-sm flex items-center gap-1 shadow-sm">
                <Maximize2 className="w-3 h-3 text-[#B89047]" /> Hover to Inspect Weave
              </div>
            </div>
          </div>

          {/* RIGHT: Garment Dossier & Ordering Controls (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-[#E8E2D8] rounded-sm shadow-md">
            {/* Header info */}
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest mb-2 font-semibold">
              <span className="text-[#8C6B26]">{product.collectionName} — {product.archetypeId}</span>
              <span className="text-[#999083]">{product.categoryName}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-[#1A1815] leading-tight">
              {product.name}
            </h1>

            <p className="text-xs text-[#666057] mt-1 font-light italic leading-relaxed">
              {product.subtitle}
            </p>

            {/* Ratings and Reviews */}
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center text-[#B89047]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#666057]">
                {product.rating} ({product.reviewsCount} Atelier Reviews)
              </span>
            </div>

            {/* Pricing */}
            <div className="mt-5 pb-5 border-b border-[#F2EDE4] flex items-baseline gap-3">
              <span className="font-serif text-3xl font-bold text-[#1A1815]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#999083] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="text-[10px] uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200 rounded-sm font-semibold">
                Complimentary White-Glove Shipping
              </span>
            </div>

            {/* Description Paragraph */}
            <p className="text-xs text-[#666057] mt-5 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Color Swatch Selection */}
            {product.colorOptions && product.colorOptions.length > 0 && (
              <div className="mt-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-semibold text-[#1A1815] uppercase tracking-wider text-[11px]">Colourway</span>
                  <span className="text-[#8C6B26] font-medium">{product.colorOptions[selectedColorIndex]?.name}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  {product.colorOptions.map((c, idx) => (
                    <button
                      key={c.name}
                      onClick={() => {
                        soundscape.playChime('click');
                        setSelectedColorIndex(idx);
                      }}
                      className={`w-7 h-7 rounded-full border transition-all ${
                        selectedColorIndex === idx
                          ? 'ring-2 ring-[#B89047] scale-110 shadow-sm'
                          : 'border-[#DDD6CA] hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-semibold text-[#1A1815] uppercase tracking-wider text-[11px]">Size</span>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-[#8C6B26] hover:text-[#1A1815] flex items-center gap-1 text-[11px] underline transition-colors"
                  >
                    <Ruler className="w-3 h-3" /> Bespoke Sizing Guide
                  </button>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        soundscape.playChime('click');
                        setSelectedSize(s);
                      }}
                      className={`py-2 px-2 text-xs rounded-sm border text-center transition-all ${
                        selectedSize === s
                          ? 'bg-[#1A1815] text-[#FAF8F5] border-[#1A1815] shadow-sm font-semibold'
                          : 'bg-white text-[#33302B] border-[#DDD6CA] hover:border-[#B89047]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {/* Sizing Guide Drawer Preview */}
                {showSizeGuide && (
                  <div className="mt-3 p-3 bg-[#FAF8F5] border border-[#DDD6CA] rounded-sm text-[11px] text-[#666057] space-y-1 animate-fade-in">
                    <p className="font-semibold text-[#1A1815]">ConvertElle Imperial & Metric Sizing:</p>
                    <p>XS (Bust 32", Waist 25") • S (Bust 34", Waist 27") • M (Bust 36", Waist 29")</p>
                    <p>L (Bust 38", Waist 31") • XL (Bust 40", Waist 33")</p>
                    <p className="text-[#8C6B26] pt-1">Custom Bespoke Fit includes an atelier virtual fitting with our master tailor.</p>
                  </div>
                )}
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#1A1815]">Quantity</span>
              <div className="flex items-center border border-[#DDD6CA] rounded-sm bg-[#FAF8F5]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1.5 text-xs hover:bg-white transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-1.5 text-xs font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1.5 text-xs hover:bg-white transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Ordering CTA Buttons */}
            <div className="mt-8 space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={addedSuccess}
                  className={`flex-1 py-3.5 px-6 text-xs tracking-widest uppercase font-semibold rounded-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                    addedSuccess
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#B89047] hover:bg-[#8C6B26] text-white'
                  }`}
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Shopping Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Shopping Bag
                    </>
                  )}
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3.5 rounded-sm border transition-colors flex items-center justify-center ${
                    inWishlist
                      ? 'bg-[#B89047] text-white border-[#B89047]'
                      : 'bg-white text-[#1A1815] border-[#DDD6CA] hover:border-[#B89047]'
                  }`}
                  title={inWishlist ? 'Remove from Wishlist' : 'Save to Wishlist'}
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                </button>

                <button
                  onClick={handleShare}
                  className="p-3.5 bg-white text-[#1A1815] border border-[#DDD6CA] hover:border-[#B89047] rounded-sm transition-colors"
                  title="Share Garment Dossier"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => toggleComparison(product.id)}
                className="w-full py-2.5 text-center text-xs tracking-wider uppercase text-[#666057] hover:text-[#1A1815] border border-[#E8E2D8] hover:border-[#B89047] rounded-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5 text-[#B89047]" /> Compare with Another Garment
              </button>
            </div>

            {/* White-glove guarantees */}
            <div className="mt-6 pt-5 border-t border-[#F2EDE4] space-y-2 text-xs text-[#666057]">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#B89047]" />
                <span>Complimentary White-Glove Courier Delivery in 3-5 Business Days</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-[#B89047]" />
                <span>14-Day Atelier Exchange Guarantee with Complimentary Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B89047]" />
                <span>Certified 100% Cruelty-Free Vegan Peace Silk & Biomimetic Materials</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: "THE ART OF TRANSFORMATION" (Signature Requirement) */}
        {product.transformationDetails?.isModular && (
          <div className="mt-16 bg-white border border-[#B89047]/40 p-8 sm:p-12 rounded-sm shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B89047]/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-3xl mb-8">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C6B26] flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4 text-[#B89047]" /> Modular Fashion Innovation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1815]">
                The Art of Transformation
              </h2>
              <p className="text-xs sm:text-sm text-[#666057] mt-2 font-light leading-relaxed">
                ConvertElle garments are engineered to metamorphose. Built with concealed magnetic docking systems, this piece shifts seamlessly between formal daytime precision and show-stopping evening drama in under <strong className="font-semibold text-[#1A1815]">{product.transformationDetails.transformationTime}</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Foundation Breakdown */}
              <div className="p-5 bg-[#FAF8F5] border border-[#E8E2D8] rounded-sm">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C6B26] block mb-1">
                  Step 1: Core Foundation
                </span>
                <h4 className="font-serif text-lg text-[#1A1815] mb-2">
                  {product.transformationDetails.baseGarmentName}
                </h4>
                <p className="text-xs text-[#666057] leading-relaxed">
                  Impeccably tailored minimalist foundation with zero bulk, wearable standalone for boardroom presentations and conferences.
                </p>
              </div>

              {/* Detachable Elements */}
              <div className="p-5 bg-[#FAF8F5] border border-[#E8E2D8] rounded-sm">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C6B26] block mb-1">
                  Step 2: Detachable Kits
                </span>
                <h4 className="font-serif text-lg text-[#1A1815] mb-2">
                  Modular Components
                </h4>
                <ul className="text-xs text-[#666057] space-y-1.5 list-disc list-inside">
                  {product.transformationDetails.detachableElements.map((elem, i) => (
                    <li key={i}>{elem}</li>
                  ))}
                </ul>
              </div>

              {/* Customization Callout */}
              <div className="p-5 bg-[#FAF8F5] border border-[#E8E2D8] rounded-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C6B26] block mb-1">
                    Step 3: Studio Customization
                  </span>
                  <h4 className="font-serif text-lg text-[#1A1815] mb-2">
                    Build Infinite Looks
                  </h4>
                  <p className="text-xs text-[#666057] leading-relaxed">
                    Experiment with alternative overskirts, boleros, and sleeves in the live interactive studio.
                  </p>
                </div>

                <button
                  onClick={() => navigateTo('studio')}
                  className="mt-4 py-2 px-4 bg-[#1A1815] hover:bg-[#B89047] text-white text-[10px] uppercase tracking-wider font-semibold rounded-sm flex items-center justify-center gap-1.5 transition-colors"
                >
                  Launch Transformation Studio <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Technical Atelier Dossier Tabs (Specs, Craftsmanship, Care) */}
        <div className="mt-16 bg-white border border-[#E8E2D8] rounded-sm p-6 sm:p-10 shadow-sm">
          <div className="flex border-b border-[#F2EDE4] gap-6 text-xs uppercase tracking-widest font-semibold pb-4">
            {[
              { id: 'specs', label: 'Fabric & Specifications' },
              { id: 'craft', label: 'Artisanal Biomimicry' },
              { id: 'styling', label: 'Styling Dossier' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`transition-colors ${
                  activeTab === tab.id
                    ? 'text-[#B89047] border-b-2 border-[#B89047] pb-4 -mb-4'
                    : 'text-[#999083] hover:text-[#1A1815]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pt-6 text-xs sm:text-sm text-[#666057] leading-relaxed">
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <strong className="block text-[#1A1815] uppercase tracking-wider text-[11px] mb-1">Material Composition:</strong>
                  <p>{product.fabricSpecs?.composition}</p>
                </div>
                <div>
                  <strong className="block text-[#1A1815] uppercase tracking-wider text-[11px] mb-1">Docking Hardware:</strong>
                  <p>{product.fabricSpecs?.hardware}</p>
                </div>
                <div>
                  <strong className="block text-[#1A1815] uppercase tracking-wider text-[11px] mb-1">Garment Care:</strong>
                  <p>{product.fabricSpecs?.care}</p>
                </div>
                <div>
                  <strong className="block text-[#1A1815] uppercase tracking-wider text-[11px] mb-1">Sustainability Certification:</strong>
                  <p>{product.fabricSpecs?.sustainability}</p>
                </div>
              </div>
            )}

            {activeTab === 'craft' && (
              <p>
                Inspired by the artistic vision of Briton Rivière’s 1902 masterpiece <em>Aphrodite</em>, ConvertElle garments draw symbolic power from fauna without exploiting animals. Every rosette, feather filament, and luminescent vein is engineered through advanced biomimetic weaving, micro-pleating, and 100% cruelty-free materials.
              </p>
            )}

            {activeTab === 'styling' && (
              <p>
                {product.stylingNotes || 'Pair with sculptural heels and minimal jewelry. Allow the architectural lines of the garment to command attention.'}
              </p>
            )}
          </div>
        </div>

        {/* RELATED CREATIONS / COMPLETE THE LOOK */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C6B26]">
                Curated Ensemble
              </span>
              <h3 className="font-serif text-3xl text-[#1A1815]">Complete The Look</h3>
            </div>
            <button
              onClick={() => navigateTo('shop')}
              className="text-xs uppercase tracking-wider text-[#8C6B26] hover:text-[#1A1815] flex items-center gap-1 transition-colors"
            >
              Explore Full Collection <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

