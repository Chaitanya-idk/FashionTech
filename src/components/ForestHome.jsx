import React, { useState, useEffect, useRef } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { ArrowRight, Sparkles, Compass, Layers } from 'lucide-react';

const ANIMALS = [
  {
    id: 'leopard', name: 'Leopard', identity: 'Confidence',
    color: '#C5A059', glow: 'rgba(197,160,89,0.5)', textColor: '#C5A059',
    bg: 'radial-gradient(ellipse at center, rgba(90,56,18,0.9) 0%, rgba(26,15,3,0.98) 70%)',
    description: 'Predatory grace. Sharp silhouettes. Desert gold.',
    symbol: '◈', quote: 'She owns every room before she speaks.',
    heroImg: '/images/leopard/leopard-runway-cascade-ballgown.jpg',
  },
  {
    id: 'butterfly', name: 'Butterfly', identity: 'Transformation',
    color: '#9C427B', glow: 'rgba(156,66,123,0.5)', textColor: '#C97BB0',
    bg: 'radial-gradient(ellipse at center, rgba(74,18,56,0.9) 0%, rgba(18,6,22,0.98) 70%)',
    description: 'Metamorphosis in motion. Wings of iridescent silk.',
    symbol: '❋', quote: 'She does not arrive — she emerges.',
    heroImg: '/images/butterfly/butterfly-couture-gold.png',
  },
  {
    id: 'peacock', name: 'Peacock', identity: 'Individuality',
    color: '#0D8A9E', glow: 'rgba(13,138,158,0.5)', textColor: '#40B8CC',
    bg: 'radial-gradient(ellipse at center, rgba(8,60,75,0.9) 0%, rgba(3,14,20,0.98) 70%)',
    description: 'Iridescent identity. Sapphire plumage. Unapologetic.',
    symbol: '✦', quote: 'Her individuality is non-negotiable.',
    heroImg: '/images/peacock/peacock-couture-gown.jpg',
  },
  {
    id: 'swan', name: 'Swan', identity: 'Grace',
    color: '#C8C4BE', glow: 'rgba(200,196,190,0.4)', textColor: '#E0DCD6',
    bg: 'radial-gradient(ellipse at center, rgba(50,55,65,0.9) 0%, rgba(10,12,18,0.98) 70%)',
    description: 'Alabaster serenity. Mirror-still precision.',
    symbol: '◯', quote: 'Stillness is the most powerful statement.',
    heroImg: '/images/swan/swan-grand-couture-ballgown.jpg',
  },
  {
    id: 'tiger', name: 'Tiger', identity: 'Strength',
    color: '#B45A1D', glow: 'rgba(180,90,29,0.5)', textColor: '#D4834A',
    bg: 'radial-gradient(ellipse at center, rgba(80,35,5,0.9) 0%, rgba(15,7,2,0.98) 70%)',
    description: 'Apex power. Burnished rust. Structured command.',
    symbol: '▲', quote: 'Power needs no announcement.',
    heroImg: '/images/tiger/tiger-couture-gown.jpg',
  },
  {
    id: 'jellyfish', name: 'Jellyfish', identity: 'Fluidity',
    color: '#8A699C', glow: 'rgba(138,105,156,0.5)', textColor: '#B090C8',
    bg: 'radial-gradient(ellipse at center, rgba(45,20,70,0.9) 0%, rgba(8,4,18,0.98) 70%)',
    description: 'Bioluminescent dream. Translucent layers. Pure ether.',
    symbol: '∿', quote: 'She flows where others cannot follow.',
    heroImg: '/images/jellyfish/jellyfish-couture-gown.jpg',
  },
];

// Animated forest particles
function ForestParticles({ accentColor }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const color = accentColor || '#4AE54A';
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.6 + 0.1,
      drift: (Math.random() - 0.5) * 0.3,
      phase: Math.random() * Math.PI * 2,
    }));
    let frame;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.phase += 0.02;
        p.x += p.drift + Math.sin(p.phase) * 0.3;
        p.y -= p.speed;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, [accentColor]);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

