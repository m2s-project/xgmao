import React, { useState } from "react";
import "./tree.css"; // Fichier CSS
import { Link } from "react-router-dom";

// Composant pour chaque élément de l'arborescence
const TreeNode = ({ node, path }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tree-node">
      <div className="node-label" onClick={handleToggle}>
        {node.children && (
          <span className={`toggle-icon ${isOpen ? "open " : "closed"}`}>
            {isOpen ? "-" : "+"}
          </span>
        )}
        {node.label}
      </div>
      {isOpen && node.children && (
        <div className="node-children">
          {node.children.map((child, index) => (
            <Link key={index} to={`${path}/${child.path}`}>
              <TreeNode node={child} path={`${path}/${child.path}`} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Composant principal de l'arborescence
const Tree = ({ childrens, path }) => {
  return (
    <div className="tree-container">
      {childrens.map((node, index) => (
        <Link key={index} to={`/home/${path}/${node.path}`}>
          <TreeNode node={node} path={`/home/${path}/${node.path}`} />
        </Link>
      ))}
    </div>
  );
};

export default Tree;
