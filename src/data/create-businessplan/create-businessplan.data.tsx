export const MinigameDataDictionary: MinigameDataDictionaryEntry = {
  persony: {
    title: "Tworzenie person",
    linkPath: "/minigry/persony",
    imgSrc: "/src/assets/img/persony.svg",
  },
  komunikacja: {
    title: "Komunikacja",
    linkPath: "/minigry/persony",
    imgSrc: "/src/assets/img/komunikacja.svg",
  },
  kreatywne_myslenie: {
    title: "Kreatywne Myślenie",
    linkPath: "/minigry/kreatywne-myslenie",
    imgSrc: "/src/assets/img/kreatywnosc.svg",
  },
  symulacja_zakladania_spolki: {
    title: "Symulacja zakładania spółki",
    imgSrc: "/src/assets/img/spolka.svg",
  },
};

export type MinigameDataDictionaryEntry = {
  [key in MinigamesEnum]: {
    title: string;
    linkPath?: string;
    imgSrc: string;
  };
};

export enum MinigamesEnum {
  persony = "persony",
  komunikacja = "komunikacja",
  kreatywne_myslenie = "kreatywne_myslenie",
  symulacja_zakladania_spolki = "symulacja_zakladania_spolki",
}
