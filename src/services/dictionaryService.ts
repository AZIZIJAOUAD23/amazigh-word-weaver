
export interface DictionaryEntry {
  id: string;
  amazigh: string;
  latin?: string;
  type?: string;
  category?: string;
  source?: string;
  construct?: string;
  plural?: string;
  french?: string;
  arabic?: string;
  mean_ar?: string;
  detailed_arabic?: string;
  variants?: string[];
  example?: {
    amazigh?: string;
    french?: string;
    arabic?: string;
  };
}

// This is our dictionary based on the provided data
const dictionaryData: DictionaryEntry[] = [
  // Original entries
  {
    id: "1",
    amazigh: "ⴰ",
    category: "vocatif",
    source: "IRCAM (DGLAi)",
    french: "vocatif",
    arabic: "حرف نداء",
    example: {
      amazigh: "ⴰ ⵉⵎⵎⴰ !",
      french: "ô (ma) mère !",
      arabic: "يا أمّي !",
    },
  },
  {
    id: "2",
    amazigh: "ⴰ",
    category: "préposition",
    source: "Msmun",
    french: "vocatif",
    arabic: "حرف نداء",
  },
  {
    id: "3",
    amazigh: "ⴰ",
    category: "vocatif",
    source: "Msmun",
    french: "ce, cet, cette, ces",
    arabic: "أداة الإشارة للقرب : هذا، هذه، هؤلاء",
  },
  {
    id: "4",
    amazigh: "ⴰ",
    latin: "a",
    source: "Tawalt (French)",
    french: "Ce",
  },
  {
    id: "5",
    amazigh: "ⴰ",
    latin: "a",
    source: "Tawalt (French)",
    french: "Ci",
  },
  {
    id: "6",
    amazigh: "ⴰ",
    latin: "a",
    source: "Tawalt (French)",
    french: "Que",
  },
  {
    id: "7",
    amazigh: "ⴰ !",
    latin: "a !",
    source: "Tawalt (French)",
    french: "Hé!",
  },
  {
    id: "8",
    amazigh: "ⴰ !",
    latin: "a !",
    source: "Tawalt (French)",
    french: "Ô !",
  },
  {
    id: "9",
    amazigh: "ⴰ ⴱⴱⴰⵢ !",
    latin: "a bbay !",
    source: "Tawalt (French)",
    french: "Ô vous !",
  },
  {
    id: "10",
    amazigh: "ⴰ ⴱⵏⴰⵢ !",
    latin: "a bnay !",
    source: "Tawalt (French)",
    french: "Ô vous !",
  },
  {
    id: "11",
    amazigh: "ⴰ ⴱⵏⴰⵢ !",
    latin: "a bnay !",
    source: "Tawalt (French)",
    french: "Vous !",
  },
  {
    id: "12",
    amazigh: "ⴰ ⴳⵉⵏ",
    latin: "a gin",
    source: "Tawalt (French)",
    french: "Donc",
  },
  {
    id: "13",
    amazigh: "ⴰ ⵎⵜⴰⵢ !",
    latin: "a mtay !",
    source: "Tawalt (French)",
    french: "Ô vous !",
  },
  {
    id: "14",
    amazigh: "ⴰ ⵎⵜⴰⵢ !",
    latin: "a mtay !",
    source: "Tawalt (French)",
    french: "Vous !",
  },
  {
    id: "15",
    amazigh: "ⴰ/ⴰⴷ",
    category: "démonstratif",
    source: "IRCAM (DGLAi)",
    french: "ce, cet, cette, ces",
    arabic: "هذا، هذه، هؤلاء",
    example: {
      amazigh: "ⵜⴰⴳⵔⵙⵜ ⴰ, ⵚⵎⵎⵉⴹⵏ ⵡⵓⵙⵙⴰⵏ ⴰⴷ, ⵉⵖⵔⴰ ⴰⴷⵍⵉⵙ ⴰ",
      french: "cet hiver, il fait froid ces jours-ci, il a lu ce livre",
      arabic: "هذا الشتاء, الطقس بارد هذه الأيام, قرأ هذا الكتاب",
    },
  },
  {
    id: "16",
    amazigh: "ⴰⴱ ⴰⴽⴽ",
    latin: "ab akk",
    source: "Tawalt (French)",
    french: "Afin que",
  },
  {
    id: "17",
    amazigh: "ⴰⴱ ⴰⴽⴽ",
    latin: "ab akk",
    source: "Tawalt (French)",
    french: "Pour que",
  },
  {
    id: "18",
    amazigh: "ⴰⴱⴰ",
    category: "nom masculin",
    source: "IRCAM (DGLAi)",
    construct: "ⵡⴰⴱⴰ",
    plural: "ⴰⴱⴰⵜⵏ",
    french: "beau-père (mari de la mère)",
    arabic: "زوج الأم",
  },
  {
    id: "19",
    amazigh: "ⴰⴱⴰ",
    category: "nom",
    source: "Msmun",
    construct: "ⴰⴱⴰⵜⵏ / abatn",
    plural: "ⵡⴰⴱⴰ / waba",
    french: "beau-père (mari de la mère)",
    arabic: "زوج الأم",
  },
  {
    id: "20",
    amazigh: "ⴰⴱⴰ",
    source: "Tawalt (Arabic)",
    arabic: "راب",
    mean_ar: "الرَّابُّ، زَوْجُ الأم",
  },
  {
    id: "21",
    amazigh: "ⴰⴱⴰ",
    latin: "aba",
    source: "Tawalt (French)",
    french: "absenter(S')",
  },
  {
    id: "22",
    amazigh: "ⴰⴱⴰ",
    latin: "aba",
    source: "Tawalt (French)",
    french: "Héméralopie",
  },
  {
    id: "23",
    amazigh: "ⴰⴱⴰ",
    latin: "aba",
    source: "Tawalt (French)",
    french: "Manquer",
  },
  {
    id: "24",
    amazigh: "ⴰⴱⴰⴱⴰ",
    source: "Tawalt (Arabic)",
    arabic: "نيل",
    mean_ar: "النِّيلُ، النِّيلَةُ، يُصْبَغُ بها",
  },
  {
    id: "25",
    amazigh: "ⴰⴱⴰⴱⴰ",
    source: "Tawalt (Arabic)",
    arabic: "وسمة",
    mean_ar: "الوَسْمَةُ، الوَسَمَةُ، نَبَاتٌ يُصْبَغُ بِوَرَقِهِ",
  },
  {
    id: "26",
    amazigh: "ⴰⴱⴰⴱⴰⵀ",
    latin: "ababah",
    source: "Tawalt (French)",
    french: "Cousin",
  },
  {
    id: "27",
    amazigh: "ⴰⴱⴰⴱⴰⵣ",
    source: "Tawalt (Arabic)",
    arabic: "اِبْنُ",
    mean_ar: "اِبْنُ الخَالِ",
  },
  {
    id: "28",
    amazigh: "ⴰⴱⴰⴱⴰⵣ",
    source: "Tawalt (Arabic)",
    arabic: "عم",
    mean_ar: "اِبْنُ العَمَّةِ",
  },
  {
    id: "29",
    amazigh: "ⴰⴱⴰⴱⴱ",
    source: "Tawalt (Arabic)",
    arabic: "حمل",
    mean_ar: "الحَمْلُ، مَصْدَرُ حَمَلَ",
  },
  // Add other entries from the data set
  {
    id: "30",
    amazigh: "ⴰⴱⴰⴱⴱⴰ",
    category: "nom masculin",
    source: "IRCAM (DGLAi)",
    construct: "ⵓⴱⴰⴱⴱⴰ",
    french: "fait de porter sur le dos, fait de supporter",
    arabic: "حَمْل على الظهر, تحمُّل",
  },
  {
    id: "31",
    amazigh: "ⴰⴱⴰⴱⴱⴰ",
    category: "nom",
    source: "Msmun",
    plural: "ⵓⴱⴰⴱⴱⴰ / ubabba",
    french: "fait de supporter",
    arabic: "تحمُّل",
  },
  {
    id: "32",
    amazigh: "ⴰⴱⴰⴱⴱⴰ",
    category: "nom",
    source: "Msmun",
    plural: "ⵓⴱⴰⴱⴱⴰ / ubabba",
    french: "fait de porter sur le dos",
    arabic: "حِمْل على الظهر",
  },
  {
    id: "33",
    amazigh: "ⴰⴱⴰⴱⴱⵓ",
    category: "nom masculin",
    source: "IRCAM (DGLAi)",
    construct: "ⵓⴱⴰⴱⴱⵓ",
    plural: "ⵉⴱⵓⴱⴱⴰ",
    french: "mamelle",
    arabic: "ضِرْع",
  },
  {
    id: "34",
    amazigh: "ⴰⴱⴰⴱⴱⵓ",
    category: "nom",
    source: "Msmun",
    construct: "ⵉⴱⵓⴱⴱⴰ / ibubba",
    plural: "ⵓⴱⴰⴱⴱⵓ / ubabbu",
    french: "mamelle",
    arabic: "ضِرْع",
  },
  {
    id: "35",
    amazigh: "ⴰⴱⴰⴱⴱⵓⵛ",
    source: "Tawalt (Arabic)",
    arabic: "بزاقة",
    mean_ar: "البزاقة، الصغيرة",
  },
  {
    id: "36",
    amazigh: "ⴰⴱⴰⴱⵓ",
    source: "Tawalt (Arabic)",
    arabic: "ذرة",
    mean_ar: "الذَّرَةُ، البَعْليَّةُ الدَّقِيقَةُ الحبِّ",
  },
  {
    id: "37",
    amazigh: "ⴰⴱⴰⴳⴳ",
    latin: "abagg",
    source: "Tawalt (French)",
    french: "Avant-bras",
  },
  {
    id: "38",
    amazigh: "ⴰⴱⴰⴳⵓ",
    latin: "abagu",
    source: "Tawalt (French)",
    french: "Bassin",
  },
  {
    id: "39",
    amazigh: "ⴰⴱⴰⴳⵓ",
    latin: "abagu",
    source: "Tawalt (French)",
    french: "Genou",
  },
  {
    id: "40",
    amazigh: "ⴰⴱⴰⴳⵓⴳ",
    latin: "abagug",
    source: "Tawalt (French)",
    french: "Agneau",
  },
  {
    id: "41",
    amazigh: "ⴰⴱⴰⴷⵉⴷ",
    latin: "abadid",
    source: "Tawalt (French)",
    french: "Debout",
  },
  {
    id: "42",
    amazigh: "ⴰⴱⴰⴷⵉⵔ",
    latin: "abadir",
    source: "Tawalt (French)",
    french: "Bétel",
  },
  {
    id: "43",
    amazigh: "ⴰⴱⴰⴷⵉⵡ",
    latin: "abadiw",
    source: "Tawalt (French)",
    french: "Basse-cour",
  },
  {
    id: "44",
    amazigh: "ⴰⴱⴰⴷⵉⵡ",
    latin: "abadiw",
    source: "Tawalt (French)",
    french: "Jucher",
  },
  {
    id: "45",
    amazigh: "ⴰⴱⴰⴷⵏ",
    category: "adverbe",
    source: "IRCAM (DGLAi)",
    french: "jamais",
    arabic: "أبدا",
  },
  {
    id: "46",
    amazigh: "ⴰⴱⴰⴷⵏⵉ",
    latin: "abadni",
    source: "Tawalt (French)",
    french: "Invisibles",
  },
  {
    id: "47",
    amazigh: "ⴰⴱⴰⴷⴰⵔ",
    latin: "abadar",
    source: "Tawalt (French)",
    french: "Talus",
  },
  {
    id: "48",
    amazigh: "ⴰⴱⴰⴷⴰⵡⵉ",
    latin: "abadawi",
    source: "Tawalt (French)",
    french: "Bédouin",
  },
  {
    id: "49",
    amazigh: "ⴰⴱⴰⴷⴷⴰⵔ",
    latin: "abaddar",
    source: "Tawalt (French)",
    french: "Arsenal",
  },
  // ... more entries
];

