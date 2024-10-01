import {
  mdiMonitorDashboard,
  mdiWarehouse,
  mdiStore,
  mdiAccountDetails,
  mdiWrenchClock,
  mdiCogs,
  mdiAccountSupervisor,
 
} from "@mdi/js";
import { achats, reappro, ressources, stocks } from "./path";

export const modules = [
  {
    name: "Tableau de bord",
    icon: mdiMonitorDashboard,
    path: "dashboard",
    childrens: [],
  },
 achats,
 stocks,
 reappro,
 ressources,
  {
    name: "Interventions",
    icon: mdiWrenchClock,
    path: "interventions",
    childrens: [],
  },
  {
    name: "Inspections",
    icon: mdiAccountDetails,
    path: "inspections",
    childrens: [],
  },
  {
    name: "Maintenances",
    icon: mdiStore,
    path: "maintenances",
    childrens: [],
  },

  { name: "Paramètres", icon: mdiCogs, path: "settings", childrens: [] },
];
