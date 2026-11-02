import React, { useState, useMemo } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { PRODUCTS } from '../data/productsData';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, openProductDetail, formatPrice } = useConvertelle();
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle?.toLowerCase().includes(q) ||
        p.collectionName?.toLowerCase().includes(q) ||
        p.categoryName?.toLowerCase().includes(q) ||
        p.occasions?.some((occ) => occ.toLowerCase().includes(q)) ||
        p.fabricSpecs?.composition?.toLowerCase().includes(q)
    );
  }, [query]);

  const quickPicks = [
    'Metamorphosis',
    'Ballgown Overskirt',
    'Peacock Feather',
    'Tiger Blazer',
    'Swan Plumes',
    'Jellyfish Bolero',
    'Gala Couture',
    'Modular Column'
  ];

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-[#1A1815]/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-3xl bg-[#FAF8F5] border border-[#DDD6CA] shadow-2xl rounded-sm overflow-hidden animate-scale-up">
        {/* Header Search Input */}
        <div className="relative flex items-center border-b border-[#DDD6CA] px-6 py-4 bg-white">
          <Search className="w-5 h-5 text-[#B89047] mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search silhouettes, animal collections, gala couture, modular kits..."
            className="w-full bg-transparent text-[#1A1815] placeholder-[#999083] text-base focus:outline-none font-serif tracking-wide"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 mr-2 text-[#999083] hover:text-[#1A1815]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 rounded-full hover:bg-[#F2EDE4] text-[#1A1815] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Picks / Suggestions */}
        {!query && (
          <div className="p-6 bg-[#FAF8F5]">
            <p className="text-[10px] tracking-widest uppercase font-semibold text-[#8C6B26] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> Popular Inquiries
            </p>
            <div className="flex flex-wrap gap-2">
              {quickPicks.map((item) => (
                <button
                  key={item}
                  onClick={() => setQuery(item)}
                  className="px-3.5 py-1.5 text-xs bg-white border border-[#DDD6CA] text-[#33302B] hover:border-[#B89047] hover:text-[#B89047] transition-colors rounded-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-[#E8E2D8] bg-white">
          {query && searchResults.length === 0 ? (
            <div className="p-12 text-center text-[#666057]">
              <p className="font-serif text-lg mb-1">No couture garments found for “{query}”</p>
              <p className="text-xs text-[#999083]">Try searching by collection (Butterfly, Swan, Leopard) or category (Overskirt, Sleeves, Base).</p>
            </div>
          ) : (
            searchResults.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  openProductDetail(product.id);
                  setIsSearchOpen(false);
                }}
                className="group flex items-center justify-between p-4 hover:bg-[#F2EDE4]/60 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-18 bg-[#FAF8F5] overflow-hidden border border-[#E8E2D8] flex-shrink-0">
                    <img
                      src={product.images.primary}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] tracking-widest uppercase font-bold text-[#B89047]">
                      {product.collectionName} • {product.categoryName}
                    </span>
                    <h4 className="font-serif text-base text-[#1A1815] group-hover:text-[#8C6B26] transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#666057] line-clamp-1">{product.subtitle}</p>
                  </div>
                </div>

                <div className="text-right flex items-center gap-4">
                  <span className="font-serif text-sm font-semibold text-[#1A1815]">
                    {formatPrice(product.price)}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#B89047] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#FAF8F5] border-t border-[#DDD6CA] text-[11px] text-[#666057] flex justify-between items-center">
          <span>{searchResults.length} creations matching your search</span>
          <span className="tracking-wider uppercase text-[9px] text-[#8C6B26]">Press ESC or click outside to dismiss</span>
        </div>
      </div>
    </div>
  );
}

