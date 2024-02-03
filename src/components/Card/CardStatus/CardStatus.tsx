export enum CardStatusEnum {
  DONE = "Zrobione",
  IN_PROGRESS = "W trakcie",
  TODO = "Do zrobienia",
}

type CardStatusProps = {
  status: keyof typeof CardStatusEnum;
};

export default function CardStatus(props: CardStatusProps) {
  return <h3 className="task-status">{CardStatusEnum[props.status]}</h3>;
}
