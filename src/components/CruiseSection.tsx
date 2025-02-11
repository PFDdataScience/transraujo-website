import React from 'react';
import { ChevronRight } from 'lucide-react';

const CruiseSection = () => {
  const cruises = [
    {
      image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      title: "MSC PREZIOSA - NATAL",
      description: "Santos / Búzios / Salvador / Maceió / Santos",
      price: "A partir de R$ 3.799",
      duration: "7 noites",
      date: "19/12/2024"
    },
    {
      image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      title: "MSC GRANDIOSA - RÉVEILLON",
      description: "Santos / Rio de Janeiro / Salvador / Ilhéus / Santos",
      price: "A partir de R$ 6.199",
      duration: "8 noites",
      date: "27/12/2024"
    },
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      title: "COSTA FAVOLOSA - CARNAVAL",
      description: "Santos / Ilhabela / Rio de Janeiro / Búzios / Santos",
      price: "A partir de R$ 4.599",
      duration: "5 noites",
      date: "10/02/2025"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Cruzeiros em Destaque
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            As melhores experiências marítimas com preços especiais
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cruises.map((cruise, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={cruise.image}
                alt={cruise.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {cruise.title}
                </h3>
                <p className="mt-2 text-gray-600">{cruise.description}</p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-500">Data: {cruise.date}</p>
                  <p className="text-sm text-gray-500">Duração: {cruise.duration}</p>
                  <p className="text-lg font-semibold text-blue-600">{cruise.price}</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    Ver detalhes
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 inline-flex items-center">
            Ver todos os cruzeiros
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CruiseSection;