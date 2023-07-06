import { Outlet, useNavigation } from "react-router-dom";
import BlueNavbar from "../components/Navigation/BlueNavbar";
import WhiteNavbar from "../components/Navigation/WhiteNavbar";

const RootLayout = () => {
  return (
    <>
      <BlueNavbar />
      <WhiteNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
