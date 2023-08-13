/* eslint-disable react/prop-types */
import { Col, Modal, Row, Table } from 'react-bootstrap';
import Check from '../assets/check.svg';
import Cancel from '../assets/cancel.svg';

export function SummaryModal(props) {
  return (
    <Modal
      {...props}
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
            <h5>Cosas Varias - L 800</h5>
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
              <tr>
                <td>1</td>
                <td>Reloj</td>
                <td>L 1100</td>
                <td className='d-flex justify-content-center'>
                  72%
                  <img
                    className='ms-1'
                    src={Check}
                    alt='positivo'
                    width={20}
                    height={20}
                  />
                </td>
                <td></td>
                <td>L 300</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Audifonos</td>
                <td>L 300</td>
                <td className='d-flex justify-content-center'>
                  266%
                  <img
                    className='ms-1'
                    src={Cancel}
                    alt='negativo'
                    width={20}
                    height={20}
                  />
                </td>
                <td>L 500</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <h5>Total Perdida: L 200</h5>
      </Modal.Footer>
    </Modal>
  );
}
