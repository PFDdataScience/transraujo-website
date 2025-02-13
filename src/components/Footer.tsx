import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://www.facebook.com/profile.php?id=61572917304216"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
              title="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/transaraujotransportes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
              title="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
          <p>&copy; 2025 TRANSARAÚJO. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

