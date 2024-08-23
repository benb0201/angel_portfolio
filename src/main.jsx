import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Hero from "./components/routes/Hero.jsx";
import RootLayout from "./components/routes/RootLayout.jsx";
import "./index.css";
import About from "./components/routes/About.jsx";
import Experience from "./components/routes/Experience.jsx";
import Projects from "./components/routes/Projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/about", element: <About /> },
      { path: "/experience", element: <Experience /> },
      { path: "/content", element: <Projects /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
