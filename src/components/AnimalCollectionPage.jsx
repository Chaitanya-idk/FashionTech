import React, { useState, useEffect } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { PRODUCTS_BY_COLLECTION } from '../data/productsData';
import { soundscape } from '../utils/soundscape';
import ProductCard from './ProductCard';
import {
  Sparkles, Compass, ArrowRight, Eye, ShoppingBag,
  Layers, Palette, Award, Feather, Shield
} from 'lucide-react';

const ANIMAL_THEMES = {
  butterfly: {
    id: 'butterfly',
    name: 'The Butterfly',
    latin: 'Papilio Metamorphosis',
    identity: 'Transformation',
    accentColor: '#9C427B',
    accentText: 'text-[#9C427B]',
    bgHero: 'from-[#2D162B] via-[#1A121F] to-[#120E17]',
    heroImage: '/images/butterfly/butterfly-couture-gold.png',
    deckQuote: 'Metamorphosis in motion — wings sculpted, textures untamed.',
    symbolism: 'Layered wings, sheer fabrics, translucent panels, luminous rebirth.',
    designLanguage: 'Sculptural wing silhouettes, shimmering organza overlays, gradient tulle with millinery wire boning.',
    materials: ['Glitter Silk Organza', 'Millinery Wire Framework', 'Silk Satin Lining', 'Micro-Sequin on Stretch Mesh'],
    palette: [
      { name: 'Amethyst Violet', hex: '#4A1E5C' },
      { name: 'Petal Rose', hex: '#C76D8D' },
      { name: 'Cyan Iridescence', hex: '#298F9E' },
      { name: 'Gilded Gold', hex: '#D4AF37' }
    ],
    sketchGallery: [
      { src: '/images/butterfly/butterfly-transformation-breakdown.jpg', title: 'Atelier Technical Breakdown' },
      { src: '/images/butterfly/butterfly-couture-runway-duo.jpg', title: 'Runway Duo Transformation' },
      { src: '/images/butterfly/butterfly-celestial-peplum.png', title: 'Celestial Wing Peplum' }
    ]
  },
  leopard: {
    id: 'leopard',
    name: 'The Leopard',
    latin: 'Panthera Pardus',
    identity: 'Confidence',
    accentColor: '#B89047',
    accentText: 'text-[#B89047]',
    bgHero: 'from-[#2A1F10] via-[#1C160B] to-[#100D07]',
    heroImage: '/images/leopard/leopard-runway-cascade-ballgown.jpg',
    deckQuote: 'She moves with predatory certainty. The animal is a symbol — not a costume.',
    symbolism: 'Bold rosette prints, sharp architectural silhouettes, sleek textures.',
    designLanguage: 'Precision tailored pencil sheaths, sweeping volumetric silk brocade petal ballgowns, and structured organza capelets.',
    materials: ['Italian Silk Brocade', 'Satin Duchesse', 'Hand-Painted Rosette Organza', 'Cruelty-Free Crepe'],
    palette: [
      { name: 'Tuscan Gold', hex: '#C5A059' },
      { name: 'Desert Sand', hex: '#D9C8B3' },
      { name: 'Jet Noir', hex: '#0D0D0D' },
      { name: 'Sable Umber', hex: '#5A3825' }
    ],
    sketchGallery: [
      { src: '/images/leopard/leopard-modular-collection-breakdown.jpg', title: 'Atelier Modular Sketches' },
      { src: '/images/leopard/leopard-modular-composition-matrix.jpg', title: 'Modular Composition Matrix' },
      { src: '/images/leopard/leopard-couture-vs-column-cape.jpg', title: 'Couture Cape vs Column Study' }
    ]
  },
  peacock: {
    id: 'peacock',
    name: 'The Peacock',
    latin: 'Pavo Cristatus',
    identity: 'Individuality',
    accentColor: '#0D4D5C',
    accentText: 'text-[#298F9E]',
    bgHero: 'from-[#0B252E] via-[#07191F] to-[#040E12]',
    heroImage: '/images/peacock/peacock-couture-gown.jpg',
    deckQuote: 'She commands attention not by volume, but by the iridescence of her authenticity.',
    symbolism: 'Iridescence, rich saturated colours, feather-like engineered textures.',
    designLanguage: 'Azure duchesse satin corset bodice, denim-crepe flared palazzo trousers, and multi-tier peacock plumage organza train.',
    materials: ['Duchesse Satin', 'Heavy Indigo Crepe', 'Multi-Layer Organza Plumage', 'Austrian Crystals'],
    palette: [
      { name: 'Peacock Sapphire', hex: '#0D4D5C' },
      { name: 'Emerald Organza', hex: '#1E3D2F' },
      { name: 'Cyan Iridescence', hex: '#298F9E' },
      { name: '24k Gold Accents', hex: '#D4AF37' }
    ],
    sketchGallery: [
      { src: '/images/peacock/peacock-couture-gown.jpg', title: 'Technical Corset & Feather Train' },
      { src: '/images/peacock/peacock-statement-trousers.jpg', title: 'Denim/Chambray Flared Base Design' }
    ]
  },
  swan: {
    id: 'swan',
    name: 'The Swan',
    latin: 'Cygnus Olor',
    identity: 'Grace',
    accentColor: '#A9A49B',
    accentText: 'text-[#DDD6CA]',
    bgHero: 'from-[#1C2026] via-[#14171C] to-[#0A0C0E]',
    heroImage: '/images/swan/swan-grand-couture-ballgown.jpg',
    deckQuote: 'True authority resides in stillness. She glides effortlessly across every room.',
    symbolism: 'Fluid curves, pearls, engineered plumage, statuesque stillness.',
    designLanguage: 'Tailored V-neck vest suiting with raw denim insets, transforming into a grand ballgown with sculptural organza wing belt and feathered headpiece.',
    materials: ['Alabaster Crepe', 'Engineered Synthetic Down', 'Liquid Silver Organza', 'Black Velvet'],
    palette: [
      { name: 'Alabaster White', hex: '#F6F3EE' },
      { name: 'Liquid Silver', hex: '#D8D4CE' },
      { name: 'Noir Swan Velvet', hex: '#0D0D0D' },
      { name: 'Cerulean Mist', hex: '#6B8EAE' }
    ],
    sketchGallery: [
      { src: '/images/swan/swan-collective-master-board.jpg', title: 'Master Atelier Mood & Sketch Board' },
      { src: '/images/swan/swan-transformation-duo.jpg', title: 'Casual Vest Suit vs Swan Couture' },
      { src: '/images/swan/swan-liquid-silver-gown.jpg', title: 'Liquid Silver Flowing Ensemble' },
      { src: '/images/swan/swan-noir-swan.jpg', title: 'The Noir Swan Variations' }
    ]
  },
  tiger: {
    id: 'tiger',
    name: 'The Tiger',
    latin: 'Panthera Tigris',
    identity: 'Strength',
    accentColor: '#B45A1D',
    accentText: 'text-[#B45A1D]',
    bgHero: 'from-[#2C180E] via-[#1B0F09] to-[#0D0704]',
    heroImage: '/images/tiger/tiger-couture-gown.jpg',
    deckQuote: 'She commands without posture. Her silhouette is forged in apex power.',
    symbolism: 'Powerful cuts, structured architectural forms, bold textures.',
    designLanguage: 'Floor-skimming fluted black column dress with detachable striped structural sleeves, accordion overskirt, and 18k brushed gold tiger head shoulder armor.',
    materials: ['Super 140s Wool Twill', 'Velvet Tiger Insets', 'Micro-Pleated Satin', 'Brass Casting Hardware'],
    palette: [
      { name: 'Tiger Rust', hex: '#B45A1D' },
      { name: 'Charcoal Shadow', hex: '#333333' },
      { name: 'Obsidian Noir', hex: '#111111' },
      { name: 'Brushed Brass', hex: '#D4AF37' }
    ],
    sketchGallery: [
      { src: '/images/tiger/tiger-couture-gown.jpg', title: 'Fluted Dress with Detachable Sleeves' },
      { src: '/images/tiger/tiger-statement-blazer.jpg', title: 'Tailored Blazer & Metallic Head Piece' }
    ]
  },
  jellyfish: {
    id: 'jellyfish',
    name: 'The Jellyfish',
    latin: 'Aurelia Aurita',
    identity: 'Fluidity',
    accentColor: '#8A699C',
    accentText: 'text-[#8A699C]',
    bgHero: 'from-[#1E1428] via-[#130D1A] to-[#0A070E]',
    heroImage: '/images/jellyfish/jellyfish-couture-gown.jpg',
    deckQuote: 'Ethereal and unconstrained. She moves with the pulse of deep ocean currents.',
    symbolism: 'Flowing layers, ruffles, sheer fabrics, ethereal bioluminescent movement.',
    designLanguage: 'Bell-domed beaded overskirt with floating tendril sleeves, paired with sheer collared bolero shrug and cascading asymmetric tulle hip pieces.',
    materials: ['Micro-Tulle', 'Phosphorescent Silk Organza', 'Freshwater Seed Pearls', 'Sandwashed Crepe'],
    palette: [
      { name: 'Pelagic Lilac', hex: '#8A699C' },
      { name: 'Seafoam Cyan', hex: '#298F9E' },
      { name: 'Midnight Charcoal', hex: '#4A4A52' },
      { name: 'Deep Sea Cerulean', hex: '#0D4D5C' }
    ],
    sketchGallery: [
      { src: '/images/jellyfish/jellyfish-couture-gown.jpg', title: 'Bell Gown & Tendril Sleeves Blueprint' },
      { src: '/images/jellyfish/jellyfish-statement-trousers.jpg', title: 'Tulle Bolero & Tiered Hip Piece' }
    ]
  }
};