// Function to search the dictionary by text in any language
export const searchDictionary = (query: string): DictionaryEntry[] => {
  if (!query) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return dictionaryData.filter((entry) => {
    // Check in Amazigh text
    if (entry.amazigh.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    // Check in Latin transliteration
    if (entry.latin && entry.latin.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    // Check in French text
    if (entry.french && entry.french.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    // Check in Arabic text
    if (entry.arabic && entry.arabic.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    // Check in type or category
    if (entry.type && entry.type.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    if (entry.category && entry.category.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    // Check detailed Arabic if available
    if (entry.detailed_arabic && entry.detailed_arabic.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    // Check mean_ar if available
    if (entry.mean_ar && entry.mean_ar.toLowerCase().includes(normalizedQuery)) {
      return true;
    }
    return false;
  });
};

// Get a word by its exact Amazigh form
export const getWordByAmazigh = (amazigh: string): DictionaryEntry | undefined => {
  return dictionaryData.find(entry => entry.amazigh === amazigh);
};

// Get suggestions for partial matches
export const getSuggestions = (partial: string, limit: number = 5): string[] => {
  if (!partial || partial.length < 2) return [];
  
  const normalizedPartial = partial.toLowerCase().trim();
  
  const matches = dictionaryData
    .filter(entry => 
      entry.amazigh.toLowerCase().includes(normalizedPartial) || 
      (entry.latin && entry.latin.toLowerCase().includes(normalizedPartial)) ||
      (entry.french && entry.french.toLowerCase().includes(normalizedPartial)) ||
      (entry.arabic && entry.arabic.toLowerCase().includes(normalizedPartial))
    )
    .map(entry => entry.amazigh)
    .slice(0, limit);
    
  return [...new Set(matches)]; // Remove duplicates
};
