import {
  mdiMonitorDashboard,
  mdiWarehouse,
  mdiStore,
  mdiAccountDetails,
  mdiWrenchClock,
  mdiCogs,
  mdiAccountSupervisor,
  mdiNetworkPos,
} from "@mdi/js";

export const modules = [
  { name: "Tableau de bord", icon: mdiMonitorDashboard, route: "dashboard" },
  { name: "Achats", icon: mdiNetworkPos, route: "achats" },
  { name: "Stocks", icon: mdiWarehouse, route: "stocks" },
  { name: "Interventions", icon: mdiWrenchClock, route: "interventions" },
  { name: "Inspections", icon: mdiAccountDetails, route: "inspections" },
  { name: "Maintenances", icon: mdiStore, route: "maintenances" },
  { name: "RH", icon: mdiAccountSupervisor, route: "ressources" },
  { name: "Paramètres", icon: mdiCogs, route: "settings" },
];
