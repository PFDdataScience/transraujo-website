import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Transporte e Turismo em Um Só Lugar
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Soluções completas em logística e experiências únicas em cruzeiros temáticos
          </p>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Busque por serviços ou destinos..."
                className="flex-1 p-2 border-none focus:ring-0 focus:outline-none"
              />
              <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700" aria-label="Buscar">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;