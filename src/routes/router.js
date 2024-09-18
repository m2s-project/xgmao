import { createHashRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Protect from "./Protect";

import { Achats } from "../pages/achats";
import { Dashboard } from "../pages/dashboard";
import { Stocks } from "../pages/stocks";
import { Interventions } from "../pages/interventions";
import { Inspections } from "../pages/inspections";
import { Maintenances } from "../pages/maintenances";
import { Ressources } from "../pages/ressources";
import { Settings } from "../pages/settings";

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
        element: <Dashboard />,
      },
      // Achats
      {
        path: "home/achats",
        element: <Achats />,
      },
      // Stocks
      {
        path: "home/stocks",
        element: <Stocks />,
      },
      // Interventions
      {
        path: "home/interventions",
        element: <Interventions />,
      },
      // Inspections
      {
        path: "home/inspections",
        element: <Inspections />,
      },
      // Maintenances
      {
        path: "home/maintenances",
        element: <Maintenances />,
      },
      // RH
      {
        path: "home/ressources",
        element: <Ressources />,
      },
      // Paramètres
      {
        path: "home/settings",
        element: <Settings />,
      },
    ],
  },
]);
