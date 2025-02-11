import React from 'react';
import { Truck, Ship, Package, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: 'Transporte Rodoviário',
      description: 'Soluções completas em transporte terrestre para sua carga'
    },
    {
      icon: <Ship className="h-8 w-8 text-blue-600" />,
      title: 'Transporte Marítimo',
      description: 'Serviços de transporte marítimo nacional e internacional'
    },
    {
      icon: <Package className="h-8 w-8 text-blue-600" />,
      title: 'Armazenagem',
      description: 'Estrutura completa para armazenamento de cargas'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Logística Integrada',
      description: 'Gestão completa da sua cadeia logística'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Soluções completas para suas necessidades de transporte e logística
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;