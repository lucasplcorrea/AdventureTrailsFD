// index.jsx
import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function CardTrilha({ dadosTrilha }) {
  return (
    <div className="card_container">
      <img
        className="card_imagem"
        src={dadosTrilha.urlImagem}
        alt="imagem trilha"
      />
      <div className="card_content">
        <div>
          <h1 className="card_title">{dadosTrilha.nomeTrilha}</h1>
          <div className="card_separator"></div>
          <p className="card_info">{dadosTrilha.cidade} / {dadosTrilha.estado}</p>
        </div>
        <div>
          <p className="card_user"><b>Por:</b> {dadosTrilha.nomeUsuario}</p>
        </div>
        <div className="muted">
          <p className="card_info"><b>Duração:</b> {dadosTrilha.duracao}</p>
          <p className="card_info"><b>Trajeto:</b> {dadosTrilha.trajeto}</p>
        </div>
        <div className="dificuldade">
        <p className="card_info"><b>Dificuldade:</b> {dadosTrilha.dificuldade}</p>
        </div>
      </div>
    </div>
  );
}

CardTrilha.propTypes = {
  dadosTrilha: PropTypes.shape({
    nomeTrilha: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    duracao: PropTypes.string.isRequired,
    trajeto: PropTypes.string.isRequired,
    dificuldade: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    nomeUsuario: PropTypes.string.isRequired,
    urlImagem: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardTrilha;
