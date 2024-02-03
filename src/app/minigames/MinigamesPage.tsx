import Card from "../../components/Card/Card";
import styles from "./Minigames.module.scss";

const imgPrefix = "/src/assets/img/";

export default function MinigamesPage() {
  return (
    <div className={styles.pageWrapper}>
      <h1>Spis lekcji</h1>
      <p>
        Wybierz sobie dowolny temat mini gry i ćwicz swoje umięjętoności
        przedsiębiorcze! (TODO: WERSJA Z LEKCJAMI)
      </p>
      <div className={styles.tileContainer}>
        <Card
          imgSrc={`${imgPrefix}persony.svg`}
          title="Tworzenie person"
          linkPath="/minigames/persony"
        />
        <Card
          imgSrc={`${imgPrefix}komunikacja.svg`}
          title="Komunikacja"
          linkPath="/minigames/komunikacja"
        />
        <Card
          imgSrc={`${imgPrefix}kreatywnosc.svg`}
          title="Kreatywne myślenie"
          linkPath="/minigames/kreatywne-myslenie"
        />
        <Card
          imgSrc={`${imgPrefix}ceidg.svg`}
          title="Symulacja składania wniosku CEIDG"
          linkPath="/minigames/ceidg"
        />
        <Card
          imgSrc={`${imgPrefix}analiza-rynku.svg`}
          title="Analiza rynku"
          linkPath="/minigames/analiza-rynku"
        />
        <Card
          imgSrc={`${imgPrefix}pomysl-na-firme.svg`}
          title="Pomysł na firmę"
          linkPath="/minigames/pomysl-na-firme"
        />
        <Card
          imgSrc={`${imgPrefix}pomysl-na-nazwe.svg`}
          title="Pomysł na nazwę"
          linkPath="/minigames/pomysl-na-nazwe"
        />
        <Card
          imgSrc={`${imgPrefix}rodzaje-dzialalnosci.svg`}
          title="Rodzaje działalności gospodarczej"
          linkPath="/minigames/rodzaje-dzialalnosci"
        />
        <Card
          imgSrc={`${imgPrefix}smart.svg`}
          title="Metoda SMART"
          linkPath="/minigames/smart"
        />
        <Card
          imgSrc={`${imgPrefix}misja-i-wizja.svg`}
          title="Misja i wizja"
          linkPath="/minigames/misja-wizja"
        />
        <Card
          imgSrc={`${imgPrefix}swot.svg`}
          title="Analiza SOT"
          linkPath="/minigames/swot"
        />
        <Card
          imgSrc={`${imgPrefix}harmonogram.svg`}
          title="Tworzenie harmonogramu"
          linkPath="/minigames/harmonogram"
        />
        <Card
          imgSrc={`${imgPrefix}nowy-produkt.svg`}
          title="Wymyślanie nowego produktu"
          linkPath="/minigames/nowy-produkt"
        />
        <Card
          imgSrc={`${imgPrefix}ulepszanie.svg`}
          title="Ulepszanie produktów"
          linkPath="/minigames/ulepszenie-produktu"
        />
        <Card
          imgSrc={`${imgPrefix}strategia-marketingowa.svg`}
          title="Strategia Marketingowa"
          linkPath="/minigames/strategia-marketingowa"
        />
        <Card
          imgSrc={`${imgPrefix}opis-dzialalnosci.svg`}
          title="Opis działalności produkcyjnej, usługowej, handlowej"
          linkPath="/minigames/opis-dzialalnosci"
        />
        <Card
          imgSrc={`${imgPrefix}zarzadzanie-firma.svg`}
          title="Zarządzanie firmą"
          linkPath="/minigames/zarzadzanie-firma"
        />
      </div>
    </div>
  );
}
