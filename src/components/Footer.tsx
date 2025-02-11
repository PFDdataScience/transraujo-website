import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-gray-400">
              Líder em soluções de transporte e turismo, oferecendo serviços de qualidade há mais de 20 anos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">(11) 1234-5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">contato@transaraujo.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400">Serviços</a></li>
              <li><a href="#" className="hover:text-blue-400">Cruzeiros</a></li>
              <li><a href="#" className="hover:text-blue-400">Cotação</a></li>
              <li><a href="#" className="hover:text-blue-400">Trabalhe Conosco</a></li>
            </ul>
          </div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400" aria-label="Linkedin">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-400">&copy; 2024 TRANSARAÚJO. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;