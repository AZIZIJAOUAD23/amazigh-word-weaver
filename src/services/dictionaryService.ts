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

// Dictionary data
const dictionaryData: DictionaryEntry[] = [
  {
    id: "1",
    word: "ⴰ",
    category: "vocatif",
    source: "IRCAM (DGLAi)",
    french: "vocatif",
    arabic: "حرف نداء",
    example: {
      amazigh: "ⴰ ⵉⵎⵎⴰ !",
      french: "ô (ma) mère !",
      arabic: "يا أمّي !"
    }
  },
  {
    id: "2",
    word: "ⴰ",
    category: "préposition",
    source: "Msmun",
    french: "vocatif",
    arabic: "حرف نداء"
  },
  {
    id: "3",
    word: "ⴰ",
    category: "vocatif",
    source: "Msmun",
    french: "ce, cet, cette, ces",
    arabic: "أداة الإشارة للقرب : هذا، هذه، هؤلاء"
  },
  {
    id: "4",
    word: "ⴰ",
    latin: "a",
    source: "Tawalt (French)",
    french: "Ce"
  },
  {
    id: "5",
    word: "ⴰ",
    latin: "a",
    source: "Tawalt (French)",
    french: "Ci"
  },
  {
    id: "6",
    word: "ⴰ",
    latin: "a",
    source: "Tawalt (French)",
    french: "Que"
  },
  {
    id: "7",
    word: "ⴰ !",
    latin: "a !",
    source: "Tawalt (French)",
    french: "Hé!"
  },
  {
    id: "8",
    word: "ⴰ !",
    latin: "a !",
    source: "Tawalt (French)",
    french: "Ô !"
  },
  {
    id: "9",
    word: "ⴰ ⴱⴱⴰⵢ !",
    latin: "a bbay !",
    source: "Tawalt (French)",
    french: "Ô vous !"
  },
  {
    id: "10",
    word: "ⴰ ⴱⵏⴰⵢ !",
    latin: "a bnay !",
    source: "Tawalt (French)",
    french: "Ô vous !"
  },
  {
    id: "11",
    word: "ⴰ ⴱⵏⴰⵢ !",
    latin: "a bnay !",
    source: "Tawalt (French)",
    french: "Vous !"
  },
  {
    id: "12",
    word: "ⴰ ⴳⵉⵏ",
    latin: "a gin",
    source: "Tawalt (French)",
    french: "Donc"
  },
  {
    id: "13",
    word: "ⴰ ⵎⵜⴰⵢ !",
    latin: "a mtay !",
    source: "Tawalt (French)",
    french: "Ô vous !"
  },
  {
    id: "14",
    word: "ⴰ ⵎⵜⴰⵢ !",
    latin: "a mtay !",
    source: "Tawalt (French)",
    french: "Vous !"
  },
  {
    id: "15",
    word: "ⴰ/ⴰⴷ",
    category: "démonstratif",
    source: "IRCAM (DGLAi)",
    french: "ce, cet, cette, ces",
    arabic: "هذا، هذه، هؤلاء",
    example: {
      amazigh: "ⵜⴰⴳⵔⵙⵜ ⴰ, ⵚⵎⵎⵉⴹⵏ ⵡⵓⵙⵙⴰⵏ ⴰⴷ, ⵉⵖⵔⴰ ⴰⴷⵍⵉⵙ ⴰ",
      french: "cet hiver, il fait froid ces jours-ci, il a lu ce livre",
      arabic: "هذا الشتاء, الطقس بارد هذه الأيام, قرأ هذا الكتاب"
    }
  },
  {
    id: "16",
    word: "ⴰⴱ ⴰⴽⴽ",
    latin: "ab akk",
    source: "Tawalt (French)",
    french: "Afin que"
  },
  {
    id: "17",
    word: "ⴰⴱ ⴰⴽⴽ",
    latin: "ab akk",
    source: "Tawalt (French)",
    french: "Pour que"
  },
  {
    id: "18",
    word: "ⴰⴱⴰ",
    category: "nom masculin",
    source: "IRCAM (DGLAi)",
    construct: "ⵡⴰⴱⴰ",
    plural: "ⴰⴱⴰⵜⵏ",
    french: "beau-père (mari de la mère)",
    arabic: "زوج الأم"
  },
  {
    id: "19",
    word: "ⴰⴱⴰ",
    category: "nom",
    source: "Msmun",
    construct: "ⴰⴱⴰⵜⵏ / abatn",
    plural: "ⵡⴰⴱⴰ / waba",
    french: "beau-père (mari de la mère)",
    arabic: "زوج الأم"
  },
  {
    id: "20",
    word: "ⴰⴱⴰ",
    source: "Tawalt (Arabic)",
    arabic: "راب",
    mean_ar: "الرَّابُّ، زَوْجُ الأم"
  }
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
