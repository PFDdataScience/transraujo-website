import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar'; // Caminho corrigido para importar o Navbar
import Footer from '../../components/Footer'; // Caminho corrigido para importar o Footer

const OperacoesDedicadas = () => {
  return (
    <>
      <Navbar /> {/* Adiciona o Navbar */}
      <Container fluid className="px-0">
        <Helmet>
          <title>Operações Dedicadas | Transaraújo</title>
        </Helmet>
        <Row className="py-5">
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <h1 className="display-4">Operações Dedicadas</h1>
            <p className="text-muted">
              Na Transaraújo, oferecemos serviços de operações dedicadas, proporcionando soluções personalizadas para atender às necessidades específicas de cada cliente.
            </p>
            <p className="text-muted">
              Nossa equipe de profissionais altamente qualificados trabalha em estreita colaboração com os clientes para desenvolver e implementar estratégias logísticas eficientes e eficazes.
            </p>
            <p className="text-muted">
              Entre em contato conosco para saber mais sobre nossos serviços de operações dedicadas e como podemos ajudar a sua empresa a alcançar seus objetivos logísticos.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img src="/images/operacoes-dedicadas.jpg" alt="Operações Dedicadas" className="w-full rounded-lg" />
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Adiciona o Footer */}
    </>
  );
};

export default OperacoesDedicadas;