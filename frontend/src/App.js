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
/* Main Navbar Imports (Excluding events) */
import HomePage from "./pages/Home";
import FaqPage from "./pages/FAQ";
import CulturePage from "./pages/Culture";
/* Events Page Imports */

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "faqs", element: <FaqPage /> },
      { path: "culture", element: <CulturePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
