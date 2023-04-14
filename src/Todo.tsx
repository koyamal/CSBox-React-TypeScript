import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[Comp]" : "[NoComp]";
  return <p>{`${completeMark}${title}(user:${userId})`}</p>;
};
