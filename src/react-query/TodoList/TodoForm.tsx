import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

const TodoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),

    //perform mutation side effects
    onSuccess: (savedTodo) => {
      //APPROACH 1:  Invalidating the cache, ReactQUery will refetch all the data from the backend (doesn't work with jsonplaceholder API)
      // queryClient.invalidateQueries({
      //   queryKey: ["todos"],
      // })

      //APPROACH 2: Updating the data in the cache directly
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);

      if (todoInput.current) todoInput.current.value = ""; //clear the input field onSuccess
    },
  });

  const todoInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //make sure the user types a value in the input field
    if (todoInput.current && todoInput.current.value)
      addTodo.mutate({
        id: 0,
        title: todoInput.current?.value,
        completed: false,
        userId: 0,
      });
  };

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form className="row mb-3" onSubmit={handleSubmit}>
        <div className="col">
          <input ref={todoInput} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addTodo.isLoading}>
            {addTodo.isLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
