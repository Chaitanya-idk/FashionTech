export const faunaArchetypes = [
  {
    id: "butterfly",
    name: "The Butterfly",
    latin: "Papilio Metamorphosis",
    identity: "Transformation",
    symbolism: "Layered wings, sheer fabrics, translucent panels, luminous rebirth",
    designLanguage: "Sculptural wing silhouettes, shimmering organza overlays, gradient tulle",
    accentColor: "#B39BBF", // Jellyfish Lilac / Butterfly tint
    accentHex: "#9C427B",
    glowColor: "rgba(180, 80, 160, 0.35)",
    tagline: "She sheds old paradigms to emerge in sculpted luminescence.",
    quote: "Metamorphosis in motion — wings sculpted, textures untamed.",
    baseGarment: "Stretch mesh micro-sequin column gown with silk satin lining",
    materials: ["Glitter Silk Organza", "Millinery Wire Framework", "Silk Satin Lining", "Micro-Sequin on Stretch Mesh"],
    palette: [
      { name: "Amethyst Violet", hex: "#4A1E5C" },
      { name: "Petal Rose", hex: "#C76D8D" },
      { name: "Cyan Iridescence", hex: "#298F9E" },
      { name: "Gilded Gold", hex: "#D4AF37" },
      { name: "Jet Velvet", hex: "#121212" }
    ],
    kits: [
      {
        tier: "Expression Kit",
        name: "Luminescent Wing Epaulets",
        desc: "Wire-sculpted glitter silk organza mini winglets that attach at the shoulder seam.",
        occasion: "Cocktails & Gallery Openings",
        price: "$480"
      },
      {
        tier: "Statement Kit",
        name: "Graduated Butterfly Peplum",
        desc: "Layered semi-sheer waist attachment with black contrast piping echoing lepidoptera wing veins.",
        occasion: "Black Tie Dinners",
        price: "$790"
      },
      {
        tier: "Couture Kit",
        name: "Sovereign Metamorphosis Train & Wings",
        desc: "Architectural floor-length organza wings with micro-crystal beading and tiered mermaid overskirt.",
        occasion: "Grand Galas & Red Carpets",
        price: "$1,850"
      }
    ],
    sketchNotes: "Millinery wire structural boning with hand-pleated glitter silk organza; detachable wing panels with hidden magnetic clasping.",
    images: {
      base: "/images/butterfly/butterfly-base-gold.png",
      couture: "/images/butterfly/butterfly-couture-gold.png",
      breakdown: "/images/butterfly/butterfly-transformation-breakdown.jpg",
      runwayDuo: "/images/butterfly/butterfly-couture-runway-duo.jpg",
      celestial: "/images/butterfly/butterfly-celestial-peplum.png"
    },
    gallery: [
      {
        id: "base-gold",
        title: "The Base Garment",
        subtitle: "Minimalist Shimmering Gold Microsequin Column Dress",
        tier: "base_only",
        src: "/images/butterfly/butterfly-base-gold.png",
        caption: "Clean silhouette for daytime executive galas and red-carpet foundations."
      },
      {
        id: "couture-gold",
        title: "The Full Haute Couture Suite",
        subtitle: "Attached Sculpted Golden Wire Butterfly Wings",
        tier: "full_couture",
        src: "/images/butterfly/butterfly-couture-gold.png",
        caption: "The same microsequin base elevated with dramatic millinery wire wings & waist cincher."
      },
      {
        id: "breakdown-mirror",
        title: "Studio Technical Breakdown",
        subtitle: "Side-by-Side Base vs Sculpted Organza Wings",
        tier: "all",
        src: "/images/butterfly/butterfly-transformation-breakdown.jpg",
        caption: "Right: Pure microsequin column base. Left: Same dress with millinery wire glitter silk organza wings."
      },
      {
        id: "runway-duo",
        title: "Couture Runway Variations",
        subtitle: "Mermaid Wing Train & Butterfly Wing Peplum",
        tier: "base_statement",
        src: "/images/butterfly/butterfly-couture-runway-duo.jpg",
        caption: "Left: Detachable magenta wing mermaid train. Right: Detachable teal & peach organza overcoat."
      },
      {
        id: "celestial-peplum",
        title: "Celestial Starry Variation",
        subtitle: "Sculpted Mauve Butterfly Wings at Waist",
        tier: "base_expression",
        src: "/images/butterfly/butterfly-celestial-peplum.png",
        caption: "Sculptural butterfly wings functioning as an architectural waist peplum and flowing train."
      }
    ]
  },
  {
    id: "peacock",
    name: "The Peacock",
    latin: "Pavo Cristatus",
    identity: "Individuality",
    symbolism: "Iridescence, rich jewel tones, feather-like engineered textures",
    designLanguage: "Cascading plumage tiers, structural satin corset, fluid high-contrast volume",
    accentColor: "#0D4D5C",
    accentHex: "#0D4D5C",
    glowColor: "rgba(13, 77, 92, 0.4)",
    tagline: "Unapologetic brilliance designed to command any hall without uttering a word.",
    quote: "Rich peacock-feather details engineered in cruelty-free organza and tulle.",
    baseGarment: "Sculpted satin corset bodice with tailored crepe wide-leg trousers",
    materials: ["Double Satin", "Crepe de Chine", "Hand-cut Organza Plumage", "Raw Denim / Chambray Base"],
    palette: [
      { name: "Peacock Blue", hex: "#0D4D5C" },
      { name: "Emerald Glaze", hex: "#1E3D2F" },
      { name: "Royal Indigo", hex: "#232F5C" },
      { name: "Gold Dust", hex: "#D4AF37" },
      { name: "Deep Charcoal", hex: "#1C1C1C" }
    ],
    kits: [
      {
        tier: "Expression Kit",
        name: "Iridescent Feathered Cuffs & Lapel",
        desc: "Detachable plumage cuffs and asymmetrical lapel pin in shaded organza leaves.",
        occasion: "Art Receptions & Executive Dinners",
        price: "$520"
      },
      {
        tier: "Statement Kit",
        name: "Asymmetrical Plumage Hip Cascade",
        desc: "Side-swept tiered peacock tail panel attaching securely via hidden waist snaps.",
        occasion: "Premiere Evenings & Private Soirées",
        price: "$920"
      },
      {
        tier: "Couture Kit",
        name: "Imperial Pavo Fan Train",
        desc: "Floor-sweeping modular train crafted with 120 individually hand-stitched organza and tulle eyelets.",
        occasion: "Gala & Opera Openings",
        price: "$2,200"
      }
    ],
    sketchNotes: "Satin bodice with tailored crepe base; peacock-feather details engineered in organza and tulle over chambray trousers.",
    images: {
      statement: "/images/peacock/peacock-statement-trousers.jpg",
      couture: "/images/peacock/peacock-couture-gown.jpg"
    },
    gallery: [
      {
        id: "peacock-statement",
        title: "The Base Corset & Tailored Trousers",
        subtitle: "Royal Blue Satin Corset & Violet Crepe Trousers with Plumage Cuffs",
        tier: "base_statement",
        src: "/images/peacock/peacock-statement-trousers.jpg",
        caption: "Sculpted royal blue double satin corset paired with iridescent violet wide-leg crepe trousers accented with engineered peacock feather eyelets."
      },
      {
        id: "peacock-couture",
        title: "The Imperial Pavo Haute Couture Suite",
        subtitle: "Tiered Organza Plumage Ballgown Skirt & Sweetheart Corset",
        tier: "full_couture",
        src: "/images/peacock/peacock-couture-gown.jpg",
        caption: "The grand gala metamorphosis: sweeping floor-length ballgown with cascading tiers of cruelty-free organza peacock eyelets in peacock blue, emerald, and indigo."
      }
    ]
  },
  {
    id: "tiger",
    name: "The Tiger",
    latin: "Panthera Tigris",
    identity: "Strength",
    symbolism: "Powerful cuts, structured architectural forms, bold tactile textures",
    designLanguage: "Sharp military tailoring, metallic tiger ornaments, golden amber contrasts",
    accentColor: "#B45A1D",
    accentHex: "#B45A1D",
    glowColor: "rgba(180, 90, 29, 0.4)",
    tagline: "The sovereign predator of modern ambition — sharp, calculated, unstoppable.",
    quote: "Wild instinct, sculpted form. Fierce grace in high definition.",
    baseGarment: "High-neck structured pencil dress & precision-cut tuxedo blazer",
    materials: ["Italian Wool Crepe", "Hammered Brass Tiger Ornament", "Flocked Velvet Jacquard", "Silk Duchesse"],
    palette: [
      { name: "Tiger Rust", hex: "#B45A1D" },
      { name: "Amber Glow", hex: "#D67D28" },
      { name: "Burnished Gold", hex: "#D4AF37" },
      { name: "Obsidian", hex: "#0A0A0A" },
      { name: "Bone Ivory", hex: "#F6F3EE" }
    ],
    kits: [
      {
        tier: "Expression Kit",
        name: "Metallic Tiger Brooch & Shoulder Plate",
        desc: "Artisanal cast metallic tiger head ornament with interchangeable shoulder epaulet mounts.",
        occasion: "Power Lunches & Keynote Addresses",
        price: "$440"
      },
      {
        tier: "Statement Kit",
        name: "Architectural Flocked Tiger Sleeves",
        desc: "Detachable sculpted bell sleeves with tactile amber-and-noir striped jacquard.",
        occasion: "Charity Auctions & Cocktail Receptions",
        price: "$780"
      },
      {
        tier: "Couture Kit",
        name: "Corset Armor & Flared Tiger Overskirt",
        desc: "Contoured waist cincher and flared jacquard overskirt with dramatic side slit.",
        occasion: "Met-style Galas & Red Carpets",
        price: "$1,650"
      }
    ],
    sketchNotes: "Detachable sleeves, metallic tiger shoulder ornament, and detachable corset blazer pieces crafted for commanding presence.",
    images: {
      statement: "/images/tiger/tiger-statement-blazer.jpg",
      couture: "/images/tiger/tiger-couture-gown.jpg"
    },
    gallery: [
      {
        id: "tiger-statement",
        title: "The Base + Metallic Shoulder Armor",
        subtitle: "Black Pencil Dress, Precision Blazer & Flared Peplum",
        tier: "base_statement",
        src: "/images/tiger/tiger-statement-blazer.jpg",
        caption: "Minimalist black sheath base and slate-blue tuxedo blazer, transformed with the sculpted cast brass tiger head shoulder plate and flared tiger peplum."
      },
      {
        id: "tiger-couture",
        title: "The Sovereign Tiger Couture Suite",
        subtitle: "Mermaid Gown with Flared Peplum & Segmented Tiger Bell Sleeves",
        tier: "full_couture",
        src: "/images/tiger/tiger-couture-gown.jpg",
        caption: "The full gala transformation: plunge tuxedo mermaid gown crowned with flared tiger-striped peplum wings and elongated segmented velvet bell sleeves."
      }
    ]
  },
  {
    id: "swan",
    name: "The Swan",
    latin: "Cygnus Olor",
    identity: "Grace",
    symbolism: "Fluid curves, luminous pearls, engineered cruelty-free plumage",
    designLanguage: "Sculptural necklines, pristine ivory draping, delicate kinetic featherwork",
    accentColor: "#F6F3EE",
    accentHex: "#D9C8B3",
    glowColor: "rgba(246, 243, 238, 0.25)",
    tagline: "Poise under currents of power — pristine serenity commanding absolute respect.",
    quote: "Nature's blueprint, couture's vision: pure elegance without animal harm.",
    baseGarment: "Tailored crepe jumpsuit with denim accents and minimalist studs",
    materials: ["Cruelty-Free Engineered Plumage", "Fluid Crepe Fabric", "Cultured Pearls", "Crisp Denim Accents"],
    palette: [
      { name: "Alabaster Ivory", hex: "#F6F3EE" },
      { name: "Soft Sand", hex: "#D9C8B3" },
      { name: "Stone Grey", hex: "#A9A49B" },
      { name: "Burnished Champagne", hex: "#C7B28B" },
      { name: "Deep Ink", hex: "#141416" }
    ],
    kits: [
      {
        tier: "Expression Kit",
        name: "Pearl-Encrusted Lapel & Swan Headpiece",
        desc: "Delicate organza feather headpiece and matching pearl-stud collar clip.",
        occasion: "Private Dinners & Salon Evenings",
        price: "$460"
      },
      {
        tier: "Statement Kit",
        name: "Sculptural Swan Bust Appliqué",
        desc: "Architectural 3D organza swan contouring the bust and waistline with layered wings.",
        occasion: "Symphony & Ballet Galas",
        price: "$890"
      },
      {
        tier: "Couture Kit",
        name: "Tiered Feather Plume Trouser Accents & Cape",
        desc: "Cascading feather-cut organza panels cascading down trouser legs with sweeping swan-wing cape.",
        occasion: "Black-Tie International Galas",
        price: "$1,950"
      }
    ],
    sketchNotes: "Modern Muse pinstripe halter and denim foundation converting via 3D sculpted swan waist peplum, organza wings, and detachable feather plume trouser cuffs.",
    images: {
      base: "/images/swan/swan-base-modern-muse.jpg",
      statement: "/images/swan/swan-feathery-ascent.jpg",
      duo: "/images/swan/swan-transformation-duo.jpg",
      ballgown: "/images/swan/swan-grand-couture-ballgown.jpg",
      liquid: "/images/swan/swan-liquid-silver-gown.jpg",
      noir: "/images/swan/swan-noir-swan.jpg",
      suit: "/images/swan/swan-cygnus-core-suit.jpg",
      board: "/images/swan/swan-collective-master-board.jpg"
    },
    gallery: [
      {
        id: "swan-base",
        title: "The Base: Modern Muse",
        subtitle: "Pinstripe Halter Top & Dark Denim with Minimal Choker",
        tier: "base_only",
        src: "/images/swan/swan-base-modern-muse.jpg",
        caption: "Clean daytime foundation: sleeveless wrap halter top, crisp dark denim jeans with white belt, and minimal crystal swan accents."
      },
      {
        id: "swan-statement",
        title: "The Feathery Ascent",
        subtitle: "Sculpted Swan Waist Peplum & Feathered Plume Cuffs",
        tier: "base_statement",
        src: "/images/swan/swan-feathery-ascent.jpg",
        caption: "The same halter foundation elevated with a 3D sculpted swan peplum, translucent organza wings, feather plume bell cuffs, and layered pearl choker."
      },
      {
        id: "swan-duo",
        title: "The Swan Collective: Base to Couture",
        subtitle: "Side-by-Side Metamorphosis by Diane V. Gilli",
        tier: "all",
        src: "/images/swan/swan-transformation-duo.jpg",
        caption: "Direct before-and-after: Left: Modern Muse daytime denim. Right: The Feathery Ascent haute statement."
      },
      {
        id: "swan-grand",
        title: "Conceptual Swan Ballgown",
        subtitle: "White Haute Couture Gown with Sculpted Swan Bodice",
        tier: "full_couture",
        src: "/images/swan/swan-grand-couture-ballgown.jpg",
        caption: "Grand gala suite: architectural 3D ceramic swan rising from the bust with cascading tiers of white cruelty-free organza plumes."
      },
      {
        id: "swan-liquid",
        title: "Liquid Swan Gown",
        subtitle: "Liquid Metallic Chrome with Feather Mermaid Hem",
        tier: "base_expression",
        src: "/images/swan/swan-liquid-silver-gown.jpg",
        caption: "Sculptural evening variation: fluid chrome metallic column gown with feather plume mermaid train and diamond swan choker."
      },
      {
        id: "swan-noir",
        title: "Noir Swan Transformation",
        subtitle: "All-Black Halter with Onyx Swan Peplum & Plumes",
        tier: "full_couture",
        src: "/images/swan/swan-noir-swan.jpg",
        caption: "Midnight noir variation: monochrome black denim and halter top with hand-carved black onyx swan peplum and black plume cuffs."
      }
    ]
  },
  {
    id: "leopard",
    name: "The Leopard",
    latin: "Panthera Pardus",
    identity: "Confidence",
    symbolism: "Bold prints, sharp silhouettes, sleek predatory textures",
    designLanguage: "Sleek column cuts, silk brocade rosettes, dramatic volumetric contrasts",
    accentColor: "#D4AF37",
    accentHex: "#997819",
    glowColor: "rgba(212, 175, 55, 0.35)",
    tagline: "Effortless dominance cloaked in understated luxury.",
    quote: "Bold silhouettes inspired by animal strength, movement and individuality.",
    baseGarment: "The Column: High-neck iridescent sheer knit bodice & tailored leopard jacquard pencil skirt",
    materials: ["Leopard Jacquard Silk", "Iridescent Sheer Knit", "Tulle Organza Drape", "Sculpted Gold Leopard Hardware", "Silk Devoré Velvet"],
    palette: [
      { name: "Golden Amber", hex: "#D4AF37" },
      { name: "Warm Tawny", hex: "#A87032" },
      { name: "Slate Smoke", hex: "#5E636E" },
      { name: "Warm Sand", hex: "#D9C8B3" },
      { name: "Midnight Noir", hex: "#0D0D0D" }
    ],
    kits: [
      {
        tier: "Expression Kit",
        name: "Sculpted Gold Leopard Belt & Cuffs",
        desc: "Artisanal cast golden leopard head clasp belt with detachable sheer organza side-cape attachment.",
        occasion: "Executive Cocktail Hours & Private Dinners",
        price: "$460"
      },
      {
        tier: "Statement Kit",
        name: "Architectural High-Collar Cape & Side-Train",
        desc: "Structured slate grey high-collar capelet with leopard silk trim and floor-sweeping translucent organza side cape.",
        occasion: "Charity Galas & Award Banquets",
        price: "$890"
      },
      {
        tier: "Couture Kit",
        name: "Voluminous Tiered Petal Ballgown Overskirt",
        desc: "Full-volume layered leopard jacquard silk overskirt draped in cascading sheer tulle organza ruffles.",
        occasion: "Haute Couture Red Carpets & Grand Galas",
        price: "$1,850"
      }
    ],
    sketchNotes: "The Column base dress with back cut-out hubs converts into Configuration A (Full Petal Ballgown) or Configuration B (Architectural High-Collar Cape).",
    images: {
      duo: "/images/leopard/leopard-couture-vs-column-cape.jpg",
      breakdown: "/images/leopard/leopard-modular-collection-breakdown.jpg",
      matrix: "/images/leopard/leopard-modular-composition-matrix.jpg",
      runway: "/images/leopard/leopard-runway-cascade-ballgown.jpg"
    },
    gallery: [
      {
        id: "leopard-duo",
        title: "Haute Gown vs Column Cape",
        subtitle: "Configuration A: Full Gown • Configuration B: Architectural Side-Cape",
        tier: "full_couture",
        src: "/images/leopard/leopard-couture-vs-column-cape.jpg",
        caption: "Left: Full ballgown overskirt with sheer smoke tulle drape. Right: The Column with sweeping floor-length sheer organza side cape."
      },
      {
        id: "leopard-breakdown",
        title: "Modular Collection Blueprint",
        subtitle: "Configurations A & B with Foundation Attachment Hubs",
        tier: "all",
        src: "/images/leopard/leopard-modular-collection-breakdown.jpg",
        caption: "Technical atelier board: cut-out back foundation hubs, sculpted gold leopard head belt buckle, and layered petal skirt construction."
      },
      {
        id: "leopard-matrix",
        title: "Composition Matrix & Variations",
        subtitle: "The Column, The Side-Cape, Minaudière Clutch & Heels",
        tier: "base_only",
        src: "/images/leopard/leopard-modular-composition-matrix.jpg",
        caption: "Comprehensive modular variations: The minimalist daytime Column, side-cape evening look, clutch accessory, and fabric swatches."
      },
      {
        id: "leopard-runway",
        title: "Atelier Runway Metamorphosis",
        subtitle: "Camel Knit Top & Cascading Layered Leopard Organza Ruffles",
        tier: "base_statement",
        src: "/images/leopard/leopard-runway-cascade-ballgown.jpg",
        caption: "Runway presentation: open-back fine knit bodice paired with the dramatic tiered leopard print organza ballgown skirt."
      }
    ]
  },
  {
    id: "jellyfish",
    name: "The Jellyfish",
    latin: "Aurelia Etherea",
    identity: "Fluidity",
    symbolism: "Flowing layers, ethereal ruffles, sheer translucent fabrics, bioluminescence",
    designLanguage: "Suspended tendril ruffles, bioluminescent gradient organza, weightless draping",
    accentColor: "#B39BBF",
    accentHex: "#8A699C",
    glowColor: "rgba(179, 155, 191, 0.4)",
    tagline: "Weightless mastery of fluid motion, glowing in the depths of evening elegance.",
    quote: "Flowing layers, ruffles, sheer fabrics, ethereal movement.",
    baseGarment: "High-waist tailored slate trouser with minimalist silk bustier",
    materials: ["Bioluminescent-finish Organza", "Frosted Tulle", "Silver Bugle Beads", "Water-ripple Silk"],
    palette: [
      { name: "Jellyfish Lilac", hex: "#B39BBF" },
      { name: "Cyan Mist", hex: "#5EA9BE" },
      { name: "Moonlight Silver", hex: "#E0E5EC" },
      { name: "Slate Charcoal", hex: "#30343F" },
      { name: "Abyssal Jet", hex: "#0B0C10" }
    ],
    kits: [
      {
        tier: "Expression Kit",
        name: "Frosted Tulle Bolero Shrug",
        desc: "Delicate sheer bolero with ruffled standing collar and sheer bell cuffs.",
        occasion: "Sunset Receptions & Intimate Dinners",
        price: "$490"
      },
      {
        tier: "Statement Kit",
        name: "Bioluminescent Waist Peplum",
        desc: "Sculpted translucent bell peplum with iridescent beading mimicking marine glow.",
        occasion: "Evening Galas & Design Salons",
        price: "$880"
      },
      {
        tier: "Couture Kit",
        name: "Cascading Water-Trail Ruffle Overskirt",
        desc: "Floor-length asymmetrical waterfall train with 40 yards of micro-ruffled translucent tulle.",
        occasion: "Haute Couture Red Carpets",
        price: "$1,980"
      }
    ],
    sketchNotes: "Detachable sleeves, bolero shrug with ruffled tulle collar, and cascading ripple belt piece with floating tendrils.",
    images: {
      statement: "/images/jellyfish/jellyfish-statement-trousers.jpg",
      couture: "/images/jellyfish/jellyfish-couture-gown.jpg"
    },
    gallery: [
      {
        id: "jellyfish-statement",
        title: "The Base + Statement Look",
        subtitle: "Tailored Trousers, Sparkle Bolero & Water-Trail Ruffle Belt",
        tier: "base_statement",
        src: "/images/jellyfish/jellyfish-statement-trousers.jpg",
        caption: "Minimalist satin bustier & tailored trousers elevated with frosted tulle bolero and cascading water-trail ruffles with pearl chains."
      },
      {
        id: "jellyfish-couture",
        title: "The Full Haute Couture Suite",
        subtitle: "Pleated Sky-Blue Gown with Bioluminescent Floating Dome",
        tier: "full_couture",
        src: "/images/jellyfish/jellyfish-couture-gown.jpg",
        caption: "The complete transformation: pleated sweetheart gown crowned with the bioluminescent organza jellyfish umbrella and kinetic crystal tendrils."
      }
    ]
  }
];
