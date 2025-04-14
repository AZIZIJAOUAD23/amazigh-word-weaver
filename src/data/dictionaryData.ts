
import { DictionaryEntry } from '@/types/dictionary';

export const dictionaryData: DictionaryEntry[] = [
  {
    id: '1',
    amazigh: 'ⴰ',
    category: 'vocatif',
    source: 'IRCAM (DGLAi)',
    french: 'vocatif',
    arabic: 'حرف نداء',
    example: {
      amazigh: 'ⴰ ⵉⵎⵎⴰ !',
      french: 'ô (ma) mère !',
      arabic: 'يا أمّي !'
    }
  },
  {
    id: '2',
    amazigh: 'ⴰ',
    category: 'préposition',
    source: 'Msmun',
    french: 'vocatif',
    arabic: 'حرف نداء'
  },
  {
    id: '3',
    amazigh: 'ⴰ',
    category: 'vocatif',
    source: 'Msmun',
    french: 'ce, cet, cette, ces',
    arabic: 'أداة الإشارة للقرب : هذا، هذه، هؤلاء'
  },
  {
    id: '4',
    amazigh: 'ⴰⴱⴰ',
    category: 'nom masculin',
    source: 'IRCAM (DGLAi)',
    construct: 'ⵡⴰⴱⴰ',
    plural: 'ⴰⴱⴰⵜⵏ',
    french: 'beau-père (mari de la mère)',
    arabic: 'زوج الأم'
  },
  // ... continuing with all other entries following the same pattern
];
