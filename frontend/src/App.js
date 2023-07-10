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
import HistoryPage from "./pages/blueNavPages/History";
import FaqPage from "./pages/blueNavPages/FAQ";
import CulturePage from "./pages/blueNavPages/Culture";
/* Main Navbar Imports (Excluding events) */
import HomePage from "./pages/Home";
/* Events Page Imports */

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "history", element: <HistoryPage /> },
      { path: "faqs", element: <FaqPage /> },
      { path: "culture", element: <CulturePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
