import React from "react";
import "./utilisateur.css";
import Title from "../../../../components/titlebar/Title";
import Button from "../../../../ui/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Drop from "../../../../components/drop/Drop";
import Icon from "@mdi/react";
import { mdiDelete, mdiDotsVertical, mdiEye, mdiFileEdit } from "@mdi/js";
import Table from "../../../../components/table/Table";
import { useSelector } from "react-redux";

const UtilisateurList = () => {
  const utilisateurs = useSelector((state) => state.utilisateurs.items);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`${pathname}/add`);
  };

  const headerData = [
    "nom",
    "Prénom",
    "poste",
    "Département",
    "téléphone",
    "email",
    "disponible",
    "statut",
    "a",
  ];
  const renderHeader = (item, index) => <th key={index}>{item}</th>;
 
  const actions = (
    <>
      <span className="item">
        <Icon
          path={mdiEye}
          size={0.8}
          color={"var(--main-color)"}
          title={"Voir"}
        />
      </span>
      <span className="item">
        <Icon
          path={mdiFileEdit}
          size={0.8}
          color={"var(--main-color)"}
          title={"Editer"}
        />
      </span>
      <span className="item">
        <Icon
          path={mdiDelete}
          size={0.8}
          color={"var(--main-color)"}
          title={"Supprimer"}
        />
      </span>
    </>
  );
  const renderBody = (item, index) => (
    <tr className="col-12" key={index} onMouseEnter={() => console.log(item)}>
      <td>{item.nom}</td>

      <td>{item.prenom}</td>

      <td>{item.poste}</td>
      <td>{item.service}</td>
      <td>{item.tel}</td>
      <td>{item.email}</td>
      <td>{item.disponibilite}</td>
      <td>{item.statut}</td>
      <td style={{ width: 5 }} >
        <Drop contents={actions}>
     
          <Icon
            path={mdiDotsVertical}
            size={0.8}
            color={"var(--main-color)"}
            title={"Actions"}
          />
        </Drop>
      </td>
    </tr>
  );

  const contents = (
    <div style={{}}>
      <Button label={"Nouveau"} onClick={handleClick} />
      {/* <Button label={"Importation"}  onClick={handleClick} /> */}
      {/* <Button label={"Exportation"} onClick={handleClick} /> */}
    </div>
  );
  return (
    <div className="utilisateur">
      <Title contents={contents} />

      <div className="col-12">
        <Table
          headerData={headerData}
          renderHeader={renderHeader}
          bodyData={utilisateurs}
          renderBody={renderBody}
        />
      </div>
    </div>
  );
};

export default UtilisateurList;
