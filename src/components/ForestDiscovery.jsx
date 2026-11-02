import React, { useState, useEffect, useRef } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { PRODUCTS_BY_COLLECTION } from '../data/productsData';
import { soundscape } from '../utils/soundscape';
import {
  Sparkles, Compass, Eye, ShoppingBag, ArrowRight,
  Maximize2, Volume2, Check, Info, LayoutGrid
} from 'lucide-react';

const BIOMES = [
  {
    id: 'flower-garden',
    archetypeId: 'butterfly',
    animalName: 'The Butterfly',
    zoneTitle: 'The Celestial Chrysalis Garden',
    symbolism: 'Transformation & Metamorphosis',
    themeColor: '#9C427B',
    glowColor: 'rgba(156, 66, 123, 0.45)',
    description: 'A sunlit conservatory of golden chrysalises and wild honeysuckle where silk organza wings flutter between morning blooms.',
    bgClass: 'from-[#2D162B] via-[#1B1220] to-[#0E0B12]',
    coordinates: { x: 22, y: 35 },
    heroImg: '/images/butterfly/butterfly-couture-gold.png',
    secretTitle: 'The Sovereign Metamorphosis Gown'
  },
  {
    id: 'mirror-lake',
    archetypeId: 'swan',
    animalName: 'The Swan',
    zoneTitle: 'The Mirror-Still Alpine Lake',
    symbolism: 'Grace & Statuesque Stillness',
    themeColor: '#D8D4CE',
    glowColor: 'rgba(216, 212, 206, 0.45)',
    description: 'An immaculate glacial lake shrouded in silver mist where white cygnus plumage glides over crystal water without a ripple.',
    bgClass: 'from-[#1C2026] via-[#14171C] to-[#0A0C0E]',
    coordinates: { x: 74, y: 28 },
    heroImg: '/images/swan/swan-grand-couture-ballgown.jpg',
    secretTitle: 'Cygnus Grand Couture Ballgown'
  },
  {
    id: 'prismatic-glade',
    archetypeId: 'peacock',
    animalName: 'The Peacock',
    zoneTitle: 'The Prismatic Aurora Glade',
    symbolism: 'Individuality & Unapologetic Radiance',
    themeColor: '#0D4D5C',
    glowColor: 'rgba(13, 77, 92, 0.55)',
    description: 'A crystalline clearing where light fractures into emerald and sapphire prisms, echoing royal peacock eye plumage.',
    bgClass: 'from-[#0B252E] via-[#081A20] to-[#040D10]',
    coordinates: { x: 48, y: 55 },
    heroImg: '/images/peacock/peacock-couture-gown.jpg',
    secretTitle: 'Pavo Cristatus Iridescent Gown'
  },
  {
    id: 'bamboo-jungle',
    archetypeId: 'tiger',
    animalName: 'The Tiger',
    zoneTitle: 'The Primeval Bamboo Sanctuary',
    symbolism: 'Strength & Apex Command',
    themeColor: '#B45A1D',
    glowColor: 'rgba(180, 90, 29, 0.5)',
    description: 'Towering dark bamboo stalks illuminated by flickering amber fireflies. The predator rests in sovereign stillness.',
    bgClass: 'from-[#2C180E] via-[#1D100A] to-[#0D0704]',
    coordinates: { x: 80, y: 72 },
    heroImg: '/images/tiger/tiger-couture-gown.jpg',
    secretTitle: 'Sovereign Tigress Fluted Column'
  },
  {
    id: 'golden-canopy',
    archetypeId: 'leopard',
    animalName: 'The Leopard',
    zoneTitle: 'The Ancient Golden Savanna Canopy',
    symbolism: 'Confidence & Magnetic Presence',
    themeColor: '#C5A059',
    glowColor: 'rgba(197, 160, 89, 0.45)',
    description: 'Warm sandstone crags and sun-baked acacia branches where golden rosettes move with effortless, silent authority.',
    bgClass: 'from-[#2A1F10] via-[#1C150B] to-[#0F0B06]',
    coordinates: { x: 26, y: 78 },
    heroImg: '/images/leopard/leopard-runway-cascade-ballgown.jpg',
    secretTitle: 'Cascade Ballgown Petal Skirt'
  },
  {
    id: 'bioluminescent-lagoon',
    archetypeId: 'jellyfish',
    animalName: 'The Jellyfish',
    zoneTitle: 'The Bioluminescent Submerged Lagoon',
    symbolism: 'Fluidity & Weightless Mystery',
    themeColor: '#8A699C',
    glowColor: 'rgba(138, 105, 156, 0.5)',
    description: 'An enchanted midnight lagoon pulsing with phosphorescent lilac and cyan ruffles, moving like water in perpetual motion.',
    bgClass: 'from-[#1E1428] via-[#130D1A] to-[#0A070E]',
    coordinates: { x: 50, y: 20 },
    heroImg: '/images/jellyfish/jellyfish-couture-gown.jpg',
    secretTitle: 'Aurelia Luminescent Couture Gown'
  }
];

