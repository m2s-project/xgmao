import { createHashRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Protect from "./Protect";

import { Achats } from "../pages/achats";
import { Dashboard } from "../pages/dashboard";
import { ArticleForm, ArticleList, Stocks } from "../pages/stocks";
import { Interventions } from "../pages/interventions";
import { Inspections } from "../pages/inspections";
import { Maintenances } from "../pages/maintenances";
import { Ressources } from "../pages/ressources";
import { Settings } from "../pages/settings";
import Reappro from "../pages/reappro/Reappro";
import EmployeList from "../pages/ressources/employes/EmployeList";
import EmployeForm from "../pages/ressources/employes/EmployeForm";
import UtilisateurList from "../pages/ressources/employes/utilisateur/UtilisateurList";
import UtilisateurForm from "../pages/ressources/employes/utilisateur/UtilisateurForm";

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
      {
        path: "home/achats/*",
        element: <Achats />,
      },
      // Reappro
      {
        path: "home/reappro",
        element: <Reappro />,
      },
      {
        path: "home/reappro/*",
        element: <Reappro />,
      },
      // Stocks
      {
        path: "home/stocks",
        element: <Stocks />,
      },

      {
        path: "home/stocks/*",
        element: <Stocks />,
      },
      // Articles
      {
        path: "home/stocks/articles",
        element: <ArticleList />,
      },
      {
        path: "home/stocks/articles/add",
        element: <ArticleForm />,
      },
      // Mouvements
      {
        path: "home/stocks/mouvements",
        element: <Stocks />,
      },
      {
        path: "home/stocks/mouvements/*",
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
      {
        path: "home/ressources/employes",
        element: <EmployeList />,
      },
      {
        path: "home/ressources/employes/add",
        element: <EmployeForm />,
      },
      {
        path: "home/ressources/employes/utilisateurs",
        element: <UtilisateurList />,
      },
      {
        path: "home/ressources/employes/utilisateurs/add",
        element: <UtilisateurForm />,
      },
      {
        path: "home/ressources/*",
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
