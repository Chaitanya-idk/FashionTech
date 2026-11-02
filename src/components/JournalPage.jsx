import React, { useState } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { Sparkles, ArrowRight, BookOpen, Clock, Share2 } from 'lucide-react';

const ARTICLES = [
  {
    id: 'art-01',
    title: 'The Biomimicry Manifesto: Why Haute Couture Must Learn from Animal Sovereignty',
    subtitle: 'From Briton Rivière’s 1902 Aphrodite to the modern modular wardrobe.',
    date: 'November 2026',
    readTime: '6 min read',
    author: 'Editorial Desk • ConvertElle Atelier',
    category: 'Art & Biomimicry',
    heroImage: '/images/fauna-intro.jpg',
    excerpt: 'In British painter Briton Rivière’s 1902 masterpiece Aphrodite, womanhood is not subordinate to nature, nor does nature serve as an ornament. Instead, the composition reveals a profound alignment of primal strength and sovereign feminine stillness...',
    content: [
      "In British painter Briton Rivière’s 1902 masterpiece Aphrodite, womanhood is not subordinate to nature, nor does nature serve as an ornament. Instead, the composition reveals a profound alignment of primal strength and sovereign feminine stillness. When ConvertElle was conceived, this painting served as our foundational architectural manifesto: the animal is a symbol — not a costume.",
      "Traditional luxury fashion has spent centuries consuming nature: exotic pelts, unethically harvested feathers, and decorative cruelty. ConvertElle flips the narrative entirely. We study the engineering marvels of the animal kingdom — the aerodynamic tensile strength of butterfly wings, the crystalline light refraction of peacock eye plumage, the predatory silence of feline rosette geometry — and translate them into cruelty-free, biomimetic couture.",
      "By utilizing Peace Silk, recycled jeweler’s brass, and precision laser-cut organza with concealed magnetic docking grids, we prove that the highest expression of fashion innovation honors the living world without harming a single organism."
    ]
  },
  {
    id: 'art-02',
    title: 'One Garment, Infinite Rooms: Dismantling the Single-Occasion Fallacy',
    subtitle: 'How modular fashion eliminates closet fatigue and democratizes haute couture.',
    date: 'October 2026',
    readTime: '5 min read',
    author: 'Haute Engineering • ConvertElle Atelier',
    category: 'Modular Innovation',
    heroImage: '/images/butterfly/butterfly-transformation-breakdown.jpg',
    excerpt: 'For decades, luxury fashion forced an unsustainable cycle upon women: buy a suit for the boardroom, a cocktail dress for dinner, and a single-wear gown for the gala. ConvertElle’s magnetic transformation system changes everything...',
    content: [
      "The conventional luxury calendar demands that women purchase a distinct garment for every single social milestone: an executive sheath for keynote lectures, tailored separates for intimate salons, and an exorbitant gown worn once for a red-carpet gala before being consigned to dark wardrobe storage.",
      "ConvertElle’s modular paradigm introduces an alternative philosophy: Buy the foundation. Build your expression. Transform when you want.",
      "With rare-earth neodymium magnetic docking points integrated invisibly into our duchesse silk and matte crepe bases, a client can transition from an austere executive meeting at 9:00 AM to a tiered ballgown at 8:00 PM in under 45 seconds. True luxury is not the quantity of garments you own — it is the range of identities a single garment empowers you to express."
    ]
  },
  {
    id: 'art-03',
    title: 'The Chemistry of Luminescence: Engineering the Jellyfish & Butterfly Overlays',
    subtitle: 'A technical exploration into our hand-pleated organza and millinery wire frameworks.',
    date: 'September 2026',
    readTime: '4 min read',
    author: 'Textile Research Lab • Como & Mumbai',
    category: 'Craftsmanship',
    heroImage: '/images/jellyfish/jellyfish-couture-gown.jpg',
    excerpt: 'How our textile artisans in Como and Mumbai spent fourteen months developing lightweight phosphorescent organzas and flexible wire armatures that hold sculptural form without restricting motion...',
    content: [
      "Creating garments that appear to float like deep-sea pelagic fauna or flutter like swallowtail lepidoptera requires rigorous textile engineering. Standard evening wear relies on heavy buckram and steel corsetry that impedes breathing and natural posture.",
      "At ConvertElle, our technical team engineered a specialized multi-layer silk organza treated with non-toxic optical brighteners that absorb natural daylight and gently radiate under low evening illumination.",
      "Combined with flexible millinery wire that can be bent, packed into a travel trunk, and sprung back into pristine architectural form in seconds, we have achieved wearable art that moves in tandem with the wearer's respiration."
    ]
  }
];