export default function ForestDiscovery() {
  const {
    openAnimalWorld,
    openProductDetail,
    addToCart,
    formatPrice,
    navigateTo,
    showToast
  } = useConvertelle();

  const [activeBiome, setActiveBiome] = useState(BIOMES[0]);
  const [discoveredBiomes, setDiscoveredBiomes] = useState(['flower-garden']);
  const [hoveredBiome, setHoveredBiome] = useState(null);
  const canvasRef = useRef(null);

  // Background animated particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrame;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate enchanted fireflies / pollen
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.7 + 0.3,
      pulseSpeed: Math.random() * 0.02 + 0.01
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.01;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = activeBiome.themeColor || '#B89047';
        ctx.globalAlpha = Math.max(0.1, Math.min(0.8, p.alpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = activeBiome.themeColor || '#B89047';
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [activeBiome]);

  const handleSelectBiome = (biome) => {
    soundscape.playChime('transform');
    setActiveBiome(biome);
    if (!discoveredBiomes.includes(biome.id)) {
      setDiscoveredBiomes((prev) => [...prev, biome.id]);
      showToast(`Discovered ${biome.zoneTitle}!`);
    }
  };

  const currentProducts = PRODUCTS_BY_COLLECTION[activeBiome.archetypeId] || [];

  return (
    <div className={`min-h-screen bg-gradient-to-b ${activeBiome.bgClass} text-[#FAF8F5] transition-colors duration-1000 relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8`}>
      {/* Dynamic Animated Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation & Mode Toggle Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-8 mb-8 border-b border-white/10 gap-4">
          <div className="text-center sm:text-left">
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#B89047] flex items-center gap-1.5 justify-center sm:justify-start">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" /> Immersive Forest Cartography
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] mt-1">
              The Digital Forest of FAUNA
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#DDD6CA] hidden md:inline">
              Discovered: {discoveredBiomes.length} of {BIOMES.length} Realms
            </span>

            {/* Switch to Classic Catalog */}
            <button
              onClick={() => navigateTo('shop')}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center gap-2 transition-colors"
            >
              <LayoutGrid className="w-4 h-4 text-[#B89047]" /> Switch to Standard Catalog
            </button>
          </div>
        </div>

        {/* Forest Interactive Map Visualizer */}
        <div className="relative aspect-[16/9] w-full max-h-[520px] bg-black/40 border border-white/15 rounded-sm overflow-hidden mb-12 shadow-2xl backdrop-blur-sm">
          {/* Ambient Map Terrain Graphic */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-black/80 pointer-events-none" />

          {/* Interactive Glowing Biome Totems */}
          {BIOMES.map((b) => {
            const isSelected = activeBiome.id === b.id;
            const isDiscovered = discoveredBiomes.includes(b.id);

            return (
              <button
                key={b.id}
                onClick={() => handleSelectBiome(b)}
                onMouseEnter={() => setHoveredBiome(b)}
                onMouseLeave={() => setHoveredBiome(null)}
                style={{
                  top: `${b.coordinates.y}%`,
                  left: `${b.coordinates.x}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                className="absolute z-20 group focus:outline-none"
              >
                {/* Pulsing ring aura */}
                <div
                  className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isSelected
                      ? 'scale-125 ring-2 ring-[#B89047] shadow-lg'
                      : 'hover:scale-110'
                  }`}
                  style={{
                    backgroundColor: isSelected ? b.themeColor : 'rgba(26, 24, 21, 0.8)',
                    boxShadow: isSelected ? `0 0 25px ${b.glowColor}` : 'none'
                  }}
                >
                  <Sparkles className={`w-4 h-4 sm:w-6 sm:h-6 ${isSelected ? 'text-white' : 'text-[#B89047]'} transition-transform group-hover:rotate-45`} />
                </div>

                {/* Totem Label Pill */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-[#1A1815]/90 border border-white/20 text-[9px] uppercase tracking-widest font-semibold rounded-full whitespace-nowrap shadow-md pointer-events-none transition-all ${
                    isSelected || hoveredBiome?.id === b.id
                      ? 'opacity-100 translate-y-0 text-[#F0E2C8]'
                      : 'opacity-70 text-[#DDD6CA]'
                  }`}
                >
                  {b.animalName} • {b.symbolism.split('&')[0]}
                </div>
              </button>
            );
          })}

          {/* Map Compass Rose */}
          <div className="absolute bottom-4 left-4 p-3 bg-black/60 border border-white/10 rounded-sm text-[10px] text-[#DDD6CA] backdrop-blur-sm pointer-events-none">
            <span className="block font-serif text-xs text-[#B89047] uppercase font-bold">FAUNA CARTOGRAPHY</span>
            <span>Click any glowing totem to uncover its hidden garments.</span>
          </div>
        </div>

        {/* Revealed Active Biome Sanctuary Details */}
        <div className="bg-[#1A1815]/90 border border-white/20 p-6 sm:p-10 rounded-sm backdrop-blur-md shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10 pb-8 border-b border-white/10">
            {/* Left Biome Dossier */}
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#B89047] flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Archetype Realm: {activeBiome.animalName}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5]">
                {activeBiome.zoneTitle}
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#DDD6CA] mt-1 font-mono">
                Symbolic Affinity: {activeBiome.symbolism}
              </p>
              <p className="text-xs sm:text-sm text-[#E8E2D8] mt-4 leading-relaxed font-light">
                {activeBiome.description}
              </p>
            </div>

            {/* Right Action Button to Dedicated World */}
            <div className="flex-shrink-0">
              <button
                onClick={() => openAnimalWorld(activeBiome.archetypeId)}
                className="px-6 py-3.5 bg-[#B89047] hover:bg-[#8C6B26] text-white text-xs tracking-widest uppercase font-semibold rounded-sm flex items-center gap-2 transition-all shadow-lg"
              >
                Enter Dedicated {activeBiome.animalName} Page <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Unlocked Products from this Biome */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#F0E2C8]">
                Revealed Haute Couture Pieces ({currentProducts.length})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => openProductDetail(product.id)}
                  className="bg-[#262420]/80 border border-white/10 hover:border-[#B89047] p-4 rounded-sm cursor-pointer group transition-all duration-300 flex flex-col justify-between shadow-md"
                >
                  <div>
                    <div className="aspect-[3/4] bg-black/40 overflow-hidden border border-white/10 rounded-sm mb-3 relative">
                      <img
                        src={product.images.primary}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.badge && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 text-[8px] uppercase tracking-wider font-bold bg-[#1A1815]/90 text-[#F0E2C8] border border-[#B89047]/40">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <span className="text-[9px] uppercase tracking-widest text-[#B89047] font-semibold">
                      {product.categoryName}
                    </span>

                    <h4 className="font-serif text-lg font-semibold text-[#FAF8F5] group-hover:text-[#F0E2C8] transition-colors line-clamp-1 mt-0.5">
                      {product.name}
                    </h4>

                    <p className="text-xs text-[#DDD6CA] line-clamp-2 mt-1 font-light">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="font-serif text-base font-bold text-[#FAF8F5]">
                      {formatPrice(product.price)}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product, { size: 'M' });
                        }}
                        className="p-2 bg-[#B89047] hover:bg-[#8C6B26] text-white rounded-sm transition-colors"
                        title="Add to Shopping Bag"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

