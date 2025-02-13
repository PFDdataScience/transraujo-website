import { Facebook, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Endereço</h3>
            <p>Rua Exemplo, 123</p>
            <p>Bairro Exemplo</p>
            <p>Cidade, Estado, CEP</p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Telefones</h3>
            <p>(11) 1234-5678</p>
            <p>(11) 9876-5432</p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61572917304216"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
                title="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/transaraujotransportes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
                title="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Solicitar Orçamento</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;