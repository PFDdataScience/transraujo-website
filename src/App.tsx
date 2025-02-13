import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import TransporteDeCargas from './pages/TransporteDeCargas/TransporteDeCargas';
import Graneis from './pages/Graneis/Graneis';
import Farmaco from './pages/Farmaco/farmaco';
import OperacoesDedicadas from './pages/OperacoesDedicadas/OperacoesDedicadas';
import ProdutosPerigosos from './pages/ProdutosPerigosos/ProdutosPerigosos';
import Turismo from './pages/Turismo/Turismo';
import About from './pages/About/About';
import Armazenagem from './pages/Armazenagem/Armazenagem';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos/transporte-de-cargas" element={<TransporteDeCargas />} />
        <Route path="/servicos/graneis" element={<Graneis />} />
        <Route path="/servicos/farmacos" element={<Farmaco />} />
        <Route path="/servicos/operacoes-dedicadas" element={<OperacoesDedicadas />} />
        <Route path="/servicos/produtos-perigosos" element={<ProdutosPerigosos />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicos/armazenagem" element={<Armazenagem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;