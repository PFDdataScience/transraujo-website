import { Container, Row, Col } from 'react-bootstrap';
import { Truck, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar'; // Caminho corrigido para importar o Navbar
import Footer from '../../components/Footer'; // Caminho corrigido para importar o Footer

const Graneis = () => {
  return (
    <>
      <Navbar /> {/* Adiciona o Navbar */}
      <Container fluid className="px-0">
        <Helmet>
          <title>Graneis | Transaraújo</title>
        </Helmet>
        <Row className="py-5">
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <h1 className="display-4">Graneis</h1>
            <p className="text-muted">
              O transporte de graneis é uma das principais atividades da Transaraújo.
              Com uma frota de veículos próprios e terceirizados, a empresa oferece
              soluções personalizadas para o transporte de grãos, farelo, milho,
              soja, entre outros.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center">
              <Truck size={64} />
              <Ship size={64} className="mt-3" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Adiciona o Footer */}
    </>
  );
};

export default Graneis;
