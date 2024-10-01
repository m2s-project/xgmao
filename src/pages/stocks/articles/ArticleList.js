import React from "react";
import "./article.css";
import Title from "../../../components/titlebar/Title";
import Button from "../../../ui/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Drop from "../../../components/drop/Drop";
import Icon from "@mdi/react";
import { mdiDelete, mdiDotsVertical, mdiEye, mdiFileEdit } from "@mdi/js";
import Table from "../../../components/table/Table";
import { useSelector } from "react-redux";

const ArticleList = () => {
  const articles = useSelector((state) => state.articles.items);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`${pathname}/add`);
  };

  const headerData = [
    "code",
    "désignations",
    "reférences",
    "marques",
    "modèles",
    "stock",
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
      <td>{item.code}</td>

      <td>{item.designation}</td>

      <td>{item.ref_fabricant}</td>
      <td>{item.marque}</td>
      <td>{item.modele}</td>
      <td>{item.stock}</td>
      <td>{item.statut}</td>
      <td style={{ width: 5 }}>
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
    <div className="article">
      <Title contents={contents} />

      <div className="col-12">
        <Table
          headerData={headerData}
          renderHeader={renderHeader}
          bodyData={articles}
          renderBody={renderBody}
        />
      </div>
    </div>
  );
};

export default ArticleList;
