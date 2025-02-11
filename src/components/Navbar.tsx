import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo transaraujo fundo transparente.png'; // Importação da logo

const Navbar = () => {
  const navigate = useNavigate();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { title: 'Transporte de Cargas', path: '/servicos/cargas' },
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
            <img src={logo} alt="Logo da Transaraujo" className="h-8 w-auto" /> {/* Logo aqui */}
            <span className="ml-2 text-xl font-bold text-gray-800">TRANSARAÚJO</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" onClick={handleHomeClick} className="text-gray-600 hover:text-blue-600">Início</a>
            <div className="relative group">
              <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="text-gray-600 hover:text-blue-600">Serviços</button>
              {isServicesOpen && (
                <div className="absolute bg-white shadow-lg rounded-lg mt-2">
                  {services.map((service) => (
                    <a key={service.path} href={service.path} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">{service.title}</a>
                  ))}
                </div>
              )}
            </div>
            <a href="/contato" className="text-gray-600 hover:text-blue-600">Contato</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;