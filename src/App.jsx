import './App.css';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import NotFound from './views/NotFound';
import PokemonDetalle from './views/PokemonDetalle';
//import PokemonProvider from './contexts/MyContext';

function App() {
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
    <>
    {/* <PokemonProvider> */}
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pokemones"
          element={<Pokemones data={data} />}
        />
         <Route
          path="/pokemones/:name"
          element={<PokemonDetalle />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    {/* </PokemonProvider>  */}
    </>
  );
};

export default App;