import React from 'react';
import useFetch from './useFetch'; // Importe o hook useFetch

function TrilhasContainer() {
  const { data, loading, error } = useFetch('/json/trilhas.json'); // Chame o hook useFetch com a URL do arquivo JSON

  if (loading) {
    return <div>Carregando...</div>; // Se estiver carregando, exiba uma mensagem de carregamento
  }

  if (error) {
    return <div>Erro: {error.message}</div>; // Se houver um erro, exiba uma mensagem de erro
  }

  return (
    <div>
      {data && data.map((trilha) => (
        <CardTrilha key={trilha.nome} dadosTrilha={trilha} /> // Para cada trilha, renderize o componente CardTrilha passando os dados da trilha como props
      ))}
    </div>
  );
}

export default TrilhasContainer;
