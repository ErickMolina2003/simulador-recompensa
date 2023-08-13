import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import './App.css';
import { Cases } from './components/Cases';
import { CreateCase } from './components/CreateCase';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' Component={Cases}></Route>
          <Route path='/crear-caja' exact Component={CreateCase}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
