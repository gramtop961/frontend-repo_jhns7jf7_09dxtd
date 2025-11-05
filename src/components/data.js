// Mock recipe data and Nepali substitution logic

export const substitutions = {
  // Dairy & fats
  butter: {
    nepal: 'ghee',
    notes: 'Use ghee for rich aroma and higher smoke point.',
  },
  cream: {
    nepal: 'malai (milk cream) or thick yogurt',
    notes: 'Yogurt adds tang; malai gives richness.',
  },
  parmesan: {
    nepal: 'hard aged yak cheese (chhurpi) grated',
    notes: 'Adds salty, nutty profile similar to Parmigiano.',
  },

  // Herbs & aromatics
  basil: {
    nepal: 'tulsi (holy basil) or coriander leaves',
    notes: 'Tulsi is stronger; coriander gives fresh herbal lift.',
  },
  parsley: {
    nepal: 'coriander leaves',
    notes: 'Common and fresh; adjust to taste.',
  },
  thyme: {
    nepal: 'ajwain (carom seeds) + coriander stems',
    notes: 'Ajwain adds herbal notes; stems add freshness.',
  },
  garlic: {
    nepal: 'lasun (local garlic)',
    notes: 'Use same quantity; local garlic is potent.',
  },
  onion: {
    nepal: 'pyaaj (red onion) or spring onion whites',
    notes: 'Red onions are standard in Nepali kitchens.',
  },

  // Spices & heat
  chili: {
    nepal: 'dried red chili (khursani) or timur for tingle',
    notes: 'Timur (Sichuan pepper) adds citrusy numb heat.',
  },
  paprika: {
    nepal: 'kashmiri chili powder',
    notes: 'Bright color, moderate heat.',
  },
  cinnamon: {
    nepal: 'dalchini (Nepali cinnamon)',
    notes: 'Similar profile, adjust to taste.',
  },
  cumin: {
    nepal: 'jeera (cumin seeds/powder)',
    notes: 'Direct substitute, toast for depth.',
  },
  coriander: {
    nepal: 'dhaniya powder',
    notes: 'Direct substitute.',
  },
  star_anise: {
    nepal: 'badiyaanaas (star anise)',
    notes: 'Common in spice shops.',
  },

  // Proteins & staples
  pork: {
    nepal: 'buff (water buffalo) or chicken',
    notes: 'Buff is common; cooks similar to beef/pork in stews.',
  },
  beef: {
    nepal: 'buff (water buffalo)',
    notes: 'Similar texture in curries and braises.',
  },
  fish_sauce: {
    nepal: 'soya sauce + a little fermented gundruk liquid',
    notes: 'Adds umami and funk reminiscent of fish sauce.',
  },
  mirin: {
    nepal: 'honey + splash of rice vinegar',
    notes: 'Sweetness and mild acidity.',
  },
  sake: {
    nepal: 'rice wine (jaand) or skip, add water + sugar',
    notes: 'Use sparingly; adjust sweetness.',
  },

  // Produce & others
  lime: {
    nepal: 'nibuwa (local lime) or lemon',
    notes: 'Local limes are aromatic and punchy.',
  },
  tomato: {
    nepal: 'golbheda (local tomato)',
    notes: 'Direct substitute; often juicier.',
  },
  mozzarella: {
    nepal: 'paneer (for body) + little malai',
    notes: 'Texture differs, but gives creamy bite.',
  },
};

