import React from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { PRODUCTS_BY_ID } from '../data/productsData';
import { X, Trash2, ShoppingBag, Check, Layers, Sparkles } from 'lucide-react';

export default function ProductComparisonModal() {
  const {
    isComparisonOpen,
    setIsComparisonOpen,
    comparisonIds,
    toggleComparison,
    openProductDetail,
    addToCart,
    formatPrice
  } = useConvertelle();

  if (!isComparisonOpen) return null;

  const comparedProducts = comparisonIds.map((id) => PRODUCTS_BY_ID[id]).filter(Boolean);

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-[#1A1815]/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#FAF8F5] border border-[#DDD6CA] shadow-2xl rounded-sm overflow-hidden animate-scale-up max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-white border-b border-[#E8E2D8]">
          <div>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C6B26] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Atelier Analysis Matrix
            </span>
            <h2 className="font-serif text-2xl text-[#1A1815]">Garment Architecture Comparison</h2>
          </div>
          <button
            onClick={() => setIsComparisonOpen(false)}
            className="p-2 rounded-full hover:bg-[#F2EDE4] text-[#1A1815] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table / Columns */}
        <div className="p-6 overflow-x-auto overflow-y-auto flex-1">
          {comparedProducts.length === 0 ? (
            <div className="py-16 text-center text-[#666057]">
              <p className="font-serif text-lg mb-2">No garments currently selected for comparison.</p>
              <p className="text-xs">Browse the catalog and click the compare icon on any garment to evaluate architectural specifications side-by-side.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-[650px]">
              {comparedProducts.map((p) => (
                <div key={p.id} className="bg-white border border-[#E8E2D8] p-5 rounded-sm flex flex-col justify-between">
                  <div>
                    {/* Remove button */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[9px] tracking-widest uppercase font-semibold text-[#8C6B26]">
                        {p.collectionName}
                      </span>
                      <button
                        onClick={() => toggleComparison(p.id)}
                        className="text-[#999083] hover:text-red-700 p-1"
                        title="Remove from comparison"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Image */}
                    <div
                      onClick={() => {
                        setIsComparisonOpen(false);
                        openProductDetail(p.id);
                      }}
                      className="aspect-[3/4] bg-[#FAF8F5] overflow-hidden border border-[#E8E2D8] mb-4 cursor-pointer group"
                    >
                      <img
                        src={p.images.primary}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <h3
                      onClick={() => {
                        setIsComparisonOpen(false);
                        openProductDetail(p.id);
                      }}
                      className="font-serif text-lg font-semibold text-[#1A1815] hover:text-[#8C6B26] cursor-pointer line-clamp-1"
                    >
                      {p.name}
                    </h3>
                    <p className="font-serif text-xl font-bold text-[#8C6B26] mt-1 mb-4">
                      {formatPrice(p.price)}
                    </p>

                    {/* Comparison Specifications */}
                    <div className="space-y-3 text-xs border-t border-[#F2EDE4] pt-4">
                      <div>
                        <strong className="block text-[#1A1815] uppercase tracking-wider text-[10px]">Archetype & Identity</strong>
                        <span className="text-[#666057]">{p.collectionName} — {p.archetypeId.toUpperCase()}</span>
                      </div>

                      <div>
                        <strong className="block text-[#1A1815] uppercase tracking-wider text-[10px]">Category</strong>
                        <span className="text-[#666057]">{p.categoryName}</span>
                      </div>

                      <div>
                        <strong className="block text-[#1A1815] uppercase tracking-wider text-[10px]">Occasions</strong>
                        <span className="text-[#666057]">{p.occasions?.join(', ')}</span>
                      </div>

                      <div>
                        <strong className="block text-[#1A1815] uppercase tracking-wider text-[10px]">Fabric & Craftsmanship</strong>
                        <span className="text-[#666057]">{p.fabricSpecs?.composition}</span>
                      </div>

                      <div>
                        <strong className="block text-[#1A1815] uppercase tracking-wider text-[10px]">Transformation Speed</strong>
                        <span className="text-[#666057]">{p.transformationDetails?.transformationTime || 'Permanent silhouette'}</span>
                      </div>

                      <div>
                        <strong className="block text-[#1A1815] uppercase tracking-wider text-[10px]">Detachable Elements</strong>
                        <ul className="list-disc list-inside text-[#666057] mt-1 space-y-0.5">
                          {p.transformationDetails?.detachableElements?.slice(0, 3).map((elem, i) => (
                            <li key={i} className="line-clamp-1">{elem}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Add to Bag */}
                  <div className="mt-6 pt-4 border-t border-[#E8E2D8]">
                    <button
                      onClick={() => addToCart(p, { size: 'M' })}
                      className="w-full py-2.5 px-4 bg-[#B89047] hover:bg-[#8C6B26] text-white text-[10px] tracking-widest uppercase font-semibold rounded-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Add to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

