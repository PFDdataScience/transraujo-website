import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar'; // Caminho corrigido para importar o Navbar
import Footer from '../../components/Footer'; // Caminho corrigido para importar o Footer

const Farmaco = () => {
  return (
    <>
      <Navbar /> {/* Adiciona o Navbar */}
      <Container fluid className="px-0">
        <Helmet>
          <title>Transporte de Produtos Farmacêuticos | Transaraújo</title>
        </Helmet>
        <Row className="py-5">
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <h1 className="display-4">Transporte de Produtos Farmacêuticos</h1>
            <p className="text-muted">
              Na Transaraújo, oferecemos soluções especializadas para o transporte de produtos farmacêuticos,
              garantindo a integridade e a segurança dos medicamentos durante todo o processo logístico.
            </p>
            <p className="text-muted">
              Nossa frota é equipada com tecnologia de ponta para controle de temperatura e umidade, atendendo
              às exigências rigorosas do setor farmacêutico. Contamos com profissionais treinados e qualificados
              para manusear e transportar medicamentos com a máxima eficiência e segurança.
            </p>
            <p className="text-muted">
              Entre em contato conosco para saber mais sobre nossos serviços de transporte de produtos farmacêuticos
              e como podemos ajudar a sua empresa a garantir a qualidade e a segurança dos seus medicamentos.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img src="/images/farmaco.jpg" alt="Transporte de Produtos Farmacêuticos" className="w-full rounded-lg" />
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Adiciona o Footer */}
    </>
  );
};

export default Farmaco;