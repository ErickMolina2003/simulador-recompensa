import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import BoxLogo from '../assets/case.svg';
import Objectt from '../assets/object.svg';
import RareItem from '../assets/rare-item.png';
import { useState } from 'react';
import { ObjectModal } from './ObjectModal';
import { useNavigate } from 'react-router-dom';
import { createNewCase } from '../services/cases';

export function CreateCase() {
  const [modalShow, setModalShow] = useState(false);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [objetos, setObjetos] = useState([]);

  const navigate = useNavigate();

  function handleNombreChange(e) {
    setNombre(e.target.value);
  }

  function handlePrecioChange(e) {
    setPrecio(e.target.value);
  }

  function createCase() {
    if (nombre.trim() == '' || precio.trim() == '' || objetos.length == 0) {
      alert(
        'El nombre o precio no pueden estar vacios y debe de agregar objetos a su caja'
      );
      return;
    }

    createNewCase(nombre, precio, objetos);
    setNombre('');
    setPrecio('');
    navigate('/');
  }

  function handleObjectCreated(newObject) {
    const objects = [...objetos, newObject];
    setObjetos(objects);
  }

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
              <Form.Control
                type='text'
                placeholder='Cosas varias'
                value={nombre}
                onChange={handleNombreChange}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label className='text-white'>Precio</Form.Label>
              <Form.Control
                type='number'
                placeholder='L 500'
                value={precio}
                onChange={handlePrecioChange}
              />
            </Form.Group>

            <Button variant='success' onClick={createCase}>
              Crear
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className='mx-2 mt-3' style={{ border: '1px solid white' }}>
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
          <img src={Objectt} alt='crear objeto' width={100} height={100} />
        </Col>
        {objetos &&
          objetos.map((objeto) => (
            <Col
              className='d-flex flex-column align-items-center'
              key={objeto.nombre}
              sm={'auto'}
              md={'auto'}
              lg={'auto'}
            >
              <img
                src={objeto.imagen}
                alt='crear objeto'
                width={100}
                height={100}
              />
              <p className='text-center text-white'>
                {`${objeto.nombre} L ${objeto.precio}`}
              </p>
              <p className='text-center text-white'>
                {`${objeto.probabilidad} %`}
              </p>
            </Col>
          ))}
      </Row>
      <ObjectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        allObjects={objetos}
        onCreatedObject={handleObjectCreated}
      />
    </Container>
  );
}
