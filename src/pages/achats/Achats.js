import React from "react";
import { useLocation } from "react-router-dom";
import "./achats.css";
import Table from "../../components/table/Table";
import Drop from "../../components/drop/Drop";
import Icon from "@mdi/react";
import { mdiAccount, mdiDotsCircle, mdiDotsVertical } from "@mdi/js";
import { mdiTagEdit } from "@mdi/js";
import { mdiNoteEdit } from "@mdi/js";
import { mdiFileEdit } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import { mdiEye } from "@mdi/js";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

const headerData = ["Compte", "Nom"];
const renderHeader = (item, index) => <th key={index}>{item}</th>;
const bodyData = [
  { compte: 1, nom: "Mamane" },
  { compte: 2, nom: "Harouna" },
];
const contents = (
  <>
   
    <span className="item">
      <Icon path={mdiEye} size={0.8} color={"var(--main-color)"}  title={"Voir"}/>
    </span>
    <span className="item">
     
      <Icon path={mdiFileEdit} size={0.8} color={"var(--main-color)"}  title={"Editer"}/>
    </span>
    <span className="item">
     
      <Icon path={mdiDelete} size={0.8} color={"var(--main-color)"} title={"Supprimer"} />
    </span>
  </>
);
const renderBody = (item, index) => (
  <tr key={index}>
    
    <td>{item.compte}</td>

    <td style={{display:"flex", justifyContent:"space-between", alignItems:"center"}} >{item.nom} <Drop contents={contents}> <Icon path={mdiDotsVertical} size={0.7} color={"var(--main-color)"} title={"Supprimer"} /></Drop></td>
 
  </tr>
);

const Achats = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="achats">
      <div className="col-12 title">
        <Breadcrumbs />
        <div>Autres..</div>{" "}
      </div>


      <div className="col-6">col-6</div>
      <div className="col-4">col-4</div>
      <div className="col-2">col-2</div>
      <div className="col-2">
        <Table
          headerData={headerData}
          renderHeader={renderHeader}
          bodyData={bodyData}
          renderBody={renderBody}
        />
      </div>
      <Drop />
    </div>
  );
};

export default Achats;
