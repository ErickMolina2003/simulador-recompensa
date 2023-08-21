/* eslint-disable react/prop-types */
import { Button, Form, Modal } from 'react-bootstrap';
import Cart from '../assets/cart.svg';
import { useState } from 'react';

export function ObjectModal(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [probability, setProbability] = useState(0);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePriceChange(e) {
    setPrice(e.target.value);
  }

  function handleProbabilityChange(e) {
    setProbability(e.target.value);
  }

  function handleSubmit() {
    if (name.trim() == '' || price == 0 || probability == 0) {
      window.alert('Debe llenar el nombre, precio y probabilidad del objeto');
      return;
    }

    if (probability < 0 || probability > 100) {
      window.alert('La probabilidad debe estar entre 0 y 100');
      return;
    }

    let probabilitySum = 0;
    props.allObjects.forEach((object) => {
      probabilitySum += +object.probabilidad;
    });

    if (probabilitySum + +probability > 100) {
      window.alert('La suma de los objetos debe ser mayor o igual a 100');
      return;
    }

    props.onCreatedObject({
      nombre: name,
      precio: price,
      probabilidad: probability,
    });

    props.onHide();
    setName('');
    setPrice(0);
    setProbability(0);
  }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <img
            src={Cart}
            alt='carrito'
            width={30}
            height={30}
            className='me-2'
          />
          Crear Objeto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Reloj'
              onChange={handleNameChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type='number'
              placeholder='3000'
              onChange={handlePriceChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Probabilidad de ocurrencia</Form.Label>
            <Form.Control
              type='number'
              placeholder='2%'
              onChange={handleProbabilityChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Cerrar
        </Button>
        <Button variant='success' type='submit' onClick={handleSubmit}>
          Crear
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
