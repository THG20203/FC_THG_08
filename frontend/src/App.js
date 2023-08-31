import React from "react";
/* styles */
import "./index.css";
import "./assets/styles/typography.scss";
/* Router and react-router-dom */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// PAGE IMPORTS
/* Root & Error Page Import */
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
/* BlueNavBar Imports */
import ShopPage from "./pages/blueNavPages/Shop";
import HistoryPage from "./pages/blueNavPages/History";
import FaqPage from "./pages/blueNavPages/FAQ";
import CulturePage from "./pages/blueNavPages/Culture";
import GalleryPage from "./pages/blueNavPages/Gallery";
/* Main Navbar Imports (Excluding events) */
import HomePage from "./pages/whiteNavPages/Home";
import LatestPage from "./pages/whiteNavPages/Latest";
import MyClubPage from "./pages/whiteNavPages/MyClub";
/* Events Page Imports */

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "latest", element: <LatestPage /> },
      { path: "myclub", element: <MyClubPage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "history", element: <HistoryPage /> },
      { path: "faqs", element: <FaqPage /> },
      { path: "culture", element: <CulturePage /> },
      { path: "gallery", element: <GalleryPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