export const recipes = [
  {
    id: 'nepal-momo',
    title: 'Nepali Chicken Momo',
    region: 'Nepal',
    country: 'Nepal',
    time: 45,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1595378833354-e69c8a7746db?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxhbGwtcHVycG9zZSUyMGZsb3VyfGVufDB8MHx8fDE3NjIzNjE1ODV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    ingredients: [
      { name: 'all-purpose flour', amount: '2 cups' },
      { name: 'chicken mince', amount: '400 g' },
      { name: 'onion', amount: '1 medium, finely chopped' },
      { name: 'garlic', amount: '3 cloves, minced' },
      { name: 'ginger', amount: '1 tbsp, grated' },
      { name: 'coriander', amount: '2 tbsp, chopped' },
      { name: 'chili', amount: 'to taste' },
      { name: 'salt', amount: 'to taste' },
    ],
    steps: [
      'Knead flour with water and rest 30 minutes.',
      'Mix filling ingredients until slightly sticky.',
      'Roll wrappers, fill and pleat momos.',
      'Steam 12–15 minutes until cooked through.'
    ],
  },
  {
    id: 'italy-cacio-e-pepe',
    title: 'Cacio e Pepe',
    region: 'Europe',
    country: 'Italy',
    time: 25,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxzcGFnaGV0dGl8ZW58MHwwfHx8MTc2MjM2MTU4Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    ingredients: [
      { name: 'spaghetti', amount: '250 g' },
      { name: 'black pepper', amount: '2 tsp, freshly cracked' },
      { name: 'parmesan', amount: '80 g, finely grated' },
      { name: 'butter', amount: '1 tbsp' },
      { name: 'salt', amount: 'to taste' },
    ],
    steps: [
      'Boil pasta until just shy of al dente.',
      'Toast pepper in butter, add pasta water to emulsion.',
      'Toss with cheese off heat to create a glossy sauce.'
    ],
  },
  {
    id: 'japan-ramen',
    title: 'Shoyu Ramen (Quick)',
    region: 'Asia',
    country: 'Japan',
    time: 35,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxyYW1lbiUyMG5vb2RsZXN8ZW58MHwwfHx8MTc2MjM2MTU4Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    ingredients: [
      { name: 'ramen noodles', amount: '2 servings' },
      { name: 'chicken stock', amount: '600 ml' },
      { name: 'soy sauce', amount: '3 tbsp' },
      { name: 'mirin', amount: '1 tbsp' },
      { name: 'garlic', amount: '2 cloves' },
      { name: 'spring onion', amount: '2, sliced' },
    ],
    steps: [
      'Simmer stock with garlic, soy, and mirin.',
      'Boil noodles separately.',
      'Combine and garnish with spring onion.'
    ],
  },
  {
    id: 'mexico-tacos',
    title: 'Street-Style Tacos',
    region: 'Americas',
    country: 'Mexico',
    time: 30,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1693193433392-da83457dff20?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHx0b3J0aWxsYXN8ZW58MHwwfHx8MTc2MjM2MTU4N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    ingredients: [
      { name: 'tortillas', amount: '8 small' },
      { name: 'pork', amount: '400 g, sliced' },
      { name: 'onion', amount: '1 small, diced' },
      { name: 'lime', amount: '1, cut into wedges' },
      { name: 'cilantro', amount: 'a handful' },
      { name: 'chili', amount: 'to taste' },
    ],
    steps: [
      'Sear pork with spices until caramelized.',
      'Warm tortillas and fill with pork and toppings.'
    ],
  },
  {
    id: 'india-butter-chicken',
    title: 'Butter Chicken',
    region: 'Asia',
    country: 'India',
    time: 50,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjaGlja2VufGVufDB8MHx8fDE3NjIzNjE1ODd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    ingredients: [
      { name: 'chicken', amount: '500 g' },
      { name: 'tomato', amount: '3, pureed' },
      { name: 'cream', amount: '150 ml' },
      { name: 'butter', amount: '2 tbsp' },
      { name: 'cumin', amount: '1 tsp' },
      { name: 'coriander', amount: '1 tsp' },
    ],
    steps: [
      'Cook chicken with spices, add tomato puree.',
      'Finish with butter and cream until silky.'
    ],
  },
  {
    id: 'france-ratatouille',
    title: 'Ratatouille',
    region: 'Europe',
    country: 'France',
    time: 60,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1615484477201-9f4953340fab?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxlZ2dwbGFudHxlbnwwfDB8fHwxNzYyMzYxNTg4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    ingredients: [
      { name: 'eggplant', amount: '1 medium' },
      { name: 'zucchini', amount: '2 small' },
      { name: 'tomato', amount: '3' },
      { name: 'onion', amount: '1' },
      { name: 'garlic', amount: '3 cloves' },
      { name: 'basil', amount: 'a few leaves' },
    ],
    steps: [
      'Slice vegetables and layer in a pan.',
      'Bake until tender and fragrant.'
    ],
  },
];

export function findSubstitution(ingredient) {
  if (!ingredient) return null;
  const key = ingredient.toLowerCase().replaceAll(' ', '_');
  // Try direct and fuzzy keys
  const direct = substitutions[key];
  if (direct) return { ingredient, ...direct };

  // Fuzzy match by contains
  const entry = Object.entries(substitutions).find(([k]) => ingredient.toLowerCase().includes(k.replaceAll('_', ' ')));
  if (entry) {
    const [, val] = entry;
    return { ingredient, ...val };
  }
  return null;
}

export function scaleAmount(amount, factor) {
  // Very naive scaler: scales numbers in the amount string by factor
  if (!amount) return amount;
  return amount.replace(/(\d+\.?\d*)/g, (m) => {
    const num = parseFloat(m);
    if (isNaN(num)) return m;
    const scaled = Math.round(num * factor * 100) / 100;
    return String(scaled);
  });
}
