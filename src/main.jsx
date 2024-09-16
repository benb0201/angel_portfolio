import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Hero from "./components/routes/Hero.jsx";
import RootLayout from "./components/routes/RootLayout.jsx";
import "./index.css";
import About from "./components/sections/About.jsx";
import Audience from "./components/sections/Audience.jsx";
import Projects from "./components/routes/Projects.jsx";
import Mentorship from "./components/routes/Mentorship.jsx";
import Ebooks from "./components/routes/Ebooks.jsx";
import Engagement from "./components/routes/Engagement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/content", element: <Projects /> },
      { path: "/engage", element: <Engagement /> },
      { path: "/mentorship", element: <Mentorship /> }, // New Route
      { path: "/ebooks", element: <Ebooks /> }, // New Route
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
