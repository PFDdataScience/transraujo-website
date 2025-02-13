import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar'; // Caminho corrigido para importar o Navbar
import Footer from '../../components/Footer'; // Caminho corrigido para importar o Footer

const TransporteDeCargas = () => {
  return (
    <>
      <Navbar /> {/* Adiciona o Navbar */}
      <Container fluid className="px-0">
        <Helmet>
          <title>Transporte de Cargas | Transaraújo</title>
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
              <img src="/images/transporte-de-cargas.jpg" alt="Transporte de Cargas" className="w-full rounded-lg" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Adiciona o Footer */}
    </>
  );
};

export default TransporteDeCargas;