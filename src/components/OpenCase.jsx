import { Button, Col, Container, Row } from 'react-bootstrap';
import Summary from '../assets/summary.svg';
import Case1 from '../assets/case1.svg';
import RareItem from '../assets/rare-item.png';
import { useState } from 'react';
import { SummaryModal } from './SummaryModal';
import { OpenningCase } from './OpenningCase';
import { useCases } from '../hooks/useCases';

export function OpenCase() {
  const [modalShow, setModalShow] = useState(false);
  const [openningCase, setOpenningCase] = useState(false);
  const paths = window.location.href.split('/');

  const { filteredCase } = useCases(paths[paths.length - 1]);


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
      {filteredCase && (
        <Row className='justify-content-center'>
          <Col sm={'auto'} md={'auto'} lg={'auto'}>
            <Row>
              <Col>
                <h5 className='text-white text-center'>
                  {filteredCase.nombre}
                </h5>
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
          <Col
            sm={12}
            md={12}
            lg={12}
            className='d-flex justify-content-center'
          >
            <Button variant='success' onClick={openCase}>
              {`Abrir por L ${filteredCase.precio}`}
            </Button>
          </Col>
        </Row>
      )}
      {!openningCase && filteredCase && (
        <Row
          className='justify-content-center mx-4 mt-3 p-2'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}
        >
          <Col sm={12} md={12} lg={12}>
            <h4 className='text-white'>Contenido de la caja</h4>
          </Col>
          {filteredCase.objetos.map((casse) => (
            <Col
              key={casse.nombre}
              className='d-flex flex-column align-items-center text-white'
              sm={3}
              md={3}
              lg={3}
            >
              <img src={RareItem} alt='crear objeto' width={100} height={100} />
              <p className='p-0'>{casse.nombre}</p>
              <p className='p-0'>{casse.precio}</p>
              <p className='p-0'>{casse.probablidad}</p>
            </Col>
          ))}
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
