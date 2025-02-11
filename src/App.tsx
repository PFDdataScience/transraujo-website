import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Cargas from './pages/Cargas/Cargas';
import Graneis from './pages/Graneis/Graneis';
// Importe os outros componentes de página

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos/cargas" element={<Cargas />} />
        <Route path="/servicos/graneis" element={<Graneis />} />
        {/* Defina as rotas para as outras páginas de serviço */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;