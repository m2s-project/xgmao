import { mdiAccountSupervisor } from "@mdi/js";

export const ressources = {
  name: "RH",
  icon: mdiAccountSupervisor,
  path: "ressources",
  childrens: [
    {
      label: "Employés",
      path: "employes",
      children: [
        {
          label: "Utilisateurs",

          path: "utilisateurs",
          children: [
            {
              label: "Profiles",

              path: "profiles",
            },
          ],
        },
      ],
    },
    {
      label: "Autres",
      path: "dasboard",
      children: [],
    },
  ],
};
