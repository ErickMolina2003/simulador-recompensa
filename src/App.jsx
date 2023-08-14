import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar";
import "./App.css";
import { Cases } from "./components/Cases";
import { CreateCase } from "./components/CreateCase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { OpenCase } from "./components/OpenCase";

function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={Cases}></Route>
          <Route path="/crear-caja" exact Component={CreateCase}></Route>
          <Route path="/abrir-caja" exact Component={OpenCase}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
