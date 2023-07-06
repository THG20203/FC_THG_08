import React from "react";
// PAGE IMPORTS
/* Home Page */
import HomePage from "./pages/Home";
/* Events Page */
import EventsPage from "./pages/Events";
import CulturePage from "./pages/Culture";

/* styles */
import "./index.css";
import "./assets/styles/typography.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/events", element: <EventsPage /> },
  { path: "/culture", element: <CulturePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
