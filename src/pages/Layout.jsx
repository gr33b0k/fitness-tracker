import Sidebar from "../components/layout/Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
