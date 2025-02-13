import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../../components/Hero'; // Caminho corrigido para importar o Hero
import Services from '../../components/Services'; // Caminho corrigido para importar o Services
import About from '../../components/About'; // Caminho corrigido para importar o About
import Contact from '../../components/Contact'; // Caminho corrigido para importar o Contact
import Navbar from '../../components/Navbar'; // Caminho corrigido para importar o Navbar
import Footer from '../../components/Footer'; // Caminho corrigido para importar o Footer

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Container fluid className="px-0">
        <Row className="py-5">
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <Services />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <About />
          </Col>
        </Row>
        <Row className="py-5">
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <Contact />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
