import React, { useState } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { PRODUCTS_BY_COLLECTION } from '../data/productsData';
import { soundscape } from '../utils/soundscape';
import {
  Sparkles, Compass, Check, ArrowRight, RotateCcw,
  Heart, ShoppingBag, Eye, Award
} from 'lucide-react';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    title: "1. What best describes your social presence and instinct?",
    subtitle: "Select the frequency that resonates with your internal rhythm.",
    options: [
      { text: "Commanding, magnetic, unapologetic; I own the room from the moment I cross the threshold.", archetype: "leopard" },
      { text: "Fluid, evolving, metamorphic; I refuse to be defined by any singular aesthetic paradigm.", archetype: "butterfly" },
      { text: "Dramatic, distinct, captivating; I view personal style as high artistic expression.", archetype: "peacock" },
      { text: "Serene, immaculate, poised; I move with silent, statuesque authority.", archetype: "swan" },
      { text: "Structured, razor-sharp, protective; I project apex dominance with effortless stillness.", archetype: "tiger" },
      { text: "Dreamy, ethereal, luminous; I drift through environments with celestial lightness.", archetype: "jellyfish" }
    ]
  },
  {
    id: 2,
    title: "2. What is your fashion philosophy when building a silhouette?",
    subtitle: "How do you navigate form, function, and expression?",
    options: [
      { text: "Sharp tailored pencil lines elevated by sudden, audacious animal rosette cascades.", archetype: "leopard" },
      { text: "Modular duality — transforming from an understated day column into architectural wings.", archetype: "butterfly" },
      { text: "Rich saturated jewel tones, iridescent satins, and theatrical trailing plumage.", archetype: "peacock" },
      { text: "Monochromatic purity, sculpted vest lapels, and engineered organza down.", archetype: "swan" },
      { text: "Power-shouldered tailoring, predatory corsetry, and gilded feline hardware.", archetype: "tiger" },
      { text: "Diaphanous micro-tulle, cascading tendrils, and bioluminescent lilac layers.", archetype: "jellyfish" }
    ]
  },
  {
    id: 3,
    title: "3. Which natural environment evokes your deepest creative energy?",
    subtitle: "Close your eyes. Where do you find alignment?",
    options: [
      { text: "Sunlit savannah plateaus and ancient stone ruins bathed in amber dusk.", archetype: "leopard" },
      { text: "An enchanted blooming greenhouse bursting with chrysalises and nectar.", archetype: "butterfly" },
      { text: "A sun-dappled prismatic courtyard surrounded by exotic iridescent glades.", archetype: "peacock" },
      { text: "A mirror-still alpine lake shrouded in early-morning mist and pearl light.", archetype: "swan" },
      { text: "A deep, primeval bamboo jungle illuminated by flickering torchlight.", archetype: "tiger" },
      { text: "An abyssal, bioluminescent ocean trench pulsing with ethereal rhythm.", archetype: "jellyfish" }
    ]
  },
  {
    id: 4,
    title: "4. How do you desire to feel the moment you enter an evening salon?",
    subtitle: "The emotional resonance of your presence.",
    options: [
      { text: "Electric confidence — feared by rivals, revered by connoisseurs.", archetype: "leopard" },
      { text: "Thrilling transformation — fascinating everyone with an evolving silhouette.", archetype: "butterfly" },
      { text: "Singular individuality — irreplaceable and utterly memorable.", archetype: "peacock" },
      { text: "Effortless grace — an oasis of aristocratic stillness amid chaos.", archetype: "swan" },
      { text: "Raw power — undisputed authority and structural clarity.", archetype: "tiger" },
      { text: "Ethereal mystery — like water flowing through fingers, impossible to capture.", archetype: "jellyfish" }
    ]
  },
  {
    id: 5,
    title: "5. What color spectrum and textural palette calls to your skin?",
    subtitle: "Tactile sensation and chromatic identity.",
    options: [
      { text: "Warm desert sand, Tuscan gold rosettes, and Italian satin duchesse.", archetype: "leopard" },
      { text: "Glittering micro-sequins, amethyst violet organza, and millinery wire.", archetype: "butterfly" },
      { text: "Peacock sapphire, emerald iridescent weaves, and Austrian crystals.", archetype: "peacock" },
      { text: "Alabaster crepe, liquid silver organza, and featherweight plumage.", archetype: "swan" },
      { text: "Tiger rust, matte charcoal wool, and 18k brushed gold brass casting.", archetype: "tiger" },
      { text: "Pelagic lilac, seafoam cyan tulle, and freshwater seed pearls.", archetype: "jellyfish" }
    ]
  }
];

