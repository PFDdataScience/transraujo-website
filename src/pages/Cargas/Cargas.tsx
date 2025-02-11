const Cargas = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Transporte de Cargas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700">
            Oferecemos soluções completas para o transporte de cargas, com
            segurança, eficiência e agilidade. Nossa frota moderna e equipada
            garante a entrega de sua carga no destino certo e no prazo
            combinado.
          </p>
          {/* Outras informações sobre o serviço */}
        </div>
        <div>
          <img
            src="/images/caminhao.jpg" // Substitua pelo caminho da sua imagem
            alt="Caminhão de transporte de cargas"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Seção de depoimentos ou cases de sucesso */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Depoimentos</h2>
        {/* Adicione depoimentos de clientes */}
      </div>

      {/* Formulário de contato */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Solicite um orçamento</h2>
        {/* Adicione um formulário de contato */}
      </div>
    </div>
  );
};

export default Cargas;