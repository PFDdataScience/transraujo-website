import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar'; // Caminho corrigido para importar o Navbar
import Footer from '../../components/Footer'; // Caminho corrigido para importar o Footer

const Turismo = () => {
  return (
    <>
      <Navbar /> {/* Adiciona o Navbar */}
      <Container fluid className="px-0">
        <Helmet>
          <title>Turismo | Transaraújo</title>
        </Helmet>
        <Row className="py-5">
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <h1 className="display-4">Turismo</h1>
            <p className="text-muted">
              Na Transaraújo, oferecemos serviços de turismo para proporcionar experiências únicas e inesquecíveis.
              Nossos pacotes turísticos incluem cruzeiros temáticos, excursões e viagens personalizadas para atender às suas necessidades e desejos.
            </p>
            <p className="text-muted">
              Nossa equipe de profissionais está pronta para ajudar você a planejar a viagem dos seus sonhos, com segurança, conforto e qualidade.
            </p>
            <p className="text-muted">
              Entre em contato conosco para saber mais sobre nossos serviços de turismo e como podemos ajudar a tornar sua próxima viagem uma experiência inesquecível.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img src="/images/turismo.jpg" alt="Turismo" className="w-full rounded-lg" />
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Adiciona o Footer */}
    </>
  );
};

export default Turismo;