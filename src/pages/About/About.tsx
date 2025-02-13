import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar'; // Caminho corrigido para importar o Navbar
import Footer from '../../components/Footer'; // Caminho corrigido para importar o Footer

const About = () => {
  return (
    <>
      <Navbar /> {/* Adiciona o Navbar */}
      <Container fluid className="px-0">
        <Helmet>
          <title>Sobre Nós | Transaraújo</title>
        </Helmet>
        <Row className="py-5">
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <h1 className="display-4">Sobre Nós</h1>
            <p className="text-muted">
              A Transaraújo é uma empresa com 41 anos de experiência no mercado de transporte e logística.
              Oferecemos soluções completas para o transporte de cargas, garantindo segurança, eficiência e agilidade.
            </p>
            <p className="text-muted">
              Nossa missão é proporcionar serviços de alta qualidade, atendendo às necessidades de nossos clientes com
              profissionalismo e dedicação. Contamos com uma frota moderna e uma equipe de profissionais qualificados
              para garantir a melhor experiência em transporte e logística.
            </p>
            <p className="text-muted">
              Entre em contato conosco para saber mais sobre nossos serviços e como podemos ajudar a sua empresa a alcançar seus objetivos logísticos.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img src="/images/about.jpg" alt="Sobre Nós" className="w-full rounded-lg" />
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Adiciona o Footer */}
    </>
  );
};

export default About;