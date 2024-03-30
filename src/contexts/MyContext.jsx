import { createContext, useState, useEffect } from 'react';

// Había utilizado Context en un principio, pero está lógica la moví a App.jsx, ya que 
// consideré no era necesario el uso de Context.

export const PokemonContext = createContext();
const PokeProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        if (!response.ok) {
          throw new Error("Error al leer datos");
        }
        const newData = await response.json();
        setData(newData.results);
        //console.log(data);
      } catch (error) {
        console.error("Error al traer datos", error);
      }
    };
    fetchData();
  }, []);


  return (
    <PokemonContext.Provider value={{ data, setData }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokeProvider;