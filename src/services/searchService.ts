
import { DictionaryEntry } from '@/types/dictionary';
import { dictionaryData } from '@/data/dictionaryData';

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

