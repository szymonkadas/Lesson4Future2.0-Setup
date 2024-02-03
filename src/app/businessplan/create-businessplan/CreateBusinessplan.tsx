import { useMemo } from "react";
import Card from "../../../components/Card/Card";
import { CardStatusEnum } from "../../../components/Card/CardStatus/CardStatus";
import style from "./CreateBusinessplan.module.scss";
import dashboardData from "./dashboard-data.json";

export default function CreateBusinessplan() {
  const content = useMemo(
    () => mapDashboardData(JSON.parse(JSON.stringify(dashboardData))),
    []
  );

  return (
    <div className={style.pageWrapper}>
      <h1>Stwórz swój biznesplan!</h1>
      <p>
        Przejdź przez te mini-gry tworząc krok po kroku sekcje biznesplanu!
        Dalsza część opisu...
      </p>
      <div className={style.tileContainer}>{...content}</div>
    </div>
  );
}

function mapDashboardData(data: DashboardDataEntry) {
  return Object.entries(data).map((entry) => {
    const [key, val] = entry;
    // TODO: When api will be available handle typing of incoming data
    return (
      <Card
        {...MinigameDataDictionary[key as keyof typeof MinigamesEnum]}
        status={val.status}
      ></Card>
    );
  });
}

// I wonder if it could be simplified -.-
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
};

type MinigameDataDictionaryEntry = {
  [key in MinigamesEnum]: {
    title: string;
    linkPath: string;
    imgSrc: string;
  };
};

type DashboardDataEntry = {
  [key in MinigamesEnum]: {
    status: keyof typeof CardStatusEnum;
  };
};

enum MinigamesEnum {
  persony = "persony",
  komunikacja = "komunikacja",
  kreatywne_myslenie = "kreatywne_myslenie",
}