const ARCHETYPE_RESULTS = {
  leopard: {
    title: "The Confident One",
    animal: "The Leopard",
    archetypeId: "leopard",
    identity: "Confidence",
    tagline: "Bold prints, sharp silhouettes, sleek textures.",
    quote: "The animal is a symbol — not a costume. You lead the pride with quiet, devastating certainty.",
    paletteName: "Tuscan Gold, Desert Sand, Jet Noir",
    accentColor: "#B89047",
    bgGradient: "from-[#2A2114] via-[#1A1815] to-[#121110]",
    image: "/images/leopard/leopard-runway-cascade-ballgown.jpg"
  },
  butterfly: {
    title: "The Transformer",
    animal: "The Butterfly",
    archetypeId: "butterfly",
    identity: "Transformation",
    tagline: "Layered wings, sheer fabrics, translucent panels, luminous rebirth.",
    quote: "Metamorphosis in motion. You shed outdated expectations to emerge in sculpted luminescence.",
    paletteName: "Amethyst Violet, Gilded Gold, Cyan Vein",
    accentColor: "#9C427B",
    bgGradient: "from-[#2C182E] via-[#1A1815] to-[#121110]",
    image: "/images/butterfly/butterfly-couture-gold.png"
  },
  peacock: {
    title: "The Individualist",
    animal: "The Peacock",
    archetypeId: "peacock",
    identity: "Individuality",
    tagline: "Iridescence, rich colours, feather-like textures, theatrical brilliance.",
    quote: "Why whisper when your soul was born to unfurl like royal plumage? Stand completely apart.",
    paletteName: "Royal Sapphire, Emerald Organza, 24k Gold",
    accentColor: "#0D4D5C",
    bgGradient: "from-[#0D2E38] via-[#1A1815] to-[#121110]",
    image: "/images/peacock/peacock-couture-gown.jpg"
  },
  swan: {
    title: "The Graceful One",
    animal: "The Swan",
    archetypeId: "swan",
    identity: "Grace",
    tagline: "Fluid curves, pearls, engineered plumage, statuesque stillness.",
    quote: "True power needs no force. You glide with sovereign poise across every water.",
    paletteName: "Alabaster White, Liquid Silver, Noir Velvet",
    accentColor: "#A9A49B",
    bgGradient: "from-[#242629] via-[#1A1815] to-[#121110]",
    image: "/images/swan/swan-grand-couture-ballgown.jpg"
  },
  tiger: {
    title: "The Powerful One",
    animal: "The Tiger",
    archetypeId: "tiger",
    identity: "Strength",
    tagline: "Powerful cuts, structured forms, bold textures, predatory elegance.",
    quote: "Fear is irrelevant when your architecture is forged in apex power and gilded bronze armor.",
    paletteName: "Tiger Rust, Obsidian Noir, Brushed Brass",
    accentColor: "#B45A1D",
    bgGradient: "from-[#2E1A10] via-[#1A1815] to-[#121110]",
    image: "/images/tiger/tiger-couture-gown.jpg"
  },
  jellyfish: {
    title: "The Dreamer",
    animal: "The Jellyfish",
    archetypeId: "jellyfish",
    identity: "Fluidity",
    tagline: "Flowing layers, ruffles, sheer fabrics, ethereal bioluminescence.",
    quote: "Weightless and immortal. You move with the rhythm of deep ocean currents.",
    paletteName: "Phosphorescent Lilac, Cyan Organza, Sea Mist",
    accentColor: "#8A699C",
    bgGradient: "from-[#1F1829] via-[#1A1815] to-[#121110]",
    image: "/images/jellyfish/jellyfish-couture-gown.jpg"
  }
};

