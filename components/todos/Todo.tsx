import { TodosQuery, useUpdateTodoMutation } from "graphql/todos.gql";
import { Todo } from "graphql/types";
import React from "react";

type Props = {
  todo: Todo;
};
const Todo = ({ todo }: Props) => {
  const [, updateTodo] = useUpdateTodoMutation();

  const toggleDone = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo({
      input: {
        _id: todo._id,
        title: todo.title,
        done: e.target.checked,
      },
    });
  };
  return (
    <div className="flex gap-4 items-center shadow p-4">
      <span className="grow">{todo.title}</span>
      <input type="checkbox" checked={todo.done} onChange={toggleDone}></input>
    </div>
  );
};

export default Todo;
