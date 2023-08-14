import { Button, Col, Container, Row  } from 'react-bootstrap';
import Stadistics from '../assets/Stadistics.svg';

function EstadisticaObjeto() {

  return (
    <Container fluid className='cases-container'>
      <Row className='my-3'>
        <Col
        >
          <img
            src={Stadistics}
            alt='resumen'
            width={25}
            height={30}
            className='me-2'
          />
          <h3 className='text-white'>ESTADISTICA</h3>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col sm={'auto'} md={'auto'} lg={'auto'}>
          <Row>
            <Col>
              <h5 className='text-white text-center'></h5>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={12} lg={12} className='d-flex justify-content-center'>
          <Button variant='success'>
            PROBABILIDAD DE UN OBJETO
          </Button>
          <Col></Col>
          <Button variant='success'>
            MARGEN DE VALOR DE UNA CAJA
          </Button>
          <br></br>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Col>

      </Row>

      <br></br>
      <br></br>

      <Col sm={'auto'} md={'auto'} lg={'auto'}>
          <Row>
            
            <Col>
              <h4 className='text-white text-center'>DETERMINAR LA PROBABILIDAD DE UN OBJETO EN UNA CAJA</h4>
            </Col>
            <Col>
            </Col>
          </Row>
        </Col>
        <br>
        </br>
        <br></br>
        <Row>
        <Col>
              <h6 className='text-white text-center'>CANTIDAD DE OBJETOS EN CAJA</h6>
            </Col>
      
            <Col>
              <h6 className='text-white text-center'>DATOS DE OBJETO(S)</h6>
            </Col>
        </Row>
        <br></br>
        
        <Row>
        <Col></Col>
            <Col className='d-flex justify-content-center'><input></input></Col>
            <Col></Col>
            <Col>
              <h6 className='text-white text-center'>LISTA DE OBJETOS</h6>
            </Col>
            <Col>
              <h6 className='text-white text-center'>PROBABILIDAD OCURRENCIA</h6>
            </Col>
            <Col>
              <h6 className='text-white text-center'>OBJETO A CALCULAR </h6>
            </Col>
            
        </Row>
        <br></br>
       
        <Row>
        <Col>
              <h6 className='text-white text-center'>NUMERO DE INTENTOS</h6>
            </Col>
      
            <Col>
             
            </Col>
        </Row>
        <Row>
        <Col ></Col>
            <Col className='d-flex justify-content-center'><input></input></Col>
            <Col></Col>
            <Col>
              <h6 className='text-white text-center'>OBJETO A:</h6>
            </Col>
            <Col className='d-flex justify-content-center'>
           <input></input>
            </Col>
            <Col className='d-flex justify-content-center'>
            <input type='radio' name='radioButton' />
            </Col>
            <br>

            </br>
        </Row>
        <br></br>
        <Row>
        <Col></Col>
            <Col className='d-flex justify-content-center'><Button variant='danger'>
            SIMULAR
            </Button></Col>
            <Col></Col>
            <Col>
              <h6 className='text-white text-center'>OBJETO B:</h6>
            </Col>
            <Col className='d-flex justify-content-center'>
           <input></input>
            </Col>
            <Col className='d-flex justify-content-center'>
            <input type='radio' name='radioButton' />
            </Col>
            <br>
            </br>
        </Row>
        <br></br>
        <Row>
        <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <h6 className='text-white text-center'>OBJETO C:</h6>
            </Col>
            <Col className='d-flex justify-content-center'>
           <input></input>
            </Col>
            <Col className='d-flex justify-content-center'>
            <input type='radio' name='radioButton' />
            </Col>
            <br>
            </br>
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
            <input type='radio' name='radioButton' />
            </Col>
            <br>
            </br>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
        
            <Col>
              <h4 className='text-white text-center'>LA PROBABILIDAD DE TENER EXITO ES DE:</h4>
            </Col>
            
            <Col>
            <input></input>
            </Col>
            <Col></Col>
            
            
            
          </Row>  
    </Container>
  );
}

export { EstadisticaObjeto };