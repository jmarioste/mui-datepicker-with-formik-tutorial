import { useTodosQuery } from "graphql/todos.gql";
import React, { memo } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [{ data, fetching, error }] = useTodosQuery();

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching todos...</div>;
  }

  console.log(data);
  return (
    <>
      <div className="container mx-auto px-4 my-4">
        <h1 className="my-4 text-2xl ">Todos</h1>
        {data?.todos?.map((todo) => {
          return <Todo todo={todo} key={todo._id} />;
        })}
      </div>
    </>
  );
};

export default memo(Todos);
