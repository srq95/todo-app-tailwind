import React from "react";
import { Todo } from "../../typings";
import Link from "next/link";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  return todos;
};

const TodoList = async () => {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((item) => (
        <p key={item.id}>
          <Link href={`/todos/${item.id}`}>Todo: {item.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodoList;