export default function JournalPage() {
  const { navigateTo, showToast } = useConvertelle();
  const [selectedArticle, setSelectedArticle] = useState(ARTICLES[0]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-16 px-4 sm:px-6 lg:px-8 border-t border-[#DDD6CA]">
      <div className="max-w-5xl mx-auto">
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C6B26] flex items-center justify-center gap-1.5 mb-2">
            <BookOpen className="w-3.5 h-3.5 text-[#B89047]" /> Thought Leadership & Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1815] uppercase tracking-wide leading-none">
            The ConvertElle Journal
          </h1>
          <p className="text-xs sm:text-sm text-[#666057] mt-3 font-light leading-relaxed">
            Essays on modular haute couture, biomimetic design, sustainable luxury innovation, and the philosophical intersection of femininity and fauna.
          </p>
        </div>

        {/* Featured Main Article */}
        <div className="bg-white border border-[#E8E2D8] rounded-sm overflow-hidden shadow-md mb-16">
          <div className="aspect-[21/9] w-full bg-[#FAF8F5] overflow-hidden border-b border-[#E8E2D8]">
            <img
              src={selectedArticle.heroImage}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 sm:p-12">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-semibold text-[#8C6B26] mb-3">
              <span>{selectedArticle.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#999083]">
                <Clock className="w-3 h-3" /> {selectedArticle.readTime}
              </span>
              <span>•</span>
              <span className="text-[#999083]">{selectedArticle.date}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1815] leading-tight mb-4">
              {selectedArticle.title}
            </h2>

            <p className="font-serif italic text-base text-[#8C6B26] mb-8 pb-6 border-b border-[#F2EDE4]">
              {selectedArticle.subtitle}
            </p>

            <div className="space-y-5 text-sm sm:text-base text-[#33302B] leading-relaxed font-light">
              {selectedArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-[#E8E2D8] flex items-center justify-between">
              <span className="text-xs text-[#666057] italic">
                By {selectedArticle.author}
              </span>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  showToast('Article link copied to clipboard.');
                }}
                className="text-xs uppercase tracking-wider text-[#8C6B26] hover:text-[#1A1815] flex items-center gap-1.5 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" /> Share Article
              </button>
            </div>
          </div>
        </div>

        {/* Other Journal Articles */}
        <div>
          <h3 className="font-serif text-2xl text-[#1A1815] mb-6 border-b border-[#E8E2D8] pb-3">
            Atelier Archives & Technical Essays
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES.filter((a) => a.id !== selectedArticle.id).map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  setSelectedArticle(art);
                  window.scrollTo({ top: 180, behavior: 'smooth' });
                }}
                className="bg-white border border-[#E8E2D8] p-6 rounded-sm cursor-pointer hover:border-[#B89047] transition-all shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/9] bg-[#FAF8F5] overflow-hidden rounded-sm border border-[#DDD6CA] mb-4">
                    <img
                      src={art.heroImage}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-[#8C6B26] font-semibold">
                    {art.category} • {art.readTime}
                  </span>
                  <h4 className="font-serif text-xl text-[#1A1815] group-hover:text-[#8C6B26] transition-colors leading-snug mt-1">
                    {art.title}
                  </h4>
                  <p className="text-xs text-[#666057] mt-2 line-clamp-2 leading-relaxed font-light">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F2EDE4] flex items-center justify-between text-xs text-[#8C6B26] font-semibold uppercase tracking-wider">
                  <span>Read Essay</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

