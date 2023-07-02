import React from "react";
/* page imports */
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent"
import CulturePage from "./pages/Culture";

/* styles */
import "./index.css";
import "./assets/styles/typography.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/events", element: <EventsPage /> },
  { path: "/events/:eventId", element: <EventDetailPage /> },
  { path: "/events/new", elements: <NewEventPage />}
  { path: "/culture", element: <CulturePage /> },
]);

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
