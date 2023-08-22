import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  FormControl,
  Form,
  Modal,
} from "react-bootstrap";
import Stadistics from "../assets/Stadistics.svg";
import InfoLogo from "../assets/info.svg";

function EstadisticaObjeto() {
  const [cantidadObjetos, setCantidadObjetos] = useState("");
  const [objetosEnCaja, setObjetosEnCaja] = useState([]);
  const [probabilidades, setProbabilidades] = useState([]);
  const [numeroIntentos, setNumeroIntentos] = useState("");
  const [resultados, setResultados] = useState([]);
  const [showModal, setShowModal] = useState(false); //modal

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCantidadChange = (event) => {
    setCantidadObjetos(event.target.value);
  };
  const handleNumeroIntentosChange = (event) => {
    setNumeroIntentos(event.target.value);
  };
  const handleProbabilidadChange = (index, event) => {
    const updatedProbabilidades = [...probabilidades];
    const newValue = event.target.value;
    updatedProbabilidades[index] = newValue > 100 ? 1 : newValue / 100;
    setProbabilidades(updatedProbabilidades);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const objetos = [];
    const nuevasProbabilidades = [];
    for (let i = 0; i < cantidadObjetos; i++) {
      objetos.push(`Objeto ${i + 1}`);
      nuevasProbabilidades.push("");
    }
    setObjetosEnCaja(objetos);
    setProbabilidades(nuevasProbabilidades);
    setResultados([]);
  };

  const calcularProbabilidad = (p, n) => {
    const q = 1 - p;
    const probabilidad = 1 - q ** n;
    return (probabilidad * 100).toFixed(2);
  };

  const handleCalcularClick = () => {
    const nuevosResultados = objetosEnCaja.map((objeto, index) => {
      const probabilidad = probabilidades[index];
      const probabilidadCalculada = calcularProbabilidad(
        probabilidad,
        numeroIntentos
      );
      return (
        <Col sm={2}>
          <p style={{ color: "black" }}>
            {objeto} --------- {probabilidadCalculada}%
          </p>
        </Col>
      );
    });
    setResultados(nuevosResultados);
  };

  return (
    <Container fluid className="cases-container">
      <Row className="my-1 mx-3">
        <Col className="d-flex">
          <img
            src={Stadistics}
            alt="resumen"
            width={25}
            height={30}
            className="me-2"
          />
          <h3 className="text-white">ESTADÍSTICA OBJETOS</h3>
        </Col>
      </Row>
      <Row className="my-1 mx-3">
        <Card
          style={{
            width: "100rem",
            height: "39rem",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <Row>
            <Col sm={11}>
              <Card.Title className="mt-1">
                <strong>
                  DETERMINAR LA PROBABILDAD DE LOS OBJETOS DE UNA CAJA
                </strong>
              </Card.Title>
            </Col>
            <Col sm={1}>
              <span style={{ cursor: "pointer" }}>
                <img
                  src={InfoLogo}
                  onClick={handleShowModal}
                  width={40}
                  height={20}
                />
              </span>
            </Col>
          </Row>

          <hr />
          <Row className="mx-1">
            <Col sm={4}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="cantidad">
                  <Form.Label style={{ fontSize: "1.3rem" }}>
                    Cantidad de objetos en caja
                  </Form.Label>
                  <FormControl
                    type="number"
                    min={0}
                    max={9}
                    value={cantidadObjetos}
                    placeholder="0 - 9"
                    onChange={handleCantidadChange}
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="intentos">
                  <Form.Label style={{ fontSize: "1.3rem" }}>
                    Número de Intentos
                  </Form.Label>
                  <FormControl
                    type="number"
                    min={0}
                    placeholder="0"
                    value={numeroIntentos}
                    onChange={handleNumeroIntentosChange}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col sm={8}>
              <h5 className="text-center">DATOS DE OBJETOS</h5>
              <Row>
                <Col>
                  <h5 className="text-center">Lista de objetos</h5>
                  <p style={{ fontSize: "1.3rem", color: "black" }}>
                    {objetosEnCaja.map((objeto, index) => (
                      <li key={index}>{objeto}</li>
                    ))}
                  </p>
                </Col>
                <Col>
                  <h5 className="text-center">Probabilidad ocurrencia (%)</h5>
                  {probabilidades.map((probabilidad, index) => (
                    <Form.Control
                      key={index}
                      type="number"
                      value={
                        probabilidad === 1
                          ? "100"
                          : (probabilidad * 100).toString().replace(/^0+/, "")
                      }
                      onChange={(event) =>
                        handleProbabilidadChange(index, event)
                      }
                      placeholder="1% - 100%"
                      size="sm"
                      min={1}
                      max={100}
                    />
                  ))}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleCalcularClick}
                  >
                    Calcular Probabilidad
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mx-3">
            <Col>
              <h5>
                <strong>RESULTADOS</strong>
              </h5>
            </Col>
            <hr />
          </Row>
          <Row>
            <h5 style={{ textAlign: "left" }} className="mx-3">
              Probabilidad de ocurrencia de cada objeto:
            </h5>
            {resultados}
          </Row>
        </Card>
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Probabilidad de Objetos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              Los usuarios pueden calcular la probabilidad de obtener todos los
              objetos de una caja dado un número de intentos.
            </li>
            <li>
              Establece la cantidad de objetos (Se espera un enter luego de
              digitar la cantidad), el número de intentos y la probabilidad de
              ocurrencia de cada objeto
            </li>
            <li>
              Se utiliza la fórmula de la distribución binomial negativa para
              obtener resultados precisos:
              <ul>
                <li>
                  <strong>
                    P(X ≥ 1 en n ensayos) = 1 - P(X = 0 en n ensayos)
                  </strong>{" "}
                  Donde P(X = 0 en n ensayos) se calcula utilizando la fórmula
                  de la distribución binomial negativa:{" "}
                  <strong>
                    P(X = k en n ensayos) = (n - 1 + k) C k * p^k * (1 - p)^(n -
                    1)
                  </strong>
                </li>
                <li>
                  Donde: <strong>k</strong> es el número de éxitos (en este
                  caso, k = 0 para calcular la probabilidad de que no aparezca
                  el objeto), <strong>n</strong> es el número total de intentos
                  y <strong>p</strong> es la probabilidad de ocurrencia del
                  objeto en un solo intento
                </li>
              </ul>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export { EstadisticaObjeto };
