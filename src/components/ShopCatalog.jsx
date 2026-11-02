import React, { useState, useMemo } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { PRODUCTS } from '../data/productsData';
import ProductCard from './ProductCard';
import { soundscape } from '../utils/soundscape';
import {
  Sparkles, Filter, SlidersHorizontal, ArrowUpDown,
  Search, X, Check, ArrowRight, Layers, Compass
} from 'lucide-react';

export default function ShopCatalog() {
  const {
    openAnimalWorld,
    navigateTo,
    formatPrice
  } = useConvertelle();

  // Filter & Sort States
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedOccasion, setSelectedOccasion] = useState('all');
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high', 'rating'
  const [maxPrice, setMaxPrice] = useState(90000);
  const [activeSectionTab, setActiveSectionTab] = useState('all'); // 'all', 'new', 'bestsellers', 'couture', 'essentials'

  // Curated lists
  const newArrivals = useMemo(() => PRODUCTS.filter((p) => p.isNewArrival), []);
  const bestSellers = useMemo(() => PRODUCTS.filter((p) => p.isBestSeller), []);
  const couturePieces = useMemo(() => PRODUCTS.filter((p) => p.isCouture), []);
  const modularEssentials = useMemo(() => PRODUCTS.filter((p) => p.collection === 'essential' || p.category === 'base'), []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (selectedCollection !== 'all' && p.collection !== selectedCollection) return false;
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedOccasion !== 'all' && !p.occasions?.includes(selectedOccasion)) return false;
      if (p.price > maxPrice) return false;

      if (activeSectionTab === 'new' && !p.isNewArrival) return false;
      if (activeSectionTab === 'bestsellers' && !p.isBestSeller) return false;
      if (activeSectionTab === 'couture' && !p.isCouture) return false;
      if (activeSectionTab === 'essentials' && p.collection !== 'essential' && p.category !== 'base') return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCollection, selectedCategory, selectedOccasion, sortBy, maxPrice, activeSectionTab]);

  const resetFilters = () => {
    soundscape.playChime('click');
    setSelectedCollection('all');
    setSelectedCategory('all');
    setSelectedOccasion('all');
    setSortBy('featured');
    setMaxPrice(90000);
    setActiveSectionTab('all');
  };

  return (
    <div className="bg-[#060C05] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-[#E8E4DC]">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Shopping Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-[#D4AF37] flex items-center justify-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Haute E-Commerce Experience
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#E8E4DC] uppercase tracking-wide leading-none">
            The ConvertElle Archive
          </h1>
          <p className="text-xs sm:text-sm text-[rgba(232,228,220,0.55)] mt-3 font-light leading-relaxed">
            Explore our comprehensive collection of cruelty-free modular garments and detachable animal-inspired suites. Designed to transition seamlessly from morning executive summits to midnight grand galas.
          </p>
        </div>

        {/* Section Navigation Tabs (New Arrivals, Best Sellers, Couture, Essentials) */}
        <div className="flex justify-center border-b border-[rgba(74,229,74,0.15)] mb-10 overflow-x-auto scrollbar-none pb-2">
          {[
            { id: 'all', label: 'All Catalog' },
            { id: 'new', label: 'New Arrivals' },
            { id: 'bestsellers', label: 'Best Sellers' },
            { id: 'couture', label: 'Limited Edition Couture' },
            { id: 'essentials', label: 'Modular Essentials' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundscape.playChime('click');
                setActiveSectionTab(tab.id);
              }}
              className={`px-5 py-3 text-xs uppercase tracking-widest font-semibold transition-all whitespace-nowrap border-b-2 ${
                activeSectionTab === tab.id
                  ? 'border-[#D4AF37] text-[#D4AF37] font-bold'
                  : 'border-transparent text-[rgba(232,228,220,0.5)] hover:text-[#D4AF37]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6 Animal Worlds Quick Navigation Strip */}
        <div className="mb-12 bg-[#0A1409]/90 p-6 border border-[rgba(74,229,74,0.15)] rounded-sm shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#D4AF37] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" /> Explore Animal Worlds
            </span>
            <span className="text-[11px] text-[rgba(232,228,220,0.4)]">Click to enter immersive world</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { id: 'butterfly', name: 'Butterfly', identity: 'Transformation', color: '#9C427B' },
              { id: 'leopard', name: 'Leopard', identity: 'Confidence', color: '#B89047' },
              { id: 'peacock', name: 'Peacock', identity: 'Individuality', color: '#0D4D5C' },
              { id: 'swan', name: 'Swan', identity: 'Grace', color: '#A9A49B' },
              { id: 'tiger', name: 'Tiger', identity: 'Strength', color: '#B45A1D' },
              { id: 'jellyfish', name: 'Jellyfish', identity: 'Fluidity', color: '#8A699C' }
            ].map((arch) => (
              <button
                key={arch.id}
                onClick={() => openAnimalWorld(arch.id)}
                className="p-3 text-left border border-[rgba(74,229,74,0.12)] rounded-sm hover:border-[#D4AF37] bg-[#060D06] hover:bg-[#101E0F] transition-all group"
              >
                <div className="w-2.5 h-2.5 rounded-full mb-2" style={{ backgroundColor: arch.color }} />
                <span className="block font-serif text-sm font-semibold text-[#E8E4DC] group-hover:text-[#D4AF37] transition-colors">
                  {arch.name}
                </span>
                <span className="block text-[9px] uppercase tracking-wider text-[rgba(232,228,220,0.45)]">
                  {arch.identity}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Filters and Sorting Control Bar */}
        <div className="bg-[#0A1409]/90 p-4 sm:p-5 border border-[rgba(74,229,74,0.15)] rounded-sm mb-8 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between shadow-xl">
          {/* Left: Quick Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Collection Filter */}
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="p-2 bg-[#060D06] border border-[rgba(74,229,74,0.18)] text-xs text-[#E8E4DC] rounded-sm focus:border-[#D4AF37] outline-none"
            >
              <option value="all" className="bg-[#060D06] text-[#E8E4DC]">All Collections</option>
              <option value="butterfly" className="bg-[#060D06] text-[#E8E4DC]">The Butterfly (Transformation)</option>
              <option value="leopard" className="bg-[#060D06] text-[#E8E4DC]">The Leopard (Confidence)</option>
              <option value="peacock" className="bg-[#060D06] text-[#E8E4DC]">The Peacock (Individuality)</option>
              <option value="swan" className="bg-[#060D06] text-[#E8E4DC]">The Swan (Grace)</option>
              <option value="tiger" className="bg-[#060D06] text-[#E8E4DC]">The Tiger (Strength)</option>
              <option value="jellyfish" className="bg-[#060D06] text-[#E8E4DC]">The Jellyfish (Fluidity)</option>
              <option value="essential" className="bg-[#060D06] text-[#E8E4DC]">Modular Essentials</option>
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 bg-[#060D06] border border-[rgba(74,229,74,0.18)] text-xs text-[#E8E4DC] rounded-sm focus:border-[#D4AF37] outline-none"
            >
              <option value="all" className="bg-[#060D06] text-[#E8E4DC]">All Categories</option>
              <option value="base" className="bg-[#060D06] text-[#E8E4DC]">Base Garments</option>
              <option value="couture-set" className="bg-[#060D06] text-[#E8E4DC]">Haute Couture Suites</option>
              <option value="overskirt" className="bg-[#060D06] text-[#E8E4DC]">Overskirts & Trains</option>
              <option value="bolero" className="bg-[#060D06] text-[#E8E4DC]">Boleros & Capelets</option>
              <option value="accessory" className="bg-[#060D06] text-[#E8E4DC]">Detachable Accessories</option>
            </select>

            {/* Occasion Filter */}
            <select
              value={selectedOccasion}
              onChange={(e) => setSelectedOccasion(e.target.value)}
              className="p-2 bg-[#060D06] border border-[rgba(74,229,74,0.18)] text-xs text-[#E8E4DC] rounded-sm focus:border-[#D4AF37] outline-none"
            >
              <option value="all" className="bg-[#060D06] text-[#E8E4DC]">All Occasions</option>
              <option value="Gala" className="bg-[#060D06] text-[#E8E4DC]">Grand Gala</option>
              <option value="Cocktail" className="bg-[#060D06] text-[#E8E4DC]">Cocktail & Terrace</option>
              <option value="Dinner" className="bg-[#060D06] text-[#E8E4DC]">Dinner Salon</option>
              <option value="Conference" className="bg-[#060D06] text-[#E8E4DC]">Conference & Summit</option>
              <option value="Office" className="bg-[#060D06] text-[#E8E4DC]">Executive Office</option>
              <option value="Party" className="bg-[#060D06] text-[#E8E4DC]">Evening Party</option>
            </select>

            {/* Price Slider */}
            <div className="flex items-center gap-2 text-xs text-[rgba(232,228,220,0.6)] px-2 bg-[#060D06] border border-[rgba(74,229,74,0.18)] rounded-sm py-1">
              <span>Under: <strong className="text-[#D4AF37]">{formatPrice(maxPrice)}</strong></span>
              <input
                type="range"
                min="10000"
                max="90000"
                step="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-24 accent-[#D4AF37] cursor-pointer"
              />
            </div>

            {(selectedCollection !== 'all' || selectedCategory !== 'all' || selectedOccasion !== 'all' || maxPrice < 90000) && (
              <button
                onClick={resetFilters}
                className="text-xs text-[rgba(232,228,220,0.4)] hover:text-[#D4AF37] flex items-center gap-1 underline transition-colors"
              >
                <X className="w-3.5 h-3.5" /> Clear Filters
              </button>
            )}
          </div>

          {/* Right: Sort and Count */}
          <div className="flex items-center justify-between lg:justify-end gap-4 pt-3 lg:pt-0 border-t lg:border-t-0 border-[rgba(74,229,74,0.12)]">
            <span className="text-xs text-[rgba(232,228,220,0.5)]">
              Showing <strong className="text-[#D4AF37]">{filteredProducts.length}</strong> creations
            </span>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[rgba(232,228,220,0.45)]">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-1.5 bg-[#060D06] border border-[rgba(74,229,74,0.18)] text-xs text-[#E8E4DC] rounded-sm focus:border-[#D4AF37] outline-none"
              >
                <option value="featured" className="bg-[#060D06] text-[#E8E4DC]">Featured Atelier</option>
                <option value="price-low" className="bg-[#060D06] text-[#E8E4DC]">Price: Low to High</option>
                <option value="price-high" className="bg-[#060D06] text-[#E8E4DC]">Price: High to Low</option>
                <option value="rating" className="bg-[#060D06] text-[#E8E4DC]">Client Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#0A1409]/90 border border-[rgba(74,229,74,0.15)] p-16 text-center rounded-sm">
            <p className="font-serif text-2xl text-[#E8E4DC] mb-2">No Garments Found</p>
            <p className="text-xs text-[rgba(232,228,220,0.5)] mb-6">Try adjusting your filters or price ceiling.</p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-[#D4AF37] text-[#060C05] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#B89047] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Editorial Campaign Banner Divider (Section 2) */}
        <div className="mt-20 bg-[#1A1815] text-[#FAF8F5] p-8 sm:p-14 rounded-sm border border-[#B89047]/40 shadow-xl relative overflow-hidden text-center">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#B89047] block mb-2">
              Artistic Inspiration — Briton Rivière (1902)
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F0E2C8] leading-snug">
              “The animal is a symbol — not a costume.”
            </h3>
            <p className="text-xs sm:text-sm text-[#DDD6CA] mt-4 font-light leading-relaxed">
              ConvertElle draws inspiration from the idea expressed in <em>Aphrodite</em>: the powerful relationship between womanhood and the natural world. Impeccable formalwear transformed through modular biomimicry with zero animal cruelty.
            </p>
            <div className="mt-6">
              <button
                onClick={() => navigateTo('quiz')}
                className="px-6 py-3 bg-[#B89047] hover:bg-[#8C6B26] text-white text-xs tracking-widest uppercase font-semibold rounded-sm transition-all shadow-md inline-flex items-center gap-2"
              >
                Discover Your Animal Identity <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