export default function ForestHome() {
  const { navigateTo, openAnimalWorld } = useConvertelle();
  const [activeAnimal, setActiveAnimal] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [entered, setEntered] = useState(false);

  // entrance fade-in
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleAnimalEnter = (animal) => {
    if (transitioning) return;
    setActiveAnimal(animal);
  };

  const handleAnimalClick = (animal) => {
    if (transitioning) return;
    setTransitioning(true);
    setActiveAnimal(animal);
    setTimeout(() => {
      openAnimalWorld(animal.id);
      setTransitioning(false);
    }, 650);
  };

  const active = activeAnimal;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060C05]">

      {/* ── Deep forest background layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base deep forest gradient */}
        <div className="absolute inset-0" style={{
          background: active
            ? active.bg
            : 'radial-gradient(ellipse at 50% 60%, rgba(12,30,8,0.95) 0%, rgba(4,10,3,1) 65%)',
          transition: 'background 1s ease'
        }} />
        {/* Fog layers */}
        <div className="fog-layer opacity-40" />
        {/* Glow orb from active animal */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full blur-[120px] transition-all duration-1000"
            style={{ background: active ? active.glow : 'rgba(20,60,10,0.3)', opacity: active ? 0.6 : 0.25 }} />
        </div>
        {/* Tree silhouette SVG bottom */}
        <svg className="absolute bottom-0 left-0 right-0 w-full opacity-30" viewBox="0 0 1440 280" preserveAspectRatio="none">
          <path d="M0,280 L0,200 L40,180 L60,200 L80,160 L100,200 L120,150 L140,200 L160,130 L180,190 L200,120 L220,200 L240,110 L260,190 L280,140 L300,200 L340,160 L380,210 L420,130 L460,200 L500,100 L540,190 L580,120 L620,200 L660,90 L700,200 L740,110 L780,195 L820,130 L860,200 L900,115 L940,190 L980,140 L1020,200 L1060,120 L1100,195 L1140,150 L1180,200 L1220,130 L1260,190 L1300,110 L1340,200 L1380,160 L1440,200 L1440,280 Z"
            fill="rgba(15,40,8,0.8)" />
          <path d="M0,280 L0,230 L60,210 L120,225 L180,205 L240,220 L300,208 L360,225 L420,210 L480,228 L540,212 L600,230 L660,215 L720,235 L780,218 L840,232 L900,220 L960,240 L1020,225 L1080,238 L1140,222 L1200,240 L1260,228 L1320,242 L1380,230 L1440,245 L1440,280 Z"
            fill="rgba(8,20,5,0.95)" />
        </svg>
        {/* Ambient particles */}
        <ForestParticles accentColor={active ? active.color : '#3A8C2A'} />
      </div>

      {/* ── Main Content ── */}
      <div className={`relative z-10 flex flex-col items-center min-h-screen transition-opacity duration-700 ${entered ? 'opacity-100' : 'opacity-0'}`}>

        {/* Hero Text */}
        <div className="pt-36 pb-12 text-center px-4 max-w-4xl mx-auto">
          <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase mb-5 animate-fade-in"
            style={{ color: 'rgba(74,229,74,0.6)' }}>
            ConvertElle · Forest of Forms
          </p>
          <h1 className="font-serif leading-none animate-fade-in delay-100" style={{
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 300,
          }}>
            <span style={{ color: '#E8E4DC' }}>Which side of you</span><br />
            <span className="italic gold-shimmer">lives in the forest?</span>
          </h1>
          <p className="mt-6 text-sm text-[rgba(232,228,220,0.45)] font-light tracking-wide max-w-lg mx-auto leading-relaxed animate-fade-in delay-200">
            Six animal worlds. Six identities. Enter the one that calls to you.
          </p>
        </div>

        {/* ── 3D Animal Portal Grid ── */}
        <div className="w-full max-w-6xl mx-auto px-4 pb-32">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 perspective-container">
            {ANIMALS.map((animal, i) => (
              <AnimalPortal
                key={animal.id}
                animal={animal}
                index={i}
                isActive={active?.id === animal.id}
                isAnyActive={!!active}
                transitioning={transitioning}
                onEnter={() => handleAnimalEnter(animal)}
                onLeave={() => setActiveAnimal(null)}
                onClick={() => handleAnimalClick(animal)}
              />
            ))}
          </div>

          {/* Active animal description bar */}
          <div className={`mt-8 text-center transition-all duration-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {active && (
              <>
                <p className="font-serif text-2xl italic" style={{ color: active.textColor }}>{active.quote}</p>
                <button
                  onClick={() => handleAnimalClick(active)}
                  className="mt-5 inline-flex items-center gap-2 px-8 py-3 text-[11px] tracking-[0.25em] uppercase font-semibold transition-all duration-300 rounded-sm"
                  style={{ background: active.color, color: '#060C05' }}
                >
                  Enter {active.name} World <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* ── Bottom Actions ── */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-20">
          <button onClick={() => navigateTo('shop')}
            className="flex items-center gap-2 px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase text-[rgba(232,228,220,0.5)] hover:text-[#D4AF37] border border-[rgba(255,255,255,0.08)] hover:border-[#D4AF37]/40 rounded-sm transition-all">
            <Layers className="w-3.5 h-3.5" /> Browse All
          </button>
          <button onClick={() => navigateTo('studio')}
            className="flex items-center gap-2 px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase text-[rgba(232,228,220,0.5)] hover:text-[rgba(74,229,74,0.8)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(74,229,74,0.3)] rounded-sm transition-all">
            <Sparkles className="w-3.5 h-3.5" /> Studio
          </button>
          <button onClick={() => navigateTo('quiz')}
            className="flex items-center gap-2 px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase text-[rgba(232,228,220,0.5)] hover:text-[rgba(74,229,74,0.8)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(74,229,74,0.3)] rounded-sm transition-all">
            <Compass className="w-3.5 h-3.5" /> Discover Me
          </button>
        </div>
      </div>

      {/* ── Transition overlay ── */}
      {transitioning && (
        <div className="fixed inset-0 z-[200] pointer-events-none" style={{
          background: active ? active.bg : 'rgba(0,0,0,0.95)',
          animation: 'fade-in 0.5s ease-out both'
        }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="font-cinzel text-[10px] tracking-[0.4em] uppercase mb-3 animate-glow-breathe"
              style={{ color: active?.color }}>Entering</div>
            <div className="font-serif text-5xl italic animate-fade-in" style={{ color: active?.textColor || '#D4AF37' }}>
              The {active?.name}
            </div>
            <div className="mt-2 text-xs tracking-widest uppercase" style={{ color: active?.color, opacity: 0.7 }}>
              {active?.identity}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AnimalPortal({ animal, index, isActive, isAnyActive, transitioning, onEnter, onLeave, onClick }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={`relative overflow-hidden rounded-sm card-3d animate-fade-in-up transition-all duration-500 ${
        isAnyActive && !isActive ? 'opacity-40 scale-95' : 'opacity-100 scale-100'
      }`}
      style={{
        animationDelay: `${index * 0.08}s`,
        aspectRatio: '2/3',
        '--ring-color': animal.glow,
        boxShadow: isActive
          ? `0 0 40px ${animal.glow}, 0 20px 60px rgba(0,0,0,0.6), inset 0 0 60px ${animal.glow.replace('0.5', '0.15')}`
          : '0 8px 32px rgba(0,0,0,0.5)',
        border: isActive ? `1px solid ${animal.color}60` : '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Hero image */}
      <img
        src={animal.heroImg}
        alt={animal.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isActive ? 'scale(1.08)' : 'scale(1)', filter: isActive ? 'brightness(0.7)' : 'brightness(0.45) saturate(0.6)' }}
        loading="lazy"
      />

      {/* Color overlay */}
      <div className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(180deg, transparent 20%, ${animal.bg.match(/rgba\([^)]+\)/g)?.[0] || 'rgba(0,0,0,0.8)'} 100%)`,
          opacity: isActive ? 0.85 : 0.6,
        }} />

      {/* Glow border on active */}
      {isActive && (
        <div className="absolute inset-0 pointer-events-none animate-glow-breathe"
          style={{ boxShadow: `inset 0 0 40px ${animal.glow}` }} />
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
        {/* Symbol */}
        <div className={`text-2xl sm:text-3xl mb-2 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}
          style={{ color: animal.color, textShadow: isActive ? `0 0 20px ${animal.glow}` : 'none' }}>
          {animal.symbol}
        </div>

        <p className="font-cinzel text-[8px] sm:text-[9px] tracking-[0.35em] uppercase mb-1 transition-colors duration-300"
          style={{ color: animal.color }}>
          {animal.identity}
        </p>

        <h3 className="font-serif text-xl sm:text-2xl leading-tight" style={{ color: '#E8E4DC' }}>
          The {animal.name}
        </h3>

        <p className={`text-[10px] sm:text-xs text-[rgba(232,228,220,0.55)] mt-2 leading-relaxed font-light transition-all duration-400 ${
          isActive ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          {animal.description}
        </p>

        <div className={`mt-3 flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-semibold transition-all duration-300 ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`} style={{ color: animal.color }}>
          Enter <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}

