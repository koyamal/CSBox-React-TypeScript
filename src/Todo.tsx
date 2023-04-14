type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[Comp]" : "[NoComp]";
  return <p>{`${completeMark}${title}(user:${userId})`}</p>;
};
