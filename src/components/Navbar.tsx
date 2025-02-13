import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg'; // Importação da logo

function Navbar() {
  const navigate = useNavigate();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { title: 'Transporte de Cargas', path: '/servicos/transporte-de-cargas' },
    { title: 'Granéis', path: '/servicos/graneis' },
    { title: 'Fármacos', path: '/servicos/farmacos' },
    { title: 'Operações Dedicadas', path: '/servicos/operacoes-dedicadas' },
    { title: 'Produtos Perigosos e Inflamáveis', path: '/servicos/produtos-perigosos' },
    { title: 'Armazenagem', path: '/servicos/armazenagem' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo da Transaraujo"
              className="h-10 w-auto cursor-pointer"
              onClick={handleHomeClick}
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={handleHomeClick} className="text-gray-600 hover:text-blue-600">Início</Link>
            <div className="relative group">
              <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="text-gray-600 hover:text-blue-600">Serviços</button>
              {isServicesOpen && (
                <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-auto min-w-max">
                  {services.map((service) => (
                    <Link key={service.path} to={service.path} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">{service.title}</Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/turismo" className="text-gray-600 hover:text-blue-600">Turismo</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <a href="#footer" onClick={handleContactClick} className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

