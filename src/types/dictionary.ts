
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

