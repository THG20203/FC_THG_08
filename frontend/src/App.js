import React from "react";
/* styles */
import "./index.css";
import "./assets/styles/typography.scss";
/* Router and react-router-dom */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// PAGE IMPORTS
/* Root Page import */
/* Home Page */
import HomePage from "./pages/Home";

import CulturePage from "./pages/Culture";
/* Events Page Imports */
import EventsPage from "./pages/Events";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/events", element: <EventsPage /> },
  { path: "/culture", element: <CulturePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
