import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import NotFound from './views/NotFound';
import PokemonDetalle from './views/PokemonDetalle';

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
    </>
  );
};

export default App;