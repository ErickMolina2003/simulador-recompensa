import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Card,
  FormControl,
  Form,
} from "react-bootstrap";
import Stadistics from "../assets/Stadistics.svg";

function EstadisticaObjeto() {
  const [cantidadObjetos, setCantidadObjetos] = useState("");
  const [objetosEnCaja, setObjetosEnCaja] = useState([]);
  const [probabilidades, setProbabilidades] = useState([]);
  const [numeroIntentos, setNumeroIntentos] = useState("");
  const [resultados, setResultados] = useState([]);

  const handleCantidadChange = (event) => {
    setCantidadObjetos(event.target.value);
  };
  const handleNumeroIntentosChange = (event) => {
    setNumeroIntentos(event.target.value);
  };
  const handleProbabilidadChange = (index, event) => {
    const updatedProbabilidades = [...probabilidades];
    updatedProbabilidades[index] = event.target.value;
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
          <p>
            <strong>{objeto}</strong> --------- {probabilidadCalculada}%
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
          <h3 className="text-white">ESTADÍSTICA CAJAS</h3>
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
          <Card.Title className="mt-1">
            <strong>DETERMINAR PROBABILDAD DE UN OBJETO EN UNA CAJA</strong>
          </Card.Title>
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
                  <p style={{ fontSize: "1.3rem" }}>
                    {objetosEnCaja.map((objeto, index) => (
                      <li key={index}>{objeto}</li>
                    ))}
                  </p>
                </Col>
                <Col>
                  <h5 className="text-center">Probabilidad ocurrencia</h5>
                  {probabilidades.map((probabilidad, index) => (
                    <Form.Control
                      key={index}
                      type="number"
                      min={0}
                      max={1}
                      value={probabilidad}
                      onChange={(event) =>
                        handleProbabilidadChange(index, event)
                      }
                      placeholder="0 - 1"
                      size="sm"
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
                    Calcular
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
              Probabilidad de ocurrencia:
            </h5>
            {resultados}
          </Row>
        </Card>
      </Row>
    </Container>
  );
}

export { EstadisticaObjeto };
