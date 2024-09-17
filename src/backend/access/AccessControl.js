import React, { useState } from "react";


const AccessControl = ({ roles, permissions, fallback, children }) => {
  const [user] = useState({
    id: 1,
    name: "Admin",
    role: "admin",
    permissions: ["view", "edit"],
  });

  // Vérifie si le rôle de l'utilisateur est autorisé
  const isAllowedRole = roles.includes(user.role);

  // Vérifie si l'utilisateur a toutes les permissions requises
  const hasRequiredPermissions = permissions
    ? permissions.every((permission) => user.permissions.includes(permission))
    : true;

  // Rendre le composant si le rôle et les permissions sont corrects
  if (isAllowedRole && hasRequiredPermissions) {
    return {children}
  } else {
    return fallback || <div>Accès refusé.</div>;
  }
};

export default AccessControl;
