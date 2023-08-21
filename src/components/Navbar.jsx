import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CaseLogo from "../assets/logo.svg";
import StadisticsLogo from "../assets/stadistics2.svg";
import BoxLogo from "../assets/case.svg";
import InfoLogo from "../assets/info.svg";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={CaseLogo} width={200} alt="Simulador de Recompensa"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link as={Link} to="/">
              <img src={BoxLogo} alt="caja" width={30} height={15} />
              Cajas
            </Nav.Link>
            <Nav.Link as={Link} to="/crear-caja">
              <img src={BoxLogo} alt="caja" width={30} height={15} />
              Crear caja
            </Nav.Link>
            <Nav.Link as={Link} to="/estadistica-objeto">
              <img
                src={StadisticsLogo}
                alt="estadisticas"
                width={30}
                height={15}
              />
              Estadística Objetos
            </Nav.Link>
            <Nav.Link as={Link} to="/estadistica-caja">
              <img
                src={StadisticsLogo}
                alt="estadisticas"
                width={30}
                height={15}
              />
              Estadística Caja
            </Nav.Link>
            <Nav.Link as={Link} to="/como-funciona">
              <img src={InfoLogo} alt="funcionamiento" width={30} height={15} />
              Cómo funciona
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
