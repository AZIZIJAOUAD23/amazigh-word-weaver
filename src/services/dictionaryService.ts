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
  variants?: string[];
  detailed_arabic?: string;
}

// This is our dictionary based on the provided data
const dictionaryData: DictionaryEntry[] = [
  {
    id: "1",
    amazigh: "ⴰ",
    latin: "a",
    type: "vocatif",
    source: "Msmun, Tawalt"
  },
  {
    id: "2",
    amazigh: "ⴰ!",
    latin: "a!",
    source: "Tawalt"
  },
  {
    id: "3",
    amazigh: "ⴰⴱⴰⵢ !",
    latin: "abay !",
    source: "Tawalt",
    french: "ô ma mère !",
    arabic: "يا أمي!"
  },
  {
    id: "4",
    amazigh: "ⴰⴱⵏⴰⵢ !",
    latin: "abnay !",
    source: "Tawalt"
  },
  {
    id: "5",
    amazigh: "ⴰⴳⵉⵏ",
    latin: "a gin",
    source: "Tawalt"
  },
  {
    id: "6",
    amazigh: "ⴰⵎⵜⴰⵢ !",
    latin: "amtay !",
    source: "Tawalt"
  },
  {
    id: "7",
    amazigh: "ⴰⴱ ⴰⴽⴽ",
    latin: "ab akk",
    type: "démonstratif",
    source: "IRCAM, Tawalt",
    french: "ce, cet, cette",
    arabic: "هذا، هذه، هؤلاء، أداة الإشارة للقريب"
  },
  {
    id: "8",
    amazigh: "ⴰⴱⴰ",
    latin: "aba",
    type: "nom masculin",
    source: "IRCAM, Msmun, Tawalt",
    french: "beau-père (m)",
    arabic: "زوج الأم، راب",
    detailed_arabic: "الزَّوْجُ، زَوْجُ الأُمِّ",
    variants: ["ⵓⴱⴰⴱⴰ / ubaba", "ⴰⴱⴰⵜⵏ / abatn", "ⵓⴱⴰ / waba"]
  },
  {
    id: "9",
    amazigh: "ⴰⴱⴰⴱⴰⵃ",
    latin: "ababah",
    source: "Tawalt",
    french: "Absenter(S'), Hémeralopie, Manquer",
    arabic: "النَّأْيُ، التَّبَاعُد، يَضْعُفُ بَصَرُها",
    detailed_arabic: "النَّأْيُ، التَّبَاعُد، يَضْعُفُ بَصَرُها، الوَشْمَة، الوَسْمَة، نَبَاتٌ يَضَعُفُ بَصَرُه"
  },
  {
    id: "10",
    amazigh: "ⴰⴱⴰⴱⴱⴰ",
    latin: "ubabba/ubabbu",
    type: "nom masculin",
    source: "IRCAM, Msmun, Tawalt",
    variants: ["ⵉⴱⴰⴱⴱⵓ / ibabbu"]
  },
  {
    id: "11",
    amazigh: "ⴰⴱⴰⴳⴳⵓ",
    latin: "abaggu",
    source: "Tawalt",
    french: "Cousin",
    arabic: "ابْنُ الخَالِ، ابْنُ العَمَّة",
    variants: ["ⴰⴱⴰⴳⵓ / abagu", "ⴰⴱⴰⴳⵓⴳ / abagug"]
  },
  {
    id: "12",
    amazigh: "ⴰⴱⴰⴳⵓⵙ",
    latin: "abagus",
    type: "nom masculin",
    source: "IRCAM, Msmun, Tawalt",
    french: "fait de porter, fait de support, mamelle",
    arabic: "حَمَلَ عَلَى الظَّهْرِ، تَحَمَّلَ، ضِرْعٌ",
    detailed_arabic: "الحَمْلُ، قُدْرَةُ حَمْلٍ، البِزَالَة، الصَّغِيرَةُ، الذِّرْعُ، البِقْلِيَّةُ، الحَبَّةُ",
    variants: ["ⵉⴱⴰⴳⵓⵙⵏ / ibagusn", "ⵓⴱⴰⴳⵓⵙ / ubagus"]
  },
  {
    id: "13",
    amazigh: "ⴰⴱⴰⴷ",
    type: "nom masculin",
    source: "IRCAM (DGLAi)",
    singular: "ⵓⴱⴰⴷ",
    plural: "ⵉⴱⴰⴷⴰⵜⵏ",
    french: "Avant-bras, Bassin, Genou, Agneau, ceinture, tour, Ceinture, Ceinturon",
    arabic: "ذِرَاعٌ, زَنْدٌ, إِلْيَةٌ, رُكْبَةٌ, حَمَلٌ, حِزَامٌ, شَاشٌ, مِشَدٌّ",
    detailed_arabic: "الذراع، الحُزْمَة، الخَرِيطَةُ, الحِزَامُ، الجِرَابُ، المِحْزَمُ, الشَّاشُ، الشَّلَاطَةُ الوَثِيقَةُ يُعْتَمُّ بِهَا، المِشَدُّ، الجَمَاعَةُ",
    variants: ["ⵉⴱⴰⴷⴰⵜⵏ / ibadatn", "ⵓⴱⴰⴷ / ubad"]
  },
  {
    id: "14",
    amazigh: "ⴰⴱⴰⴷⴰⵔ",
    source: "Tawalt",
    french: "Serment, piémont",
    arabic: "أَسْفَلُ الجَبَلِ, سَفْحٌ, سَهْلٌ, صَوْحٌ, كَبْحٌ, شَلَلٌ, وَقْحٌ",
    detailed_arabic: "القَسَمُ، اليَمِينُ, سَفْحُ الجَبَلِ، أَصْلُهُ وَأَسْفَلُهُ, السَّهْلُ، الوَاقِعُ عِنْدَ سُفُوحِ السَّلَاسِلِ الجَبَلِيَّةِ, الصَّوْحُ، أَسْفَلُ الجَبَلِ, الكَبْحُ، الكَاحُ، سَطْحُ الجَبَلِ, الشَّلَلُ، في الرِّجْلِ, الوَقْحُ، الوَقَاحُ، الوَقِيحُ، الوَجْهُ"
  },
  {
    id: "15",
    amazigh: "ⴰⴱⴰⴷⴰⵡⵉ",
    source: "Tawalt",
    french: "Talus, Bédouin",
    arabic: "رَفْسَةٌ, كُسْكُس",
    detailed_arabic: "الرَّفْسَةُ، الصَّدْمَةُ بِالرِّجْلِ, الكُسْكُس، الطَّعَامُ الأَمَازِيغِيُّ المَعْرُوفُ"
  },
  {
    id: "16",
    amazigh: "ⴰⴱⴰⴷⴷⴰⵔ (1)",
    source: "Tawalt",
    french: "Arsenal, jamais",
    arabic: "أبَدًا, انْتِصَابٌ, قِيَامٌ, وُقُوفٌ",
    detailed_arabic: "الانْتِصَابُ, القِيَامُ، الوُقُوفُ, الوُقُوفُ"
  },
  {
    id: "17",
    amazigh: "ⴰⴱⴰⴷⴷⴰⵙ",
    type: "nom masculin",
    source: "IRCAM, Msmun, Tawalt",
    french: "fusil à poudre, pied d'une pe..., mur d'une clôt..., petite colline",
    arabic: "بُنْدُقِيَّةٌ تَقْلِيدِيَّةٌ, رَشَّاشٌ, بَادِنٌ, أَسْفَلُ مُنْحَدَرٍ, حَائِطُ سِيَاجٍ, هَضْبَةٌ صَغِيرَةٌ",
    detailed_arabic: "البُنْدُقِيَّةُ الحَرْبِيَّةُ, الرَّشَّاشُ، الرَّشِيشَةُ، المِطْحَنِيَّاتُ, البَادِنُ، البَدِينُ, أَسْفَلُ مُنْحَدَرٍ, هَضْبَةٌ صَغِيرَةٌ, أَطْرَاقُ البَطْنِ مَا فِيهِ مِن أَمْعَاءٍ, الكَمْءُ، أَي الِارْتِفَاعُ العَارِضُ فِي أَرْضٍ مُسْتَوِيَةٍ, التَّلُّ, التَّلْعَةُ، مَا ارْتَفَعَ مِن الأَرْضِ عَلَى جَانِبِ النَّهْرِ أَو الطَّرِيقِ..., الثَّنْيُ، فِي عَرْضِ الأَرْضِ المُسْتَوِيَةِ أَو فِي عَرْضِ الجَبَلِ, الثَّنْيَةُ، فِي الأَرْضِ، فِي مُدَاوَلَتِهَا الجُغْرَافِيِّ, النَّشَازُ، المَكَانُ النَّاشِزُ المُرْتَفِعُ, النَّشْرُ، النَّشَزُ، مِنَ الأَرْضِ",
    variants: ["ⵉⴱⵓⴷⴷⴰⵙ / ibuddas", "ⵓⵜⴱⵓⴷⴷⴰⵙ / utbuddas"]
  },
  {
    id: "18",
    amazigh: "ⴰⴱⴰⴷⴷⴰⵔ (2)",
    type: "nom",
    source: "Msmun, Tawalt",
    french: "Debout, grosse galette",
    arabic: "بُكْلَةٌ, مَوَرَةٌ, رَغِيفٌ كَبِيرٌ, قُرْصٌ",
    detailed_arabic: "البُكْلَةُ، سَمَكٌ, المَوَرَةُ، سَمَكٌ, القُرْصُ العَظِيمُ، مِن الخُبْزِ",
    variants: ["ⵉⴱⵓⴷⴷⴰⵔ / ibuddar", "ⵓⴱⵓⴷⴷⴰⵔ / ubuddar"]
  },
  {
    id: "19",
    amazigh: "ⴰⴱⴰⴷⵉⴷ",
    source: "Tawalt",
    french: "Bétel, Basse-cour, Jucher",
    arabic: "(غير واضحة/مقطوعة)"
  },
  {
    id: "20",
    amazigh: "ⴰⴱⴰⴷⵉⵔ",
    type: "nom masculin",
    source: "IRCAM, Msmun, Tawalt",
    french: "jamais, Invisibles, talus, élévatio...",
    arabic: "أَبَدًا, مَرْتَفَعُ أَرْضٍ، عَتَبَةٌ",
    detailed_arabic: "أَبَدًا",
    variants: ["ⵉⴱⵓⴷⴰⵔ / ibudar", "ⵓⴱⵓⴷⴰⵔ / ubudar"]
  },
  {
    id: "21",
    amazigh: "ⴰⴱⴰⴷⵉⵡ",
    source: "Tawalt"
  },
  {
    id: "22",
    amazigh: "ⴰⴱⴰⴷⵏⵉ",
    type: "adverbe",
    source: "IRCAM, Tawalt"
  },
  {
    id: "23",
    amazigh: "ⴰⴱⴰⴷⵏⴰ",
    type: "nom masculin",
    source: "IRCAM",
    variants: ["ⵉⴱⴰⴷⵏⴰ...? / ibadna...?", "ⵓⴱⴰⴷⵏⴰ / ubadna"]
  },
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
