# Description

Le projet eXpert de Gestion de Maintenance Assistée par Ordinateur (XGMAO) vise à développer une solution multiplateforme 
pour améliorer l'efficacité de la maintenance, réduire les temps d'arrêt et optimiser les coûts opérationnels. 
Ce projet est destiné à être utilisé par divers clients.

# Fonctionnalités

# Gestion des Équipements
•	Suivi du cycle de vie des équipements
•	Gestion des pièces détachées et des contrats de maintenance
•	Suivi des coûts et des alertes pour les entretiens planifiés
•	Arborescence hiérarchique des actifs

# Gestion des Inspections
•	Création de plans d'inspection et calendrier interactif
•	Alertes et notifications automatiques
•	Ordres de travail automatiques et création de maintenances préventives ou urgentes
•	Suivi en temps réel et validation des inspections

# Gestion des Interventions
•	Création et suivi des interventions d'urgence
•	Historique des interventions et calendrier interactif
•	Évaluation des interventions et gestion des ressources

# Gestion des Stocks et Achats
•	Suivi des mouvements de stock et gestion des fournisseurs
•	Réapprovisionnement automatisé et inventaire périodique
•	Suivi des livraisons et gestion des contrats d'achat

# Gestion des Stratégies de Maintenance
•	Maintenance prédictive et analyse des causes de pannes
•	Tableaux de bord personnalisés et gestion des procédures

# Gestion des Contrats de Maintenance Externe
•	Suivi des prestataires externes 

# Notifications et Rappels
•	Notifications multi-canal et rappels automatisés

# Mobilité et Accès à Distance
•	Application mobile complète avec accès hors-ligne

# Installation

# Prérequis
•	Node.js
•	Npm pnpm ou yarn
•	Electron (pour la version desktop)

# Cloner le dépôt

## terminal
`git clone http://gitlab.itechcenter.ne:8224/gmao/frontend.git`

# Installer les dépendances
``npm, pnpm ou yarn install``

# Démarrer l'application
Pour démarrer la version web :
## terminal
``npm, pnpm ou yarn start``

Pour démarrer la version desktop (Electron) :
## terminal
``npm, pnpm ou yarn dev``

# Développement

# Structure du Projet
Voir le clone Gitlab

# Build
Pour créer une version de production de l'application web :
## terminal
``npm, pnpm ou yarn build``

Pour empaqueter l'application Electron :
## terminal
``npm, pnpm ou yarn dist``
