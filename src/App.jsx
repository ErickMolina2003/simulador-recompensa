import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar';
import './App.css';
import { Cases } from './components/Cases';

function App() {
  return (
    <main>
      <NavBar />
      <Cases />
    </main>
  );
}

export default App;
