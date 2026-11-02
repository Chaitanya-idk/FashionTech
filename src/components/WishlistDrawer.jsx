import React from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { PRODUCTS_BY_ID } from '../data/productsData';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export default function WishlistDrawer() {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    openProductDetail,
    addToCart,
    formatPrice,
    navigateTo
  } = useConvertelle();

  if (!isWishlistOpen) return null;

  const wishlistProducts = wishlist.map((id) => PRODUCTS_BY_ID[id]).filter(Boolean);

  const handleMoveToBag = (product) => {
    addToCart(product, { size: 'M' });
    toggleWishlist(product.id);
  };

  const handleAddAllToBag = () => {
    wishlistProducts.forEach((p) => {
      addToCart(p, { size: 'M' });
    });
  };

  return (
    <div className="fixed inset-0 z-[130] flex justify-end bg-[#1A1815]/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#DDD6CA] animate-slide-left">
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#E8E2D8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#B89047] fill-current" />
            <h2 className="font-serif text-2xl text-[#1A1815]">Private Wishlist</h2>
            <span className="text-xs bg-[#F2EDE4] text-[#8C6B26] px-2 py-0.5 rounded-full font-semibold">
              {wishlistProducts.length}
            </span>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 rounded-full hover:bg-[#F2EDE4] text-[#1A1815] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="py-20 text-center text-[#666057]">
              <Heart className="w-10 h-10 mx-auto text-[#DDD6CA] stroke-1 mb-3" />
              <p className="font-serif text-xl mb-1 text-[#1A1815]">Your Wishlist is Empty</p>
              <p className="text-xs text-[#999083] mb-6">Curate your dream capsule by tapping the heart icon on any piece.</p>
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  navigateTo('shop');
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B89047] text-white text-xs tracking-widest uppercase font-semibold rounded-sm hover:bg-[#8C6B26] transition-colors"
              >
                Explore Collection <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            wishlistProducts.map((p) => (
              <div
                key={p.id}
                className="flex gap-4 p-3 bg-white border border-[#E8E2D8] rounded-sm hover:border-[#B89047]/40 transition-colors"
              >
                {/* Thumbnail */}
                <div
                  onClick={() => {
                    setIsWishlistOpen(false);
                    openProductDetail(p.id);
                  }}
                  className="w-20 h-26 bg-[#FAF8F5] overflow-hidden border border-[#E8E2D8] flex-shrink-0 cursor-pointer"
                >
                  <img src={p.images.primary} alt={p.name} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] tracking-widest uppercase font-semibold text-[#8C6B26]">
                        {p.collectionName}
                      </span>
                      <button
                        onClick={() => toggleWishlist(p.id)}
                        className="text-[#999083] hover:text-red-700 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4
                      onClick={() => {
                        setIsWishlistOpen(false);
                        openProductDetail(p.id);
                      }}
                      className="font-serif text-sm font-semibold text-[#1A1815] hover:text-[#8C6B26] cursor-pointer line-clamp-1 mt-0.5"
                    >
                      {p.name}
                    </h4>

                    <p className="font-serif text-sm font-bold text-[#1A1815] mt-1">
                      {formatPrice(p.price)}
                    </p>
                  </div>

                  {/* Move to bag button */}
                  <button
                    onClick={() => handleMoveToBag(p)}
                    className="mt-2 py-1.5 px-3 bg-[#1A1815] hover:bg-[#B89047] text-white text-[9px] tracking-widest uppercase font-semibold rounded-sm flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ShoppingBag className="w-3 h-3" /> Move to Bag
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistProducts.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E8E2D8] space-y-3">
            <button
              onClick={handleAddAllToBag}
              className="w-full py-3 bg-[#B89047] hover:bg-[#8C6B26] text-white text-xs tracking-widest uppercase font-semibold rounded-sm flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <ShoppingBag className="w-4 h-4" /> Move All Items to Bag
            </button>
            <p className="text-[10px] text-center text-[#999083] uppercase tracking-wider">
              Complimentary White-Glove Atelier Packaging Included
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

