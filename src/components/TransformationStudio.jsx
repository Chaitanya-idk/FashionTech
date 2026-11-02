import React, { useState, useMemo } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { soundscape } from '../utils/soundscape';
import {
  Sparkles, Layers, Check, ShoppingBag, RotateCcw,
  Sliders, Shield, Eye, ArrowRight, Palette, Info
} from 'lucide-react';

const BASE_OPTIONS = [
  {
    id: 'base-column',
    name: 'The Sovereign Column Dress',
    archetype: 'butterfly',
    fabric: 'Cruelty-Free Italian Silk Duchesse',
    price: 28500,
    image: '/images/butterfly/butterfly-base-gold.png',
    silhouette: 'Sculpted column with concealed magnetic docking grid at neck, waist, and hips',
    colorHex: '#D4AF37'
  },
  {
    id: 'base-jumpsuit',
    name: 'The Metamorph Tuxedo Jumpsuit',
    archetype: 'swan',
    fabric: 'Heavy Matte Crepe & Satin Lapels',
    price: 32000,
    image: '/images/swan/swan-cygnus-core-suit.jpg',
    silhouette: 'Wide-leg palazzo trouser with architectural peaked lapels and shoulder docks',
    colorHex: '#141416'
  },
  {
    id: 'base-pencil',
    name: 'The Power Contour Bustier & Skirt',
    archetype: 'tiger',
    fabric: 'Stretch Wool Twill & Cupro Lining',
    price: 24000,
    image: '/images/tiger/tiger-statement-blazer.jpg',
    silhouette: 'Ergonomic boned bustier and body-skimming high-rise pencil foundation',
    colorHex: '#333333'
  }
];

