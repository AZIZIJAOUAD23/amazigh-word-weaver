
export interface DictionaryEntry {
  id: string;
  amazigh: string;
  latin?: string;
  category?: string;
  source?: string;
  construct?: string;
  plural?: string;
  french?: string;
  arabic?: string;
  mean_ar?: string;
  example?: {
    amazigh?: string;
    french?: string;
    arabic?: string;
  };
}
