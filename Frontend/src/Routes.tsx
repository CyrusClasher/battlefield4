import React from "react";
// import {Home,NotFound} from "pages/home";
import { useRoutes } from "react-router-dom";
import ServerInfo from "./pages/serverinfo/index";
import HomePage from "./pages/serverinfo/homepage";

const ProjectRoutes = () => {
  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    // { path: "*", element: <NotFound /> },
    {
      path: "serverInfo",
      element: <ServerInfo />,
    },
  ]);
  return element;
};
export default ProjectRoutes;
