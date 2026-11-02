import React, { useState } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { Sparkles, Shield, HeartHandshake, Check, ArrowRight } from 'lucide-react';

export default function Footer() {
  const { navigateTo, openAnimalWorld } = useConvertelle();
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative bg-[#1A1815] text-[#FAF8F5] pt-20 pb-12 border-t border-[#B89047]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Newsletter Box */}
        <div className="p-8 sm:p-12 rounded-sm bg-[#24211C] border border-[#B89047]/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#B89047]/40 bg-[#1A1815] text-[10px] uppercase font-mono tracking-widest text-[#B89047] font-bold">
                <Sparkles className="w-3 h-3 text-[#B89047]" />
                <span>ConvertElle Private Circle</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#FAF8F5]">
                Be the first to access limited FAUNA drops.
              </h3>
              <p className="text-xs text-[#DDD6CA] font-light max-w-lg leading-relaxed">
                Receive private invites to our seasonal archetype releases and bespoke fitting salons across Mumbai, Paris, London, and New York.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-sm bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Welcome to the Private Circle. Your atelier invite is registered.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 px-4 py-3 rounded-sm bg-[#1A1815] border border-[#DDD6CA]/30 text-white text-xs placeholder:text-[#999083] focus:border-[#B89047] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-sm bg-[#B89047] hover:bg-[#8C6B26] text-white font-semibold text-xs uppercase tracking-widest transition-colors shadow-sm"
                  >
                    Request Entry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4 Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs border-b border-white/10 pb-12">
          {/* Col 1: Brand & Wordmark */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-cinzel tracking-[0.25em] text-xl font-bold text-[#F0E2C8]">
                CONVERTELLE
              </span>
            </div>
            <p className="text-xs text-[#DDD6CA] leading-relaxed font-light max-w-sm">
              ConvertElle is a modular luxury fashion brand created for the modern woman who refuses to be defined by a single identity. We transform sophisticated formalwear into expressive evening and couture looks through interchangeable and detachable elements.
            </p>
            <p className="text-[11px] font-serif italic text-[#B89047]">
              “One woman. Many identities. One garment. Endless possibilities.”
            </p>
          </div>

          {/* Col 2: The 6 Animal Worlds */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#B89047] font-semibold">
              The 6 Animal Worlds
            </h4>
            <ul className="space-y-2 text-[#DDD6CA]">
              <li>
                <button onClick={() => openAnimalWorld('butterfly')} className="hover:text-white transition-colors">
                  The Butterfly (Transformation)
                </button>
              </li>
              <li>
                <button onClick={() => openAnimalWorld('leopard')} className="hover:text-white transition-colors">
                  The Leopard (Confidence)
                </button>
              </li>
              <li>
                <button onClick={() => openAnimalWorld('peacock')} className="hover:text-white transition-colors">
                  The Peacock (Individuality)
                </button>
              </li>
              <li>
                <button onClick={() => openAnimalWorld('swan')} className="hover:text-white transition-colors">
                  The Swan (Grace)
                </button>
              </li>
              <li>
                <button onClick={() => openAnimalWorld('tiger')} className="hover:text-white transition-colors">
                  The Tiger (Strength)
                </button>
              </li>
              <li>
                <button onClick={() => openAnimalWorld('jellyfish')} className="hover:text-white transition-colors">
                  The Jellyfish (Fluidity)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Experiences & Features */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#B89047] font-semibold">
              Atelier Experiences
            </h4>
            <ul className="space-y-2 text-[#DDD6CA]">
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-white transition-colors">
                  Complete Product Archive
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('studio')} className="hover:text-white transition-colors">
                  Transformation Studio
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('forest')} className="hover:text-white transition-colors">
                  The Digital Forest Explorer
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('quiz')} className="hover:text-white transition-colors">
                  Animal Persona Quiz
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('journal')} className="hover:text-white transition-colors">
                  The ConvertElle Journal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Commitments & Manifesto */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#B89047] font-semibold">
              Our Commitments
            </h4>
            <ul className="space-y-2 text-[#DDD6CA]">
              <li className="flex items-center gap-1.5 text-emerald-400">
                <Check className="w-3.5 h-3.5" /> 100% Cruelty-Free Vegan Silk
              </li>
              <li className="flex items-center gap-1.5 text-[#DDD6CA]">
                <Shield className="w-3.5 h-3.5 text-[#B89047]" /> Neodymium Docking Systems
              </li>
              <li className="flex items-center gap-1.5 text-[#DDD6CA]">
                <HeartHandshake className="w-3.5 h-3.5 text-[#B89047]" /> Carbon-Neutral Weaving
              </li>
              <li>Aphrodite 1902 Artistic Direction</li>
              <li>Simulated E-Commerce Academic Project</li>
            </ul>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#999083] gap-4">
          <p>© 2026 ConvertElle Luxury Fashion House. All rights reserved.</p>
          <p className="tracking-wider uppercase text-[10px]">
            Academic Fashion-Tech Demonstration • All Prices Shown in INR (₹)
          </p>
        </div>
      </div>
    </footer>
  );
}
