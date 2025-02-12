import { Container, Row, Col } from 'react-bootstrap';
import { Truck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar'; // Caminho corrigido para importar o Navbar
import Footer from '../../components/Footer'; // Caminho corrigido para importar o Footer

const Cargas = () => {
  return (
    <>
      <Navbar /> {/* Adiciona o Navbar */}
      <Container fluid className="px-0">
        <Helmet>
          <title>Cargas | Transaraújo</title>
        </Helmet>
        <Row className="py-5">
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <h1 className="display-4">Transporte de Cargas</h1>
            <p className="text-muted">
              Oferecemos soluções completas para o transporte de cargas, com segurança, eficiência e agilidade.
              Nossa frota moderna e equipada garante a entrega de sua carga no destino certo e no prazo combinado.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center">
              <Truck size={64} />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Adiciona o Footer */}
    </>
  );
};

export default Cargas;