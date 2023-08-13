/* eslint-disable react/prop-types */
import { Button, Form, Modal } from 'react-bootstrap';
import Cart from '../assets/cart.svg';

export function ObjectModal(props) {
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
            <Form.Control type='text' placeholder='Reloj' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Precio</Form.Label>
            <Form.Control type='text' placeholder='3000' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Probabilidad de ocurrencia</Form.Label>
            <Form.Control type='text' placeholder='2%' />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>
          Cerrar
        </Button>
        <Button onClick={props.onHide} variant='success' type='submit'>
          Crear
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
