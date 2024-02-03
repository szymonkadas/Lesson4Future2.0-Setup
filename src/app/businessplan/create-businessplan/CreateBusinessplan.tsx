import { useMemo } from "react";
import Card from "../../../components/Card/Card";
import { TaskStatusEnum } from "../../../components/Card/TaskStatus/TaskStatus";
import { MinigameDataDictionary, MinigamesEnum } from "../../../data/create-businessplan/create-businessplan.data";
import dashboardData from "../../../data/create-businessplan/dashboard-data.json";
import style from "./CreateBusinessplan.module.scss";

export default function CreateBusinessplan() {
  const content = useMemo(() => mapDashboardData(JSON.parse(JSON.stringify(dashboardData))), []);

  return (
    <div className={style.pageWrapper}>
      <h1 className={style.heading}>Stwórz swój biznesplan!</h1>
      <p>Przejdź przez te mini-gry tworząc krok po kroku sekcje biznesplanu! Dalsza część opisu...</p>
      <div className={style.tileContainer}>{...content}</div>
    </div>
  );
}

function mapDashboardData(data: DashboardDataEntry) {
  return Object.entries(data).map((entry) => {
    const [key, val] = entry;
    // TODO: When api will be available handle typing of incoming data
    return <Card {...MinigameDataDictionary[key as keyof typeof MinigamesEnum]} status={val.status}></Card>;
  });
}

type DashboardDataEntry = {
  [key in MinigamesEnum]: {
    status: keyof typeof TaskStatusEnum;
  };
};
