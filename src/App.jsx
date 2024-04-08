import React from 'react';
import useFetch from './components/Hooks/useFetch'; 
import CardTrilha from './components/CardTrilha'; 
import './App.css';

function App() {
  const { data, loading, error } = useFetch('/json/trilhas.json'); 

  if (loading) {
    return <div>Carregando...</div>; 
  }

  if (error) {
    return <div>Erro: {error.message}</div>; 
  }

  return (
    <div className="container">
      <h1 className="titulo">Explore Trilhas Incríveis</h1>
      {data.map((trilha, index) => (
        <CardTrilha dadosTrilha={trilha} key={index} /> 
      ))}
    </div>
  );
}

export default App;
