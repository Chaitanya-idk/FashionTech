import React, { useState, useEffect } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { ShoppingBag, Heart, Search, Volume2, VolumeX, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { currentView, navigateTo, cartCount, setIsCartOpen, wishlistCount,
    setIsWishlistOpen, setIsSearchOpen, soundEnabled, toggleSound } = useConvertelle();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'The Forest', view: 'forest' },
    { label: 'Collections', view: 'shop' },
    { label: 'Studio', view: 'studio' },
    { label: 'Discover', view: 'quiz' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || currentView !== 'home'
        ? 'bg-[#060C05]/90 backdrop-blur-xl border-b border-[rgba(74,229,74,0.1)] py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => navigateTo('home')} className="group flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 60 60" className="animate-float" style={{animationDuration:'6s'}}>
            <path d="M18,12 C30,4 50,22 30,42 C22,30 20,22 18,12Z" fill="#B89047" opacity="0.9"/>
            <path d="M42,12 C30,4 10,22 30,42 C38,30 40,22 42,12Z" fill="#D4AF37" opacity="0.7"/>
            <ellipse cx="30" cy="44" rx="4" ry="6" fill="#B89047" opacity="0.6"/>
          </svg>
          <div>
            <span className="font-cinzel text-sm tracking-[0.3em] text-[#D4AF37] font-semibold uppercase">ConvertElle</span>
            <div className="text-[8px] tracking-[0.35em] text-[rgba(74,229,74,0.6)] uppercase font-light leading-none">Forest of Forms</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, view }) => (
            <button
              key={view}
              onClick={() => navigateTo(view)}
              className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-300 relative group ${
                currentView === view ? 'text-[#D4AF37]' : 'text-[rgba(232,228,220,0.6)] hover:text-[#D4AF37]'
              }`}
            >
              {label}
              <span className={`absolute -bottom-1 left-0 h-px bg-[#D4AF37] transition-all duration-300 ${currentView === view ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button onClick={() => setIsSearchOpen(true)} className="p-2 text-[rgba(232,228,220,0.5)] hover:text-[#D4AF37] transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button onClick={toggleSound} className="p-2 text-[rgba(232,228,220,0.5)] hover:text-[rgba(74,229,74,0.8)] transition-colors">
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button onClick={() => setIsWishlistOpen(true)} className="p-2 relative text-[rgba(232,228,220,0.5)] hover:text-[#D4AF37] transition-colors">
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && <span className="absolute top-1 right-1 w-3.5 h-3.5 text-[8px] bg-[#B89047] text-white rounded-full flex items-center justify-center font-bold">{wishlistCount}</span>}
          </button>
          <button onClick={() => setIsCartOpen(true)} className="p-2 relative text-[rgba(232,228,220,0.5)] hover:text-[#D4AF37] transition-colors">
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && <span className="absolute top-1 right-1 w-3.5 h-3.5 text-[8px] bg-[#B89047] text-white rounded-full flex items-center justify-center font-bold">{cartCount}</span>}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-[rgba(232,228,220,0.6)] hover:text-white">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#060C05]/98 backdrop-blur-xl border-b border-[rgba(74,229,74,0.1)] py-6 px-5 space-y-4 animate-fade-in">
          {navLinks.map(({ label, view }) => (
            <button key={view} onClick={() => { navigateTo(view); setMobileOpen(false); }}
              className="block w-full text-left text-sm tracking-widest uppercase text-[rgba(232,228,220,0.7)] hover:text-[#D4AF37] transition-colors py-2">
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
