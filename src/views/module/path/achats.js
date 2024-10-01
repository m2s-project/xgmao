import { mdiNetworkPos, mdiWarehouse } from "@mdi/js";

export const achats = {
  name: "Achats", icon: mdiNetworkPos, path: "achats",
  childrens: [
    {
      label: "Dashboard",
      path: "dasboard",
      children: [
        {
          label: "En cours",
          path: "overview",
          
        },
        {
          label: "Attendues",
          path: "overview",
          
        },
        {
          label: "Performances",
          path: "overview",
          
        },
      
      ],
    },
    {
      label: "Commandes",
      path: "purchaseOrders",
      children: [
        {
          label: "Création",
          path: "purchaseOrder",
        },
        {
          label: "Suivi",
          path: "purchaseOrders",
        }
      ],
    },
    {
      label: "Livraisons",

      path: "deliveries",
      children: [
        {
          label: "Réception",
          path: "receiving",
        },
        {
          label: "Contrôles",
          path: "controls",
        },
        {
          label: "Historiques",
          path: "history",
        },
        {
          label: "Rapports",
          path: "report",
        },
      ],
    },
    {
      label: "Paiements ",

      path: "payments ",
      children: [
        {
          label: "Factures",
          path: "invoices",
        },
        {
          label: "litiges ",
          path: "complaints",
        }
      ],
    },
    {
      label: "Fournisseurs",
      path: "suppliers",
      children: [
        {
          label: "Nouveau",
          path: "supplier",
        },
        {
          label: "Performances",
          path: "supplier",
        },
        {
          label: "Contrats",
          path: "supplier",
        },
        {
          label: "Négociations ",
          path: "negotiations",
        },
      ],
    },
   
   
    {
      label: "Rapports",

      path: "reports",
      children: [
        {
          label: "Statiistiques",
          path: "statistics",
        },
        {
          label: "achats",
          path: "purchases",
        },
        {
          label: "Receptions",
          path: "receivings",
        },
      ],
    },
    {
      label: "Paramètres",

      path: "settings",
      children: [
        {
          label: "Catégories ",
          path: "categories",
        },
        {
          label: "Unités ",
          path: "units",
        },
        {
          label: "Fournisseurs",
          path: "suppliers",
        },

        {
          label: "Alertes",
          path: "alerts",
        },
      ],
    },
  ],
};