const MODULAR_COMPONENTS = [
  // DETACHABLE SLEEVES
  {
    id: 'mod-sleeves-tiger',
    category: 'sleeves',
    name: 'Tiger Striped Structural Sleeves',
    archetype: 'The Tiger',
    price: 16000,
    previewImg: '/images/tiger/tiger-couture-gown.jpg',
    description: 'Accordion-pleated sleeves with ribbed cuffs and concealed gold-plated magnetic snaps.'
  },
  {
    id: 'mod-sleeves-butterfly',
    category: 'sleeves',
    name: 'Butterfly Wire Organza Winglets',
    archetype: 'The Butterfly',
    price: 14500,
    previewImg: '/images/butterfly/butterfly-celestial-peplum.png',
    description: 'Millinery-wire sculpted sheer wings that attach at the shoulder seam.'
  },
  {
    id: 'mod-sleeves-jellyfish',
    category: 'sleeves',
    name: 'Jellyfish Floating Tendril Sleeves',
    archetype: 'The Jellyfish',
    price: 12000,
    previewImg: '/images/jellyfish/jellyfish-couture-gown.jpg',
    description: 'Multi-tiered organza bell sleeves that flow with zero restriction.'
  },

  // DETACHABLE OVERSKIRTS & TRAINS
  {
    id: 'mod-skirt-leopard',
    category: 'overskirt',
    name: 'Leopard Cascade Ballgown Petal Skirt',
    archetype: 'The Leopard',
    price: 34000,
    previewImg: '/images/leopard/leopard-runway-cascade-ballgown.jpg',
    description: 'Hand-painted silk brocade petals that wrap around the waist into a grand ballgown.'
  },
  {
    id: 'mod-peplum-butterfly',
    category: 'overskirt',
    name: 'Graduated Lepidoptera Wing Peplum',
    archetype: 'The Butterfly',
    price: 19500,
    previewImg: '/images/butterfly/butterfly-celestial-peplum.png',
    description: 'Architectural waist peplum mimicking swallowtail butterfly wing contours.'
  },
  {
    id: 'mod-train-peacock',
    category: 'overskirt',
    name: 'Pavo Iridescent Plumage Gala Train',
    archetype: 'The Peacock',
    price: 38000,
    previewImg: '/images/peacock/peacock-couture-gown.jpg',
    description: 'Layered emerald organza and cyan chiffon cascading in a dramatic 2-meter side train.'
  },
  {
    id: 'mod-tulle-jellyfish',
    category: 'overskirt',
    name: 'Pelagia Tiered Cascading Tulle Train',
    archetype: 'The Jellyfish',
    price: 21000,
    previewImg: '/images/jellyfish/jellyfish-statement-trousers.jpg',
    description: 'Diaphanous blue-grey tulle tiers that attach to the left hip.'
  },

  // DECORATIVE BELTS & CINCHERS
  {
    id: 'mod-cincher-tiger',
    category: 'cincher',
    name: 'Metallic Tiger Head Sculpted Cincher',
    archetype: 'The Tiger',
    price: 13500,
    previewImg: '/images/tiger/tiger-statement-blazer.jpg',
    description: '18k brushed gold brass waist ornament with ribbed corset side accents.'
  },
  {
    id: 'mod-belt-swan',
    category: 'cincher',
    name: 'Swan Sculpted Organza Wing Belt',
    archetype: 'The Swan',
    price: 15500,
    previewImg: '/images/swan/swan-transformation-duo.jpg',
    description: 'Curved white organza plumage that cinches the waist like folded wings.'
  },
  {
    id: 'mod-belt-jellyfish',
    category: 'cincher',
    name: 'Jellyfish Waterfall Pearl Waist Belt',
    archetype: 'The Jellyfish',
    price: 9800,
    previewImg: '/images/jellyfish/jellyfish-statement-trousers.jpg',
    description: 'Cascading freshwater pearl chains with magnetic latch.'
  },

  // SHOULDER ORNAMENTS & BOLEROS
  {
    id: 'mod-bolero-jellyfish',
    category: 'bolero',
    name: 'Aurelia Sheer Tulle Bolero Shrug',
    archetype: 'The Jellyfish',
    price: 17500,
    previewImg: '/images/jellyfish/jellyfish-statement-trousers.jpg',
    description: 'High ruffled mandarin collar and translucent micro-tulle shrug.'
  },
  {
    id: 'mod-cape-swan',
    category: 'bolero',
    name: 'Noir Swan Sculpted Velvet Bolero',
    archetype: 'The Swan',
    price: 22000,
    previewImg: '/images/swan/swan-noir-swan.jpg',
    description: 'Architectural feather ruffles and magnetic neck clasp.'
  },
  {
    id: 'mod-epaulet-peacock',
    category: 'bolero',
    name: 'Iridescent Peacock Brooch & Plume',
    archetype: 'The Peacock',
    price: 11500,
    previewImg: '/images/peacock/peacock-couture-gown.jpg',
    description: 'Austrian crystal and emerald silk organza magnetic epaulet.'
  }
];

const OCCASION_PRESETS = [
  {
    id: 'conf',
    name: 'Conference & Work',
    tagline: 'Minimalist Foundation',
    baseId: 'base-column',
    components: [],
    color: '#1A1815'
  },
  {
    id: 'din',
    name: 'Dinner Salon',
    tagline: 'Expression Kit (+Epaulets & Cincher)',
    baseId: 'base-column',
    components: ['mod-sleeves-butterfly', 'mod-belt-jellyfish'],
    color: '#8C6B26'
  },
  {
    id: 'cocktail',
    name: 'Cocktail & Terrace',
    tagline: 'Statement Kit (+Peplum & Bolero)',
    baseId: 'base-column',
    components: ['mod-peplum-butterfly', 'mod-bolero-jellyfish'],
    color: '#B89047'
  },
  {
    id: 'gala',
    name: 'Grand Gala Couture',
    tagline: 'Full Couture Kit (+Train, Sleeves & Belt)',
    baseId: 'base-column',
    components: ['mod-train-peacock', 'mod-sleeves-tiger', 'mod-cincher-tiger'],
    color: '#9C427B'
  }
];

