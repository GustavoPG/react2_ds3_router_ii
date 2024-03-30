import { Container, Row } from 'react-bootstrap';
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
//import { PokemonContext } from '../contexts/MyContext';

const Pokemones = (props) => {
    //const { data } = useContext(PokemonContext);
    const [selectedPokemon, setSelectedPokemon] = useState("");
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        setSelectedPokemon(event.target.value);
        //console.log(selectedPokemon);
    };

    const getPokemon = () => {
        //selectPokemon(selectedPokemon);
        if (selectedPokemon !== 'pokemones' && selectedPokemon !== '')
        {
        navigate(`/pokemones/${selectedPokemon}`);
        }
    };

    if (!props.data) {
        return <div className='text-center'>Cargando...</div>;
    }

    return (
        <>
            <Container className="text-center">
                <Row className="mt-5">
                    <h1>Selecciona un pokemon</h1>
                </Row>
                <Row className='mx-auto col-sm-3'>
                    <select className='mt-5' value={selectedPokemon} onChange={handleSelectChange}>
                        <option value="Seleccionar">pokemones</option>
                        {props.data.map((pokemon, index) => (
                            <option key={index} value={pokemon.name}>{pokemon.name}</option>
                        ))}
                    </select>
                    <button className='mt-5 btn btn-secondary' onClick={getPokemon}>Buscar</button>
                </Row>
            </Container>
        </>
    );
};

export default Pokemones;