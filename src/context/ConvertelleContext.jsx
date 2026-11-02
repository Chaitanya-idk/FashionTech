import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS, PRODUCTS_BY_ID } from '../data/productsData';
import { soundscape } from '../utils/soundscape';

const ConvertelleContext = createContext(null);

const STORAGE_KEYS = {
  CART: 'convertelle_cart_v2',
  WISHLIST: 'convertelle_wishlist_v2',
  RECENTLY_VIEWED: 'convertelle_recent_v2',
  STYLE_PROFILE: 'convertelle_style_profile_v2',
  SOUND: 'convertelle_sound_v2'
};

export function ConvertelleProvider({ children }) {
  // Navigation State
  const [currentView, setCurrentView] = useState('home'); // 'home', 'shop', 'product-detail', 'animal', 'studio', 'quiz', 'forest', 'journal'
  const [activeProductId, setActiveProductId] = useState('ce-bf-01');
  const [activeArchetypeId, setActiveArchetypeId] = useState('butterfly');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [completedOrder, setCompletedOrder] = useState(null);

  // Sound State
  const [soundEnabled, setSoundEnabled] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SOUND);
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  // Cart State (Persisted)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CART);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load cart from storage', e);
    }
    // Initial luxury starter piece
    return [
      {
        cartId: 'starter-bf-01',
        productId: 'ce-bf-01',
        name: 'Sovereign Metamorphosis Couture Gown',
        subtitle: 'Micro-Sequin Column with Sculpted Organza Wings',
        image: '/images/butterfly/butterfly-couture-gold.png',
        price: 78500,
        size: 'M',
        color: 'Gilded Amber Gold',
        quantity: 1,
        isCustomEnsemble: true,
        customComponents: [
          'Millinery-Wire Organza Epaulet Wings',
          'Graduated Lepidoptera Peplum',
          'Floor-Length Sculptural Train'
        ]
      }
    ];
  });

  // Gift Packaging (+₹1,500)
  const [giftPackaging, setGiftPackaging] = useState(true);

  // Wishlist State (Persisted)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      return saved ? JSON.parse(saved) : ['ce-lp-01', 'ce-sw-01', 'ce-tg-01'];
    } catch {
      return ['ce-lp-01', 'ce-sw-01', 'ce-tg-01'];
    }
  });

  // Recently Viewed (Persisted)
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED);
      return saved ? JSON.parse(saved) : ['ce-bf-01', 'ce-lp-01', 'ce-pc-01'];
    } catch {
      return ['ce-bf-01', 'ce-lp-01', 'ce-pc-01'];
    }
  });

  // Style Profile from Quiz (Persisted)
  const [styleProfile, setStyleProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STYLE_PROFILE);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Garment Comparison List (up to 3 items)
  const [comparisonIds, setComparisonIds] = useState(['ce-bf-01', 'ce-lp-01']);

  // Filters State
  const [filters, setFilters] = useState({
    collection: 'all',
    category: 'all',
    occasion: 'all',
    sort: 'featured',
    maxPrice: 100000
  });

  // Notification Toast
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  // Sync state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RECENTLY_VIEWED, JSON.stringify(recentlyViewed));
    } catch (e) {}
  }, [recentlyViewed]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.STYLE_PROFILE, JSON.stringify(styleProfile));
    } catch (e) {}
  }, [styleProfile]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SOUND, JSON.stringify(soundEnabled));
      soundscape.toggleAmbient(soundEnabled);
    } catch (e) {}
  }, [soundEnabled]);

  // Calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = cartSubtotal > 30000 ? 0 : 2500;
  const packagingFee = giftPackaging ? 1500 : 0;
  const estimatedTax = Math.round(cartSubtotal * 0.05); // 5% luxury textile GST
  const cartTotal = cartSubtotal + shippingCost + packagingFee + estimatedTax;

  // Actions
  const addToCart = (productOrCustom, options = {}) => {
    soundscape.playChime('addToCart');
    setCart((prev) => {
      // Check if item already exists with matching size/color/specs
      const incomingId = productOrCustom.cartId || `${productOrCustom.id || productOrCustom.productId}-${options.size || 'M'}-${options.color || 'Standard'}`;
      const existingIndex = prev.findIndex((item) => item.cartId === incomingId);

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + (options.quantity || 1)
        };
        return next;
      }

      const newItem = {
        cartId: incomingId,
        productId: productOrCustom.id || productOrCustom.productId,
        name: productOrCustom.name,
        subtitle: productOrCustom.subtitle || '',
        image: productOrCustom.image || productOrCustom.images?.primary || '/images/fauna-intro.jpg',
        price: productOrCustom.price,
        size: options.size || 'M',
        color: options.color || productOrCustom.colorOptions?.[0]?.name || 'Signature',
        quantity: options.quantity || 1,
        isCustomEnsemble: !!productOrCustom.isCustomEnsemble,
        customComponents: productOrCustom.customComponents || []
      };

      return [newItem, ...prev];
    });

    showToast(`Added to your Shopping Bag — ${productOrCustom.name}`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId) => {
    soundscape.playChime('click');
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, delta) => {
    soundscape.playChime('click');
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId) => {
    soundscape.playChime('click');
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to your Private Wishlist');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  const addRecentlyViewed = (productId) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      return [productId, ...filtered].slice(0, 8);
    });
  };

  const toggleComparison = (productId) => {
    soundscape.playChime('click');
    setComparisonIds((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      if (prev.length >= 3) {
        showToast('Maximum 3 garments can be compared at once.');
        return prev;
      }
      showToast('Added to Garment Comparison');
      return [...prev, productId];
    });
  };

  const openProductDetail = (productId) => {
    setActiveProductId(productId);
    addRecentlyViewed(productId);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAnimalWorld = (archetypeId) => {
    setActiveArchetypeId(archetypeId);
    setCurrentView('animal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuickViewModal = (product) => {
    soundscape.playChime('click');
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickViewModal = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  const navigateTo = (view, payload = {}) => {
    soundscape.playChime('click');
    if (view === 'product-detail' && payload.productId) {
      openProductDetail(payload.productId);
      return;
    }
    if (view === 'animal' && payload.archetypeId) {
      openAnimalWorld(payload.archetypeId);
      return;
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      soundscape.toggleAmbient(true);
      showToast('Ethereal Soundscape Active');
    } else {
      soundscape.toggleAmbient(false);
      showToast('Soundscape Muted');
    }
  };

  const formatPrice = (amount) => {
    return `₹${Number(amount).toLocaleString('en-IN')}`;
  };

  return (
    <ConvertelleContext.Provider
      value={{
        // View State
        currentView,
        setCurrentView,
        activeProductId,
        activeArchetypeId,
        openProductDetail,
        openAnimalWorld,
        navigateTo,

        // Cart
        cart,
        cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
        cartSubtotal,
        shippingCost,
        packagingFee,
        estimatedTax,
        cartTotal,
        giftPackaging,
        setGiftPackaging,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,

        // Wishlist
        wishlist,
        wishlistCount: wishlist.length,
        toggleWishlist,
        isInWishlist,
        isWishlistOpen,
        setIsWishlistOpen,

        // Recently Viewed & Comparison
        recentlyViewed,
        comparisonIds,
        toggleComparison,
        isComparisonOpen,
        setIsComparisonOpen,

        // Quick View
        isQuickViewOpen,
        quickViewProduct,
        openQuickViewModal,
        closeQuickViewModal,

        // Checkout & Orders
        isCheckoutOpen,
        setIsCheckoutOpen,
        checkoutStep,
        setCheckoutStep,
        completedOrder,
        setCompletedOrder,

        // Quiz Style Profile
        styleProfile,
        setStyleProfile,

        // Filters & Search
        filters,
        setFilters,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,

        // Sound & Toast
        soundEnabled,
        toggleSound,
        toastMessage,
        showToast,
        formatPrice
      }}
    >
      {children}
    </ConvertelleContext.Provider>
  );
}

export function useConvertelle() {
  const context = useContext(ConvertelleContext);
  if (!context) {
    throw new Error('useConvertelle must be used within a ConvertelleProvider');
  }
  return context;
}

