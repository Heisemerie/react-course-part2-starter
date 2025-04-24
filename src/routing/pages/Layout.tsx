import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const Layout = () => {
  //an outlet is like a placeholder for a child component
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
