export type Kanji = {
  kanji: string;
  options: KanjiOption[];
};

export type KanjiOption = {
  kanji: string;
  isCorrect: boolean;
};
