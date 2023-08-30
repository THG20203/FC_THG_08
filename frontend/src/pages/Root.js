import { Outlet, useNavigation } from "react-router-dom";
import BlueNavbar from "../components/Navigation/BlueNavbar";
import WhiteNavbar from "../components/Navigation/WhiteNavbar";
import "./Root.scss";

const RootLayout = () => {
  return (
    <>
      <div className="nav__root">
        <BlueNavbar />
        <WhiteNavbar />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
