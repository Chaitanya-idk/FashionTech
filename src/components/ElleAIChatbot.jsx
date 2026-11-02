import React, { useState, useRef, useEffect } from 'react';
import { useConvertelle } from '../context/ConvertelleContext';
import { PRODUCTS, PRODUCTS_BY_ID } from '../data/productsData';
import { soundscape } from '../utils/soundscape';
import {
  Sparkles, MessageSquare, X, Send, ShoppingBag, Eye,
  ArrowRight, Bot, User, Check, RefreshCw, Compass
} from 'lucide-react';

const INITIAL_MESSAGES = [
  {
    id: 'msg-0',
    sender: 'ai',
    text: "Welcome to ConvertElle. I am ELLE AI, your personal haute couture companion. Whether you seek a show-stopping gala transformation, an executive boardroom foundation, or guidance through our six animal worlds, how may I style you today?",
    productRecommendations: ['ce-bf-01', 'ce-lp-01'],
    timestamp: 'Just now'
  }
];

const SUGGESTED_QUERIES = [
  "What should I wear for a gala?",
  "Show me the Butterfly collection",
  "Which collection represents confidence?",
  "How does detachable fashion work?",
  "Show me outfits under ₹40,000",
  "Recommend accessories for dinner",
  "Which animal fits my personality?"
];

