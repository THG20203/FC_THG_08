import { Outlet, useNavigation } from "react-router-dom";

import BlueNav from "../components/Navigation/BlueNav";
import Navbar from "../components/Navigation/Navbar";

const RootLayout = () => {
  return (
    <>
      <BlueNav />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;