import { Container, Form, Navbar, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./cases.css";
import Case1 from "../assets/case1.svg";
import { useCases } from "../hooks/useCases";

export function Cases() {
  const { cases, loading } = useCases();

  const navigate = useNavigate();

  function openCase(id) {
    navigate(`/abrir-caja/${id}`);
  }

  return (
    <Container fluid className="cases-container">
      <Navbar>
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            TODAS LAS CAJAS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </Container>
      </Navbar>
      <Row>
        {cases &&
          cases.map((casess) => (
            <Col
              key={casess.id}
              sm={3}
              md={3}
              lg={3}
              onClick={() => {
                openCase(casess.id);
              }}
              role="button"
            >
              <Row>
                <Col
                  sm={12}
                  md={12}
                  lg={12}
                  className="d-flex justify-content-center px-0"
                >
                  <img src={Case1} alt="Caja" width={150} height={150} />
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <h5 className="text-white text-center px-0">
                    {casess.nombre}
                  </h5>
                </Col>
              </Row>
            </Col>
          ))}
        {loading && <h1>No hay ninguna caja</h1>}
      </Row>
    </Container>
  );
}
