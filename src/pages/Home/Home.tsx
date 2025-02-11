import Navbar from '../../components/Navbar'; // Importa o Navbar
import Services from '../Services/Services'; // Importa o Services
import Hero from '../../components/Hero'; // Importa o Hero
import CruiseSection from '../../components/CruiseSection'; // Importa o CruiseSection

const Home = () => {
  return (
    <div> {/* Envolve tudo em um elemento pai */}
      <Navbar /> {/* Utiliza o Navbar */}
      <Hero /> {/* Utiliza o Hero */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo à Transaraujo</h1>
        <p className="text-gray-700">
          Oferecemos soluções completas para o transporte de cargas, com segurança, eficiência e agilidade.
        </p>
        <img src="/images/caminhao.jpg" alt="Caminhão de transporte de cargas" className="w-full rounded-lg" />
      </div>
      <Services /> {/* Utiliza o Services */}
      <CruiseSection /> {/* Utiliza o CruiseSection */}
    </div>
  );
}

export default Home;