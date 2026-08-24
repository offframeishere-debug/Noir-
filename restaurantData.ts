import { TastingMenu, GalleryItem, Testimonial, Dish, ExperienceItem } from '../types';

// 3 Curated Experiences
export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'tasting-menu',
    title: 'The Tasting Menu',
    frenchTitle: 'Le Menu Dégustation',
    subtitle: '8 to 12 Course Sensory Sequence of Wild Botanicals & Embers',
    price: '$295 — $410',
    duration: '2.5 — 3.5 Hours',
    coursesCount: 10,
    capacity: '1 to 6 Guests',
    description: 'Our primary culinary ritual. A progressive journey traversing cold Nordic coastlines, deep forest undergrowth, and hearth-fired delicacies presented in synchronization with the room.',
    features: [
      'Multi-course synchronized service',
      'Wild-foraged botanicals & cold-sea treasures',
      'Charcoal & white cedar hearth cooking',
      'Optional Grand Sommelier cellar pairing'
    ],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    badge: 'Core Experience'
  },
  {
    id: 'private-dining',
    title: 'Private Dining',
    frenchTitle: 'Le Salon Privé & Le Jardin d’Hiver',
    subtitle: 'The Sommelier Vault & Secluded Glasshouse Courtyard',
    price: 'Custom Inquiries',
    duration: 'Full Evening Service',
    capacity: '8 to 24 Guests',
    description: 'An intimate, cloistered setting enveloped by historic Burgundy crus and living moss installations. Includes custom-tailored tasting menus, dedicated sommelier consultation, and personalized tablescapes.',
    features: [
      'Exclusive salon buyout & dedicated service brigade',
      'Bespoke menu development with Chef Arnaud de Noir',
      'Cellar access with rare vintage decanting',
      'Private acoustic control & ambient lighting'
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    badge: 'Exclusive Salon'
  },
  {
    id: 'seasonal-experience',
    title: 'Seasonal Experience',
    frenchTitle: 'L’Hommage aux Équinoxes',
    subtitle: 'Nocturnal Seatings Tuned to Lunar & Solstice Rhythms',
    price: '$360',
    duration: '3 Hours',
    coursesCount: 9,
    capacity: 'Limited to 12 Guests / Night',
    description: 'A fleeting culinary edition celebrating micro-season harvests—early spring spruce shoots, autumn truffles, or deep winter oceanic reserves—paired with rare biodynamic fermentations.',
    features: [
      'Front-row seating along the open hearth counter',
      'Live botanical extractions & infusion ceremony',
      'Limited seasonal vintage releases',
      'Direct culinary interaction with the kitchen brigade'
    ],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    badge: 'Limited Edition'
  }
];

