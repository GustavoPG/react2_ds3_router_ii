import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetalle = () => {
    const { name } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [pokemonID, setPokemonID] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if (!response.ok) {
                    throw new Error('Error al obtener los detalles del Pokémon');
                }
                const data = await response.json();
                setPokemonDetails(data);
                setPokemonID(data.id); 
            } catch (error) {
                console.error(error);
            }
        };

        fetchPokemonDetails();
    }, [name]);

    return (
        <div>
            {pokemonDetails ? (
                <div className='container my-detalle'>
                    <div>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`} alt={`Imagen de ${pokemonDetails.name}`} />
                    </div>
                    <div>
                        <h2>{pokemonDetails.name}</h2>
                        <p>Tipo(s): {pokemonDetails.types.map(type => type.type.name).join(', ')}</p>
                        <h4>Estadísticas:</h4>
                        <ul>
                            {pokemonDetails.stats.map((stat, index) => (
                                <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            ) : (
                <p>Cargando detalles del Pokémon...</p>
            )}
        </div>
    );
};

export default PokemonDetalle;