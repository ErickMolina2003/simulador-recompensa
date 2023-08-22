import { Col, Modal, Row, Table } from 'react-bootstrap';
import Check from '../assets/check.svg';
import { useState } from 'react';
import Summary from '../assets/summary.svg';
import PropTypes from 'prop-types';

export function SummaryModal(props) {
  const [show, setShow] = useState(false);
  const { objetoObtenido } = props;

  var valor = 800; // Cambiar por precio(props) en donde el usuario ingresa el valor de la caja.
  var gananciasTotales = 0; 

  const handleClose = () => setShow(false);

  SummaryModal.propTypes = {
    objetoObtenido: PropTypes.array.isRequired,};

  return (
    <>
      <Row className='my-3'>
        <Col
          role='button'
          sm={12}
          md={12}
          lg={12}
          className='d-flex'
          onClick={() => setShow(true)}
        >
          <img
            src={Summary}
            alt='resumen'
            width={25}
            height={30}
            className='me-2'
          />
          <h4 className='text-white'>Resumen Financiero</h4>
        </Col>
      </Row>
      <Modal
        show={show}
        onHide={handleClose}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Resumen Financiero
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <h5>Cosas Varias - L {valor}</h5>
            </Col>
          </Row>
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Objetos obtenidos</th>
                  <th>Valor</th>
                  <th>Proporción entre gastos e ingresos</th>
                  <th>Perdida</th>
                  <th>Ganancia</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(objetoObtenido) && objetoObtenido.length > 0 ? (
                  objetoObtenido.map((objeto, index) => {
                    // Calcular la ganancia para cada objeto
                    const ganancia = objeto.precio - valor;
                    gananciasTotales += ganancia; // Sumar la ganancia al total

                    // Calcular el porcentaje
                    const porcentaje = ((objeto.precio - valor) / valor) * 100;

                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{objeto.nombre}</td>
                        <td>L {objeto.precio}</td>
                        <td className='d-flex justify-content-center'>
                          {porcentaje.toFixed(2)}% {/* Mostrar el porcentaje con 2 decimales */}
                          <img
                            className='ms-1'
                            src={Check}
                            alt='positivo'
                            width={20}
                            height={20}
                          />
                        </td>
                        <td>L {ganancia < 0 ? -ganancia : 0}</td> {/* Perdida o 0 si es ganancia */}
                        <td>L {ganancia}</td> {/* Ganancia */}
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6">No se han obtenido objetos aún.</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Row>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <h5>Total Ganancia: L {gananciasTotales}</h5> {/* Mostrar el total de ganancias */}
        </Modal.Footer>
      </Modal>
    </>
  );
}