// 8 Curated Signature Menu Dishes for the Menu Section
export const SIGNATURE_DISHES: Dish[] = [
  {
    id: 'sig-1',
    name: 'Hokkaido Diver Scallop & Sea Buckthorn',
    frenchName: 'Coquille Saint-Jacques & Givre d’Argousier',
    courseNumber: 1,
    description: 'Raw diver scallop crudo bathed in fermented white birch sap, preserved golden sea buckthorn beads, and smoked nori snow.',
    ingredients: ['Hokkaido Scallop', 'Birch Sap', 'Sea Buckthorn', 'Nori Snow'],
    pairing: '2020 Domaine Leflaive Puligny-Montrachet',
    price: '$38',
    dietary: ['GF', 'DF'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    signature: true
  },
  {
    id: 'sig-2',
    name: 'Smoked Langoustine in Wild Pine & Embers',
    frenchName: 'Langoustine Fumée aux Aiguilles de Pin',
    courseNumber: 2,
    description: 'Flame-seared Brittany langoustine kissed by fragrant pine needle smoke, with clarified elderflower butter and cured lardo.',
    ingredients: ['Brittany Langoustine', 'Wild Pine', 'Elderflower Butter', 'Lardo'],
    pairing: '2019 Meursault Premier Cru Genevrières',
    price: '$46',
    dietary: ['GF'],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
    signature: true
  },
  {
    id: 'sig-3',
    name: 'Imperial Caviar & Cold Smoked Kombu Dashi',
    frenchName: 'Caviar Oscietre sur Gelée de Kombu',
    courseNumber: 3,
    description: 'Royal Oscietra caviar delicately spooned over chilled dashi jelly, chive blossom cream, and toasted sourdough wafer.',
    ingredients: ['Oscietra Caviar', 'Kombu Dashi', 'Chive Blossoms', 'Sourdough'],
    pairing: '2012 Vintage Brut Champagne',
    price: '$58',
    dietary: ['Caviar', 'NF'],
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=80',
    signature: true
  },
  {
    id: 'sig-4',
    name: 'Charred Sunchoke Velouté & Périgord Truffle',
    frenchName: 'Topinambour Brûlé & Truffe Noire',
    courseNumber: 4,
    description: 'Slow-caramelized Jerusalem artichoke soup with whipped fermented hazelnut milk, aged rye crisps, and freshly shaved black winter truffle.',
    ingredients: ['Sunchoke', 'Périgord Truffle', 'Fermented Hazelnut', 'Aged Rye'],
    pairing: '2018 Domaine de Chevalier Blanc',
    price: '$42',
    dietary: ['Truffle', 'V'],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'sig-5',
    name: 'Glazed Challans Duck with Spruce & Fermented Plum',
    frenchName: 'Canard de Challans au Sapin & Prune',
    courseNumber: 5,
    description: 'Aged duck breast roasted on binchotan coals with spruce honey glaze, pickled green rowanberries, and charred celeriac puree.',
    ingredients: ['Dry-aged Duck', 'Spruce Honey', 'Fermented Plum', 'Celeriac'],
    pairing: '2016 Gevrey-Chambertin Premier Cru',
    price: '$54',
    dietary: ['GF', 'DF'],
    image: 'https://images.unsplash.com/photo-1514944298352-f41851e51b1a?auto=format&fit=crop&w=900&q=80',
    signature: true
  },
  {
    id: 'sig-6',
    name: 'A5 Miyazaki Wagyu & Wild Morel Reduction',
    frenchName: 'Bœuf Wagyu A5 de Miyazaki aux Morilles',
    courseNumber: 6,
    description: 'Cedar-charred Wagyu tenderloin with braised spring morels, black garlic jus, and a crisp bone marrow tuile.',
    ingredients: ['Miyazaki A5 Wagyu', 'Wild Morels', 'Black Garlic', 'Marrow Tuile'],
    pairing: '2015 Pauillac Grand Cru Classé',
    price: '$68',
    dietary: ['GF'],
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80',
    signature: true
  },
  {
    id: 'sig-7',
    name: 'Charred Savoy Cabbage in Fermented Rye Miso',
    frenchName: 'Chou de Savoie Braisé au Miso de Seigle',
    courseNumber: 7,
    description: 'Caramelized winter cabbage layers infused with house-fermented rye miso, winter truffle shavings, and toasted buckwheat crumble.',
    ingredients: ['Savoy Cabbage', 'Rye Miso', 'Black Truffle', 'Buckwheat'],
    pairing: '2019 Barolo Cannubi',
    price: '$36',
    dietary: ['VG', 'GF', 'Truffle'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'sig-8',
    name: 'Smoked Single-Origin Cacao & Birch Bark Oil',
    frenchName: 'Cacao Fumé & Écorce de Bouleau',
    courseNumber: 8,
    description: '78% Venezuelan dark chocolate ganache infused with peated single malt, salted licorice crisp, and cold-pressed birch bark oil.',
    ingredients: ['Single-Origin Cacao', 'Peated Malt', 'Salted Licorice', 'Birch Oil'],
    pairing: '20-Year Aged Tawny Port',
    price: '$32',
    dietary: ['V', 'GF'],
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=900&q=80',
    signature: true
  }
];

// Detailed Tasting Sequences
export const TASTING_MENUS: TastingMenu[] = [
  {
    id: 'nocturne',
    title: 'Menu Nocturne',
    frenchTitle: 'L’Expérience Obscure',
    subtitle: '8-Course Sensory Exploration of Shadow, Smoke & Forest Undergrowth',
    price: '$295',
    duration: '2.5 - 3 Hours',
    coursesCount: 8,
    description: 'A dark and contemplative sequence moving through cold oceanic depths, botanical fermentations, wild Nordic foraged roots, and embers of white cedar.',
    dishes: SIGNATURE_DISHES.slice(0, 6),
    pairingOption: {
      name: 'Grand Sommelier Reserve Pairing',
      price: '+$185',
      description: 'Carefully curated cellar vintages from legendary biodynamic crus across Burgundy, Bordeaux, and rare Jura terroirs.'
    },
    highlightNote: 'Signature 8-Course Nocturnal Sequence'
  },
  {
    id: 'ephemere',
    title: 'Menu Éphémère',
    frenchTitle: 'La Grande Symphonie',
    subtitle: '12-Course Grand Prestigious Odyssey Featuring Rare Caviar & Wild Harvest',
    price: '$410',
    duration: '3.5 - 4 Hours',
    coursesCount: 12,
    description: 'Our most comprehensive tasting journey. A culinary masterpiece of rare wild ocean delicacies, imperial Oscietra caviar, A5 Miyazaki Wagyu, and rare botanical distillates.',
    dishes: SIGNATURE_DISHES,
    pairingOption: {
      name: 'Prestige Mythical Cru Pairing',
      price: '+$260',
      description: 'Rare museum vintages including Grand Crus from Romanée-Conti neighbors, Château Margaux, and vintage Krug Champagnes.'
    },
    highlightNote: 'Comprehensive 12-Course Journey'
  },
  {
    id: 'vegetal',
    title: 'Menu Botanique & Jardin',
    frenchTitle: 'L’Art Végétal',
    subtitle: '8-Course Plant-Forward Masterpiece of Foraged Flora & Root Gastronomy',
    price: '$240',
    duration: '2.5 Hours',
    coursesCount: 8,
    description: 'An ode to biodiversity celebrating biodynamic farm heirloom cultivars, lacto-fermented wildflowers, charcoal-roasted roots, and rare forest fungi.',
    dishes: [
      SIGNATURE_DISHES[3],
      SIGNATURE_DISHES[6],
      SIGNATURE_DISHES[7],
      {
        id: 'v1',
        name: 'Smoked Heirloom Beet Tartare & Mustard Seed Caviar',
        frenchName: 'Tartare de Betterave Fumée & Graines de Moutarde',
        courseNumber: 1,
        description: 'Slow-charred Chioggia and golden beets seasoned with aged sherry vinegar, whipped cashew labneh, and pickled mustard seeds.',
        ingredients: ['Chioggia Beets', 'Cashew Labneh', 'Mustard Seed Caviar', 'Sherry Vinegar'],
        pairing: '2021 Sancerre Blanc',
        price: '$34',
        dietary: ['VG', 'GF'],
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80',
        signature: true
      },
      {
        id: 'v2',
        name: 'Roasted Maitake Mushroom & Pine Nut Emulsion',
        frenchName: 'Maitake Rôti & Émulsion de Pignons de Pin',
        courseNumber: 2,
        description: 'Wild dancing maitake roasted on cedar wood, served with toasted pine nut velvet, green cedar oil, and crispy lichen.',
        ingredients: ['Maitake Mushroom', 'Pine Nut Cream', 'Cedar Oil', 'Crispy Lichen'],
        pairing: '2020 Savennières Clos du Papillon',
        price: '$36',
        dietary: ['VG', 'GF'],
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80'
      }
    ],
    pairingOption: {
      name: 'Natural & Biodynamic Artisanal Pairing',
      price: '+$145',
      description: 'Zero-intervention natural wines, aged botanical tea extractions, and small-batch orchard ciders.'
    },
    highlightNote: '100% Plant-Based Botanical Gastronomy'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Hokkaido Scallop & Sea Buckthorn',
    category: 'Plating',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    caption: 'Diver scallop crudo with birch sap emulsion and sea buckthorn pearls.',
    details: 'Service 19:30 • Atelier Course I'
  },
  {
    id: 'g2',
    title: 'The Vaulted Obsidian Dining Room',
    category: 'Ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Minimalist volcanic slate architecture bathed in warm, focused candlelight.',
    details: 'Main Salon • Seating for 24 guests'
  },
  {
    id: 'g3',
    title: 'Wood-Fired Hearth & Open Binchotan',
    category: 'Craft',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    caption: 'Chef Arnaud de Noir refining aged duck breast on fragrant cedar coals.',
    details: 'Open Atelier Hearth Kitchen'
  },
  {
    id: 'g4',
    title: 'Grand Reserve Cellar & Sommelier Vault',
    category: 'Cellar',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Housing over 3,200 rare labels from historic Burgundy and Champagne terroirs.',
    details: 'Curated by Head Sommelier Éléonore Vane'
  },
  {
    id: 'g5',
    title: 'Smoked Langoustine in Wild Pine',
    category: 'Plating',
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
    caption: 'A harmony of ocean salinity and fragrant woodland smoke.',
    details: 'Signature Nocturne Offering'
  },
  {
    id: 'g6',
    title: 'The Glasshouse Courtyard at Twilight',
    category: 'Ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Private tables framed by living moss walls and illuminated bonsai.',
    details: 'Glasshouse Dining Wing'
  },
  {
    id: 'g7',
    title: 'Smoked Single-Origin Cacao & Licorice',
    category: 'Plating',
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sculptural dark chocolate with peated Islay mist and birch oil.',
    details: 'Course Finale'
  },
  {
    id: 'g8',
    title: 'Botanical Infusion & Handcrafted Elixirs',
    category: 'Craft',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    caption: 'In-house extraction of wild herbs, yarrow, and cedar cones.',
    details: 'The Lab & Fermentation Chamber'
  }
];

// Fictional Concept Testimonials for "An Imagined Guestbook"
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Julian & Claire V.',
    title: 'Private Cellar Patrons',
    rating: 5,
    quote: 'The Menu Nocturne paired with the Sommelier Reserve was an evocative journey into smoke, quiet shadows, and cold ocean minerality. The smoked langoustine was pure poetry.',
    date: 'Autumn Solstice',
    experienceType: 'Menu Nocturne & Reserve Pairing'
  },
  {
    id: 't2',
    author: 'Elena Rostova',
    title: 'Architectural Director, Zurich',
    rating: 5,
    quote: 'The restraint in the interior—the deep charcoal slate, precise downlighting, and whisper-quiet choreography of the brigade—mirrors the geometric beauty on each plate.',
    date: 'Winter Equinox',
    experienceType: 'Glasshouse Private Dining'
  },
  {
    id: 't3',
    author: 'Marc & Vivienne Chen',
    title: 'Hearth Counter Guests',
    rating: 5,
    quote: 'Watching the culinary team work with surgical calm over white cedar embers while savoring the Imperial Caviar created an unforgettable evening in Paris.',
    date: 'Nocturne Service',
    experienceType: 'Chef’s Hearth Counter'
  }
];