export default function ElleAIChatbot() {
  const { openProductDetail, addToCart, formatPrice, navigateTo } = useConvertelle();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Frontend Rule-based Intelligent Response Engine
  const generateResponse = (rawInput) => {
    const q = rawInput.toLowerCase();

    // 1. Gala / Black Tie / Evening
    if (q.includes('gala') || q.includes('red carpet') || q.includes('black tie') || q.includes('ball')) {
      return {
        text: "For a grand gala or red carpet, the ConvertElle Sovereign Metamorphosis Gown or the Pavo Peacock Iridescent Gown creates an entrance of unforgettable majesty. Both feature dramatic, detachable floor-skimming trains that command the room while allowing you to detach into a sleek column sheath later in the evening.",
        products: ['ce-bf-01', 'ce-pc-01', 'ce-sw-01']
      };
    }

    // 2. Butterfly / Transformation
    if (q.includes('butterfly') || q.includes('transformation') || q.includes('metamorphosis')) {
      return {
        text: "The Butterfly Collection embodies 'Transformation'. Grounded in shimmering gold micro-sequins and hand-pleated iridescent organza wings sculpted with millinery wire, these pieces celebrate the freedom to evolve across every threshold.",
        products: ['ce-bf-01', 'ce-bf-02', 'ce-bf-03']
      };
    }

    // 3. Confidence / Leopard
    if (q.includes('confidence') || q.includes('leopard') || q.includes('bold') || q.includes('power')) {
      return {
        text: "Confidence belongs to The Leopard. Sharp silhouettes, sleek sand-toned silk crepe columns, and the iconic Volumetric Silk Brocade Petal Ballgown Overskirt project effortless command and predatory grace without animal harm.",
        products: ['ce-lp-01', 'ce-lp-02', 'ce-lp-03']
      };
    }

    // 4. Grace / Swan
    if (q.includes('grace') || q.includes('swan') || q.includes('elegance') || q.includes('minimal')) {
      return {
        text: "The Swan Collection channels 'Grace'. Inspired by the British painter Briton Rivière's 1902 masterpiece Aphrodite, it bridges tailored crepe vest suiting with engineered organza plumage that wraps the waist like folded wings.",
        products: ['ce-sw-01', 'ce-sw-02', 'ce-sw-03']
      };
    }

    // 5. Strength / Tiger
    if (q.includes('tiger') || q.includes('strength') || q.includes('structure') || q.includes('blazer')) {
      return {
        text: "The Tiger Collection radiates 'Strength' and sovereign leadership. It features architectural blazers with gilded feline shoulder armor and fluted column gowns with detachable striped structural sleeves.",
        products: ['ce-tg-01', 'ce-tg-02', 'ce-tg-03']
      };
    }

    // 6. Fluidity / Jellyfish
    if (q.includes('jellyfish') || q.includes('fluid') || q.includes('dreamer') || q.includes('tulle')) {
      return {
        text: "The Jellyfish Collection represents 'Fluidity'. Diaphanous lilac and seafoam micro-tulle, cascading tendril sleeves, and bioluminescent organza create a weightless aesthetic inspired by ocean currents.",
        products: ['ce-jf-01', 'ce-jf-02', 'ce-jf-03']
      };
    }

    // 7. Individuality / Peacock
    if (q.includes('peacock') || q.includes('individuality') || q.includes('emerald') || q.includes('unique')) {
      return {
        text: "The Peacock Collection stands for 'Individuality' — rich emerald and cobalt satins, contoured corsetry, and layered organza eye plumage that refuse to blend into the background.",
        products: ['ce-pc-01', 'ce-pc-02', 'ce-pc-03']
      };
    }

    // 8. How Detachable / Modular Fashion works
    if (q.includes('detachable') || q.includes('transform') || q.includes('how does') || q.includes('modular')) {
      return {
        text: "ConvertElle’s signature modular innovation uses concealed, 18k gold-plated rare-earth neodymium magnetic docking points. Each base dress or jumpsuit features hidden anchors that lock securely with interchangeable sleeves, overskirts, boleros, and epaulets in under 45 seconds.",
        products: ['ce-es-01', 'ce-bf-03', 'ce-lp-01']
      };
    }

    // 9. Budget Under ₹30,000 / ₹40,000
    if (q.includes('under') || q.includes('budget') || q.includes('price') || q.includes('inexpensive') || q.includes('affordable')) {
      return {
        text: "Here are exceptional ConvertElle creations under ₹35,000 — including our core foundational columns and modular statement kits that expand into multiple styling expressions.",
        products: ['ce-es-01', 'ce-bf-03', 'ce-jf-03', 'ce-pc-03']
      };
    }

    // 10. Office / Conference / Corporate
    if (q.includes('office') || q.includes('work') || q.includes('conference') || q.includes('boardroom') || q.includes('meeting')) {
      return {
        text: "For high-stakes corporate summits and keynote stages, we recommend our foundational Minimalist Crepe bases. They provide clean, sharp tailoring that resists creasing throughout the day, ready to receive couture components at nightfall.",
        products: ['ce-es-01', 'ce-es-02', 'ce-tg-02']
      };
    }

    // 11. Accessories
    if (q.includes('accessories') || q.includes('brooch') || q.includes('jewelry') || q.includes('accent')) {
      return {
        text: "Our detachable statement accessories feature magnetic anchors that clip onto lapels, dresses, waistbands, or hair chignons to add instant artisanal luster.",
        products: ['ce-pc-03', 'ce-tg-03', 'ce-bf-03']
      };
    }

    // 12. Quiz / Personality
    if (q.includes('personality') || q.includes('quiz') || q.includes('which animal') || q.includes('who am i')) {
      return {
        text: "You can discover your innate animal persona in our interactive experience 'Which Side of You Lives in the Forest?'. It evaluates your presence, fashion philosophy, and color resonance to match you with your true archetype.",
        products: ['ce-bf-01', 'ce-lp-01', 'ce-sw-01']
      };
    }

    // Default Fallback
    return {
      text: "Every ConvertElle garment is engineered around the principle: 'One Garment. Endless You.' Tell me about your upcoming occasion, preferred silhouette, or budget, and I will tailor a bespoke recommendation for you.",
      products: ['ce-bf-01', 'ce-es-01', 'ce-lp-01']
    };
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    soundscape.playChime('click');

    const userMsg = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate luxury conversational pacing
    setTimeout(() => {
      const resp = generateResponse(text);
      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: resp.text,
        productRecommendations: resp.products || [],
        timestamp: 'Just now'
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
      soundscape.playChime('chime');
    }, 700);
  };

  return (
    <>
      {/* Floating Animated Launcher */}
      <button
        onClick={() => {
          soundscape.playChime('click');
          setIsOpen(!isOpen);
        }}
        className={`fixed bottom-6 right-6 z-[110] flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen
            ? 'bg-[#1A1815] text-[#FAF8F5] border border-[#B89047]'
            : 'bg-gradient-to-r from-[#1A1815] via-[#2A241B] to-[#1A1815] text-[#F0E2C8] border border-[#B89047]/60 hover:scale-105 hover:shadow-[#B89047]/20 hover:shadow-2xl'
        }`}
        title="Consult ELLE AI Fashion Companion"
      >
        {/* Animated glowing jewel / butterfly icon */}
        <div className="relative">
          <Sparkles className="w-5 h-5 text-[#B89047] animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#1A1815]" />
        </div>
        <div className="hidden sm:block text-left">
          <span className="block font-serif text-sm font-semibold tracking-wider text-[#FAF8F5]">
            ELLE AI
          </span>
          <span className="block text-[9px] uppercase tracking-widest text-[#B89047]">
            Fashion Companion
          </span>
        </div>
      </button>

      {/* Chat Window Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[110] w-[calc(100vw-2rem)] sm:w-96 md:w-[420px] max-h-[82vh] bg-[#FAF8F5] border border-[#DDD6CA] shadow-2xl rounded-sm overflow-hidden flex flex-col animate-scale-up">
          {/* Header */}
          <div className="p-4 bg-[#1A1815] text-[#FAF8F5] border-b border-[#B89047]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#B89047]/20 border border-[#B89047]/50 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#B89047]" />
              </div>
              <div>
                <h3 className="font-serif text-base font-semibold leading-none">ELLE AI Stylist</h3>
                <span className="text-[9px] uppercase tracking-widest text-[#B89047]">
                  Your personal fashion companion
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-[#DDD6CA] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[50vh]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-sm text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#1A1815] text-[#FAF8F5] rounded-br-none'
                      : 'bg-white border border-[#E8E2D8] text-[#1A1815] shadow-sm rounded-bl-none'
                  }`}
                >
                  {msg.sender === 'ai' && (
                    <span className="block text-[9px] uppercase tracking-widest font-semibold text-[#8C6B26] mb-1">
                      ELLE AI
                    </span>
                  )}
                  <p>{msg.text}</p>
                </div>

                {/* Embedded Interactive Product Cards */}
                {msg.productRecommendations && msg.productRecommendations.length > 0 && (
                  <div className="w-full mt-3 space-y-2">
                    <span className="block text-[9px] uppercase tracking-wider font-semibold text-[#8C6B26]">
                      Curated Atelier Selections:
                    </span>
                    <div className="space-y-2">
                      {msg.productRecommendations.map((prodId) => {
                        const product = PRODUCTS_BY_ID[prodId];
                        if (!product) return null;

                        return (
                          <div
                            key={product.id}
                            className="p-2.5 bg-white border border-[#DDD6CA] rounded-sm flex items-center justify-between gap-3 shadow-sm hover:border-[#B89047] transition-colors"
                          >
                            <div className="flex items-center gap-2.5">
                              <img
                                src={product.images.primary}
                                alt={product.name}
                                className="w-10 h-14 object-cover rounded-sm border border-[#E8E2D8]"
                              />
                              <div>
                                <span className="text-[8px] uppercase tracking-widest text-[#8C6B26] font-bold">
                                  {product.collectionName}
                                </span>
                                <h5 className="font-serif text-xs font-semibold text-[#1A1815] line-clamp-1">
                                  {product.name}
                                </h5>
                                <span className="font-serif text-xs font-bold text-[#1A1815]">
                                  {formatPrice(product.price)}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => {
                                  openProductDetail(product.id);
                                  setIsOpen(false);
                                }}
                                className="p-1.5 bg-[#FAF8F5] border border-[#DDD6CA] hover:border-[#B89047] rounded-sm text-[#1A1815]"
                                title="View Dossier"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => addToCart(product, { size: 'M' })}
                                className="p-1.5 bg-[#B89047] hover:bg-[#8C6B26] text-white rounded-sm"
                                title="Add to Bag"
                              >
                                <ShoppingBag className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <span className="text-[9px] text-[#999083] mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {/* Typing Animation */}
            {isTyping && (
              <div className="flex items-center gap-2 text-[#8C6B26] text-xs p-2 bg-white rounded-sm border border-[#E8E2D8] w-24">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89047] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89047] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89047] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompt Chips */}
          <div className="p-2.5 bg-[#FAF8F5] border-t border-[#E8E2D8] overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5">
            {SUGGESTED_QUERIES.map((sq, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(sq)}
                className="px-2.5 py-1 bg-white border border-[#DDD6CA] hover:border-[#B89047] text-[#33302B] text-[10px] rounded-full transition-colors flex-shrink-0"
              >
                {sq}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-3 bg-white border-t border-[#DDD6CA] flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask Elle AI about styling, galas, budgets..."
              className="flex-1 text-xs p-2.5 bg-[#FAF8F5] border border-[#DDD6CA] rounded-sm text-[#1A1815] placeholder-[#999083] focus:border-[#B89047] outline-none"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
              className="p-2.5 bg-[#B89047] hover:bg-[#8C6B26] disabled:opacity-40 text-white rounded-sm transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

