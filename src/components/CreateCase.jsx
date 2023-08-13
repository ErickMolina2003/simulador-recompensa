import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import BoxLogo from '../assets/case.svg';
import Case1 from '../assets/case1.svg';
import Case2 from '../assets/case2.svg';
import Case3 from '../assets/case3.svg';
import Case4 from '../assets/case4.svg';
import Case5 from '../assets/case5.svg';
import Object from '../assets/object.svg';
import Object1 from '../assets/object1.svg';
import Object2 from '../assets/object2.svg';
import Object3 from '../assets/object3.svg';
import Object4 from '../assets/object4.svg';
import Object5 from '../assets/object5.svg';
import Object6 from '../assets/object6.svg';
import Object7 from '../assets/object7.svg';
import Object8 from '../assets/object8.svg';
import { useState } from 'react';
import { ObjectModal } from './ObjectModal';

export function CreateCase() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container fluid className='cases-container'>
      <Row className='my-3'>
        <Col className='d-flex'>
          <img
            src={BoxLogo}
            alt='caja'
            className='me-2'
            width={30}
            height={30}
          />
          <h3 className='text-white'>Crear Caja</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={4} md={4} lg={4}>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label className='text-white'>Nombre</Form.Label>
              <Form.Control type='text' placeholder='Cosas varias' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label className='text-white'>Precio</Form.Label>
              <Form.Control type='text' placeholder='L 500' />
            </Form.Group>

            <Button variant='success'>Crear</Button>
          </Form>
        </Col>
        <Col>
          <Row>
            <Col sm={'auto'} md={'auto'} lg={'auto'}>
              <h5 className='text-white'>Imagen:</h5>
            </Col>
            <Col>
              <Row>
                <Col sm={4} md={4} lg={4}>
                  <img src={Case1} alt='caja' width={125} height={125} />
                </Col>
                <Col sm={4} md={4} lg={4}>
                  <img src={Case2} alt='caja' width={125} height={125} />
                </Col>
                <Col sm={4} md={4} lg={4}>
                  <img src={Case3} alt='caja' width={125} height={125} />
                </Col>
                <Col sm={4} md={4} lg={4}>
                  <img src={Case4} alt='caja' width={125} height={125} />
                </Col>
                <Col sm={4} md={4} lg={4}>
                  <img src={Case5} alt='caja' width={125} height={125} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='mx-2' style={{ border: '1px solid white' }}>
        <Col sm={12} md={12} lg={12}>
          <h5 className='text-white'>Objetos</h5>
        </Col>
        <Col
          role='button'
          sm={'auto'}
          md={'auto'}
          lg={'auto'}
          onClick={() => setModalShow(true)}
        >
          <img src={Object} alt='crear objeto' width={100} height={100} />
        </Col>
        <Col sm={'auto'} md={'auto'} lg={'auto'}>
          <img src={Object1} alt='crear objeto' width={100} height={100} />
        </Col>
        <Col sm={'auto'} md={'auto'} lg={'auto'}>
          <img src={Object2} alt='crear objeto' width={100} height={100} />
        </Col>
        <Col sm={'auto'} md={'auto'} lg={'auto'}>
          <img src={Object3} alt='crear objeto' width={100} height={100} />
        </Col>
        <Col sm={'auto'} md={'auto'} lg={'auto'}>
          <img src={Object4} alt='crear objeto' width={100} height={100} />
        </Col>
        <Col sm={'auto'} md={'auto'} lg={'auto'}>
          <img src={Object5} alt='crear objeto' width={100} height={100} />
        </Col>
        <Col sm={'auto'} md={'auto'} lg={'auto'}>
          <img src={Object6} alt='crear objeto' width={100} height={100} />
        </Col>
        <Col sm={'auto'} md={'auto'} lg={'auto'}>
          <img src={Object7} alt='crear objeto' width={100} height={100} />
        </Col>
        <Col sm={'auto'} md={'auto'} lg={'auto'}>
          <img src={Object8} alt='crear objeto' width={100} height={100} />
        </Col>
      </Row>
      <ObjectModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}
