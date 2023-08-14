import { Button, Col, Container, Row } from 'react-bootstrap';
import Stadistics from '../assets/Stadistics.svg';

function EstadisticaCaja() {
  return (
    <Container fluid className='cases-container'>
      <Row className='my-3'>
        <Col className='d-flex'>
          <img
            src={Stadistics}
            alt='resumen'
            width={25}
            height={30}
            className='me-2'
          />
          <h3 className='text-white'>ESTADISTICA CAJAS</h3>
        </Col>
      </Row>

      <Col sm={'auto'} md={'auto'} lg={'auto'}>
        <Row>
          <Col>
            <h4 className='text-white text-center'>
              DETERMINAR MARGEN DE VALOR DE UNA CAJA
            </h4>
          </Col>
          <Col></Col>
        </Row>
      </Col>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <h5 className='text-white text-center'>
            CANTIDAD DE OBJETOS EN CAJA
          </h5>
        </Col>

        <Col>
          <h5 className='text-white text-center'>DATOS DE LOS OBJETOS</h5>
        </Col>
      </Row>
      <br></br>

      <Row>
        <Col></Col>
        <Col className='d-flex justify-content-center'>
          <input></input>
        </Col>
        <Col></Col>
        <Col>
          <h6 className='text-white text-center'>LISTA DE OBJETOS</h6>
        </Col>
        <Col>
          <h6 className='text-white text-center'>PROBABILIDAD OCURRENCIA</h6>
        </Col>
        <Col>
          <h6 className='text-white text-center'>PRECIO </h6>
        </Col>
      </Row>
      <br></br>

      <Row>
        <Col>
          <h6 className='text-white text-center'>PRECIO DE LA CAJA </h6>
        </Col>

        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col className='d-flex justify-content-center'>
          <input></input>
        </Col>
        <Col></Col>
        <Col>
          <h6 className='text-white text-center'>OBJETO A:</h6>
        </Col>
        <Col className='d-flex justify-content-center'>
          <input></input>
        </Col>
        <Col className='d-flex justify-content-center'>
          <input></input>
        </Col>
        <br></br>
      </Row>
      <br></br>
      <Row>
        <Col></Col>
        <Col>
          <h6 className='text-white text-center'>NUMERO DE INTENTOS</h6>
        </Col>
        <Col></Col>
        <Col>
          <h6 className='text-white text-center'>OBJETO B:</h6>
        </Col>
        <Col className='d-flex justify-content-center'>
          <input></input>
        </Col>
        <Col className='d-flex justify-content-center'>
          <input></input>
        </Col>
        <br></br>
      </Row>
      <br></br>
      <Row>
        <Col></Col>
        <Col className='d-flex justify-content-center'>
          {' '}
          <input></input>
        </Col>

        <Col></Col>

        <Col>
          <h6 className='text-white text-center'>OBJETO C:</h6>
        </Col>
        <Col className='d-flex justify-content-center'>
          <input></input>
        </Col>
        <Col className='d-flex justify-content-center'>
          <input></input>
        </Col>
        <br></br>
      </Row>
      <br></br>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>
          <h6 className='text-white text-center'>OBJETO D:</h6>
        </Col>
        <Col className='d-flex justify-content-center'>
          <input></input>
        </Col>
        <Col className='d-flex justify-content-center'>
          <input></input>
        </Col>
        <br></br>
      </Row>
      <br></br>
      <br></br>

      <Row>
        <Col>
          <h5 className='text-white text-center'>
            OBTENIDO: <input></input>
          </h5>
        </Col>
        <Col className='d-flex justify-content-center'>
          <Button variant='danger'>SIMULAR</Button>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <h5 className='text-white text-center'>
            RETRIBUIDO: <input></input>
          </h5>
        </Col>
        <Col></Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <h5 className='text-white text-center'>
            MARGEN DE GANANCIA: <input></input>
          </h5>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export { EstadisticaCaja };
