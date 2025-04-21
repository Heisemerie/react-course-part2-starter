import { LoginStatus } from "./index";
import useCounterStore from "../counter/store";
import { useTasks } from "../tasks/index";

const NavBar = () => {
  const { tasks } = useTasks();
  const { counter } = useCounterStore();
  return (
    <nav className="navbar d-flex justify-content-between bg-dark rounded p-2">
      <span>
        <span className="badge text-bg-secondary">Tasks: {tasks.length}</span>
        <span className="badge text-bg-secondary mx-3">Counter: {counter}</span>
      </span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