export default function AnimalIdentityQuiz() {
  const {
    openAnimalWorld,
    openProductDetail,
    toggleWishlist,
    isInWishlist,
    setStyleProfile,
    formatPrice,
    showToast
  } = useConvertelle();

  const [currentStep, setCurrentStep] = useState(0); // 0 to 4 questions, 5 = result
  const [answers, setAnswers] = useState({});
  const [resultArchetype, setResultArchetype] = useState(null);

  const handleSelectOption = (archetype) => {
    soundscape.playChime('click');
    const questionId = QUIZ_QUESTIONS[currentStep].id;
    const nextAnswers = { ...answers, [questionId]: archetype };
    setAnswers(nextAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      // Calculate scores
      const counts = { leopard: 0, butterfly: 0, peacock: 0, swan: 0, tiger: 0, jellyfish: 0 };
      Object.values(nextAnswers).forEach((arch) => {
        if (counts[arch] !== undefined) counts[arch]++;
      });

      let highestArch = 'butterfly';
      let maxCount = -1;
      Object.entries(counts).forEach(([arch, count]) => {
        if (count > maxCount) {
          maxCount = count;
          highestArch = arch;
        }
      });

      const matched = ARCHETYPE_RESULTS[highestArch];
      setResultArchetype(matched);
      setStyleProfile({
        archetypeId: matched.archetypeId,
        animalName: matched.animal,
        identity: matched.identity,
        title: matched.title,
        timestamp: new Date().toISOString()
      });

      soundscape.playChime('transform');
      setCurrentStep(5);
    }
  };

  const handleResetQuiz = () => {
    soundscape.playChime('click');
    setAnswers({});
    setResultArchetype(null);
    setCurrentStep(0);
  };

  const handleAddCapsuleToWishlist = () => {
    if (!resultArchetype) return;
    const prods = PRODUCTS_BY_COLLECTION[resultArchetype.archetypeId] || [];
    prods.forEach((p) => {
      if (!isInWishlist(p.id)) {
        toggleWishlist(p.id);
      }
    });
    showToast(`Added full ${resultArchetype.animal} capsule to your Wishlist!`);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-16 px-4 sm:px-6 lg:px-8 border-t border-[#DDD6CA]">
      <div className="max-w-4xl mx-auto">
        {/* Quiz Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C6B26] flex items-center justify-center gap-1.5 mb-2">
            <Compass className="w-3.5 h-3.5 text-[#B89047]" /> Haute Persona Attunement
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1815] uppercase tracking-wide leading-tight">
            Which Side of You Lives in the Forest?
          </h1>
          <p className="text-xs sm:text-sm text-[#666057] mt-3 font-light leading-relaxed">
            Answer five introspective questions about your presence, silhouette desires, and natural affinities. ConvertElle will attune you with your sovereign animal archetype.
          </p>
        </div>

        {/* Questions Phase (Steps 0 to 4) */}
        {currentStep < 5 && (
          <div className="bg-white border border-[#E8E2D8] p-6 sm:p-10 rounded-sm shadow-md animate-fade-in">
            {/* Step Progress */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#F2EDE4]">
              <span className="text-xs uppercase tracking-widest text-[#8C6B26] font-semibold">
                Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <div className="flex gap-1.5">
                {QUIZ_QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`w-6 sm:w-10 h-1 rounded-full transition-colors ${
                      i <= currentStep ? 'bg-[#B89047]' : 'bg-[#E8E2D8]'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Current Question */}
            <div className="mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1815] leading-snug">
                {QUIZ_QUESTIONS[currentStep].title}
              </h2>
              <p className="text-xs text-[#666057] mt-1.5 font-light">
                {QUIZ_QUESTIONS[currentStep].subtitle}
              </p>
            </div>

            {/* Answer Options */}
            <div className="space-y-3.5">
              {QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.archetype)}
                  className="w-full text-left p-4 sm:p-5 rounded-sm border border-[#DDD6CA] bg-[#FAF8F5] hover:bg-white hover:border-[#B89047] hover:shadow-md transition-all group flex items-start gap-4"
                >
                  <span className="w-6 h-6 rounded-full border border-[#B89047]/40 text-[11px] font-semibold text-[#8C6B26] flex items-center justify-center flex-shrink-0 group-hover:bg-[#B89047] group-hover:text-white transition-colors mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-[#33302B] group-hover:text-[#1A1815] leading-relaxed">
                    {opt.text}
                  </span>
                </button>
              ))}
            </div>

            {/* Back / Navigation */}
            {currentStep > 0 && (
              <div className="mt-8 pt-4 border-t border-[#F2EDE4] flex justify-between items-center text-xs text-[#999083]">
                <button
                  onClick={() => setCurrentStep((s) => s - 1)}
                  className="hover:text-[#1A1815] transition-colors"
                >
                  ← Return to previous question
                </button>
              </div>
            )}
          </div>
        )}

        {/* RESULTS PHASE (Step 5) */}
        {currentStep === 5 && resultArchetype && (
          <div className="space-y-8 animate-fade-in">
            {/* Grand Reveal Banner */}
            <div className={`p-8 sm:p-12 rounded-sm text-white bg-gradient-to-br ${resultArchetype.bgGradient} border border-[#B89047]/40 shadow-2xl relative overflow-hidden`}>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                {/* Result Image */}
                <div className="w-48 h-64 sm:w-56 sm:h-76 bg-black/40 overflow-hidden rounded-sm border border-[#B89047]/50 flex-shrink-0 shadow-2xl">
                  <img
                    src={resultArchetype.image}
                    alt={resultArchetype.animal}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Identity Dossier */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B89047]/20 border border-[#B89047]/40 text-[#F0E2C8] text-[10px] uppercase tracking-widest font-semibold mb-3">
                    <Award className="w-3.5 h-3.5 text-[#B89047]" /> Your True Sovereign Persona
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] leading-tight">
                    {resultArchetype.animal} — {resultArchetype.title}
                  </h2>

                  <p className="text-xs uppercase tracking-widest text-[#B89047] font-semibold mt-2">
                    Identity: {resultArchetype.identity} • {resultArchetype.paletteName}
                  </p>

                  <blockquote className="font-serif italic text-base sm:text-lg text-[#E8E2D8] mt-4 border-l-2 border-[#B89047] pl-4 leading-relaxed">
                    “{resultArchetype.quote}”
                  </blockquote>

                  {/* Actions */}
                  <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                    <button
                      onClick={() => openAnimalWorld(resultArchetype.archetypeId)}
                      className="px-6 py-3 bg-[#B89047] hover:bg-[#8C6B26] text-white text-xs tracking-widest uppercase font-semibold rounded-sm flex items-center gap-2 transition-all shadow-lg"
                    >
                      Explore {resultArchetype.animal} World <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={handleAddCapsuleToWishlist}
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/20 text-xs tracking-widest uppercase font-semibold rounded-sm flex items-center gap-2 transition-colors"
                    >
                      <Heart className="w-4 h-4 text-[#B89047]" /> Save Capsule to Wishlist
                    </button>

                    <button
                      onClick={handleResetQuiz}
                      className="p-3 text-white/60 hover:text-white transition-colors"
                      title="Retake Quiz"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Products for this Archetype */}
            <div className="bg-white p-6 sm:p-8 border border-[#E8E2D8] rounded-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C6B26]">
                    Curated Archetype Capsule
                  </span>
                  <h3 className="font-serif text-2xl text-[#1A1815]">
                    Recommended Pieces for {resultArchetype.animal}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {(PRODUCTS_BY_COLLECTION[resultArchetype.archetypeId] || []).slice(0, 3).map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => openProductDetail(prod.id)}
                    className="group border border-[#E8E2D8] p-3 rounded-sm cursor-pointer hover:border-[#B89047] transition-all bg-[#FAF8F5] flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-[3/4] bg-white overflow-hidden rounded-sm border border-[#DDD6CA] mb-3">
                        <img
                          src={prod.images.primary}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <span className="text-[8px] uppercase tracking-widest text-[#8C6B26] font-bold">
                        {prod.categoryName}
                      </span>
                      <h4 className="font-serif text-base font-semibold text-[#1A1815] group-hover:text-[#8C6B26] transition-colors line-clamp-1">
                        {prod.name}
                      </h4>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#E8E2D8] flex justify-between items-baseline">
                      <span className="font-serif text-sm font-bold text-[#1A1815]">
                        {formatPrice(prod.price)}
                      </span>
                      <span className="text-[10px] text-[#8C6B26] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        View Dossier <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