export default function AnimalCollectionPage() {
  const {
    activeArchetypeId,
    openAnimalWorld,
    navigateTo
  } = useConvertelle();

  const theme = ANIMAL_THEMES[activeArchetypeId] || ANIMAL_THEMES.butterfly;
  const products = PRODUCTS_BY_COLLECTION[theme.id] || [];

  return (
    <div className="bg-[#060C05] min-h-screen text-[#E8E4DC]">
      {/* 1. Cinematic Hero Section with Dynamic Theme */}
      <div className={`relative min-h-[75vh] flex items-center bg-gradient-to-br ${theme.bgHero} text-white px-4 sm:px-6 lg:px-8 py-16 overflow-hidden`}>
        {/* Ambient background particles / glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/80 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Dossier (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] uppercase tracking-widest font-semibold mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" style={{ color: theme.accentColor }} />
              Archetype: {theme.identity} • {theme.latin}
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#FAF8F5] uppercase tracking-wide leading-none">
              {theme.name}
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-[#F0E2C8] mt-3 max-w-xl">
              “{theme.deckQuote}”
            </p>

            <p className="text-xs sm:text-sm text-[#DDD6CA] mt-5 leading-relaxed max-w-xl font-light">
              {theme.designLanguage}
            </p>

            {/* Color Palette Chips */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#B89047]">
                Chromatic Spectrum:
              </span>
              <div className="flex items-center gap-2">
                {theme.palette.map((c) => (
                  <div key={c.name} className="flex items-center gap-1.5" title={c.name}>
                    <span
                      className="w-4 h-4 rounded-full border border-white/40 shadow-sm"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-[10px] text-[#DDD6CA] hidden sm:inline">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Featured Hero Garment Presentation (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-sm overflow-hidden border border-white/25 shadow-2xl bg-black/40 group">
              <img
                src={theme.heroImage}
                alt={theme.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-[9px] uppercase tracking-widest font-semibold text-[#B89047]">
                  Couture Suite Signature
                </span>
                <h3 className="font-serif text-xl text-white">
                  {theme.name} Haute Ensemble
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Archetype Switcher Navigation Bar */}
      <div className="sticky top-16 z-30 bg-[#060C05]/95 backdrop-blur-md border-y border-[rgba(74,229,74,0.15)] px-4 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-4 scrollbar-none">
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] hidden md:inline">
            Explore Animal Worlds:
          </span>
          <div className="flex items-center gap-2 sm:gap-4">
            {Object.values(ANIMAL_THEMES).map((arch) => {
              const isActive = arch.id === theme.id;
              return (
                <button
                  key={arch.id}
                  onClick={() => openAnimalWorld(arch.id)}
                  className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-sm whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#060C05] shadow-md font-bold'
                      : 'bg-[#0A1409] text-[rgba(232,228,220,0.6)] hover:text-[#D4AF37] hover:bg-[#122410] border border-[rgba(74,229,74,0.15)]'
                  }`}
                >
                  {arch.name.replace('The ', '')} ({arch.identity})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Collection Products Showcase */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[rgba(74,229,74,0.15)] gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#D4AF37]">
              Atelier Ready-To-Wear & Couture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#E8E4DC]">
              {theme.name} Garment Collection
            </h2>
          </div>
          <p className="text-xs text-[rgba(232,228,220,0.5)]">
            {products.length} Modular Creations Available
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* 4. Original Sketches & Technical Blueprints Gallery (From PPT) */}
        <div className="mt-20 bg-[#0A1409]/90 border border-[rgba(74,229,74,0.15)] p-8 sm:p-12 rounded-sm shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#D4AF37] flex items-center gap-2 mb-2">
              <Palette className="w-3.5 h-3.5" /> From Sketchbook to Haute Runway
            </span>
            <h3 className="font-serif text-3xl text-[#E8E4DC]">
              Original Atelier Fashion Sketches
            </h3>
            <p className="text-xs text-[rgba(232,228,220,0.55)] mt-1 font-light leading-relaxed">
              Explore the hand-rendered graphite and watercolor technical illustrations from ConvertElle’s private design portfolio, documenting the exact modular engineering of detachable sleeves, peplums, and trains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {theme.sketchGallery.map((sketch, idx) => (
              <div key={idx} className="bg-[#060D06] border border-[rgba(74,229,74,0.12)] p-3 rounded-sm group hover:border-[#D4AF37]/50 transition-all">
                <div className="aspect-[4/3] bg-black/60 overflow-hidden rounded-sm border border-white/10 mb-3">
                  <img
                    src={sketch.src}
                    alt={sketch.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <h5 className="font-serif text-sm font-semibold text-[#E8E4DC]">
                  {sketch.title}
                </h5>
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37]">
                  Archival Portfolio Plate #{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Customization Callout Banner */}
        <div className="mt-16 bg-[#0B150B] text-[#FAF8F5] p-8 sm:p-12 rounded-sm border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#B89047]">
              Interactive Customization
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
              Customize {theme.name} in the Transformation Studio
            </h3>
            <p className="text-xs text-[#DDD6CA] mt-2 font-light leading-relaxed">
              Attach and detach {theme.name} components to any base column or jumpsuit. Watch the price update dynamically in real time.
            </p>
          </div>

          <button
            onClick={() => navigateTo('studio')}
            className="px-6 py-3.5 bg-[#B89047] hover:bg-[#8C6B26] text-white text-xs tracking-widest uppercase font-semibold rounded-sm flex items-center gap-2 transition-all flex-shrink-0 shadow-lg"
          >
            Launch Transformation Studio <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

