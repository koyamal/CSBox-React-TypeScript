import { TodoType } from "./types/todo";

export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[Comp]" : "[NoComp]";
  return <p>{`${completeMark}${title}(user:${userId})`}</p>;
};
