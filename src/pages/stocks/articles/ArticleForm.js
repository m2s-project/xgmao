import React, { useState } from "react";
import "./article.css";
import Title from "../../../components/titlebar/Title";
import Input from "../../../ui/input/Input";
import Accordion from "../../../ui/accordion/Accordion";
import Button from "../../../ui/button/Button";
import { useNavigate } from "react-router-dom";
import Select from "../../../ui/select/Select";
import { article as init } from "../../../lib/definitions/article";
import TextArea from "../../../ui/textarea/TextArea";
import RadioButton from "../../../ui/radiobutton/RadioButton";
import { useDispatch } from "react-redux";
import { addArticle } from "../../../redux/articleSlice";
import { v6 as uuid } from "uuid";
const ArticleForm = () => {
  const dispatch = useDispatch()
  const [article, setArticle] = useState(init);
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();

    setArticle({ ...article, [e.target.name]: e.target.value });
    console.log(article);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let article = Object.fromEntries(data);
    dispatch(addArticle({uuid:uuid(),...article}))
    console.log(article);
    // navigate(-1);
  };

  const iGeneral = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={2}
          name={"code"}
          label={"Code"}
          type={"text"}
          value={article.code}
          onChange={handleChange}
        />
        <Input
          col={7}
          name={"designation"}
          label={"Désignation"}
          type={"text"}
          value={article.designation}
          onChange={handleChange}
        />

        <Select
          col={3}
          label={"categorie"}
          name={"Catégorie"}
          options={[
            { label: "mécanique", value: "mécanique" },
            { label: "électrique", value: "électrique" },
            { label: "consommables", value: "consommables" },
          ]}
          onChange={handleChange}
        />
        <Select
          col={2}
          label={"Statut"}
          name={"statut"}
          options={[
            { label: "Actif", value: true },
            { label: "Inactif", value: false },
          ]}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextArea
          name={"description"}
          placeholder={"Description et détails supplémentaires sur l'article "}
          onChange={handleChange}
          value={article.description}
        />
      </div>
    </>
  );
  const iTechnique = (
    <>
      <div style={{ display: "flex" }}>
        <Input
          col={3}
          placeholder={"Fabricant"}
          name={"ref_fabricant"}
          label={"Reférence"}
          type={"text"}
          value={article.ref_fabricant}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"marque"}
          label={"Marque"}
          type={"text"}
          value={article.marque}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"modele"}
          label={"Modèle"}
          type={"text"}
          value={article.modele}
          onChange={handleChange}
        />

        <Input
          col={2}
          name={"poids"}
          label={"poids"}
          type={"text"}
          value={article.poids}
          onChange={handleChange}
        />
        <Input
          col={2}
          name={"matiere"}
          label={"matière"}
          type={"text"}
          value={article.matiere}
          onChange={handleChange}
        />
        <Input
          col={2}
          placeholder={"ISO 9001, etc."}
          name={"normes"}
          label={"normes"}
          type={"text"}
          value={article.normes}
          onChange={handleChange}
        />
      </div>
    </>
  );

  const iLog = (
    <div style={{ display: "flex" }}>
      <Select
        col={2}
        label={"Unité"}
        name={"unite"}
        options={[
          { label: "pièce", value: "pcs" },
          { label: "kilo", value: "kg" },
          { label: "litre", value: "l" },
        ]}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"stock"}
        name={"stock_min"}
        label={"Minimum"}
        type={"number"}
        value={article.stock_min}
        onChange={handleChange}
      />
      <Input
        placeholder={"actuel"}
        name={"stock_actuel"}
        label={"Stock"}
        type={"number"}
        value={article.stock_actuel}
        onChange={handleChange}
        col={2}
      />
      <Input
        col={2}
        placeholder={"stock"}
        name={"stock_max"}
        label={"Maximum"}
        type={"number"}
        value={article.stock_max}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"stock"}
        name={"stock_securite"}
        label={"Sécurité"}
        type={"number"}
        value={article.stock_securite}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"réapprovisionnement"}
        name={"seuil_reappro"}
        label={"Seuil"}
        type={"number"}
        value={article.seuil_reappro}
        onChange={handleChange}
      />
    </div>
  );

  const iFournisseur = (
    <div style={{ display: "flex" }}>
      <Input
        col={2}
        placeholder={"fournisseur principal"}
        name={"fournisseur"}
        label={"Nom"}
        type={"text"}
        value={article.fournisseur}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"fournisseur"}
        name={"ref_fournisseur"}
        label={"référence"}
        type={"text"}
        value={article.ref_fournisseur}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"fournisseur"}
        name={"prix_achat"}
        label={"Prix"}
        type={"number"}
        value={article.prix_achat}
        onChange={handleChange}
      />
      <Input
        col={4}
        placeholder={"fournisseur"}
        name={"conditions"}
        label={"Conditions"}
        type={"text"}
        value={article.conditions}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"livraison"}
        name={"delai"}
        label={"Délai"}
        type={"number"}
        value={article.delai_livraison}
        onChange={handleChange}
      />
    </div>
  );

  const icVal = (
    <div style={{ display: "flex" }}>
      <Input
        col={2}
        placeholder={"prix de revient"}
        name={"prix_revient"}
        label={"PR"}
        type={"number"}
        value={article.prix_revient}
        onChange={handleChange}
      />

      <Input
        col={3}
        placeholder={"Coût"}
        name={"total"}
        label={"Total"}
        type={"number"}
        value={article.total}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"coût moyen"}
        name={"cump"}
        label={"CUMP"}
        type={"number"}
        value={article.cump}
        onChange={handleChange}
      />
      <div className="col-3" style={{ display: "flex", marginTop: 5 }}>
        <RadioButton
          name="valorisation"
          label={"FIFO"}
          value={"fifo"}
          onChange={handleChange}
        />
        <RadioButton
          name="valorisation"
          label={"LIFO"}
          value={"lifo"}
          onChange={handleChange}
        />
        <RadioButton
          name="valorisation"
          label={"CUMP"}
          value={"cump"}
          onChange={handleChange}
        />
      </div>
    </div>
  );

  const iFinance = (
    <div style={{ display: "flex" }}>
      <Input
        col={1}
        name={"tva"}
        label={"tva"}
        type={"number"}
        value={article.tva}
        onChange={handleChange}
      />
      <Input
        col={2}
        placeholder={"Transport"}
        name={"fret"}
        label={"Fret"}
        type={"number"}
        value={article.fret}
        onChange={handleChange}
      />
      <Input
        col={3}
        placeholder={"mode "}
        name={"paiement"}
        label={"paiement"}
        type={"text"}
        value={article.paiement}
        onChange={handleChange}
      />
      <Input
        col={2}
        name={"echeance"}
        label={"écheance"}
        type={"text"}
        value={article.echeance}
        onChange={handleChange}
      />
    </div>
  );
  const iMaintenance = (
    <div style={{ display: "flex" }}>
      <Input
        col={4}
        placeholder={"liste des équipements...  "}
        name={"compatibilite"}
        label={"compatibilité"}
        type={"text"}
        value={article.compatibilite}
        onChange={handleChange}
      />
      <Input
        col={4}
        placeholder={"liste d'articles de substitution "}
        name={"liaison"}
        label={"liaison"}
        type={"text"}
        value={article.liaison}
        onChange={handleChange}
      />
      <Input
        col={3}
        placeholder={"Intervalle de temps  "}
        name={"remplacement"}
        label={"remplacement"}
        type={"text"}
        value={article.remplacement}
        onChange={handleChange}
      />
    </div>
  );

  const iDocs = (
    <div style={{ display: "flex" }}>
      <Input
        name={"image"}
        label={"image"}
        type={"file"}
        onChange={handleChange}
      />
      <Input
        name={"fiche"}
        label={"fiche"}
        type={"file"}
        onChange={handleChange}
      />
      <Input
        name={"certificat"}
        label={"certificat"}
        type={"file"}
        onChange={handleChange}
      />
    </div>
  );
  const autres = (
    <div style={{ display: "flex" }}>
      <TextArea
        name={"notes"}
        placeholder={
          "Remarques ou informations supplémentaires concernant l'article.. "
        }
        onChange={handleChange}
        value={article.notes}
      />
    </div>
  );

  return (
    <div className="article">
      <Title />
      <form onSubmit={handleSubmit}>
        <Accordion
          title={"Informations générales"}
          content={iGeneral}
          open={true}
        />
        <Accordion title={"Informations techniques"} content={iTechnique} />
        <Accordion title={"Informations logistiques"} content={iLog} />
        <Accordion title={"Informations fournisseur "} content={iFournisseur} />
        <Accordion title={"Coût et valorisation"} content={icVal} />

        <Accordion title={"Informations financières"} content={iFinance} />
        <Accordion title={"Données de maintenance"} content={iMaintenance} />
        <Accordion title={"Images et documents Associés"} content={iDocs} />
        <Accordion title={"Autres informations"} content={autres} />
        <div className="form-button">
          <Button label={"Enrégistrer"} type="submit" />
          <Button label={"Quitter"} onClick={() => navigate(-1)} />
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
