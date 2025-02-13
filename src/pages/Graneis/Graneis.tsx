import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar'; // Caminho corrigido para importar o Navbar
import Footer from '../../components/Footer'; // Caminho corrigido para importar o Footer

const Graneis = () => {
  return (
    <>
      <Navbar /> {/* Adiciona o Navbar */}
      <Container fluid className="px-0">
        <Helmet>
          <title>Granéis | Transaraújo</title>
        </Helmet>
        <Row className="py-5">
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <h1 className="display-4">Granéis</h1>
            <p className="text-muted">
              O transporte de granéis é uma das principais atividades da Transaraújo.
              Com uma frota de veículos próprios e terceirizados, a empresa oferece
              soluções personalizadas para o transporte de grãos, farelo, milho,
              soja, entre outros.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center">
              <img src="/images/graneis.jpg" alt="Granéis" className="w-full rounded-lg" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Adiciona o Footer */}
    </>
  );
};

export default Graneis;