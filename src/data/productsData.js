// Centralized Luxury Product Catalog for ConvertElle 2.0
// Demonstration prices in Indian Rupees (INR - ₹)
// Grounded strictly in ConvertElle brand philosophy and authentic PPT sketches

export const PRODUCTS = [
  // ==========================================
  // BUTTERFLY COLLECTION — TRANSFORMATION
  // ==========================================
  {
    id: 'ce-bf-01',
    name: 'Sovereign Metamorphosis Couture Gown',
    subtitle: 'Micro-Sequin Column with Sculpted Organza Wings',
    collection: 'butterfly',
    collectionName: 'The Butterfly',
    archetypeId: 'butterfly',
    category: 'couture-set',
    categoryName: 'Couture Suite',
    price: 78500,
    originalPrice: 89000,
    rating: 4.95,
    reviewsCount: 38,
    isNewArrival: true,
    isBestSeller: true,
    isCouture: true,
    badge: 'Couture Signature',
    occasions: ['Gala', 'Cocktail', 'Party'],
    colorOptions: [
      { name: 'Gilded Amber Gold', hex: '#D4AF37', border: '#B89047' },
      { name: 'Amethyst Violet', hex: '#4A1E5C', border: '#7A3293' },
      { name: 'Lapis Cyan', hex: '#1C5D73', border: '#298F9E' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Bespoke Fit'],
    images: {
      primary: '/images/butterfly/butterfly-couture-gold.png',
      hover: '/images/butterfly/butterfly-base-gold.png',
      sketch: '/images/butterfly/butterfly-transformation-breakdown.jpg',
      runway: '/images/butterfly/butterfly-couture-runway-duo.jpg',
      peplum: '/images/butterfly/butterfly-celestial-peplum.png'
    },
    gallery: [
      { id: 'img-1', src: '/images/butterfly/butterfly-couture-gold.png', title: 'Haute Metamorphosis Full Suite' },
      { id: 'img-2', src: '/images/butterfly/butterfly-base-gold.png', title: 'Minimalist Micro-Sequin Column Base' },
      { id: 'img-3', src: '/images/butterfly/butterfly-transformation-breakdown.jpg', title: 'Original Atelier Blueprint & Wire Study' },
      { id: 'img-4', src: '/images/butterfly/butterfly-couture-runway-duo.jpg', title: 'Dual Runway Presentation' }
    ],
    description: 'A triumph of biomimetic couture engineering. The Sovereign Metamorphosis Gown combines an ultra-comfortable stretch micro-sequin column silhouette with detachable architectural wings formed from millinery wire and hand-pleated iridescent silk organza. Transition effortlessly from an authoritative dinner sheath to a commanding gala spectacle.',
    fabricSpecs: {
      composition: 'Cruelty-Free Italian Silk Organza, Stretch Micro-Sequin Mesh, Silk Satin Lining',
      hardware: 'Concealed Rare-Earth Neodymium Magnetic Docking Anchors (18k Gold Plated)',
      care: 'Specialist Couture Dry Clean Only',
      sustainability: '100% Peace Silk certified, zero animal harm, non-toxic vegetable dyes'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Micro-Sequin Sheath Foundation',
      detachableElements: [
        'Millinery-Wire Iridescent Epaulet Wings (Pair)',
        'Tiered Graduated Lepidoptera Peplum',
        'Floor-Length Sculptural Organza Train'
      ],
      transformationTime: '45 seconds',
      compatibleWith: ['The Sovereign Column Dress', 'The Metamorph Jumpsuit']
    },
    stylingNotes: 'Pair with the ConvertElle Gilded Chrysalis Stilettos and minimal obsidian jewelry to let the wing structure command the room.'
  },
  {
    id: 'ce-bf-02',
    name: 'Celestial Lepidoptera Column Dress',
    subtitle: 'Cruelty-Free Silk Satin Sheath with Magnetic Anchors',
    collection: 'butterfly',
    collectionName: 'The Butterfly',
    archetypeId: 'butterfly',
    category: 'base',
    categoryName: 'Base Garment',
    price: 34000,
    rating: 4.88,
    reviewsCount: 24,
    isNewArrival: false,
    isBestSeller: true,
    isCouture: false,
    badge: 'Core Foundation',
    occasions: ['Office', 'Conference', 'Dinner'],
    colorOptions: [
      { name: 'Champagne Shimmer', hex: '#E6D7B8', border: '#D4AF37' },
      { name: 'Obsidian Noir', hex: '#121212', border: '#333333' },
      { name: 'Lilac Whisper', hex: '#B39BBF', border: '#8A699C' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Bespoke Fit'],
    images: {
      primary: '/images/butterfly/butterfly-base-gold.png',
      hover: '/images/butterfly/butterfly-couture-gold.png',
      sketch: '/images/butterfly/butterfly-transformation-breakdown.jpg',
      runway: '/images/butterfly/butterfly-celestial-peplum.png'
    },
    gallery: [
      { id: 'img-1', src: '/images/butterfly/butterfly-base-gold.png', title: 'Daytime Executive Column' },
      { id: 'img-2', src: '/images/butterfly/butterfly-transformation-breakdown.jpg', title: 'Hand-Rendered Technical Sketch' },
      { id: 'img-3', src: '/images/butterfly/butterfly-celestial-peplum.png', title: 'Styling with Wing Peplum' }
    ],
    description: 'The definitive foundation for transformational elegance. Crafted from heavyweight silk satin duchesse with ergonomic interior boning, this dress provides sharp, immaculate tailoring for demanding executive environments while hiding magnetic docking points along the scapula, waist, and hip lines.',
    fabricSpecs: {
      composition: '100% Cruelty-free Italian Silk Duchesse, Cupro Breathable Lining',
      hardware: 'Hidden Neodymium Clasping Grid',
      care: 'Dry clean only',
      sustainability: 'Carbon-neutral artisan weaving in Como, Italy'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Base Foundation Only',
      detachableElements: ['Can receive all Butterfly and Swan modular components'],
      transformationTime: 'Instant foundation',
      compatibleWith: ['Wing Epaulets', 'Graduated Peplum', 'Cascade Ballgown Overskirt']
    },
    stylingNotes: 'Worn clean with a tailored cashmere blazer for executive summits; attach wing ornaments at 6 PM for dinner.'
  },
  {
    id: 'ce-bf-03',
    name: 'Graduated Organza Wing Peplum',
    subtitle: 'Detachable Architectural Lepidoptera Waist Piece',
    collection: 'butterfly',
    collectionName: 'The Butterfly',
    archetypeId: 'butterfly',
    category: 'overskirt',
    categoryName: 'Detachable Statement',
    price: 19500,
    rating: 4.92,
    reviewsCount: 19,
    isNewArrival: true,
    isBestSeller: false,
    isCouture: false,
    badge: 'Modular Kit',
    occasions: ['Cocktail', 'Dinner', 'Party'],
    colorOptions: [
      { name: 'Mauve Wing Gradient', hex: '#9C427B', border: '#4A1E5C' },
      { name: 'Gilded Gold', hex: '#D4AF37', border: '#B89047' },
      { name: 'Cyan Vein', hex: '#298F9E', border: '#1C5D73' }
    ],
    sizes: ['Free Size (Adjustable Magnetic Belt)'],
    images: {
      primary: '/images/butterfly/butterfly-celestial-peplum.png',
      hover: '/images/butterfly/butterfly-couture-runway-duo.jpg',
      sketch: '/images/butterfly/butterfly-transformation-breakdown.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/butterfly/butterfly-celestial-peplum.png', title: 'Waist Architecture View' },
      { id: 'img-2', src: '/images/butterfly/butterfly-couture-runway-duo.jpg', title: 'Runway Duo Transformation' }
    ],
    description: 'Transform your silhouette in seconds with this magnetic peplum piece. Inspired by the delicate venation of monarch and swallowtail wings, wire-reinforced organza layers wrap the natural waist to create sculptural volume that moves dynamically with your stride.',
    fabricSpecs: {
      composition: 'Multi-layer Shimmer Organza with Hand-painted Lepidoptera Veins',
      hardware: 'Flexible Magnetic Waist Band with micro-ratchet clasp',
      care: 'Spot clean or gentle steam',
      sustainability: 'Hand-cut deadstock couture silk'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Detachable Component',
      detachableElements: ['Single-Piece Wrap Peplum with Hidden Clasp'],
      transformationTime: '20 seconds',
      compatibleWith: ['All ConvertElle Column Sheaths and Jumpsuits']
    },
    stylingNotes: 'Snap directly over the Sovereign Column Dress or the Metamorph Tuxedo Jumpsuit for black-tie art openings.'
  },

  // ==========================================
  // LEOPARD COLLECTION — CONFIDENCE
  // ==========================================
  {
    id: 'ce-lp-01',
    name: 'Sovereign Cascade Ballgown Overskirt',
    subtitle: 'Silk Brocade Volumetric Leopard Petal Skirt',
    collection: 'leopard',
    collectionName: 'The Leopard',
    archetypeId: 'leopard',
    category: 'overskirt',
    categoryName: 'Statement Kit',
    price: 46000,
    originalPrice: 52000,
    rating: 4.96,
    reviewsCount: 31,
    isNewArrival: false,
    isBestSeller: true,
    isCouture: true,
    badge: 'Iconic Masterpiece',
    occasions: ['Gala', 'Party', 'Cocktail'],
    colorOptions: [
      { name: 'Tuscan Ocelot Gold', hex: '#C5A059', border: '#8C6B26' },
      { name: 'Sable Umber', hex: '#5A3825', border: '#2B1A10' },
      { name: 'Midnight Panther Noir', hex: '#141416', border: '#000000' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Bespoke Fit'],
    images: {
      primary: '/images/leopard/leopard-runway-cascade-ballgown.jpg',
      hover: '/images/leopard/leopard-couture-vs-column-cape.jpg',
      sketch: '/images/leopard/leopard-modular-collection-breakdown.jpg',
      matrix: '/images/leopard/leopard-modular-composition-matrix.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/leopard/leopard-runway-cascade-ballgown.jpg', title: 'Grand Runway Ballgown Silhouette' },
      { id: 'img-2', src: '/images/leopard/leopard-couture-vs-column-cape.jpg', title: 'Couture Cape vs Ballgown Comparison' },
      { id: 'img-3', src: '/images/leopard/leopard-modular-collection-breakdown.jpg', title: 'Atelier Technical Sketch & Fabric Swatches' },
      { id: 'img-4', src: '/images/leopard/leopard-modular-composition-matrix.jpg', title: '4-Way Modular Configuration Matrix' }
    ],
    description: 'An audacious statement of predator grace. Hand-painted feline rosette motifs sprawl across sculpted silk organza and satin duchesse petal panels that cascade to a sweeping floor-length hem. Fastens invisibly at the waist of any ConvertElle foundation dress to transform sleek tailoring into a museum-worthy ballgown.',
    fabricSpecs: {
      composition: 'Silk Brocade, Satin Duchesse, Hand-Blocked Rosette Organza',
      hardware: 'Dual Neodymium Magnetic Belt with internal reinforcement',
      care: 'Specialist dry clean',
      sustainability: 'Cruelty-free vegan silk print method'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Statement Overskirt',
      detachableElements: ['Volumetric Multi-Tier Petal Ballgown Skirt'],
      transformationTime: '30 seconds',
      compatibleWith: ['The Minimalist Sand Column Dress', 'The Metamorph Tuxedo Jumpsuit']
    },
    stylingNotes: 'Wear with slicked-back hair and emerald drop earrings. When the gala concludes, remove the skirt to reveal the slim evening column.'
  },
  {
    id: 'ce-lp-02',
    name: 'Minimalist Sand Column Sheath',
    subtitle: 'Cruelty-Free Silk Crepe Architectural Pencil Dress',
    collection: 'leopard',
    collectionName: 'The Leopard',
    archetypeId: 'leopard',
    category: 'base',
    categoryName: 'Base Garment',
    price: 28500,
    rating: 4.85,
    reviewsCount: 18,
    isNewArrival: false,
    isBestSeller: true,
    isCouture: false,
    badge: 'Executive Capsule',
    occasions: ['Office', 'Conference', 'Dinner'],
    colorOptions: [
      { name: 'Warm Desert Sand', hex: '#D9C8B3', border: '#B89047' },
      { name: 'Charcoal Shadow', hex: '#333333', border: '#111111' },
      { name: 'Ivory Pearl', hex: '#F6F3EE', border: '#DDD6CA' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: {
      primary: '/images/leopard/leopard-modular-collection-breakdown.jpg',
      hover: '/images/leopard/leopard-couture-vs-column-cape.jpg',
      sketch: '/images/leopard/leopard-modular-composition-matrix.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/leopard/leopard-modular-collection-breakdown.jpg', title: 'Original Sketch — Minimalist Form' },
      { id: 'img-2', src: '/images/leopard/leopard-couture-vs-column-cape.jpg', title: 'Architectural Column & Cape Look' }
    ],
    description: 'The foundation of the Confidence identity. Featuring a high mock-neck collar and a continuous sculpted vertical seam that elongates the figure. Crafted in sand-tone silk crepe that resists creasing throughout international travel and boardroom meetings.',
    fabricSpecs: {
      composition: 'Cruelty-free Italian Silk Crepe & Stretch Cupro',
      hardware: 'YKK invisible rear zip and concealed magnetic waistband receptors',
      care: 'Dry clean only',
      sustainability: 'OEKO-TEX Standard 100 non-toxic certified'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Base Pencil Column',
      detachableElements: ['Receives Leopard Ballgown Skirt, Organza Cape, and Metallic Cinchers'],
      transformationTime: 'Foundation garment',
      compatibleWith: ['All Leopard Statement and Couture components']
    },
    stylingNotes: 'A pristine canvas for high-stakes leadership events. Add the leopard cape at dusk.'
  },
  {
    id: 'ce-lp-03',
    name: 'Sovereign Leopard Silk Capelet',
    subtitle: 'Detachable Organza Collar & Sleek Shoulder Cape',
    collection: 'leopard',
    collectionName: 'The Leopard',
    archetypeId: 'leopard',
    category: 'bolero',
    categoryName: 'Expression Kit',
    price: 21500,
    rating: 4.89,
    reviewsCount: 15,
    isNewArrival: true,
    isBestSeller: false,
    isCouture: false,
    badge: 'Expression Kit',
    occasions: ['Dinner', 'Cocktail', 'Party'],
    colorOptions: [
      { name: 'Golden Ocelot', hex: '#C5A059', border: '#8C6B26' },
      { name: 'Monochrome Noir', hex: '#1C1B1A', border: '#333333' }
    ],
    sizes: ['One Size Fits All'],
    images: {
      primary: '/images/leopard/leopard-couture-vs-column-cape.jpg',
      hover: '/images/leopard/leopard-runway-cascade-ballgown.jpg',
      sketch: '/images/leopard/leopard-modular-collection-breakdown.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/leopard/leopard-couture-vs-column-cape.jpg', title: 'Capelet Presentation' },
      { id: 'img-2', src: '/images/leopard/leopard-modular-composition-matrix.jpg', title: 'Modular Options' }
    ],
    description: 'An elegant drape of sheer silk organza adorned with subtle abstracted feline patterns. Snaps securely across the shoulders to provide warmth and dramatic movement during evening strolls or terrace cocktails.',
    fabricSpecs: {
      composition: '100% Silk Organza with hand-rolled hems',
      hardware: 'Magnetic collar snap',
      care: 'Steam only',
      sustainability: 'Handmade by master artisans'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Detachable Shoulder Drape',
      detachableElements: ['Magnetic collar and winged organza mantle'],
      transformationTime: '15 seconds',
      compatibleWith: ['Minimalist Sand Column', 'Sovereign Column Dress']
    },
    stylingNotes: 'Drape over bare shoulders or over the tailored crew neck of the base dress.'
  },

  // ==========================================
  // PEACOCK COLLECTION — INDIVIDUALITY
  // ==========================================
  {
    id: 'ce-pc-01',
    name: 'Pavo Cristatus Iridescent Couture Gown',
    subtitle: 'Satin Corset Bodice with Sculpted Peacock Organza Train',
    collection: 'peacock',
    collectionName: 'The Peacock',
    archetypeId: 'peacock',
    category: 'couture-set',
    categoryName: 'Couture Suite',
    price: 82000,
    originalPrice: 94000,
    rating: 4.98,
    reviewsCount: 42,
    isNewArrival: true,
    isBestSeller: true,
    isCouture: true,
    badge: 'Royal Haute Couture',
    occasions: ['Gala', 'Party'],
    colorOptions: [
      { name: 'Royal Peacock Sapphire & Emerald', hex: '#0D4D5C', border: '#1E3D2F' },
      { name: 'Gilded Turquoise', hex: '#298F9E', border: '#D4AF37' },
      { name: 'Abyssal Midnight Blue', hex: '#0A1E2B', border: '#1C5D73' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Bespoke Fit'],
    images: {
      primary: '/images/peacock/peacock-couture-gown.jpg',
      hover: '/images/peacock/peacock-statement-trousers.jpg',
      sketch: '/images/peacock/peacock-couture-gown.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/peacock/peacock-couture-gown.jpg', title: 'Haute Peacock Train & Corset Ensemble' },
      { id: 'img-2', src: '/images/peacock/peacock-statement-trousers.jpg', title: 'Architectural Satin Bustier & Flared Trouser Base' }
    ],
    description: 'An ode to uncompromising individuality. Featuring a precision-boned azure satin corset bodice and a dramatic detachable side-cascade train mimicking the crystalline iridescence of peacock eye plumage. Built from layered emerald organza, cyan silk chiffon, and hand-embroidered metallic threadwork.',
    fabricSpecs: {
      composition: 'Duchesse Satin Bodice, Heavy Crepe Base, Multi-tier Organza & Tulle Feather Appliqué',
      hardware: 'Concealed magnetic docking clips and boned hook-and-eye structural support',
      care: 'Museum-standard garment preservation dry clean',
      sustainability: '100% cruelty-free biomimetic embroidery — zero real plumage utilized'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Azure Satin Bustier & Crepe Foundation',
      detachableElements: [
        'Multi-Tier Peacock Plumage Organza Train',
        'Detachable Feather-Vein Shoulder Brooch',
        'Contoured Iridescent Hip Cascade'
      ],
      transformationTime: '50 seconds',
      compatibleWith: ['Peacock Flared Trousers', 'The Metamorph Tuxedo Jumpsuit']
    },
    stylingNotes: 'Anchor the look with diamond drop earrings. When transition is needed, unclip the train to reveal the tailored evening trousers.'
  },
  {
    id: 'ce-pc-02',
    name: 'Sovereign Azure Corset & Flared Trouser Duo',
    subtitle: 'Chambray/Denim Crepe Fluid Pants & Satin Bustier',
    collection: 'peacock',
    collectionName: 'The Peacock',
    archetypeId: 'peacock',
    category: 'base',
    categoryName: 'Base Garment',
    price: 36000,
    rating: 4.87,
    reviewsCount: 22,
    isNewArrival: false,
    isBestSeller: true,
    isCouture: false,
    badge: 'Tailored Separation',
    occasions: ['Conference', 'Dinner', 'Cocktail'],
    colorOptions: [
      { name: 'Cerulean Peacock', hex: '#0D4D5C', border: '#298F9E' },
      { name: 'Jet Noir with Cobalt Lapel', hex: '#111418', border: '#0D4D5C' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: {
      primary: '/images/peacock/peacock-statement-trousers.jpg',
      hover: '/images/peacock/peacock-couture-gown.jpg',
      sketch: '/images/peacock/peacock-statement-trousers.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/peacock/peacock-statement-trousers.jpg', title: 'Studio Atelier Design Sketch' }
    ],
    description: 'The foundation piece drawn directly from ConvertElle’s original sketchbook. Combining an azure duchesse satin corset with wide-leg fluid denim-crepe trousers that split gracefully at the ankle hem. Magnetic ports at the hip line accommodate the grand couture plumage train.',
    fabricSpecs: {
      composition: 'Duchesse Satin, Premium Japanese Chambray Crepe',
      hardware: 'Ergonomic hidden corset boning and invisible magnet anchors',
      care: 'Dry clean only',
      sustainability: 'Organic low-water indigo dyeing'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Bustier & Flared Trouser Set',
      detachableElements: ['Ready to receive Peacock Feather Train and Brooches'],
      transformationTime: 'Base foundation',
      compatibleWith: ['Pavo Cristatus Train', 'Tiger Metallic Cinchers']
    },
    stylingNotes: 'Immensely flattering silhouette for summits, keynote lectures, and VIP dinner discussions.'
  },
  {
    id: 'ce-pc-03',
    name: 'Iridescent Peacock Organza Brooch & Plume',
    subtitle: 'Artisanal Detachable Epaulet & Hairpiece',
    collection: 'peacock',
    collectionName: 'The Peacock',
    archetypeId: 'peacock',
    category: 'accessory',
    categoryName: 'Detachable Accessory',
    price: 11500,
    rating: 4.91,
    reviewsCount: 16,
    isNewArrival: true,
    isBestSeller: false,
    isCouture: false,
    badge: 'Artisanal Accent',
    occasions: ['Cocktail', 'Dinner', 'Party'],
    colorOptions: [
      { name: 'Emerald & Gold Spectrum', hex: '#1E3D2F', border: '#D4AF37' }
    ],
    sizes: ['Standard Modular Clip'],
    images: {
      primary: '/images/peacock/peacock-couture-gown.jpg',
      hover: '/images/peacock/peacock-statement-trousers.jpg',
      sketch: '/images/peacock/peacock-couture-gown.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/peacock/peacock-couture-gown.jpg', title: 'Brooch Detail on Corset' }
    ],
    description: 'Handcrafted with layered laser-cut organza petals and micro-faceted Austrian crystals. Magnetically clips onto lapels, corsets, hair chignons, or handbag straps.',
    fabricSpecs: {
      composition: 'Glitter Organza, 24k Gold leaf trim, Austrian crystals',
      hardware: 'Dual neodymium magnetic anchor',
      care: 'Dust with soft cloth',
      sustainability: 'Zero cruelty, engineered biomimicry'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Modular Brooch',
      detachableElements: ['Universal Magnetic Attachment'],
      transformationTime: '5 seconds',
      compatibleWith: ['All ConvertElle garments']
    },
    stylingNotes: 'Affix to the left collarbone for subtle brilliance or clip into an updo.'
  },

  // ==========================================
  // SWAN COLLECTION — GRACE
  // ==========================================
  {
    id: 'ce-sw-01',
    name: 'Cygnus Grand Couture Ballgown',
    subtitle: 'Sculpted Engineered Organza Plumage & Liquid Silver Gown',
    collection: 'swan',
    collectionName: 'The Swan',
    archetypeId: 'swan',
    category: 'couture-set',
    categoryName: 'Couture Suite',
    price: 74500,
    originalPrice: 85000,
    rating: 4.97,
    reviewsCount: 36,
    isNewArrival: true,
    isBestSeller: true,
    isCouture: true,
    badge: 'Masterpiece Suite',
    occasions: ['Gala', 'Cocktail'],
    colorOptions: [
      { name: 'Swan Alabaster & Silver', hex: '#F6F3EE', border: '#A9A49B' },
      { name: 'Noir Swan Velvet', hex: '#0D0D0D', border: '#333333' },
      { name: 'Liquid Platinum', hex: '#D8D4CE', border: '#B89047' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Bespoke Fit'],
    images: {
      primary: '/images/swan/swan-grand-couture-ballgown.jpg',
      hover: '/images/swan/swan-transformation-duo.jpg',
      sketch: '/images/swan/swan-collective-master-board.jpg',
      runway: '/images/swan/swan-liquid-silver-gown.jpg',
      noir: '/images/swan/swan-noir-swan.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/swan/swan-grand-couture-ballgown.jpg', title: 'Grand Couture Ballgown Presentation' },
      { id: 'img-2', src: '/images/swan/swan-transformation-duo.jpg', title: 'Casual Wear vs Detachable Swan Couture' },
      { id: 'img-3', src: '/images/swan/swan-liquid-silver-gown.jpg', title: 'Liquid Silver Flowing Silhouette' },
      { id: 'img-4', src: '/images/swan/swan-noir-swan.jpg', title: 'The Noir Swan Variations' },
      { id: 'img-5', src: '/images/swan/swan-collective-master-board.jpg', title: 'Master Atelier Mood & Sketch Board' }
    ],
    description: 'The pinnacle of ethereal grace. Drawn from ConvertElle’s sketch notes on page 13 and master boards, this ensemble begins as an immaculate crepe vest suit with denim accents, which transforms via detachable sculpted swan headwear, engineered organza plumage waist wings, and layered feather appliqué trousers into an operatic gala vision.',
    fabricSpecs: {
      composition: 'Cruelty-Free Crepe, Heavy Satin Duchesse, Sculpted Organza Plumage',
      hardware: 'Concealed magnetic docking seams & featherweight internal armature',
      care: 'Specialist haute couture dry clean',
      sustainability: 'Engineered synthetic organza mimicking swan down with zero animal impact'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Cygnus Minimalist Crepe Tuxedo Jumpsuit',
      detachableElements: [
        'Detachable Swan-Detail Sculptural Organza Wing Belt',
        'Swan-Feathered Architectural Headwear',
        'Layered Feather Appliqué Trousers Overlay'
      ],
      transformationTime: '40 seconds',
      compatibleWith: ['The Sovereign Column Dress', 'The Metamorph Tuxedo Jumpsuit']
    },
    stylingNotes: 'Worn without attachments for minimalist elegance; attach the wing belt for an entrance no gala will forget.'
  },
  {
    id: 'ce-sw-02',
    name: 'Cygnus Minimalist Vest Jumpsuit',
    subtitle: 'Crepe & Denim Architectural Tailored One-Piece',
    collection: 'swan',
    collectionName: 'The Swan',
    archetypeId: 'swan',
    category: 'base',
    categoryName: 'Base Garment',
    price: 31000,
    rating: 4.86,
    reviewsCount: 19,
    isNewArrival: false,
    isBestSeller: true,
    isCouture: false,
    badge: 'Modern Muse Base',
    occasions: ['Office', 'Conference', 'Dinner'],
    colorOptions: [
      { name: 'Cerulean Ice & Crepe', hex: '#6B8EAE', border: '#DDD6CA' },
      { name: 'Alabaster White', hex: '#F9F7F4', border: '#B89047' },
      { name: 'Midnight Charcoal', hex: '#1C1B1A', border: '#333333' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: {
      primary: '/images/swan/swan-cygnus-core-suit.jpg',
      hover: '/images/swan/swan-transformation-duo.jpg',
      sketch: '/images/swan/swan-base-modern-muse.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/swan/swan-cygnus-core-suit.jpg', title: 'Studio Suit Foundation' },
      { id: 'img-2', src: '/images/swan/swan-transformation-duo.jpg', title: 'Side-by-Side Transformation' },
      { id: 'img-3', src: '/images/swan/swan-base-modern-muse.jpg', title: 'Modern Muse Editorial Sketch' }
    ],
    description: 'Designed for the visionary who glides through boardrooms with quiet supremacy. Features a clean V-neck vest silhouette, tailored high-rise fluid trousers, and minimalist studs as specified in the original sketch.',
    fabricSpecs: {
      composition: 'Italian Crepe Fabric with Raw Denim Insets and Cupro Lining',
      hardware: 'Hidden side zip and magnetic attachment points along the waistline and hips',
      care: 'Dry clean only',
      sustainability: 'GOTS certified organic cotton blend'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Cygnus Core Suit',
      detachableElements: ['Accepts Swan Wing Belt, Feather Appliqués, and Capelets'],
      transformationTime: 'Foundation',
      compatibleWith: ['All Swan and Butterfly modular elements']
    },
    stylingNotes: 'Combine with pointed heels and a sharp briefcase by day; attach plumage for private collectors’ dinners.'
  },
  {
    id: 'ce-sw-03',
    name: 'Noir Swan Velvet & Organza Bolero',
    subtitle: 'Dramatic Sculpted Feather Cape with High Collar',
    collection: 'swan',
    collectionName: 'The Swan',
    archetypeId: 'swan',
    category: 'bolero',
    categoryName: 'Statement Kit',
    price: 24500,
    rating: 4.94,
    reviewsCount: 14,
    isNewArrival: true,
    isBestSeller: false,
    isCouture: true,
    badge: 'Noir Edition',
    occasions: ['Gala', 'Dinner', 'Cocktail'],
    colorOptions: [
      { name: 'Velvet Noir', hex: '#0D0D0D', border: '#333333' },
      { name: 'Swan Alabaster', hex: '#F9F7F4', border: '#D4AF37' }
    ],
    sizes: ['XS-S', 'M-L'],
    images: {
      primary: '/images/swan/swan-noir-swan.jpg',
      hover: '/images/swan/swan-feathery-ascent.jpg',
      sketch: '/images/swan/swan-collective-master-board.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/swan/swan-noir-swan.jpg', title: 'Noir Swan Dramatic Silhouette' },
      { id: 'img-2', src: '/images/swan/swan-feathery-ascent.jpg', title: 'Feathery Ascent Editorial' }
    ],
    description: 'Inspired by the mysterious dark plumage of the black cygnus. Micro-pleated organza ruffles mimic the wings in ascent, settling softly over the shoulders with an ergonomic high collar.',
    fabricSpecs: {
      composition: 'Silk Velvet and Pleated Organza Ribbons',
      hardware: 'Concealed magnetic neck lock',
      care: 'Specialist dry clean',
      sustainability: '100% cruelty-free'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Detachable Capelet',
      detachableElements: ['Single-Action Magnetic Capelet'],
      transformationTime: '10 seconds',
      compatibleWith: ['Sovereign Column Dress', 'Cygnus Jumpsuit', 'Power Contour Sheath']
    },
    stylingNotes: 'Instantly elevates any monochrome column dress into dramatic black-tie couture.'
  },

  // ==========================================
  // TIGER COLLECTION — STRENGTH
  // ==========================================
  {
    id: 'ce-tg-01',
    name: 'Sovereign Tigress Column & Structural Sleeves',
    subtitle: 'Fluted Long Dress with Detachable Tiger-Striped Sleeves & Overskirt',
    collection: 'tiger',
    collectionName: 'The Tiger',
    archetypeId: 'tiger',
    category: 'couture-set',
    categoryName: 'Couture Suite',
    price: 76000,
    originalPrice: 88000,
    rating: 4.96,
    reviewsCount: 33,
    isNewArrival: true,
    isBestSeller: true,
    isCouture: true,
    badge: 'Apex Couture',
    occasions: ['Gala', 'Dinner', 'Party'],
    colorOptions: [
      { name: 'Tiger Rust & Amber', hex: '#B45A1D', border: '#8C6B26' },
      { name: 'Obsidian Noir with Bronze Stripe', hex: '#1C1B1A', border: '#B45A1D' },
      { name: 'Gilded Amber', hex: '#D4AF37', border: '#B89047' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Bespoke Fit'],
    images: {
      primary: '/images/tiger/tiger-couture-gown.jpg',
      hover: '/images/tiger/tiger-statement-blazer.jpg',
      sketch: '/images/tiger/tiger-couture-gown.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/tiger/tiger-couture-gown.jpg', title: 'Atelier Technical Sketch — Long Dress with Detachable Sleeves & Overskirt' },
      { id: 'img-2', src: '/images/tiger/tiger-statement-blazer.jpg', title: 'Detachable Tiger Ornament Blazer & Pencil Skirt Ensemble' }
    ],
    description: 'An architectural masterclass in power dressing, taken directly from page 14 of the ConvertElle atelier sketches. A body-conscious fluted black column gown pairs with detachable structural tiger-striped sleeves and an accordion-pleated amber overskirt. Features fierce, commanding energy that refuses to apologize for taking up space.',
    fabricSpecs: {
      composition: 'Heavyweight Stretch Crepe, Velvet Tiger-Stripe Insets, Micro-pleated Satin',
      hardware: '18k gold-plated magnetic snap cuffs and shoulder epaulet docks',
      care: 'Specialist dry clean only',
      sustainability: 'Cruelty-free vegan faux velvet patterns'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Floor-Length Fluted Column Dress',
      detachableElements: [
        'Pair of Detachable Structured Tiger-Stripe Sleeves with Ribbed Cuffs',
        'Detachable Fluted Overskirt with Striped Pleating',
        'Sculpted Metallic Tiger Head Shoulder Ornament'
      ],
      transformationTime: '45 seconds',
      compatibleWith: ['The Sovereign Column Dress', 'The Metamorph Tuxedo Jumpsuit']
    },
    stylingNotes: 'Worn sleeveless for intimate dinner salons; snap on the dramatic striped sleeves to project apex dominance.'
  },
  {
    id: 'ce-tg-02',
    name: 'Apex Tigress Structural Blazer & Corset Set',
    subtitle: 'Tailored Blazer with Metallic Tiger Ornament & Corset Pieces',
    collection: 'tiger',
    collectionName: 'The Tiger',
    archetypeId: 'tiger',
    category: 'base',
    categoryName: 'Base Garment',
    price: 38500,
    rating: 4.90,
    reviewsCount: 27,
    isNewArrival: false,
    isBestSeller: true,
    isCouture: false,
    badge: 'Power Tailoring',
    occasions: ['Conference', 'Office', 'Dinner'],
    colorOptions: [
      { name: 'Charcoal Wool with Amber Corset', hex: '#333333', border: '#B45A1D' },
      { name: 'All Noir Onyx', hex: '#111111', border: '#333333' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: {
      primary: '/images/tiger/tiger-statement-blazer.jpg',
      hover: '/images/tiger/tiger-couture-gown.jpg',
      sketch: '/images/tiger/tiger-statement-blazer.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/tiger/tiger-statement-blazer.jpg', title: 'Atelier Technical Sketch — Blazer & Corset Breakdown' }
    ],
    description: 'Sharp, predatory tailoring for modern matriarchs. Features an ergonomic cut blazer with peaked lapels, a contoured pencil skirt foundation, and detachable corset blazer pieces that cinch the waist with tiger-striped sculptural ribs.',
    fabricSpecs: {
      composition: 'Super 140s Wool Twill, Silk Satin Lining, Brass Casting Ornament',
      hardware: 'Neodymium magnetic waist closures and shoulder brooch pin',
      care: 'Tailored dry clean',
      sustainability: 'Zero chemical dyes, natural wool certification'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Executive Blazer & Pencil Skirt',
      detachableElements: [
        'Detachable Corset Blazer Rib Pieces (Left & Right)',
        'Metallic Tiger Head Shoulder Ornament'
      ],
      transformationTime: '30 seconds',
      compatibleWith: ['All ConvertElle foundations']
    },
    stylingNotes: 'The ultimate power suit for high-stakes investor summits and boardroom negotiations.'
  },
  {
    id: 'ce-tg-03',
    name: 'Sculpted Metallic Tiger Shoulder Ornament',
    subtitle: 'Gilded Brass Animal Head Magnetic Brooch',
    collection: 'tiger',
    collectionName: 'The Tiger',
    archetypeId: 'tiger',
    category: 'accessory',
    categoryName: 'Detachable Accessory',
    price: 13500,
    rating: 4.93,
    reviewsCount: 20,
    isNewArrival: true,
    isBestSeller: false,
    isCouture: true,
    badge: 'Couture Hardware',
    occasions: ['Cocktail', 'Gala', 'Party'],
    colorOptions: [
      { name: 'Antique Brushed Gold', hex: '#D4AF37', border: '#8C6B26' },
      { name: 'Dark Gunmetal', hex: '#404040', border: '#111111' }
    ],
    sizes: ['Universal Clasp'],
    images: {
      primary: '/images/tiger/tiger-statement-blazer.jpg',
      hover: '/images/tiger/tiger-couture-gown.jpg',
      sketch: '/images/tiger/tiger-statement-blazer.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/tiger/tiger-statement-blazer.jpg', title: 'Sketch of Shoulder Ornament' }
    ],
    description: 'Cast in lightweight architectural jeweler’s brass with an 18k brushed gold finish. Features a stylized roaring feline motif with concealed neodymium magnets that snap through any jacket lapel or evening dress shoulder.',
    fabricSpecs: {
      composition: 'Hypoallergenic Jeweler’s Brass, 18k Gold Micro-Plating',
      hardware: 'Dual Neodymium Magnetic Backing',
      care: 'Polish with microfiber cloth',
      sustainability: '100% Recycled Precious Metals'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Detachable Shoulder Jewel',
      detachableElements: ['Universal Magnetic Armor Piece'],
      transformationTime: 'Instant (5 seconds)',
      compatibleWith: ['Blazers, Dresses, Capes, Handbags']
    },
    stylingNotes: 'Wear perched on the right shoulder seam to command attention from any angle.'
  },

  // ==========================================
  // JELLYFISH COLLECTION — FLUIDITY
  // ==========================================
  {
    id: 'ce-jf-01',
    name: 'Aurelia Luminescent Couture Gown',
    subtitle: 'Bioluminescent Bell Gown with Cascading Tendril Sleeves',
    collection: 'jellyfish',
    collectionName: 'The Jellyfish',
    archetypeId: 'jellyfish',
    category: 'couture-set',
    categoryName: 'Couture Suite',
    price: 72000,
    originalPrice: 84000,
    rating: 4.97,
    reviewsCount: 35,
    isNewArrival: true,
    isBestSeller: true,
    isCouture: true,
    badge: 'Bioluminescent Haute',
    occasions: ['Gala', 'Party'],
    colorOptions: [
      { name: 'Bioluminescent Cyan & Lilac', hex: '#8A699C', border: '#298F9E' },
      { name: 'Deep Sea Cerulean', hex: '#0D4D5C', border: '#1C5D73' },
      { name: 'Alabaster Moon Jelly', hex: '#F0E2C8', border: '#DDD6CA' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Bespoke Fit'],
    images: {
      primary: '/images/jellyfish/jellyfish-couture-gown.jpg',
      hover: '/images/jellyfish/jellyfish-statement-trousers.jpg',
      sketch: '/images/jellyfish/jellyfish-couture-gown.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/jellyfish/jellyfish-couture-gown.jpg', title: 'Atelier Technical Sketch — Bell Silhouette & Tendrils' },
      { id: 'img-2', src: '/images/jellyfish/jellyfish-statement-trousers.jpg', title: 'Tulle Bolero & Tiered Trousers Ensemble' }
    ],
    description: 'Inspired by the hypnotic, weightless pulse of deep-sea pelagic fauna. Directly derived from page 15 of the ConvertElle technical portfolio. Features a bell-domed tulle overskirt with hand-beaded water droplets, paired with detachable floating tendril sleeves that ripple with ethereal grace in low ambient light.',
    fabricSpecs: {
      composition: 'Micro-Tulle, Phosphorescent Silk Organza, Freshwater Pearl Accents',
      hardware: 'Concealed magnetic docking waist ring and wrist anchors',
      care: 'Specialist couture restoration dry clean',
      sustainability: 'Zero harmful ocean runoff microfibers, 100% biodegradable silk tulle'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Slim Pleated Silk Chiffon Column',
      detachableElements: [
        'Detachable Bell-Dome Waist Piece with Beaded Droplets',
        'Pair of Floating Tendril Organza Sleeves',
        'Tiered Ruffle Cascade Train'
      ],
      transformationTime: '40 seconds',
      compatibleWith: ['The Sovereign Column Dress', 'Jellyfish Fluid Trouser Ensemble']
    },
    stylingNotes: 'Designed for gala evenings under twilight illumination. Moves like water in motion.'
  },
  {
    id: 'ce-jf-02',
    name: 'Pelagia Fluid Trousers & Tulle Bolero Shrug',
    subtitle: 'High-Waist Wide Trousers with Detachable Tiered Belt Piece',
    collection: 'jellyfish',
    collectionName: 'The Jellyfish',
    archetypeId: 'jellyfish',
    category: 'base',
    categoryName: 'Base Garment',
    price: 35000,
    rating: 4.88,
    reviewsCount: 21,
    isNewArrival: false,
    isBestSeller: true,
    isCouture: false,
    badge: 'Fluid Atelier',
    occasions: ['Dinner', 'Cocktail', 'Party'],
    colorOptions: [
      { name: 'Charcoal Grey & Lilac', hex: '#4A4A52', border: '#8A699C' },
      { name: 'Midnight Deep Blue', hex: '#141A29', border: '#298F9E' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: {
      primary: '/images/jellyfish/jellyfish-statement-trousers.jpg',
      hover: '/images/jellyfish/jellyfish-couture-gown.jpg',
      sketch: '/images/jellyfish/jellyfish-statement-trousers.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/jellyfish/jellyfish-statement-trousers.jpg', title: 'Sketch Portfolio — Bolero & Belt Piece' }
    ],
    description: 'An effortlessly fluid set comprising charcoal high-waisted wide-leg trousers, a sculpted orchid bustier, and an architectural tiered belt piece in sheer blue-grey tulle that cascades from hip to floor like flowing ocean currents.',
    fabricSpecs: {
      composition: 'Heavy Sandwashed Silk Crepe, Fine Italian Tulle',
      hardware: 'Hidden magnetic waistband attachments and side zipper',
      care: 'Dry clean only',
      sustainability: 'Cruelty-free vegan processes'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Wide Trousers & Bustier',
      detachableElements: [
        'Detachable Bolero Shrug with Collared Neckline',
        'Detachable Asymmetric Tulle Belt Piece'
      ],
      transformationTime: '30 seconds',
      compatibleWith: ['All ConvertElle foundations']
    },
    stylingNotes: 'Untie the tulle belt piece for minimalist cocktail elegance; attach both bolero and belt piece for gallery openings.'
  },
  {
    id: 'ce-jf-03',
    name: 'Aurelia Sheer Tulle Bolero Shrug',
    subtitle: 'Detachable Collar & Extended Bell Sleeves',
    collection: 'jellyfish',
    collectionName: 'The Jellyfish',
    archetypeId: 'jellyfish',
    category: 'bolero',
    categoryName: 'Expression Kit',
    price: 18500,
    rating: 4.89,
    reviewsCount: 17,
    isNewArrival: true,
    isBestSeller: false,
    isCouture: false,
    badge: 'Expression Shrug',
    occasions: ['Dinner', 'Cocktail'],
    colorOptions: [
      { name: 'Luminescent Ice Lilac', hex: '#8A699C', border: '#DDD6CA' },
      { name: 'Seafoam Cyan', hex: '#298F9E', border: '#1C5D73' }
    ],
    sizes: ['XS-S', 'M-L'],
    images: {
      primary: '/images/jellyfish/jellyfish-statement-trousers.jpg',
      hover: '/images/jellyfish/jellyfish-couture-gown.jpg',
      sketch: '/images/jellyfish/jellyfish-statement-trousers.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/jellyfish/jellyfish-statement-trousers.jpg', title: 'Technical Drawing of Bolero Shrug' }
    ],
    description: 'A diaphanous layering shrug with an open front and ruffled high mandarin collar. Slips on in seconds to frame the neckline and provide ethereal arm coverage without weighing down your movement.',
    fabricSpecs: {
      composition: 'Cruelty-Free Multi-Layer Silk Tulle',
      hardware: 'Magnetic collar snap',
      care: 'Hand steam only',
      sustainability: 'Non-toxic eco dying'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Detachable Shrug',
      detachableElements: ['Single-Piece Slip-On Bolero'],
      transformationTime: '10 seconds',
      compatibleWith: ['All ConvertElle Dresses and Jumpsuits']
    },
    stylingNotes: 'Instant daytime-to-evening metamorphosis over any simple dress or tailored bustier.'
  },

  // ==========================================
  // MODULAR ESSENTIALS — CORE FOUNDATIONS
  // ==========================================
  {
    id: 'ce-es-01',
    name: 'The Sovereign Column Dress',
    subtitle: 'Precision-Tailored Silk Duchesse Sheath with Concealed Docking System',
    collection: 'essential',
    collectionName: 'Modular Essentials',
    archetypeId: 'butterfly',
    category: 'base',
    categoryName: 'Base Garment',
    price: 28500,
    rating: 4.98,
    reviewsCount: 56,
    isNewArrival: false,
    isBestSeller: true,
    isCouture: false,
    badge: 'Foundational Base #1',
    occasions: ['Office', 'Conference', 'Dinner', 'Cocktail', 'Gala'],
    colorOptions: [
      { name: 'Jet Noir', hex: '#0D0D0D', border: '#333333' },
      { name: 'Desert Sand', hex: '#D9C8B3', border: '#B89047' },
      { name: 'Ivory Pearl', hex: '#F6F3EE', border: '#DDD6CA' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Bespoke Fit'],
    images: {
      primary: '/images/butterfly/butterfly-base-gold.png',
      hover: '/images/butterfly/butterfly-couture-gold.png',
      sketch: '/images/butterfly/butterfly-transformation-breakdown.jpg',
      runway: '/images/leopard/leopard-modular-collection-breakdown.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/butterfly/butterfly-base-gold.png', title: 'Sovereign Column Dress — Clean Silhouette' },
      { id: 'img-2', src: '/images/butterfly/butterfly-transformation-breakdown.jpg', title: 'Hidden Docking Architecture' }
    ],
    description: 'The architectural anchor of the ConvertElle wardrobe. An impeccably tailored, floor-skimming column dress designed for authoritative daytime presence. Built with concealed magnetic docking points along the neckline, waist, and hemline that accept all modular kits across all six animal collections.',
    fabricSpecs: {
      composition: 'Cruelty-Free Italian Silk Crepe & Satin Duchesse, Cupro Lining',
      hardware: '12 Concealed Gold-Plated Rare Earth Neodymium Magnetic Docking Receptors',
      care: 'Dry clean only',
      sustainability: '100% sustainable European silk with zero animal cruelty'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'The Sovereign Base',
      detachableElements: ['Engineered to anchor all 6 FAUNA collections'],
      transformationTime: 'Universal Foundation',
      compatibleWith: ['All 18 Detachable Expression, Statement, and Couture Kits']
    },
    stylingNotes: 'Wear solitary for executive summits. Clip on the Leopard Overskirt for galas or Butterfly Wings for contemporary art biennials.'
  },
  {
    id: 'ce-es-02',
    name: 'The Metamorph Tuxedo Jumpsuit',
    subtitle: 'Architectural High-Rise Crepe Tuxedo Jumpsuit',
    collection: 'essential',
    collectionName: 'Modular Essentials',
    archetypeId: 'swan',
    category: 'base',
    categoryName: 'Base Garment',
    price: 32000,
    rating: 4.94,
    reviewsCount: 48,
    isNewArrival: false,
    isBestSeller: true,
    isCouture: false,
    badge: 'Foundational Base #2',
    occasions: ['Office', 'Conference', 'Dinner', 'Cocktail', 'Gala'],
    colorOptions: [
      { name: 'Midnight Charcoal', hex: '#141416', border: '#333333' },
      { name: 'Alabaster Ivory', hex: '#F6F3EE', border: '#B89047' },
      { name: 'Deep Royal Navy', hex: '#0A1E2B', border: '#1C5D73' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Bespoke Fit'],
    images: {
      primary: '/images/swan/swan-cygnus-core-suit.jpg',
      hover: '/images/peacock/peacock-statement-trousers.jpg',
      sketch: '/images/swan/swan-transformation-duo.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/swan/swan-cygnus-core-suit.jpg', title: 'Metamorph Tuxedo Foundation' },
      { id: 'img-2', src: '/images/peacock/peacock-statement-trousers.jpg', title: 'Alternative Trouser View' }
    ],
    description: 'A masterwork of tailored fluid lines. Peaked satin lapels crown a sculpted torso that effortlessly opens into wide-leg palazzo trousers. Embedded magnetic anchor points at shoulders, sleeves, and hips allow seamless docking of dramatic trains and boleros.',
    fabricSpecs: {
      composition: 'Matte Heavy Crepe & Satin Lapels with Cupro Lining',
      hardware: '10 Neodymium Docking Ports with interior strain-relief reinforcement',
      care: 'Tailored dry clean',
      sustainability: 'Eco-certified yarn spinning'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'The Metamorph Jumpsuit Base',
      detachableElements: ['Accepts all modular trains, overskirts, sleeves, and epaulets'],
      transformationTime: 'Universal Base',
      compatibleWith: ['Tiger Sleeves, Peacock Train, Swan Feathers, Jellyfish Tulle']
    },
    stylingNotes: 'A modern alternative to the evening gown. Commanding on the keynote stage and mesmerizing at after-parties.'
  },
  {
    id: 'ce-es-03',
    name: 'The Power Contour Bustier & Pencil Duo',
    subtitle: 'Ergonomic Boned Bustier with Sculpted Pencil Skirt',
    collection: 'essential',
    collectionName: 'Modular Essentials',
    archetypeId: 'tiger',
    category: 'base',
    categoryName: 'Base Garment',
    price: 26000,
    rating: 4.91,
    reviewsCount: 39,
    isNewArrival: false,
    isBestSeller: true,
    isCouture: false,
    badge: 'Foundational Base #3',
    occasions: ['Office', 'Conference', 'Dinner'],
    colorOptions: [
      { name: 'Abyssal Black', hex: '#0A0A0A', border: '#333333' },
      { name: 'Stone Grey', hex: '#A9A49B', border: '#D9C8B3' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: {
      primary: '/images/tiger/tiger-statement-blazer.jpg',
      hover: '/images/leopard/leopard-modular-collection-breakdown.jpg',
      sketch: '/images/tiger/tiger-statement-blazer.jpg'
    },
    gallery: [
      { id: 'img-1', src: '/images/tiger/tiger-statement-blazer.jpg', title: 'Contour Foundation' }
    ],
    description: 'Body-conscious tailored precision. Sculpted high-waisted pencil skirt paired with an ergonomic boned formal bustier. Ready to receive dramatic overskirts, trains, and sculptural boleros.',
    fabricSpecs: {
      composition: 'Stretch Wool Twill & Cupro Lining',
      hardware: 'Concealed magnetic docking grid at hips and shoulder straps',
      care: 'Dry clean only',
      sustainability: 'Zero chemical finishing'
    },
    transformationDetails: {
      isModular: true,
      baseGarmentName: 'Power Contour Duo',
      detachableElements: ['Accepts all overskirts and shoulder ornaments'],
      transformationTime: 'Universal Base',
      compatibleWith: ['All FAUNA detachable elements']
    },
    stylingNotes: 'Pair with an oversized blazer by day; unbutton and attach modular evening elements at dusk.'
  }
];

// Quick Access helper maps
export const PRODUCTS_BY_ID = PRODUCTS.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});

export const PRODUCTS_BY_COLLECTION = PRODUCTS.reduce((acc, p) => {
  if (!acc[p.collection]) acc[p.collection] = [];
  acc[p.collection].push(p);
  return acc;
}, {});

export const PRODUCTS_BY_CATEGORY = PRODUCTS.reduce((acc, p) => {
  if (!acc[p.category]) acc[p.category] = [];
  acc[p.category].push(p);
  return acc;
}, {});

