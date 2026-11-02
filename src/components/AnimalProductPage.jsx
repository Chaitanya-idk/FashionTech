import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, Check, ShoppingBag, Sparkles, Shield, 
  Ruler, HelpCircle, RefreshCw, Feather, Layers, ChevronRight,
  Eye, CheckCircle2, Lock, Truck, Award, Image as ImageIcon
} from 'lucide-react';
import { faunaArchetypes } from '../data/faunaCollection';
import { baseGarments } from '../data/modularData';

export default function AnimalProductPage({ 
  archetypeId, 
  onBack, 
  onSelectArchetype, 
  onAddToCart, 
  onOpenCustomFit 
}) {
  const archetype = faunaArchetypes.find((a) => a.id === archetypeId) || faunaArchetypes[0];
  const currentIndex = faunaArchetypes.findIndex((a) => a.id === archetype.id);
  const prevArchetype = faunaArchetypes[(currentIndex - 1 + faunaArchetypes.length) % faunaArchetypes.length];
  const nextArchetype = faunaArchetypes[(currentIndex + 1) % faunaArchetypes.length];

  // Base Garment Selector
  const [selectedBaseIndex, setSelectedBaseIndex] = useState(0);
  const selectedBase = baseGarments[selectedBaseIndex];

  // Commercial Configuration Tier
  // 'base_only', 'base_expression', 'base_statement', 'full_couture', 'kit_only'
  const [configTier, setConfigTier] = useState('full_couture');

  // Sizing selection
  const [selectedSize, setSelectedSize] = useState('US 4');
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  // Selected Color Swatch
  const [selectedColor, setSelectedColor] = useState(archetype.palette[0]);

  // Active View Tab: 'photo', 'breakdown', 'silhouette', 'sketch', 'details'
  const hasPhotos = !!archetype.gallery && archetype.gallery.length > 0;
  const [activeMediaView, setActiveMediaView] = useState(hasPhotos ? 'photo' : 'silhouette');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(1); // Default to full couture photo for butterfly

  // Animation flag for button
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Automatically switch photo to reflect the selected tier
  useEffect(() => {
    if (hasPhotos) {
      if (archetype.id === 'butterfly') {
        if (configTier === 'base_only') {
          setSelectedPhotoIndex(0); // The Base Garment photo
          setActiveMediaView('photo');
        } else if (configTier === 'full_couture' || configTier === 'kit_only') {
          setSelectedPhotoIndex(1); // Full Couture photo
          setActiveMediaView('photo');
        } else if (configTier === 'base_statement') {
          setSelectedPhotoIndex(3); // Runway Duo
          setActiveMediaView('photo');
        } else if (configTier === 'base_expression') {
          setSelectedPhotoIndex(4); // Celestial variation
          setActiveMediaView('photo');
        }
      } else if (archetype.id === 'jellyfish') {
        if (configTier === 'base_only' || configTier === 'base_expression' || configTier === 'base_statement') {
          setSelectedPhotoIndex(0); // Statement Trousers + Bolero + Water-Trail Belt
          setActiveMediaView('photo');
        } else if (configTier === 'full_couture' || configTier === 'kit_only') {
          setSelectedPhotoIndex(1); // Full Couture Bioluminescent Gown
          setActiveMediaView('photo');
        }
      } else if (archetype.id === 'leopard') {
        if (configTier === 'base_only') {
          setSelectedPhotoIndex(2); // Composition matrix: The Column & Swatches
          setActiveMediaView('photo');
        } else if (configTier === 'base_expression') {
          setSelectedPhotoIndex(1); // Blueprint & Attachment Hubs
          setActiveMediaView('photo');
        } else if (configTier === 'base_statement') {
          setSelectedPhotoIndex(3); // Runway Cascade Ballgown
          setActiveMediaView('photo');
        } else if (configTier === 'full_couture' || configTier === 'kit_only') {
          setSelectedPhotoIndex(0); // Haute Gown vs Column Cape
          setActiveMediaView('photo');
        }
      } else if (archetype.id === 'tiger') {
        if (configTier === 'base_only' || configTier === 'base_expression' || configTier === 'base_statement') {
          setSelectedPhotoIndex(0); // Statement Blazer with Metallic Shoulder Plate & Peplum
          setActiveMediaView('photo');
        } else if (configTier === 'full_couture' || configTier === 'kit_only') {
          setSelectedPhotoIndex(1); // Full Couture Mermaid Gown & Elongated Tiger Sleeves
          setActiveMediaView('photo');
        }
      } else if (archetype.id === 'peacock') {
        if (configTier === 'base_only' || configTier === 'base_expression' || configTier === 'base_statement') {
          setSelectedPhotoIndex(0); // Base Corset & Tailored Violet Trousers with Feather Cuffs
          setActiveMediaView('photo');
        } else if (configTier === 'full_couture' || configTier === 'kit_only') {
          setSelectedPhotoIndex(1); // Imperial Pavo Haute Couture Ballgown
          setActiveMediaView('photo');
        }
      } else if (archetype.id === 'swan') {
        if (configTier === 'base_only') {
          setSelectedPhotoIndex(0); // The Base: Modern Muse (Denim & Halter)
          setActiveMediaView('photo');
        } else if (configTier === 'base_expression') {
          setSelectedPhotoIndex(4); // Liquid Swan Gown
          setActiveMediaView('photo');
        } else if (configTier === 'base_statement') {
          setSelectedPhotoIndex(1); // The Feathery Ascent (Swan Peplum & Plume Cuffs)
          setActiveMediaView('photo');
        } else if (configTier === 'full_couture' || configTier === 'kit_only') {
          setSelectedPhotoIndex(3); // Conceptual Swan Ballgown
          setActiveMediaView('photo');
        }
      } else {
        setSelectedPhotoIndex(0);
        setActiveMediaView('photo');
      }
    }
  }, [configTier, hasPhotos, archetype.id]);

  // Reset photo index when archetype changes
  useEffect(() => {
    if (hasPhotos) {
      setSelectedPhotoIndex(archetype.gallery.length > 1 ? 1 : 0);
      setActiveMediaView('photo');
    } else {
      setActiveMediaView('silhouette');
    }
  }, [archetypeId, hasPhotos, archetype.gallery]);

  // Calculate pricing based on tier
  const basePrice = selectedBase.price;
  const expressionPrice = parseInt(archetype.kits[0].price.replace(/[^0-9]/g, ''), 10);
  const statementPrice = parseInt(archetype.kits[1].price.replace(/[^0-9]/g, ''), 10);
  const couturePrice = parseInt(archetype.kits[2].price.replace(/[^0-9]/g, ''), 10);

  let finalPrice = basePrice;
  let tierLabel = "Core Base Only";
  let includedKitsList = [];

  if (configTier === 'base_only') {
    finalPrice = basePrice;
    tierLabel = "The Base Garment (Core Daytime RTW)";
    includedKitsList = [];
  } else if (configTier === 'base_expression') {
    finalPrice = basePrice + expressionPrice;
    tierLabel = "Base + Expression Kit (Day-to-Dinner)";
    includedKitsList = [archetype.kits[0]];
  } else if (configTier === 'base_statement') {
    finalPrice = basePrice + expressionPrice + statementPrice;
    tierLabel = "Base + Statement Kit (Cocktail Transformation)";
    includedKitsList = [archetype.kits[0], archetype.kits[1]];
  } else if (configTier === 'full_couture') {
    finalPrice = basePrice + expressionPrice + statementPrice + couturePrice;
    tierLabel = "The Full Haute Couture Suite (Complete Metamorphosis)";
    includedKitsList = archetype.kits;
  } else if (configTier === 'kit_only') {
    finalPrice = expressionPrice + statementPrice + couturePrice;
    tierLabel = "FAUNA Modular Kits Only (For Existing Base Owners)";
    includedKitsList = archetype.kits;
  }

  const handleAdd = () => {
    const item = {
      id: `${archetype.id}-${configTier}-${selectedSize}-${Date.now()}`,
      baseName: configTier === 'kit_only' ? 'Modular Kit Capsule' : selectedBase.name,
      baseFabric: selectedBase.fabric,
      archetypeName: archetype.name,
      stage: configTier === 'base_only' ? 1 : configTier === 'base_expression' ? 2 : configTier === 'base_statement' ? 3 : 4,
      stageName: tierLabel,
      occasion: configTier === 'base_only' ? 'Conference / Daytime' : configTier === 'base_expression' ? 'Evening Dinner' : configTier === 'base_statement' ? 'Cocktail / Vernissage' : 'Grand Gala / Red Carpet',
      price: finalPrice,
      size: selectedSize,
      color: selectedColor.name,
      includedKits: includedKitsList
    };
    onAddToCart(item);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2200);
  };

  const sizes = ['US 0', 'US 2', 'US 4', 'US 6', 'US 8', 'US 10', 'US 12', 'Bespoke Fit'];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1815] pt-24 pb-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Breadcrumb & Animal Switcher Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D8] mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#666057]">
            <button 
              onClick={onBack}
              className="flex items-center gap-1.5 text-[#B89047] hover:underline uppercase tracking-wider font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Runway Overview</span>
            </button>
            <span>/</span>
            <span>FAUNA Designs</span>
            <span>/</span>
            <span className="text-[#1A1815] font-serif font-bold">{archetype.name}</span>
          </div>

          {/* 6 Animal Quick Switcher Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {faunaArchetypes.map((a) => {
              const isCurrent = a.id === archetype.id;
              return (
                <button
                  key={a.id}
                  onClick={() => onSelectArchetype(a.id)}
                  className={`px-3 py-1 rounded-full text-[10px] font-cinzel tracking-wider uppercase transition-all whitespace-nowrap border ${
                    isCurrent
                      ? 'bg-[#1A1815] text-white border-[#1A1815] font-bold shadow-sm'
                      : 'bg-white text-[#4A453F] border-[#DDD6CA] hover:border-[#B89047]'
                  }`}
                >
                  {a.name.replace('The ', '')}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Product Layout (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Visual Presentation Stage (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* View Tabs */}
            <div className="flex items-center justify-between pb-2 border-b border-[#E8E2D8]">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {hasPhotos && (
                  <button
                    onClick={() => setActiveMediaView('photo')}
                    className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeMediaView === 'photo'
                        ? 'bg-[#1A1815] text-white font-bold'
                        : 'text-[#666057] hover:text-[#1A1815]'
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Real Garment Look</span>
                  </button>
                )}
                {hasPhotos && archetype.gallery.length > 2 && (
                  <button
                    onClick={() => {
                      setActiveMediaView('photo');
                      setSelectedPhotoIndex(archetype.id === 'leopard' ? 1 : archetype.id === 'swan' ? 2 : 2);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest font-mono transition-all whitespace-nowrap ${
                      activeMediaView === 'photo' && selectedPhotoIndex === (archetype.id === 'leopard' ? 1 : archetype.id === 'swan' ? 2 : 2)
                        ? 'bg-[#B89047] text-white font-bold'
                        : 'text-[#666057] hover:text-[#1A1815]'
                    }`}
                  >
                    {archetype.id === 'leopard' ? 'Modular Blueprint' : archetype.id === 'swan' ? 'Collective Duo' : 'Base vs Couture Mirror'}
                  </button>
                )}
                <button
                  onClick={() => setActiveMediaView('silhouette')}
                  className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest font-mono transition-all whitespace-nowrap ${
                    activeMediaView === 'silhouette'
                      ? 'bg-[#1A1815] text-white font-bold'
                      : 'text-[#666057] hover:text-[#1A1815]'
                  }`}
                >
                  Silhouette Preview
                </button>
                <button
                  onClick={() => setActiveMediaView('sketch')}
                  className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest font-mono transition-all whitespace-nowrap ${
                    activeMediaView === 'sketch'
                      ? 'bg-[#1A1815] text-white font-bold'
                      : 'text-[#666057] hover:text-[#1A1815]'
                  }`}
                >
                  Atelier Sketch
                </button>
              </div>

              <div className="text-[11px] font-mono text-[#B89047] font-semibold hidden sm:flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Numbered Edition 01/100</span>
              </div>
            </div>

            {/* Media Canvas Box */}
            <div className="w-full aspect-[4/5] rounded-3xl bg-white border border-[#E8E2D8] p-4 sm:p-6 flex flex-col justify-between relative shadow-luxury overflow-hidden">
              
              {/* VIEW 1: REAL GARMENT PHOTOGRAPHY (BASE TO COUTURE SHOWCASE) */}
              {activeMediaView === 'photo' && hasPhotos && (
                <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden">
                  <img
                    src={archetype.gallery[selectedPhotoIndex].src}
                    alt={archetype.gallery[selectedPhotoIndex].title}
                    className="w-full h-full object-contain max-h-[460px] rounded-2xl transition-all duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 p-3 rounded-xl bg-black/75 backdrop-blur-md text-white text-xs border border-white/20 flex items-center justify-between">
                    <div>
                      <strong className="block text-xs font-serif font-bold text-white">
                        {archetype.gallery[selectedPhotoIndex].title}
                      </strong>
                      <span className="text-[11px] text-convertelle-shimmer font-light block">
                        {archetype.gallery[selectedPhotoIndex].caption}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] px-2 py-1 rounded bg-white/10 font-bold whitespace-nowrap ml-2">
                      {archetype.gallery[selectedPhotoIndex].subtitle}
                    </span>
                  </div>
                </div>
              )}

              {/* VIEW 2: INTERACTIVE SILHOUETTE WITH ACTIVE LAYERS */}
              {activeMediaView === 'silhouette' && (
                <div className="relative flex-1 flex items-center justify-center">
                  <svg viewBox="0 0 320 440" className="w-full h-full max-h-[400px]">
                    <defs>
                      <linearGradient id="prodWingGradL" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={selectedColor.hex} stopOpacity="0.85" />
                        <stop offset="60%" stopColor="#B89047" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#1A1815" stopOpacity="0.3" />
                      </linearGradient>
                      <linearGradient id="prodTrainGradL" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={selectedColor.hex} stopOpacity="0.8" />
                        <stop offset="60%" stopColor="#B89047" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0.9" />
                      </linearGradient>
                    </defs>

                    {/* Stage 4: Couture Wings / Train */}
                    <g 
                      opacity={configTier === 'full_couture' || configTier === 'kit_only' ? 1 : 0.08}
                      className="transition-all duration-500"
                    >
                      <path 
                        d="M160,160 C70,70 15,120 25,230 C35,280 110,260 145,235 Z" 
                        fill="url(#prodWingGradL)" 
                        stroke="#B89047"
                        strokeWidth="1.2"
                      />
                      <path 
                        d="M160,160 C250,70 305,120 295,230 C285,280 210,260 175,235 Z" 
                        fill="url(#prodWingGradL)" 
                        stroke="#B89047"
                        strokeWidth="1.2"
                      />
                      <path 
                        d="M115,330 C65,395 35,420 5,428 C75,428 130,410 160,410 C190,410 245,428 315,428 C285,420 255,395 205,330 Z" 
                        fill="url(#prodTrainGradL)" 
                        stroke="#B89047" 
                        strokeWidth="1" 
                      />
                    </g>

                    {/* Stage 3: Statement Overskirt / Peplum */}
                    <g 
                      opacity={['base_statement', 'full_couture', 'kit_only'].includes(configTier) ? 1 : 0.12}
                      className="transition-all duration-400"
                    >
                      <path 
                        d="M120,225 C95,280 88,315 80,360 C125,368 195,368 240,360 C232,315 225,280 200,225 Z" 
                        fill="#E8E2D8" 
                        stroke="#1A1815" 
                        strokeWidth="1.8" 
                      />
                    </g>

                    {/* Stage 2: Expression Sleeves */}
                    <g 
                      opacity={['base_expression', 'base_statement', 'full_couture', 'kit_only'].includes(configTier) ? 1 : 0.15}
                      className="transition-all duration-400"
                    >
                      <path 
                        d="M110,130 C75,145 60,185 72,225 C85,225 98,185 116,160 Z" 
                        fill="#33302B" 
                        stroke="#B89047" 
                        strokeWidth="1.2" 
                      />
                      <path 
                        d="M210,130 C245,145 260,185 248,225 C235,225 222,185 204,160 Z" 
                        fill="#33302B" 
                        stroke="#B89047" 
                        strokeWidth="1.2" 
                      />
                      <circle cx="160" cy="120" r="4.5" fill="#B89047" />
                    </g>

                    {/* Stage 1: Core Base Garment */}
                    <g opacity={configTier === 'kit_only' ? 0.35 : 1}>
                      <circle cx="160" cy="65" r="16" fill="#1A1815" />
                      <rect x="156" y="80" width="8" height="15" fill="#1A1815" />
                      <path 
                        d="M148,95 L172,95 L182,125 L208,135 L200,225 L190,370 L130,370 L120,225 L112,135 L138,125 Z" 
                        fill="#1A1815" 
                      />
                      <circle cx="125" cy="140" r="3" fill="#B89047" />
                      <circle cx="195" cy="140" r="3" fill="#B89047" />
                      <circle cx="132" cy="225" r="3" fill="#B89047" />
                      <circle cx="188" cy="225" r="3" fill="#B89047" />
                    </g>
                  </svg>
                </div>
              )}

              {/* VIEW 3: ATELIER TECHNICAL SKETCH */}
              {activeMediaView === 'sketch' && (
                <div className="relative flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full border border-[#B89047] flex items-center justify-center bg-[#FAF8F5] shadow-sm">
                    <Sparkles className="w-7 h-7 text-[#B89047]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#B89047] font-semibold block">
                      Atelier Pattern Document
                    </span>
                    <h4 className="font-serif text-2xl text-[#1A1815] font-semibold mt-1">
                      {archetype.name} Haute Pattern
                    </h4>
                    <p className="text-xs text-[#4A453F] max-w-md mx-auto italic mt-2 leading-relaxed">
                      "{archetype.sketchNotes}"
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs font-mono text-[#666057] max-w-sm">
                    Docking Points: 6 Micro-Magnetic Receivers • Zero Pucker Seams
                  </div>
                </div>
              )}

              {/* Bottom Canvas Metadata Bar */}
              <div className="z-10 bg-[#FAF8F5] rounded-2xl p-3 border border-[#E8E2D8] flex items-center justify-between text-xs mt-2">
                <div>
                  <span className="text-[10px] text-[#666057] uppercase tracking-wider block font-mono">Selected Tier</span>
                  <span className="font-serif font-bold text-[#1A1815]">{tierLabel}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#B89047] font-mono font-bold block">Color Trim</span>
                  <span className="text-[#1A1815] font-medium">{selectedColor.name}</span>
                </div>
              </div>

            </div>

            {/* Thumbnail Strip for Photos (When Available) */}
            {hasPhotos && (
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#666057] block">
                  Select Visual Look ({archetype.gallery.length} Archival Views):
                </span>
                <div className={`grid gap-2.5 ${archetype.gallery.length <= 2 ? 'grid-cols-2 max-w-md' : archetype.gallery.length === 4 ? 'grid-cols-2 sm:grid-cols-4' : archetype.gallery.length === 6 ? 'grid-cols-3 sm:grid-cols-6' : 'grid-cols-5'}`}>
                  {archetype.gallery.map((photo, pIdx) => {
                    const isSelected = activeMediaView === 'photo' && selectedPhotoIndex === pIdx;
                    return (
                      <button
                        key={photo.id}
                        onClick={() => {
                          setActiveMediaView('photo');
                          setSelectedPhotoIndex(pIdx);
                        }}
                        className={`p-1.5 rounded-xl border text-left transition-all overflow-hidden ${
                          isSelected
                            ? 'border-[#B89047] bg-[#FAF8F5] shadow-sm ring-2 ring-[#B89047]/30'
                            : 'border-[#E8E2D8] bg-white hover:border-[#DDD6CA]'
                        }`}
                      >
                        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#FAF8F5]">
                          <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[10px] font-serif font-bold text-[#1A1815] truncate block mt-1">
                          {photo.title}
                        </span>
                        <span className="text-[9px] font-mono text-[#666057] truncate block">
                          {photo.subtitle}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tagline Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#E8E2D8] flex items-center justify-between text-xs shadow-sm">
              <div className="italic font-serif text-[#1A1815] text-sm">
                "{archetype.tagline}"
              </div>
              <span className="font-cinzel text-[#B89047] font-bold uppercase tracking-wider text-[11px] flex-shrink-0 ml-4">
                {archetype.identity}
              </span>
            </div>

          </div>

          {/* RIGHT: Clear Commercial Choice Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header: Title & Dynamic Price */}
            <div className="space-y-3 pb-6 border-b border-[#E8E2D8]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B89047] font-semibold">
                  HAUTE MODULAR CAPSULE
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#DDD6CA] text-[10px] font-mono text-[#1A1815] uppercase font-bold">
                  {archetype.identity}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1815] font-normal leading-tight">
                {archetype.name}
              </h1>

              <div className="flex items-baseline gap-3 pt-1">
                <span className="font-serif text-4xl font-bold text-[#1A1815]">
                  ${finalPrice.toLocaleString()}
                </span>
                <span className="text-xs text-[#666057] font-mono">
                  USD • Taxes & Insured Shipping Included
                </span>
              </div>

              <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                {archetype.symbolism}. Tailored in 100% cruelty-free Italian luxury textiles with silent magnetic docking.
              </p>
            </div>

            {/* Step 1: Base Garment Foundation */}
            {configTier !== 'kit_only' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#1A1815] font-cinzel font-semibold">
                    1. Daytime Base Garment
                  </span>
                  <span className="text-[10px] font-mono text-[#B89047] font-semibold">
                    Core Foundation
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {baseGarments.map((bg, idx) => {
                    const isSelected = selectedBaseIndex === idx;
                    return (
                      <div
                        key={bg.id}
                        onClick={() => setSelectedBaseIndex(idx)}
                        className={`p-3 rounded-xl cursor-pointer transition-all border flex items-center justify-between ${
                          isSelected 
                            ? 'border-[#B89047] bg-[#FAF8F5] shadow-sm' 
                            : 'border-[#E8E2D8] bg-white hover:border-[#DDD6CA]'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-serif font-bold text-[#1A1815]">
                            {bg.name}
                          </div>
                          <div className="text-[10px] text-[#666057]">
                            {bg.baseOccasion}
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#1A1815]">
                          ${bg.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Choose Base Kit or Couture Kit */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#1A1815] font-cinzel font-semibold">
                  2. Choose Modular Tier
                </span>
                <span className="text-[10px] font-mono text-[#666057]">
                  Base vs Couture
                </span>
              </div>

              <div className="space-y-2">
                
                {/* 1. Base Garment Only */}
                <div
                  onClick={() => setConfigTier('base_only')}
                  className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                    configTier === 'base_only'
                      ? 'border-[#1A1815] bg-[#FAF8F5] shadow-sm'
                      : 'border-[#E8E2D8] bg-white hover:border-[#DDD6CA]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        configTier === 'base_only' ? 'border-[#1A1815] bg-[#1A1815]' : 'border-[#DDD6CA]'
                      }`}>
                        {configTier === 'base_only' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                      <strong className="text-xs font-serif text-[#1A1815] font-bold">The Base Garment Only</strong>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#1A1815]">${basePrice}</span>
                  </div>
                  <p className="text-[11px] text-[#666057] pl-6 mt-1">
                    Daytime formalwear foundation. Equipped with concealed magnetic receivers.
                  </p>
                </div>

                {/* 2. Base + Expression Kit */}
                <div
                  onClick={() => setConfigTier('base_expression')}
                  className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                    configTier === 'base_expression'
                      ? 'border-[#1A1815] bg-[#FAF8F5] shadow-sm'
                      : 'border-[#E8E2D8] bg-white hover:border-[#DDD6CA]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        configTier === 'base_expression' ? 'border-[#1A1815] bg-[#1A1815]' : 'border-[#DDD6CA]'
                      }`}>
                        {configTier === 'base_expression' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                      <strong className="text-xs font-serif text-[#1A1815] font-bold">Base + Expression Kit</strong>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#1A1815]">${basePrice + expressionPrice}</span>
                  </div>
                  <p className="text-[11px] text-[#666057] pl-6 mt-1">
                    Includes Base + {archetype.kits[0].name} (Day-to-Dinner transformation).
                  </p>
                </div>

                {/* 3. Base + Statement Kit */}
                <div
                  onClick={() => setConfigTier('base_statement')}
                  className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                    configTier === 'base_statement'
                      ? 'border-[#1A1815] bg-[#FAF8F5] shadow-sm'
                      : 'border-[#E8E2D8] bg-white hover:border-[#DDD6CA]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        configTier === 'base_statement' ? 'border-[#1A1815] bg-[#1A1815]' : 'border-[#DDD6CA]'
                      }`}>
                        {configTier === 'base_statement' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                      <strong className="text-xs font-serif text-[#1A1815] font-bold">Base + Statement Kit</strong>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#1A1815]">${basePrice + expressionPrice + statementPrice}</span>
                  </div>
                  <p className="text-[11px] text-[#666057] pl-6 mt-1">
                    Includes Base + Expression + {archetype.kits[1].name} (Cocktail & Vernissage).
                  </p>
                </div>

                {/* 4. The Full Haute Couture Suite (Signature) */}
                <div
                  onClick={() => setConfigTier('full_couture')}
                  className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                    configTier === 'full_couture'
                      ? 'border-[#B89047] bg-[#FAF8F5] shadow-luxury'
                      : 'border-[#E8E2D8] bg-white hover:border-[#DDD6CA]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        configTier === 'full_couture' ? 'border-[#B89047] bg-[#B89047]' : 'border-[#DDD6CA]'
                      }`}>
                        {configTier === 'full_couture' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                      <div className="flex items-center gap-2">
                        <strong className="text-xs font-serif text-[#1A1815] font-bold">The Full Haute Couture Suite</strong>
                        <span className="px-2 py-0.5 rounded-full bg-[#B89047] text-white text-[9px] font-bold uppercase tracking-wider">
                          Signature
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#B89047]">
                      ${basePrice + expressionPrice + statementPrice + couturePrice}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#4A453F] pl-6 mt-1">
                    Complete 4-stage wardrobe: Base + Expression + Statement + Sovereign {archetype.kits[2].name} + Signature Velvet Magnetic Travel Vault.
                  </p>
                </div>

                {/* 5. Modular Add-on Kits Only */}
                <div
                  onClick={() => setConfigTier('kit_only')}
                  className={`p-3 rounded-2xl cursor-pointer transition-all border ${
                    configTier === 'kit_only'
                      ? 'border-[#1A1815] bg-[#FAF8F5]'
                      : 'border-[#E8E2D8] bg-white hover:border-[#DDD6CA]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        configTier === 'kit_only' ? 'border-[#1A1815] bg-[#1A1815]' : 'border-[#DDD6CA]'
                      }`}>
                        {configTier === 'kit_only' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                      <strong className="text-xs font-mono text-[#666057]">Modular Kits Only (No Base)</strong>
                    </div>
                    <span className="text-xs font-mono text-[#1A1815] font-bold">
                      ${expressionPrice + statementPrice + couturePrice}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#666057] pl-6 mt-0.5">
                    For clients who already possess a ConvertElle core foundation garment.
                  </p>
                </div>

              </div>
            </div>

            {/* Step 3: Colorway / Trim Selection */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#1A1815] font-cinzel font-semibold block">
                3. Colorway & Trim
              </span>
              <div className="flex items-center gap-2">
                {archetype.palette.map((color, idx) => {
                  const isSelected = selectedColor.name === color.name;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      className={`group relative p-1 rounded-full border transition-all ${
                        isSelected ? 'border-[#1A1815] scale-110 shadow-sm' : 'border-transparent hover:border-[#DDD6CA]'
                      }`}
                      title={color.name}
                    >
                      <span 
                        className="w-6 h-6 rounded-full block border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  );
                })}
                <span className="text-xs font-mono text-[#1A1815] ml-2 font-medium">
                  {selectedColor.name}
                </span>
              </div>
            </div>

            {/* Step 4: Sizing & Measurement */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#1A1815] font-cinzel font-semibold">
                  4. Tailoring & Sizing
                </span>
                <button
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-[11px] text-[#B89047] hover:underline flex items-center gap-1 font-mono font-medium"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size Measurement Guide</span>
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {sizes.map((sz) => {
                  const isSelected = selectedSize === sz;
                  const isBespoke = sz === 'Bespoke Fit';
                  return (
                    <button
                      key={sz}
                      onClick={() => {
                        setSelectedSize(sz);
                        if (isBespoke) onOpenCustomFit();
                      }}
                      className={`py-2 px-1 rounded-xl text-xs font-mono text-center transition-all border ${
                        isSelected
                          ? 'border-[#1A1815] bg-[#1A1815] text-white font-bold shadow-sm'
                          : 'border-[#DDD6CA] bg-white text-[#4A453F] hover:border-[#1A1815]'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>

              {showSizeGuide && (
                <div className="p-4 rounded-2xl bg-white border border-[#DDD6CA] text-xs space-y-2 mt-2 shadow-sm">
                  <div className="font-mono text-[#B89047] uppercase text-[10px] tracking-wider font-bold">
                    Atelier Measurement Matrix (Inches)
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono pt-1 text-[#4A453F]">
                    <div>US 2: B32 / W25 / H35</div>
                    <div>US 4: B34 / W27 / H37</div>
                    <div>US 6: B36 / W29 / H39</div>
                    <div>US 8: B38 / W31 / H41</div>
                  </div>
                </div>
              )}
            </div>

            {/* Action CTAs */}
            <div className="pt-4 space-y-3">
              <button
                onClick={handleAdd}
                className={`w-full py-4 rounded-full font-semibold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-md ${
                  addedAnimation
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#1A1815] hover:bg-[#33302B] text-white hover:scale-[1.01]'
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-[#B89047]" />
                <span>{addedAnimation ? 'Capsule Added to Bag!' : `Add to Bag • $${finalPrice.toLocaleString()}`}</span>
              </button>

              <button
                onClick={onOpenCustomFit}
                className="w-full py-3 rounded-full border border-[#DDD6CA] bg-white hover:border-[#B89047] text-xs uppercase tracking-widest text-[#1A1815] flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>Request Private Salon Fitting</span>
                <ChevronRight className="w-4 h-4 text-[#B89047]" />
              </button>
            </div>

            {/* Commercial Trust Badges */}
            <div className="pt-4 border-t border-[#E8E2D8] grid grid-cols-3 gap-2 text-center text-[10px] text-[#666057] font-mono">
              <div className="space-y-1">
                <Truck className="w-4 h-4 mx-auto text-[#B89047]" />
                <div>White Glove Insured</div>
              </div>
              <div className="space-y-1">
                <Award className="w-4 h-4 mx-auto text-[#B89047]" />
                <div>Numbered Edition 01/100</div>
              </div>
              <div className="space-y-1">
                <Lock className="w-4 h-4 mx-auto text-[#B89047]" />
                <div>Lifetime Alterations</div>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* EXCLUSIVE BASE TO COUTURE TRANSFORMATION GALLERY FOR BUTTERFLY DESIGN      */}
        {/* ========================================================================= */}
        {archetype.id === 'butterfly' && (
          <div className="mt-20 pt-16 border-t border-[#E8E2D8] space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B89047] font-bold">
                Metamorphosis In Real Life
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1815] font-normal">
                {archetype.name}: <span className="italic text-[#B89047]">Base to Haute Couture</span>
              </h2>
              <p className="text-[#666057] text-xs sm:text-sm font-light leading-relaxed">
                See how a minimalist, crease-resistant column foundation converts directly into a museum-grade red-carpet gown through detachable millinery wire wings and mermaid layers.
              </p>
            </div>

            {/* Side-by-Side Before & After Transformation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Card 1: The Base Look */}
              <div className="rounded-3xl bg-white border border-[#E8E2D8] shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F2EDE4]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#B89047] font-bold">
                      STAGE 01 • THE FOUNDATION
                    </span>
                    <span className="text-[10px] font-mono text-[#666057] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#DDD6CA]">
                      Daytime RTW
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1815]">
                    The Minimalist Shimmering Column Base
                  </h3>

                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    A floor-skimming V-neck microsequin column dress lined in smooth cruelty-free silk satin. Features 6 concealed magnetic docking points flush with the seams.
                  </p>
                </div>

                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/butterfly/butterfly-base-gold.png"
                    alt="The Base Garment - Shimmering Microsequin Column Dress"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs font-mono text-[#666057] flex items-center justify-between">
                  <span>Price: $680</span>
                  <span className="text-[#1A1815] font-bold">Concealed Magnets Ready</span>
                </div>
              </div>

              {/* Card 2: The Full Couture Look */}
              <div className="rounded-3xl bg-white border border-[#B89047] shadow-luxury p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#B89047] font-bold">
                      STAGE 04 • HAUTE COUTURE
                    </span>
                    <span className="text-[10px] font-mono text-white bg-[#B89047] px-2.5 py-1 rounded-full font-bold">
                      Grand Gala & Opera
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1815]">
                    The Sovereign Butterfly Metamorphosis
                  </h3>

                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    The identical column base dress elevated in 30 seconds with detachable sculpted golden wire butterfly wings across the waist and dramatic halo ornament.
                  </p>
                </div>

                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/butterfly/butterfly-couture-gold.png"
                    alt="The Full Couture Look - Attached Sculpted Wire Butterfly Wings"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#B89047]/40 text-xs font-mono text-[#1A1815] flex items-center justify-between">
                  <span>Full Suite: $3,800</span>
                  <span className="text-[#B89047] font-bold">Snaps on in 30 Seconds</span>
                </div>
              </div>

            </div>

            {/* Studio Technical Mirror Breakdown & Fabric Callout Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E2D8] shadow-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B89047] font-bold block">
                    Page 11 Pitch Deck Technical Mirror
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1815]">
                    Studio Fabrication Breakdown
                  </h3>
                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    In our atelier mirror comparison, see how the pure microsequin base (right) and the oversized millinery wire glitter silk organza wing bow (left) interface through calibrated magnetic force.
                  </p>

                  <div className="space-y-2 pt-2 text-xs font-mono text-[#1A1815]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B89047]" />
                      <span><strong>Millinery Wire:</strong> Holds sculptural wing contour permanently.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B89047]" />
                      <span><strong>Glitter Silk Organza:</strong> Translucent, weightless luminescence.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B89047]" />
                      <span><strong>Microsequin Stretch Mesh:</strong> Ergonomic body contouring.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#FAF8F5]">
                  <img
                    src="/images/butterfly/butterfly-transformation-breakdown.jpg"
                    alt="Atelier Mirror Breakdown - Millinery Wire and Glitter Silk Organza"
                    className="w-full h-auto object-cover"
                  />
                </div>

              </div>
            </div>

            {/* Runway Variations: Mermaid Wing Train & Celestial Peplum */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] space-y-4 shadow-sm">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/butterfly/butterfly-couture-runway-duo.jpg"
                    alt="Runway Variations - Magenta Mermaid Train & Teal Peplum Overcoat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#B89047] uppercase font-bold">
                    Runway Modular Variations
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#1A1815]">
                    Detachable Mermaid Wing Train & Peplum Overcoat
                  </h4>
                  <p className="text-xs text-[#666057] mt-1 font-light">
                    As documented in Page 12 of the ConvertElle deck: layered wing veins sculpted in contrast piping with graduated organza ruffles.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] space-y-4 shadow-sm">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/butterfly/butterfly-celestial-peplum.png"
                    alt="Celestial Starry Variation - Sculpted Mauve Butterfly Wings at Waist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#B89047] uppercase font-bold">
                    Evening Expression
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#1A1815]">
                    Sculpted Mauve Butterfly Wing Waist Attachment
                  </h4>
                  <p className="text-xs text-[#666057] mt-1 font-light">
                    The butterfly wings contoured around the hip and waistline to function as an architectural cincher and sheer flowing train.
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* EXCLUSIVE BASE TO COUTURE TRANSFORMATION GALLERY FOR JELLYFISH DESIGN      */}
        {/* ========================================================================= */}
        {archetype.id === 'jellyfish' && (
          <div className="mt-20 pt-16 border-t border-[#E8E2D8] space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8A699C] font-bold">
                Fluid Metamorphosis In Real Life
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1815] font-normal">
                {archetype.name}: <span className="italic text-[#8A699C]">Base to Haute Couture</span>
              </h2>
              <p className="text-[#666057] text-xs sm:text-sm font-light leading-relaxed">
                See how precision-cut tailored trousers transform seamlessly into an ethereal evening statement with cascading water-trail ruffles, culminating in the sovereign bioluminescent jellyfish dome gown.
              </p>
            </div>

            {/* Side-by-Side Before & After Transformation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Card 1: The Base + Statement Trousers Look */}
              <div className="rounded-3xl bg-white border border-[#E8E2D8] shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F2EDE4]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#8A699C] font-bold">
                      STAGE 02 & 03 • STATEMENT RTW
                    </span>
                    <span className="text-[10px] font-mono text-[#666057] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#DDD6CA]">
                      Cocktails & Gallery Evenings
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1815]">
                    The Tailored Trouser & Water-Trail Ruffle Belt
                  </h3>

                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    High-waist tailored slate grey trousers and sculpted pink satin bustier, elevated with a detachable sheer sparkle bolero shrug and cascading ruffled organza water-trail belt accented with floating pearl chains.
                  </p>
                </div>

                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/jellyfish/jellyfish-statement-trousers.jpg"
                    alt="The Jellyfish Base to Statement Look - Tailored Trousers with Water-Trail Ruffle Belt and Bolero"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs font-mono text-[#666057] flex items-center justify-between">
                  <span>Configuration: Base + Statement ($1,950)</span>
                  <span className="text-[#1A1815] font-bold">Detachable Water-Trail Belt</span>
                </div>
              </div>

              {/* Card 2: The Full Couture Bioluminescent Gown */}
              <div className="rounded-3xl bg-white border border-[#8A699C] shadow-luxury p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#8A699C] font-bold">
                      STAGE 04 • HAUTE COUTURE SUITE
                    </span>
                    <span className="text-[10px] font-mono text-white bg-[#8A699C] px-2.5 py-1 rounded-full font-bold">
                      Grand Galas & Red Carpets
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1815]">
                    The Sovereign Bioluminescent Gown
                  </h3>

                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    The breathtaking red-carpet metamorphosis: an ethereal pleated sky-blue sweetheart gown crowned with the bioluminescent organza jellyfish umbrella bell dome, off-shoulder sheer sleeves, and kinetic crystal tendrils.
                  </p>
                </div>

                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/jellyfish/jellyfish-couture-gown.jpg"
                    alt="The Jellyfish Haute Couture Suite - Pleated Sky-Blue Gown with Bioluminescent Umbrella Dome"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#8A699C]/40 text-xs font-mono text-[#1A1815] flex items-center justify-between">
                  <span>Full Suite: $3,800</span>
                  <span className="text-[#8A699C] font-bold">Bioluminescent Dome & Tendrils</span>
                </div>
              </div>

            </div>

            {/* Atelier Marine Fluidity & Bioluminescence Technical Feature */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E2D8] shadow-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8A699C] font-bold block">
                    ConvertElle Pitch Deck • Page 13 Marine Engineering
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1815]">
                    Aurelia Etherea: Fluid Movement & Light
                  </h3>
                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    Inspired by bioluminescent pelagic medusozoans, this capsule translates oceanic fluidity into wearable architectural couture. Each detachable component is weighted for kinetic grace, rippling subtly with the wearer's every step.
                  </p>

                  <div className="space-y-2.5 pt-2 text-xs font-mono text-[#1A1815]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8A699C] flex-shrink-0 mt-0.5" />
                      <span><strong>Bioluminescent-Finish Organza:</strong> Micro-coated translucent silk that captures and refracts evening spotlighting in cyan and lilac hues.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8A699C] flex-shrink-0 mt-0.5" />
                      <span><strong>Suspended Crystal Tendrils:</strong> Hand-strung silver bugle beads and crystal droplets creating kinetic sway and delicate aquatic shimmer.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8A699C] flex-shrink-0 mt-0.5" />
                      <span><strong>Sculpted Umbrella Bell Dome:</strong> Lightweight millinery wire framework holding the iconic parabolic jellyfish hood without head pressure.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8A699C] flex-shrink-0 mt-0.5" />
                      <span><strong>Magnetic Docking:</strong> Transform from high-power tailored trousers to a museum-worthy gala ballgown in under 30 seconds.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#FAF8F5]">
                    <img
                      src="/images/jellyfish/jellyfish-statement-trousers.jpg"
                      alt="Trouser and Bolero Detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#FAF8F5]">
                    <img
                      src="/images/jellyfish/jellyfish-couture-gown.jpg"
                      alt="Couture Bioluminescent Dome Detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* EXCLUSIVE BASE TO COUTURE TRANSFORMATION GALLERY FOR LEOPARD DESIGN        */}
        {/* ========================================================================= */}
        {archetype.id === 'leopard' && (
          <div className="mt-20 pt-16 border-t border-[#E8E2D8] space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#997819] font-bold">
                Leopard & Light • Modular Collection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1815] font-normal">
                {archetype.name}: <span className="italic text-[#997819]">Base to Haute Couture</span>
              </h2>
              <p className="text-[#666057] text-xs sm:text-sm font-light leading-relaxed">
                Witness the architectural evolution of "The Column" base into Configuration A (Full Petal Ballgown) and Configuration B (Architectural Cape) via concealed modular docking hubs.
              </p>
            </div>

            {/* Side-by-Side Before & After Transformation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Card 1: Configuration B - The Column with Side-Cape */}
              <div className="rounded-3xl bg-white border border-[#E8E2D8] shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F2EDE4]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#997819] font-bold">
                      CONFIGURATION B • ARCHITECTURAL CAPE
                    </span>
                    <span className="text-[10px] font-mono text-[#666057] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#DDD6CA]">
                      VIP Summits & Biennales
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1815]">
                    The Column with Sweeping Sheer Side-Cape
                  </h3>

                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    High-neck iridescent sheer knit bodice with sleek tailored leopard jacquard pencil skirt, elevated by an architectural slate high-collar capelet and floor-length sheer organza side-train.
                  </p>
                </div>

                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/leopard/leopard-couture-vs-column-cape.jpg"
                    alt="Configuration B - The Column and Architectural Cape"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs font-mono text-[#666057] flex items-center justify-between">
                  <span>Configuration: Base + Statement ($2,030)</span>
                  <span className="text-[#1A1815] font-bold">High-Collar Magnetic Docking</span>
                </div>
              </div>

              {/* Card 2: Configuration A - Full Petal Ballgown */}
              <div className="rounded-3xl bg-white border border-[#997819] shadow-luxury p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#997819] font-bold">
                      CONFIGURATION A • HAUTE COUTURE GOWN
                    </span>
                    <span className="text-[10px] font-mono text-white bg-[#997819] px-2.5 py-1 rounded-full font-bold">
                      Grand Galas & Red Carpets
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1815]">
                    Voluminous Tiered Petal Ballgown Overskirt
                  </h3>

                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    The identical Column top converted in under 30 seconds into a grand couture ballgown through the detachable tiered leopard jacquard petal overskirt, enveloped in translucent smoke organza ruffles.
                  </p>
                </div>

                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/leopard/leopard-runway-cascade-ballgown.jpg"
                    alt="Configuration A - Voluminous Tiered Petal Ballgown"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#997819]/40 text-xs font-mono text-[#1A1815] flex items-center justify-between">
                  <span>Full Suite: $3,880</span>
                  <span className="text-[#997819] font-bold">Tiered Petals & Cascades</span>
                </div>
              </div>

            </div>

            {/* Atelier Technical Blueprint: Modular Attachment Hubs */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E2D8] shadow-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#997819] font-bold block">
                    Atelier Technical Board • Foundation & Attachment Hubs
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1815]">
                    Modular Engineering & Ergonomic Fit
                  </h3>
                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    As specified in the ConvertElle modular blueprint, the Column foundation features engineered attachment hubs concealed flush at key anatomical stress points, ensuring rapid metamorphosis without compromising seam integrity.
                  </p>

                  <div className="space-y-2.5 pt-2 text-xs font-mono text-[#1A1815]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#997819] flex-shrink-0 mt-0.5" />
                      <span><strong>Shoulder Attachment Hubs:</strong> Dual magnetic anchors support the structured capelet without gravitational pulling on the delicate sheer knit.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#997819] flex-shrink-0 mt-0.5" />
                      <span><strong>Architectural Cut-Out Back:</strong> Keyhole geometry framed with loop-button closures for tailored spine contouring.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#997819] flex-shrink-0 mt-0.5" />
                      <span><strong>Sculpted Gold Leopard Clasp:</strong> Artisanal 24K gold-finish leopard head buckle securing the waist and anchoring modular overskirts.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#997819] flex-shrink-0 mt-0.5" />
                      <span><strong>Minaudière Box Clutch:</strong> Matching leopard jacquard evening clutch with 3D cast feline finial and chain strap.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#FAF8F5]">
                  <img
                    src="/images/leopard/leopard-modular-collection-breakdown.jpg"
                    alt="Leopard & Light Modular Collection Blueprint"
                    className="w-full h-auto object-cover"
                  />
                </div>

              </div>
            </div>

            {/* Atelier Matrix & Configuration Variations */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E2D8] shadow-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-6 order-2 lg:order-1 rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#FAF8F5]">
                  <img
                    src="/images/leopard/leopard-modular-composition-matrix.jpg"
                    alt="Modular Composition Matrix and Accessory Details"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#997819] font-bold block">
                    Modular Composition Matrix
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1815]">
                    From Daytime Column to Red-Carpet Sculpture
                  </h3>
                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    Explore the full stylistic matrix: The clean minimalist Column for corporate boardrooms, The Side-Cape for art vernissages, and Key Look 3 for black-tie galas, complemented by architectural flared footwear and luxury silk devoré velvet.
                  </p>

                  <div className="space-y-2 pt-2 text-xs font-mono text-[#1A1815]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#997819]" />
                      <span><strong>Leopard Jacquard Silk:</strong> High-density textured jacquard with organic rosettes.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#997819]" />
                      <span><strong>Iridescent Sheer Knit:</strong> Breathable, second-skin ergonomic top foundation.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#997819]" />
                      <span><strong>Tulle Organza Drape:</strong> Multi-tiered smoky grey volume with fluid kinetic flutter.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#997819]" />
                      <span><strong>Silk Devoré Velvet:</strong> Rich tactile evening trim variant.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* EXCLUSIVE BASE TO COUTURE TRANSFORMATION GALLERY FOR TIGER DESIGN          */}
        {/* ========================================================================= */}
        {archetype.id === 'tiger' && (
          <div className="mt-20 pt-16 border-t border-[#E8E2D8] space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B45A1D] font-bold">
                Panthera Tigris • Architectural Metamorphosis
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1815] font-normal">
                {archetype.name}: <span className="italic text-[#B45A1D]">Base to Haute Couture</span>
              </h2>
              <p className="text-[#666057] text-xs sm:text-sm font-light leading-relaxed">
                Experience the commanding transition from precision-cut boardroom tailoring with cast metallic lion/tiger armor into an architectural red-carpet mermaid gown with flared peplum and elongated bell sleeves.
              </p>
            </div>

            {/* Side-by-Side Before & After Transformation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Card 1: Stage 01-03: The Tailored Sheath & Metallic Shoulder Armor */}
              <div className="rounded-3xl bg-white border border-[#E8E2D8] shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F2EDE4]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#B45A1D] font-bold">
                      STAGE 02 & 03 • EXECUTIVE STATEMENT
                    </span>
                    <span className="text-[10px] font-mono text-[#666057] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#DDD6CA]">
                      Power Summits & Keynotes
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1815]">
                    The Precision Blazer with Cast Brass Shoulder Armor
                  </h3>

                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    Sculpted Italian wool crepe black sheath dress paired with a slate-blue precision tuxedo blazer, anchored by an artisanal cast brass tiger head shoulder plate and detachable flared amber tiger-striped peplum wings.
                  </p>
                </div>

                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/tiger/tiger-statement-blazer.jpg"
                    alt="The Tiger Executive Statement Look - Precision Tuxedo Blazer with Cast Brass Shoulder Armor and Peplum"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs font-mono text-[#666057] flex items-center justify-between">
                  <span>Configuration: Base + Statement ($1,900)</span>
                  <span className="text-[#1A1815] font-bold">Cast Brass Epaulet Mount</span>
                </div>
              </div>

              {/* Card 2: Stage 04: The Sovereign Tiger Couture Suite */}
              <div className="rounded-3xl bg-white border border-[#B45A1D] shadow-luxury p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#B45A1D] font-bold">
                      STAGE 04 • HAUTE COUTURE SUITE
                    </span>
                    <span className="text-[10px] font-mono text-white bg-[#B45A1D] px-2.5 py-1 rounded-full font-bold">
                      Met-Style Galas & Red Carpets
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1815]">
                    The Sovereign Mermaid Gown & Elongated Bell Sleeves
                  </h3>

                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    Commanding red-carpet metamorphosis: deep plunge tuxedo mermaid gown crowned with double-tiered flared tiger-striped peplum wings and dramatic elongated segmented bell sleeves banded in plush maroon velvet.
                  </p>
                </div>

                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/tiger/tiger-couture-gown.jpg"
                    alt="The Tiger Haute Couture Suite - Mermaid Gown with Flared Peplum and Elongated Velvet Bell Sleeves"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#B45A1D]/40 text-xs font-mono text-[#1A1815] flex items-center justify-between">
                  <span>Full Suite: $3,550</span>
                  <span className="text-[#B45A1D] font-bold">Segmented Velvet Bell Sleeves</span>
                </div>
              </div>

            </div>

            {/* Atelier Technical Feature: Predatory Architecture */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E2D8] shadow-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B45A1D] font-bold block">
                    ConvertElle Pitch Deck • Page 14 Power Tailoring
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1815]">
                    Wild Instinct, Sculpted Form
                  </h3>
                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    Designed for sovereign presence in high-stakes environments. The Tiger collection fuses military-grade tailoring lines with organic animal strength, turning classic executive suiting into an untouchable evening silhouette.
                  </p>

                  <div className="space-y-2.5 pt-2 text-xs font-mono text-[#1A1815]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B45A1D] flex-shrink-0 mt-0.5" />
                      <span><strong>Artisanal Cast Brass Tiger Armor:</strong> Heavy-gauge cast brass shoulder sculpture anchoring to concealed magnetic epaulet receivers.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B45A1D] flex-shrink-0 mt-0.5" />
                      <span><strong>Segmented Flocked Bell Sleeves:</strong> Tactile amber-and-noir striped jacquard structured by alternating compression rings of plush maroon velvet.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B45A1D] flex-shrink-0 mt-0.5" />
                      <span><strong>Contoured Flared Peplum Wings:</strong> Ergonomic hip attachments providing dramatic silhouette contrast while keeping waistlines sharply defined.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B45A1D] flex-shrink-0 mt-0.5" />
                      <span><strong>Italian Wool Crepe Foundation:</strong> High-twist crease-resistant wool engineered for 18-hour continuous wear from boardroom to gala.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#FAF8F5]">
                    <img
                      src="/images/tiger/tiger-statement-blazer.jpg"
                      alt="Tailored Blazer & Shoulder Armor Detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#FAF8F5]">
                    <img
                      src="/images/tiger/tiger-couture-gown.jpg"
                      alt="Couture Mermaid Gown & Sleeves Detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* EXCLUSIVE BASE TO COUTURE TRANSFORMATION GALLERY FOR PEACOCK DESIGN         */}
        {/* ========================================================================= */}
        {archetype.id === 'peacock' && (
          <div className="mt-20 pt-16 border-t border-[#E8E2D8] space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0D4D5C] font-bold">
                Pavo Cristatus • Cruelty-Free Plumage Metamorphosis
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1815] font-normal">
                {archetype.name}: <span className="italic text-[#0D4D5C]">Base to Haute Couture</span>
              </h2>
              <p className="text-[#666057] text-xs sm:text-sm font-light leading-relaxed">
                Discover the transition from a sculpted royal blue satin corset with fluid violet crepe trousers into the majestic Imperial Pavo ballgown crafted with cascading tiers of cruelty-free engineered plumage.
              </p>
            </div>

            {/* Side-by-Side Before & After Transformation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Card 1: Stage 01-03: The Base Corset & Tailored Violet Trousers */}
              <div className="rounded-3xl bg-white border border-[#E8E2D8] shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F2EDE4]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0D4D5C] font-bold">
                      STAGE 02 & 03 • STATEMENT RTW
                    </span>
                    <span className="text-[10px] font-mono text-[#666057] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#DDD6CA]">
                      Art Receptions & Soirées
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1815]">
                    The Royal Blue Corset & Violet Crepe Trousers
                  </h3>

                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    Sculpted double satin sweetheart corset bodice paired with iridescent violet wide-leg fluid crepe trousers, accented at the trouser cuffs with hand-stitched cruelty-free peacock feather eyelets and sapphire crystals.
                  </p>
                </div>

                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/peacock/peacock-statement-trousers.jpg"
                    alt="The Peacock Base to Statement Look - Royal Blue Corset and Violet Trousers with Plumage Cuffs"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs font-mono text-[#666057] flex items-center justify-between">
                  <span>Configuration: Base + Statement ($2,120)</span>
                  <span className="text-[#1A1815] font-bold">Engineered Plumage Cuffs</span>
                </div>
              </div>

              {/* Card 2: Stage 04: The Imperial Pavo Haute Couture Ballgown */}
              <div className="rounded-3xl bg-white border border-[#0D4D5C] shadow-luxury p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0D4D5C] font-bold">
                      STAGE 04 • HAUTE COUTURE BALLGOWN
                    </span>
                    <span className="text-[10px] font-mono text-white bg-[#0D4D5C] px-2.5 py-1 rounded-full font-bold">
                      Gala & Opera Openings
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1815]">
                    The Sovereign Imperial Pavo Plumage Ballgown
                  </h3>

                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    The breathtaking red-carpet metamorphosis: the identical sculpted corset crowned with a sweeping modular ballgown overskirt of over 120 individually hand-stitched organza peacock eyelets in peacock blue, emerald, and indigo.
                  </p>
                </div>

                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/peacock/peacock-couture-gown.jpg"
                    alt="The Peacock Haute Couture Suite - Imperial Pavo Tiered Plumage Ballgown"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#0D4D5C]/40 text-xs font-mono text-[#1A1815] flex items-center justify-between">
                  <span>Full Suite: $4,320</span>
                  <span className="text-[#0D4D5C] font-bold">120 Hand-Stitched Eyelets</span>
                </div>
              </div>

            </div>

            {/* Atelier Technical Feature: Cruelty-Free Plumage */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E2D8] shadow-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0D4D5C] font-bold block">
                    ConvertElle Pitch Deck • Page 10 Plumage Engineering
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1815]">
                    Pavo Cristatus: Cruelty-Free Opulence
                  </h3>
                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    Designed to command any hall without harming wildlife. Our atelier engineers cruelty-free plumage using laser-cut shaded silk organza and pleated tulle, replicating the iridescent refraction of natural peacock feathers while offering lifelong resilience.
                  </p>

                  <div className="space-y-2.5 pt-2 text-xs font-mono text-[#1A1815]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0D4D5C] flex-shrink-0 mt-0.5" />
                      <span><strong>100% Cruelty-Free Plumage:</strong> Over 120 individually hand-cut organza eyelets layered with sapphire and emerald glass crystal beads.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0D4D5C] flex-shrink-0 mt-0.5" />
                      <span><strong>Double Satin Corset Structure:</strong> Internal spiral steel boning provides flawless ergonomic support while remaining invisible from exterior satin lines.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0D4D5C] flex-shrink-0 mt-0.5" />
                      <span><strong>360-Degree Modular Waistband:</strong> Hidden magnetic docking ring allows instant conversion between wide-leg trousers and the Imperial ballgown in 30 seconds.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0D4D5C] flex-shrink-0 mt-0.5" />
                      <span><strong>Iridescent Violet Crepe:</strong> Fluid, breathable crepe fabric that drapes cleanly and shimmers subtly under architectural event spotlights.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#FAF8F5]">
                    <img
                      src="/images/peacock/peacock-statement-trousers.jpg"
                      alt="Corset & Trouser Plumage Cuffs Detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#FAF8F5]">
                    <img
                      src="/images/peacock/peacock-couture-gown.jpg"
                      alt="Couture Imperial Pavo Ballgown Detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* EXCLUSIVE BASE TO COUTURE TRANSFORMATION GALLERY FOR SWAN DESIGN           */}
        {/* ========================================================================= */}
        {archetype.id === 'swan' && (
          <div className="mt-20 pt-16 border-t border-[#E8E2D8] space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#96836D] font-bold">
                The Swan Collective • Diane V. Gilli
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1815] font-normal">
                {archetype.name}: <span className="italic text-[#96836D]">Base to Haute Couture</span>
              </h2>
              <p className="text-[#666057] text-xs sm:text-sm font-light leading-relaxed">
                Discover the architectural journey from "Modern Muse" raw denim and wrap halter top into the iconic 3D sculpted ceramic swan peplum, culminating in the sovereign white plumage ballgown.
              </p>
            </div>

            {/* Side-by-Side Before & After Transformation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* Card 1: Stage 01: Modern Muse Base Look */}
              <div className="rounded-3xl bg-white border border-[#E8E2D8] shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F2EDE4]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#96836D] font-bold">
                      STAGE 01 • THE FOUNDATION
                    </span>
                    <span className="text-[10px] font-mono text-[#666057] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#DDD6CA]">
                      Daytime Casual Luxury
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1815]">
                    The Modern Muse: Halter Top & Dark Denim
                  </h3>

                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    Sleeveless wrap pinstripe halter top paired with tailored dark-wash straight denim jeans, finished with a white leather belt and hand-carved crystal swan choker.
                  </p>
                </div>

                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/swan/swan-base-modern-muse.jpg"
                    alt="The Swan Base Look - Modern Muse Halter Top and Denim"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs font-mono text-[#666057] flex items-center justify-between">
                  <span>Configuration: Base Only ($680)</span>
                  <span className="text-[#1A1815] font-bold">Concealed Magnetic Docking</span>
                </div>
              </div>

              {/* Card 2: Stage 03: The Feathery Ascent */}
              <div className="rounded-3xl bg-white border border-[#96836D] shadow-luxury p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#96836D] font-bold">
                      STAGE 03 • ARCHITECTURAL COUTURE
                    </span>
                    <span className="text-[10px] font-mono text-white bg-[#96836D] px-2.5 py-1 rounded-full font-bold">
                      Symphony & Ballet Galas
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1815]">
                    The Feathery Ascent & Sculpted Swan Peplum
                  </h3>

                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    The identical halter top elevated with a 3D hand-carved crystal swan wrapping the waist, multi-tiered translucent organza wings, detachable feather plume trouser bell cuffs, and layered pearl choker.
                  </p>
                </div>

                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/swan/swan-feathery-ascent.jpg"
                    alt="The Feathery Ascent - 3D Sculpted Swan Peplum and Feather Plume Cuffs"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#96836D]/40 text-xs font-mono text-[#1A1815] flex items-center justify-between">
                  <span>Configuration: Base + Statement ($2,030)</span>
                  <span className="text-[#96836D] font-bold">3D Sculpted Ceramic Swan</span>
                </div>
              </div>

            </div>

            {/* Side-by-Side Metamorphosis Board (Diane V. Gilli) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E2D8] shadow-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#96836D] font-bold block">
                    Diane V. Gilli • The Swan Collective
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1815]">
                    Pristine Grace in High Definition
                  </h3>
                  <p className="text-xs text-[#4A453F] font-light leading-relaxed">
                    Captured side-by-side in our museum exhibition: see how raw denim transitions effortlessly into museum-grade architectural couture through our patented magnetic docking system.
                  </p>

                  <div className="space-y-2.5 pt-2 text-xs font-mono text-[#1A1815]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#96836D] flex-shrink-0 mt-0.5" />
                      <span><strong>Hand-Carved Crystal Swan:</strong> Sculptural 3D bust/waistpiece contouring natural waist curves with translucent organza plumage.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#96836D] flex-shrink-0 mt-0.5" />
                      <span><strong>Detachable Plume Bell Cuffs:</strong> Engineered cruelty-free ostrich-effect plumes that clip onto denim trousers without sewing.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#96836D] flex-shrink-0 mt-0.5" />
                      <span><strong>Tiered Multi-Strand Pearls:</strong> Cultured pearl choker with diamond-encrusted swan pendant.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#FAF8F5]">
                  <img
                    src="/images/swan/swan-transformation-duo.jpg"
                    alt="The Swan Collective Side-by-Side Metamorphosis"
                    className="w-full h-auto object-cover"
                  />
                </div>

              </div>
            </div>

            {/* Individual Aesthetic Showcase: Grand Ballgown, Liquid Silver, and Noir Swan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Variation 1: Conceptual White Ballgown */}
              <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#96836D] font-bold">
                    Couture Suite • $3,980
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#1A1815]">
                    Conceptual Swan Ballgown
                  </h4>
                  <p className="text-xs text-[#666057] font-light">
                    Sovereign white ballgown with 3D sculpted ceramic swan rising from the bodice and cascading tiers of white cruelty-free organza plumes.
                  </p>
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/swan/swan-grand-couture-ballgown.jpg"
                    alt="Conceptual Swan Ballgown"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Variation 2: Liquid Swan Gown */}
              <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#96836D] font-bold">
                    Evening Expression • $2,450
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#1A1815]">
                    Liquid Chrome Swan Gown
                  </h4>
                  <p className="text-xs text-[#666057] font-light">
                    Sculptural chrome liquid metallic column gown with feather plume mermaid train and diamond swan collar.
                  </p>
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/swan/swan-liquid-silver-gown.jpg"
                    alt="Liquid Chrome Swan Gown"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Variation 3: Noir Swan Transformation */}
              <div className="p-6 rounded-3xl bg-white border border-[#E8E2D8] shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#96836D] font-bold">
                    Midnight Edition • $3,200
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#1A1815]">
                    Noir Swan Transformation
                  </h4>
                  <p className="text-xs text-[#666057] font-light">
                    Monochrome black denim and halter top with hand-carved black onyx swan peplum, midnight plumes, and dark tiara.
                  </p>
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D8]">
                  <img
                    src="/images/swan/swan-noir-swan.jpg"
                    alt="Noir Swan Transformation"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

            </div>

          </div>
        )}


        {/* Bottom Adjacent Navigation */}
        <div className="mt-20 pt-10 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => onSelectArchetype(prevArchetype.id)}
            className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#E8E2D8] hover:border-[#B89047] text-left transition-all w-full sm:w-auto shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-[#B89047]" />
            <div>
              <span className="text-[10px] font-mono uppercase text-[#666057] block">Previous Design</span>
              <span className="text-sm font-serif font-bold text-[#1A1815]">{prevArchetype.name} ({prevArchetype.identity})</span>
            </div>
          </button>

          <button
            onClick={onBack}
            className="px-6 py-2.5 rounded-full border border-[#DDD6CA] bg-white hover:border-[#1A1815] text-xs uppercase tracking-widest text-[#1A1815] transition-colors font-medium"
          >
            All 6 Designs Overview
          </button>

          <button
            onClick={() => onSelectArchetype(nextArchetype.id)}
            className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#E8E2D8] hover:border-[#B89047] text-right transition-all w-full sm:w-auto justify-end shadow-sm"
          >
            <div>
              <span className="text-[10px] font-mono uppercase text-[#666057] block">Next Design</span>
              <span className="text-sm font-serif font-bold text-[#1A1815]">{nextArchetype.name} ({nextArchetype.identity})</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#B89047]" />
          </button>
        </div>

      </div>
    </div>
  );
}
