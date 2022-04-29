import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from '../layout/navbar/navbar';
import Footer from '../layout/footer/footer';
import Container from '../layout/container/cointainer';
import Home from '../componentes/home/home';
import Cardapio from '../componentes/produtos/produtos';
import Loucoxinho from '../componentes/loucoxinhos/loucoxinho';
import Contact from '../componentes/contatos/contatos'
import HomeLoucoxinho from '../componentes/homeLoucoxinho/homeLoucoxinho'
import CadastroLoucoxinho from '../componentes/loucoxinhos/cadastroLoucoxinho/cadastro';
import Comprar from '../componentes/comprar/comprar';

function App() {
  return (
    <Router>
    <Navbar />
    <Container>
          <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/cardapio" element={<Cardapio/>}/> 
            <Route path= "/loucoxinho" element={<Loucoxinho/>}/> 
            <Route path= "/contatos" element={<Contact/>}/> 
            <Route path= "/homeLoucoxinho" element={<HomeLoucoxinho/>}/>
            <Route path= "/cadastroLoucoxinho" element={<CadastroLoucoxinho/>}/>
            <Route path= "/Comprar/:id" element={<Comprar/>}/>
          </Routes>
    </Container>

      <>{<Footer/>}</>

    </Router>
  );
}

export default App;
