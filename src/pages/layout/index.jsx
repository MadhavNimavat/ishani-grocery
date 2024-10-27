import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { HeaderBar, Sidebar } from "../../components";
import { selectIsLoggedIn } from "../../features";

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="h-screen bg-background-variantOne flex">
      <div className="w-20">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <HeaderBar />
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
