import React from "react";
/* page imports */
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import CulturePage from "./pages/Culture";

/* styles */
import "./index.css";
import "./assets/styles/typography.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/events", element: <EventsPage /> },
  { path: "/events/:eventId", element: <EventDetailPage /> },
  { path: "/events/new", element: <NewEventPage /> },
  { path: "/evemts/:eventId/edit", element: <EditEventPage /> },
  { path: "/culture", element: <CulturePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
