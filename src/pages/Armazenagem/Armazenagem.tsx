import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar'; // Caminho corrigido para importar o Navbar
import Footer from '../../components/Footer'; // Caminho corrigido para importar o Footer

const Armazenagem = () => {
  return (
    <>
      <Navbar /> {/* Adiciona o Navbar */}
      <Container fluid className="px-0">
        <Helmet>
          <title>Armazenagem | Transaraújo</title>
        </Helmet>
        <Row className="py-5">
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <h1 className="display-4">Armazenagem</h1>
            <p className="text-muted">
              Na Transaraújo, oferecemos serviços de armazenagem para garantir a segurança e a integridade de suas mercadorias.
              Nossos armazéns são equipados com tecnologia de ponta e seguem rigorosos padrões de segurança e controle de qualidade.
            </p>
            <p className="text-muted">
              Nossa equipe de profissionais está pronta para ajudar você a gerenciar seu estoque de forma eficiente e segura,
              proporcionando soluções personalizadas para atender às suas necessidades específicas.
            </p>
            <p className="text-muted">
              Entre em contato conosco para saber mais sobre nossos serviços de armazenagem e como podemos ajudar a sua empresa a otimizar a gestão de estoque.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img src="/images/armazenagem.jpg" alt="Armazenagem" className="w-full rounded-lg" />
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Adiciona o Footer */}
    </>
  );
};

export default Armazenagem;