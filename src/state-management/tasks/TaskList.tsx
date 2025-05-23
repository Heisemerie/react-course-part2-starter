import { useAuth } from "../auth/index";
import useAuthStore from "../auth/store";
import useTasks from "./useTasks";

const TaskList = () => {
  const { tasks, dispatch } = useTasks();
  // const { user } = useAuth();
  const {user} = useAuthStore() //working with zustand

  return (
    <>
      {user && <p>User: {user}</p>}
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group mb-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
