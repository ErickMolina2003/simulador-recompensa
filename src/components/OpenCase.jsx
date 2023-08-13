import { Button, Col, Container, Row } from 'react-bootstrap';
import Summary from '../assets/summary.svg';
import Case1 from '../assets/case1.svg';
import Object1 from '../assets/object1.svg';
import Object2 from '../assets/object2.svg';
import Object3 from '../assets/object3.svg';
import Object4 from '../assets/object4.svg';
import Object5 from '../assets/object5.svg';
import Object6 from '../assets/object6.svg';
import Object7 from '../assets/object7.svg';
import Object8 from '../assets/object8.svg';
import { useState } from 'react';
import { SummaryModal } from './SummaryModal';
import { OpenningCase } from './OpenningCase';

export function OpenCase() {
  const [modalShow, setModalShow] = useState(false);
  const [openningCase, setOpenningCase] = useState(false);

  function openCase() {
    setOpenningCase(true);
  }

  return (
    <Container fluid className='cases-container'>
      <Row className='my-3'>
        <Col
          role='button'
          sm={12}
          md={12}
          lg={12}
          className='d-flex'
          onClick={() => setModalShow(true)}
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
      <Row className='justify-content-center'>
        <Col sm={'auto'} md={'auto'} lg={'auto'}>
          <Row>
            <Col>
              <h5 className='text-white text-center'>Cosas Varias</h5>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={12}
              className='d-flex justify-content-center px-0'
            >
              <img src={Case1} alt='Caja' width={150} height={150} />
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={12} lg={12} className='d-flex justify-content-center'>
          <Button variant='success' onClick={openCase}>
            Abrir por L 800
          </Button>
        </Col>
      </Row>
      {!openningCase && (
        <Row
          className='justify-content-center mx-4 mt-3 p-2'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}
        >
          <Col sm={12} md={12} lg={12}>
            <h4 className='text-white'>Contenido de la caja</h4>
          </Col>
          <Col className='d-flex justify-content-center' sm={3} md={3} lg={3}>
            <img src={Object1} alt='crear objeto' width={100} height={100} />
          </Col>
          <Col className='d-flex justify-content-center' sm={3} md={3} lg={3}>
            <img src={Object2} alt='crear objeto' width={100} height={100} />
          </Col>
          <Col className='d-flex justify-content-center' sm={3} md={3} lg={3}>
            <img src={Object3} alt='crear objeto' width={100} height={100} />
          </Col>
          <Col className='d-flex justify-content-center' sm={3} md={3} lg={3}>
            <img src={Object4} alt='crear objeto' width={100} height={100} />
          </Col>
          <Col className='d-flex justify-content-center' sm={3} md={3} lg={3}>
            <img src={Object5} alt='crear objeto' width={100} height={100} />
          </Col>
          <Col className='d-flex justify-content-center' sm={3} md={3} lg={3}>
            <img src={Object6} alt='crear objeto' width={100} height={100} />
          </Col>
          <Col className='d-flex justify-content-center' sm={3} md={3} lg={3}>
            <img src={Object7} alt='crear objeto' width={100} height={100} />
          </Col>
          <Col className='d-flex justify-content-center' sm={3} md={3} lg={3}>
            <img src={Object8} alt='crear objeto' width={100} height={100} />
          </Col>
        </Row>
      )}
      {openningCase && (
        <Row className='justify-content-center mt-4'>
          <Col sm={'auto'} md={'auto'} lg={'auto'}>
            <OpenningCase />
          </Col>
        </Row>
      )}
      <SummaryModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}
