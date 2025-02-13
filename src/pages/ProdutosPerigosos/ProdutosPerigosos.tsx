import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar'; // Caminho corrigido para importar o Navbar
import Footer from '../../components/Footer'; // Caminho corrigido para importar o Footer

const ProdutosPerigosos = () => {
  return (
    <>
      <Navbar /> {/* Adiciona o Navbar */}
      <Container fluid className="px-0">
        <Helmet>
          <title>Produtos Perigosos e Inflamáveis | Transaraújo</title>
        </Helmet>
        <Row className="py-5">
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <h1 className="display-4">Produtos Perigosos e Inflamáveis</h1>
            <p className="text-muted">
              Na Transaraújo, oferecemos serviços especializados para o transporte de produtos perigosos e inflamáveis,
              garantindo a segurança e a conformidade com as regulamentações vigentes.
            </p>
            <p className="text-muted">
              Nossa equipe de profissionais é treinada para manusear e transportar esses materiais com a máxima segurança,
              utilizando equipamentos e veículos adequados para cada tipo de carga.
            </p>
            <p className="text-muted">
              Entre em contato conosco para saber mais sobre nossos serviços de transporte de produtos perigosos e inflamáveis
              e como podemos ajudar a sua empresa a garantir a segurança e a eficiência no transporte desses materiais.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <img src="/images/produtos-perigosos.jpg" alt="Produtos Perigosos e Inflamáveis" className="w-full rounded-lg" />
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Adiciona o Footer */}
    </>
  );
};

export default ProdutosPerigosos;