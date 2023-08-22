/* eslint-disable react/prop-types */
import { Button, Form, Modal } from 'react-bootstrap';
import Cart from '../assets/cart.svg';
import { useState } from 'react';

export function ObjectModal(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [probability, setProbability] = useState(0);
  const [selectedPhoto, setPhoto] = useState('');

  const photos = [
    {
      label: 'Apple Watch',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLT3ref_VW_34FR+watch-44-alum-midnight-nc-se_VW_34FR_WF_CO?wid=2000&hei=2000&fmt=png-alpha&.v=1683237043713',
    },
    {
      label: 'Iphone 14',
      imageUrl:
        'https://www.optimum.com/mobile/sites/default/files/product/apple-iphone14promax-deeppurple-side.png',
    },
    {
      label: 'Billetera',
      imageUrl:
        'https://piet.com.ar/wp-content/uploads/PIET-Billetera-Euro-3.0-03.jpg',
    },
    {
      label: 'L 200',
      imageUrl:
        'https://eandinoscom.files.wordpress.com/2021/09/e7871-img_5916.jpg',
    },
    {
      label: 'Polo',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0438/9561/9735/products/30065292001copia_180x@2x.jpg?v=1652721147',
    },
    {
      label: 'Gorra',
      imageUrl:
        'https://caterpillarhn.com/cdn/shop/products/cat_0020_4090002_Marshland_10959_1024x1024.jpg?v=1671665123',
    },
  ];
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePriceChange(e) {
    setPrice(e.target.value);
  }

  function handleProbabilityChange(e) {
    setProbability(e.target.value);
  }

  function selectPicture(id) {
    setPhoto(id);
  }

  function handleSubmit() {
    if (
      name.trim() == '' ||
      price == 0 ||
      probability == 0 ||
      selectedPhoto == ''
    ) {
      window.alert(
        'Debe llenar el nombre, precio, foto y probabilidad del objeto'
      );
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
      imagen: selectedPhoto,
    });

    props.onHide();
    setName('');
    setPrice(0);
    setProbability(0);
    setPhoto('');
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
          <Form.Group controlId='photoSelect'>
            <Form.Label>Selecciona una foto:</Form.Label>
            <div className='photo-select d-flex justify-content-between'>
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`photo-option d-flex flex-column text-center ${
                    photo.imageUrl == selectedPhoto ? 'activePhoto' : ''
                  }`}
                  onClick={() => {
                    selectPicture(photo.imageUrl);
                  }}
                >
                  <img
                    src={photo.imageUrl}
                    alt={photo.label}
                    width={'100px'}
                    height={'100px'}
                  />
                  <span>{photo.label}</span>
                </div>
              ))}
            </div>
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
