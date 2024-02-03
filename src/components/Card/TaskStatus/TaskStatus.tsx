import style from "./TaskStatus.module.scss";

export enum TaskStatusEnum {
  DONE = "Zrobione",
  ONGOING = "W trakcie",
  TODO = "Do zrobienia",
}

type TaskStatusProps = {
  status: keyof typeof TaskStatusEnum;
};

export default function TaskStatus(props: TaskStatusProps) {
  // NOTE: if status will be needed elsewhere bisect to dumb and inteligent components (parseStatus logic may differ)
  const { statusClass, imgSrc, alt } = parseStatus(TaskStatusEnum[props.status]);
  return (
    <h3 className={`${style.taskStatus} ${statusClass}`}>
      {TaskStatusEnum[props.status]} <img className={style.img} src={imgSrc} alt={alt}></img>
    </h3>
  );
}

const parseStatus = (status: TaskStatusEnum) => {
  switch (status) {
    case TaskStatusEnum.DONE:
      return {
        statusClass: `${style.done}`,
        imgSrc: "/src/assets/img/status-done.svg",
        alt: "done",
      };
      break;
    case TaskStatusEnum.ONGOING:
      return {
        statusClass: `${style.ongoing}`,
        imgSrc: "/src/assets/img/status-ongoing.svg",
        alt: "ongoing",
      };
    case TaskStatusEnum.TODO:
      return {
        statusClass: `${style.todo}`,
        imgSrc: "/src/assets/img/status-todo.svg",
        alt: "to do",
      };
  }
};
