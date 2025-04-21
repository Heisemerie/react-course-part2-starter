import AuthProvider from "./state-management/auth/AuthProvider";
import { Counter } from "./state-management/counter";
import HomePage from "./state-management/tasks/HomePage";
import NavBar from "./state-management/auth/NavBar";
import { TaskProvider } from "./state-management/tasks/index";

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <NavBar />
          <HomePage />
          <Counter />
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
