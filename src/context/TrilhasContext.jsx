import { createContext, useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
 const [dados, isLoading] = useFetch("/dados.json");
 const [trilhas, setTrilhas] = useState([]);

 useEffect(() => {
  if (!!dados && !isLoading) {
   setTrilhas(dados.trilhas);
  }
 }, [dados]);

 function addTrail(trailData) {
  setTrilhas((t) => [...t, trailData]);
 }

 return (
  <TrilhasContext.Provider value={{ trilhas, setTrilhas, isLoading, addTrail }}>
   {children}
  </TrilhasContext.Provider>
 );
};