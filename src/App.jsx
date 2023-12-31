import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import './App.css';
import { Cases } from './components/Cases';
import { CreateCase } from './components/CreateCase';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { OpenCase } from './components/OpenCase';
import { EstadisticaObjeto } from './components/EstadisticaObjeto';
import { EstadisticaCaja } from './components/EstadisticaCaja';
import { HowItWorks } from './components/HowItWorks';

function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Cases />} />
          <Route path='/crear-caja' element={<CreateCase />} />
          <Route path='/abrir-caja/*' element={<OpenCase />} />
          <Route path='/estadistica-objeto' element={<EstadisticaObjeto />} />
          <Route path='/estadistica-caja' element={<EstadisticaCaja />} />
          <Route path='/como-funciona' element={<HowItWorks />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