export const SOMMELIER_MOODS = [
  {
    id: 'earthy',
    mood: 'Smoky & Deep Forest',
    recommendation: '2016 Domaine Armand Rousseau Gevrey-Chambertin',
    notes: 'Wild black cherries, cedar smoke, crushed autumn leaves, and silky tannins.',
    matchDish: 'A5 Miyazaki Wagyu or Glazed Challans Duck',
    origin: 'Burgundy, France'
  },
  {
    id: 'oceanic',
    mood: 'Crisp Oceanic & Saline',
    recommendation: '2020 Domaine Leflaive Puligny-Montrachet',
    notes: 'Crushed oyster shell minerality, white peach blossom, toasted hazelnut, and vibrating salinity.',
    matchDish: 'Hokkaido Scallop Crudo & Smoked Langoustine',
    origin: 'Côte de Beaune, France'
  },
  {
    id: 'effervescent',
    mood: 'Prestigious & Brioche Minerality',
    recommendation: '2012 Vintage Brut Champagne',
    notes: 'Toasted brioche, roasted almond, smoky citrus peel, and microscopic bubbles.',
    matchDish: 'Imperial Oscietra Caviar & Scallop Crudo',
    origin: 'Épernay, Champagne'
  },
  {
    id: 'mystic',
    mood: 'Oxidative & Ancient Velvet',
    recommendation: '2018 Jura Vin Jaune, Domaine Macle',
    notes: 'Toasted walnuts, dried fenugreek, green apple skin, and intense savory umami warmth.',
    matchDish: 'Charred Savoy Cabbage & Périgord Truffle',
    origin: 'Château-Chalon, Jura'
  }
];

export const SERVICE_HOURS = {
  tueThu: 'Tuesday – Thursday: 18:00 – 23:00',
  friSat: 'Friday – Saturday: 18:00 – 00:00',
  sunMon: 'Sunday – Monday: Closed',
  serviceNotice: 'Reservations are released on the first day of each month for the subsequent period.'
};

export const RESTAURANT_INFO = {
  name: 'NOIRÉ',
  city: 'Paris, France',
  address: '14 Rue de la Paix, Place Vendôme, 75002 Paris',
  phone: '+33 (0)1 42 68 55 00',
  email: 'concierge@noire-concept.fr',
  dressCode: 'Elegant Attire (Jackets recommended. Casual sportswear is politely discouraged).',
  valet: 'Complimentary private valet parking available at our Rue de la Paix entrance.',
  conceptNotice: 'NOIRÉ is a conceptual haute gastronomie portfolio experience created for design and architectural demonstration.'
};