export default function TransformationStudio() {
  const { addToCart, formatPrice, showToast } = useConvertelle();

  const [selectedBaseId, setSelectedBaseId] = useState('base-column');
  const [activeComponentIds, setActiveComponentIds] = useState(['mod-peplum-butterfly', 'mod-sleeves-butterfly']);
  const [selectedColor, setSelectedColor] = useState('Gilded Gold');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const selectedBase = BASE_OPTIONS.find((b) => b.id === selectedBaseId) || BASE_OPTIONS[0];

  const activeComponents = useMemo(() => {
    return MODULAR_COMPONENTS.filter((c) => activeComponentIds.includes(c.id));
  }, [activeComponentIds]);

  const ensemblePrice = useMemo(() => {
    const compTotal = activeComponents.reduce((sum, c) => sum + c.price, 0);
    return selectedBase.price + compTotal;
  }, [selectedBase, activeComponents]);

  const toggleComponent = (compId) => {
    soundscape.playChime('transform');
    setActiveComponentIds((prev) => {
      if (prev.includes(compId)) {
        return prev.filter((id) => id !== compId);
      } else {
        return [...prev, compId];
      }
    });
  };

  const applyPreset = (preset) => {
    soundscape.playChime('transform');
    setSelectedBaseId(preset.baseId);
    setActiveComponentIds(preset.components);
    showToast(`Preset activated: ${preset.name}`);
  };

  const resetCustomization = () => {
    soundscape.playChime('click');
    setActiveComponentIds([]);
    showToast('Reset to pure foundation garment');
  };

  const handleAddEnsembleToBag = () => {
    const ensembleItem = {
      cartId: `custom-ensemble-${Date.now()}`,
      productId: selectedBase.id,
      name: `Bespoke Metamorphosis Ensemble (${selectedBase.name})`,
      subtitle: `${activeComponents.length} Detachable Components Attached`,
      image: selectedBase.image,
      price: ensemblePrice,
      size: 'Custom Bespoke Fit',
      color: selectedColor,
      quantity: 1,
      isCustomEnsemble: true,
      customComponents: activeComponents.map((c) => `${c.name} (${formatPrice(c.price)})`)
    };

    addToCart(ensembleItem);
  };

  const filteredComponents = useMemo(() => {
    if (categoryFilter === 'all') return MODULAR_COMPONENTS;
    return MODULAR_COMPONENTS.filter((c) => c.category === categoryFilter);
  }, [categoryFilter]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-16 px-4 sm:px-6 lg:px-8 border-t border-[#DDD6CA]">
      <div className="max-w-7xl mx-auto">
        {/* Studio Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C6B26] flex items-center justify-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B89047]" /> Signature Innovation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1815] uppercase tracking-wide leading-none">
            One Garment. Infinite Expressions.
          </h1>
          <p className="text-xs sm:text-sm text-[#666057] mt-3 font-light leading-relaxed">
            The ConvertElle Transformation Studio empowers you to build your bespoke silhouette. Select an impeccably tailored foundation garment and attach interchangeable, cruelty-free kits to transition from conference to black-tie gala in under 45 seconds.
          </p>
        </div>

        {/* Occasion Presets Selector */}
        <div className="mb-10 bg-white p-4 sm:p-6 border border-[#E8E2D8] rounded-sm shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C6B26]">
                Curated Metamorphosis Presets
              </span>
              <h3 className="font-serif text-lg text-[#1A1815]">One-Click Occasion Transitions</h3>
            </div>
            <button
              onClick={resetCustomization}
              className="text-xs uppercase tracking-wider text-[#999083] hover:text-[#1A1815] flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset to Pure Base
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {OCCASION_PRESETS.map((preset) => {
              const isMatch =
                selectedBaseId === preset.baseId &&
                activeComponentIds.length === preset.components.length &&
                preset.components.every((id) => activeComponentIds.includes(id));

              return (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset)}
                  className={`p-3.5 border rounded-sm text-left transition-all ${
                    isMatch
                      ? 'border-[#B89047] bg-[#B89047]/10 ring-1 ring-[#B89047]'
                      : 'border-[#DDD6CA] bg-white hover:border-[#B89047]/60'
                  }`}
                >
                  <span className="block font-serif text-sm font-semibold text-[#1A1815]">
                    {preset.name}
                  </span>
                  <span className="text-[10px] text-[#666057] line-clamp-1 mt-0.5">
                    {preset.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Transformation Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Interactive Layered Visualizer (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24 bg-white border border-[#E8E2D8] p-6 rounded-sm shadow-md">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F2EDE4]">
              <div>
                <span className="text-[9px] tracking-widest uppercase font-semibold text-[#8C6B26]">
                  Live Metamorphosis View
                </span>
                <h3 className="font-serif text-lg text-[#1A1815]">Architectural Composite</h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Active Docking
              </div>
            </div>

            {/* Visual Mannequin with Composited Layers */}
            <div className="relative aspect-[3/4] w-full bg-gradient-to-b from-[#F7F4EE] to-[#EAE3D5] rounded-sm overflow-hidden border border-[#E8E2D8] flex items-center justify-center">
              {/* Layer 1: Base Garment */}
              <img
                src={selectedBase.image}
                alt={selectedBase.name}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />

              {/* Dynamic Composite Overlays representing attached components */}
              {activeComponents.map((c, idx) => (
                <div
                  key={c.id}
                  className="absolute inset-0 pointer-events-none transition-all duration-500 ease-out"
                  style={{ zIndex: 10 + idx }}
                >
                  <img
                    src={c.previewImg}
                    alt={c.name}
                    className="w-full h-full object-cover object-center mix-blend-multiply opacity-80 filter contrast-125"
                  />
                  {/* Subtle golden aura pulse on newly attached elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#B89047]/15 via-transparent to-transparent pointer-events-none" />
                </div>
              ))}

              {/* Real-time Component Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-30">
                <span className="px-2.5 py-1 text-[9px] tracking-widest uppercase font-semibold bg-[#1A1815]/90 text-white backdrop-blur-sm border border-[#B89047]/30 shadow-md">
                  Base: {selectedBase.name}
                </span>
                {activeComponents.map((c) => (
                  <span
                    key={c.id}
                    className="px-2 py-0.5 text-[8px] tracking-wider uppercase font-medium bg-[#B89047]/90 text-white backdrop-blur-sm rounded-sm self-start shadow-sm flex items-center gap-1"
                  >
                    <Check className="w-2.5 h-2.5" /> {c.name}
                  </span>
                ))}
              </div>

              {/* Transformation Speed Indicator */}
              <div className="absolute bottom-3 right-3 z-30 bg-white/90 backdrop-blur-sm px-3 py-1 border border-[#DDD6CA] text-[10px] text-[#1A1815] font-mono shadow-sm">
                TRANSFORM: 45 SEC
              </div>
            </div>

            {/* Dynamic Ensemble Pricing Panel */}
            <div className="mt-5 p-4 bg-[#FAF8F5] border border-[#E8E2D8] rounded-sm space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#1A1815]">Ensemble Total</span>
                <span className="font-serif text-3xl font-bold text-[#8C6B26]">
                  {formatPrice(ensemblePrice)}
                </span>
              </div>

              <div className="text-[11px] text-[#666057] space-y-1 border-t border-[#E8E2D8] pt-2">
                <div className="flex justify-between">
                  <span>{selectedBase.name}</span>
                  <span>{formatPrice(selectedBase.price)}</span>
                </div>
                {activeComponents.map((c) => (
                  <div key={c.id} className="flex justify-between text-[#8C6B26]">
                    <span>+ {c.name}</span>
                    <span>{formatPrice(c.price)}</span>
                  </div>
                ))}
              </div>

              {/* Add to Bag CTA */}
              <button
                onClick={handleAddEnsembleToBag}
                className="w-full py-3.5 bg-[#B89047] hover:bg-[#8C6B26] text-white text-xs tracking-widest uppercase font-semibold rounded-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <ShoppingBag className="w-4 h-4" /> Add Bespoke Ensemble to Bag
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Customization Controls & Component Catalog (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Base Garment Selector */}
            <div className="bg-white p-6 border border-[#E8E2D8] rounded-sm shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C6B26]">
                  Step 1: Choose Your Core Foundation
                </span>
                <span className="text-xs text-[#999083]">3 Impeccable Bases Available</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {BASE_OPTIONS.map((base) => (
                  <div
                    key={base.id}
                    onClick={() => {
                      soundscape.playChime('click');
                      setSelectedBaseId(base.id);
                    }}
                    className={`p-3 border rounded-sm cursor-pointer transition-all flex flex-col justify-between ${
                      selectedBaseId === base.id
                        ? 'border-[#B89047] bg-[#B89047]/10 ring-2 ring-[#B89047]'
                        : 'border-[#DDD6CA] bg-[#FAF8F5] hover:border-[#B89047]/50'
                    }`}
                  >
                    <div>
                      <div className="aspect-[3/4] bg-white overflow-hidden border border-[#DDD6CA] rounded-sm mb-2.5">
                        <img src={base.image} alt={base.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="font-serif text-sm font-semibold text-[#1A1815] leading-snug line-clamp-2">
                        {base.name}
                      </h4>
                      <p className="text-[10px] text-[#666057] mt-1 line-clamp-1">{base.fabric}</p>
                    </div>
                    <span className="font-serif text-sm font-bold text-[#8C6B26] mt-3">
                      {formatPrice(base.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Detachable Modular Components Library */}
            <div className="bg-white p-6 border border-[#E8E2D8] rounded-sm shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C6B26]">
                    Step 2: Attach & Detach Haute Components
                  </span>
                  <h3 className="font-serif text-xl text-[#1A1815]">Modular Architecture Atelier</h3>
                </div>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: 'all', label: 'All Kits' },
                    { id: 'overskirt', label: 'Overskirts & Trains' },
                    { id: 'sleeves', label: 'Sleeves' },
                    { id: 'cincher', label: 'Belts & Cinchers' },
                    { id: 'bolero', label: 'Boleros & Capes' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setCategoryFilter(tab.id)}
                      className={`px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-sm transition-colors ${
                        categoryFilter === tab.id
                          ? 'bg-[#1A1815] text-[#FAF8F5]'
                          : 'bg-[#FAF8F5] text-[#666057] hover:text-[#1A1815] border border-[#DDD6CA]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Component Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredComponents.map((comp) => {
                  const isActive = activeComponentIds.includes(comp.id);

                  return (
                    <div
                      key={comp.id}
                      onClick={() => toggleComponent(comp.id)}
                      className={`p-4 border rounded-sm cursor-pointer transition-all flex gap-3.5 items-start ${
                        isActive
                          ? 'border-[#B89047] bg-[#B89047]/10 ring-1 ring-[#B89047]'
                          : 'border-[#E8E2D8] bg-[#FAF8F5] hover:border-[#B89047]/60'
                      }`}
                    >
                      {/* Checkbox indicator */}
                      <div
                        className={`w-5 h-5 rounded-sm border flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 ${
                          isActive
                            ? 'bg-[#B89047] border-[#B89047] text-white'
                            : 'border-[#DDD6CA] bg-white'
                        }`}
                      >
                        {isActive && <Check className="w-3.5 h-3.5" />}
                      </div>

                      {/* Component info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] uppercase tracking-widest font-bold text-[#8C6B26]">
                            {comp.archetype}
                          </span>
                          <span className="font-serif text-sm font-semibold text-[#1A1815]">
                            +{formatPrice(comp.price)}
                          </span>
                        </div>

                        <h4 className="font-serif text-base text-[#1A1815] leading-snug mt-0.5">
                          {comp.name}
                        </h4>

                        <p className="text-[11px] text-[#666057] mt-1 leading-relaxed">
                          {comp.description}
                        </p>

                        <div className="mt-2.5 flex items-center justify-between text-[10px]">
                          <span className="text-emerald-700 font-medium">Neodymium Magnetic Clasp</span>
                          <span className={isActive ? 'font-bold text-[#8C6B26]' : 'text-[#999083]'}>
                            {isActive ? 'Attached' : 'Click to Dock'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Craftsmanship & Modular Blueprint Guide */}
            <div className="p-6 bg-[#FAF8F5] border border-[#DDD6CA] rounded-sm text-xs text-[#666057] space-y-2">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C6B26] flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" /> ConvertElle Docking Engineering
              </span>
              <p>
                Each ConvertElle foundation features 10 to 14 concealed, gold-plated rare-earth neodymium magnetic receptors woven into internal reinforcement boning. Detachable kits dock instantly and hold securely up to 15 kg of tensile force while releasing cleanly in one smooth motion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

