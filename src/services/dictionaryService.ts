
export interface DictionaryEntry {
  id: string;
  amazigh: string;
  latin?: string;
  type?: string;
  source?: string;
  plural?: string;
  singular?: string;
  french?: string;
  arabic?: string;
  example?: {
    amazigh?: string;
    french?: string;
    arabic?: string;
  };
}

// This is our small starter dictionary based on the provided data
const dictionaryData: DictionaryEntry[] = [
  {
    id: "1",
    amazigh: "ⴰ",
    type: "vocatif",
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
    type: "préposition",
    source: "Msmun",
    french: "vocatif",
    arabic: "حرف نداء",
  },
  {
    id: "3",
    amazigh: "ⴰ",
    type: "vocatif",
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
    amazigh: "ⴰ ⴳⵉⵏ",
    latin: "a gin",
    source: "Tawalt (French)",
    french: "Donc",
  },
  {
    id: "12",
    amazigh: "ⴰ/ⴰⴷ",
    type: "démonstratif",
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
    id: "13",
    amazigh: "ⴰⴱⴰ",
    type: "nom masculin",
    source: "IRCAM (DGLAi)",
    singular: "ⵡⴰⴱⴰ",
    plural: "ⴰⴱⴰⵜⵏ",
    french: "beau-père (mari de la mère)",
    arabic: "زوج الأم",
  },
  {
    id: "14",
    amazigh: "ⴰⴱⴰⴷⴰ",
    type: "nom masculin",
    source: "IRCAM (DGLAi)",
    singular: "ⵓⴱⴰⴷⴰ",
    plural: "ⵉⴱⴰⴷⴰⵜⵏ",
    french: "piémont",
    arabic: "أسفل الجبل",
  },
  {
    id: "15",
    amazigh: "ⴰⴱⴰⴷⵓ",
    type: "nom masculin",
    source: "IRCAM (DGLAi)",
    singular: "ⵓⴱⴰⴷⵓ",
    plural: "ⵉⴱⵓⴷⴰ",
    french: "talus, élévation de terre ; falaise, seuil, pas de porte, bordure, canal d'irrigation",
    arabic: "مرتفع أرضي, عتبة الباب, حدٌّ, قناة السقي",
  },
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
    // Check in type
    if (entry.type && entry.type.toLowerCase().includes(normalizedQuery)) {
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
