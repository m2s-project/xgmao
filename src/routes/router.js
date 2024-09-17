import { createHashRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Protect from "./Protect";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      // Login
      { index: true, element: <Login /> },

      // Home
      {
        path: "home",
        element: (
          <Protect>
            <Home />
          </Protect>
        ),
      },
      // Tableau de bord
      {
        path: "home/dashboard",
        element:  <Dashboard />
        ,
      },
      // Achats
      {
        path: "home/achats",
        element:  <Dashboard />
        ,
      },
      // Stocks
      {
        path: "home/stocks",
        element:  <Dashboard />
        ,
      },
      // Interventions
      {
        path: "home/interventions",
        element:  <Dashboard />
        ,
      },
      // Inspections
      {
        path: "home/inspections",
        element:  <Dashboard />
        ,
      },
      // Maintenances
      {
        path: "home/maintenances",
        element:  <Dashboard />
        ,
      },
      // RH
      {
        path: "home/ressources",
        element:  <Dashboard />
        ,
      },
      // Paramètres
      {
        path: "home/settings",
        element:  <Dashboard />
        ,
      },
    ],
  },
]);
