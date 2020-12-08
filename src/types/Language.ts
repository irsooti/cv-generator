export enum LanguageLevel {
  A1 = 'A1',
  A2 = 'A2',
  A3 = 'A3',
  B1 = 'B1',
  B2 = 'B2',
  B3 = 'B3',
  C1 = 'C1',
  C2 = 'C2',
  C3 = 'C3',
  L1 = 'L1/Madrelingua',
}

export interface Language {
  name: string;
  level: { spoken: LanguageLevel; written: LanguageLevel };
}
