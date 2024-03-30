import { Container, Row } from 'react-bootstrap';
import pikachu from '/pikachu.png';

const Home = () => {
    return (
        <Container className="text-center">
            <Row className="mt-5">
                <h1>Bienvenido maestro pokemón</h1>
            </Row>
            <Row>
                <img src={pikachu} alt="pikachu" className='my-imagen' />
            </Row>
        </Container>
    );
};

export default Home;