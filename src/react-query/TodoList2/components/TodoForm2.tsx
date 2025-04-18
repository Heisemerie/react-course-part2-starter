import { useRef } from "react";
import useAddTodo from "../hooks/useAddTodo";

const TodoForm = () => {
  const nameInput = useRef<HTMLInputElement>(null);

  //give the hook a callback function containing the UI operation
  const addTodo = useAddTodo(() => {
    if (nameInput.current) nameInput.current.value = "";
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameInput.current && nameInput.current.value)
      addTodo.mutate({
        id: 0,
        title: nameInput.current?.value,
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
          <input ref={nameInput} type="text" className="form-control" />
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            // disabled={addTodo.isLoading}
          >
            {/* {addTodo.isLoading ? "Adding..." : "Add"} remove due to optimistic updates */}
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
