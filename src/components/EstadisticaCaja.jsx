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

function EstadisticaCaja() {
  const [cantidadObjetos, setCantidadObjetos] = useState("");
  const [objetosEnCaja, setObjetosEnCaja] = useState([]);
  const [probabilidades, setProbabilidades] = useState([]);
  const [precios, setPrecios] = useState([]);
  const [precioTotalCaja, setPrecioTotalCaja] = useState("");
  const [numeroIntentos, setNumeroIntentos] = useState("");
  const [retribuido, setRetribuido] = useState(0);
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

  const handleProbabilidadChange = (index, event) => {
    const updatedProbabilidades = [...probabilidades];
    const newValue = event.target.value;
    updatedProbabilidades[index] = newValue > 100 ? 1 : newValue / 100;
    setProbabilidades(updatedProbabilidades);
  };
  const handlePrecioChange = (index, event) => {
    const updatedPrecios = [...precios];
    updatedPrecios[index] = event.target.value;
    setPrecios(updatedPrecios);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const objetos = [];
    const nuevasProbabilidades = [];
    const nuevosPrecios = [];

    for (let i = 0; i < cantidadObjetos; i++) {
      objetos.push(`Objeto ${i + 1}`);
      nuevasProbabilidades.push("");
      nuevosPrecios.push("");
    }

    setObjetosEnCaja(objetos);
    setProbabilidades(nuevasProbabilidades);
    setPrecios(nuevosPrecios);
  };
  const handlePrecioTotalCajaChange = (event) => {
    setPrecioTotalCaja(event.target.value);
  };

  const handleNumeroIntentosChange = (event) => {
    setNumeroIntentos(event.target.value);
  };

  const handleCalcularClick = () => {
    let retribuido = 0;
    for (let i = 0; i < numeroIntentos; i++) {
      const randomValue = Math.random();
      let cumulativeProbability = 0;
      for (let j = 0; j < probabilidades.length; j++) {
        cumulativeProbability += parseFloat(probabilidades[j]);
        if (randomValue <= cumulativeProbability) {
          retribuido += parseFloat(precios[j]);
          break;
        }
      }
    }
    setRetribuido(retribuido);
  };
  const margenGanancia =
    ((1 - retribuido / (precioTotalCaja * numeroIntentos)) * 100).toFixed(2) |
    0;

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
            height: "37rem",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <Row>
            <Col sm={11}>
              <Card.Title className="mt-3">
                <strong>DETERMINAR MARGEN DE VALOR DE UNA CAJA</strong>
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
                <Form.Group controlId="precioTotal">
                  <Form.Label style={{ fontSize: "1.3rem" }}>
                    Precio Total de Caja
                  </Form.Label>
                  <FormControl
                    type="number"
                    min={0}
                    value={precioTotalCaja}
                    placeholder="0 LPS"
                    onChange={handlePrecioTotalCajaChange}
                  />
                </Form.Group>
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
                <Col>
                  <h5 className="text-center">Precio</h5>
                  {precios.map((precio, index) => (
                    <Form.Control
                      key={index}
                      type="number"
                      value={precio}
                      min={1}
                      placeholder="0 LPS"
                      onChange={(event) => handlePrecioChange(index, event)}
                      size="sm"
                    />
                  ))}
                </Col>
              </Row>
              <Row className="mt-1">
                <Col>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleCalcularClick}
                  >
                    Retribuido / Margen de Ganancia
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="my-1 mx-3">
            <hr />
            <Col>
              <h5>
                <strong>RESULTADOS</strong>
              </h5>
            </Col>
            <hr />
            <Row>
              <Col>
                <h5 className="text-center">Obtenido</h5>
                <div className="text-center bg-white">
                  {precioTotalCaja * numeroIntentos + " LPS"}
                </div>
              </Col>
              <Col>
                <h5 className="text-center">Retribuido</h5>
                <div className="text-center bg-white">
                  {retribuido.toFixed(2) + " LPS"}
                </div>
              </Col>
              <Col>
                <h5>Margen de Ganancia</h5>
                <div className="text-center bg-white">
                  {margenGanancia + " %"}
                </div>
              </Col>
            </Row>
          </Row>
        </Card>
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Margen de Valor de una Caja</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              Esta función permite simular el margen de valor entre lo obtenido
              y lo retribuido de una caja.
            </li>
            <li>
              Define el número de veces que se abrirá la caja, la cantidad de
              objetos (Se espera un enter luego de digitar la cantidad), el
              precio total de la caja y luego el precio como la probabilidad de
              ocurrencia de cada objeto.
            </li>
            <li>
              El simulador calculará lo obtenido, retribuido y el margen de
              ganancia o pérdida basado en la probabilidad de ocurrencia y el
              precio de los objetos.
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

export { EstadisticaCaja };
