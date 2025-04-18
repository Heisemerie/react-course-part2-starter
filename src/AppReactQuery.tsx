import "./App.css";
import TodoForm from "./react-query/TodoList/TodoForm";
import TodoList from "./react-query/TodoList/TodoList";
import TodoForm2 from "./react-query/TodoList2/components/TodoForm2";
import TodoList2 from "./react-query/TodoList2/components/TodoList2";

import React from "react";

const AppReactQuery = () => {
  return (
    <>
      <TodoForm2 />
      <TodoList2 />
    </>
  );
};

export default AppReactQuery;
