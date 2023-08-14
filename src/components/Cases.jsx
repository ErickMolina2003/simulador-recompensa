import { Container, Form, Navbar, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './cases.css';
import Case1 from '../assets/case1.svg';
import Case2 from '../assets/case2.svg';
import Case3 from '../assets/case3.svg';
import Case4 from '../assets/case4.svg';
import Case5 from '../assets/case5.svg';

export function Cases() {
  const navigate = useNavigate();

  function openCase() {
    navigate('/abrir-caja');
  }

  return (
    <Container fluid className='cases-container'>
      <Navbar>
        <Container>
          <Navbar.Brand className='text-white' href='#home'>
            TODAS LAS CAJAS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll' className='justify-content-end'>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Buscar'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        <Col sm={3} md={3} lg={3} onClick={openCase} role="button">
          <Row>
            <Col
              sm={12}
              md={12}
              lg={12}
              className='d-flex justify-content-center px-0'
            >
              <img src={Case1} alt='Caja' width={150} height={150} />
            </Col>
            <Col sm={12} md={12} lg={12}>
              <h5 className='text-white text-center px-0'>Caja1</h5>
            </Col>
          </Row>
        </Col>
        <Col sm={3} md={3} lg={3} onClick={openCase} role="button">
          <Row>
            <Col
              sm={12}
              md={12}
              lg={12}
              className='d-flex justify-content-center px-0'
            >
              <img src={Case2} alt='Caja' width={150} height={150} />
            </Col>
            <Col sm={12} md={12} lg={12}>
              <h5 className='text-white text-center px-0'>Caja1</h5>
            </Col>
          </Row>
        </Col>
        <Col sm={3} md={3} lg={3} onClick={openCase} role="button">
          <Row>
            <Col
              sm={12}
              md={12}
              lg={12}
              className='d-flex justify-content-center px-0'
            >
              <img src={Case3} alt='Caja' width={150} height={150} />
            </Col>
            <Col sm={12} md={12} lg={12}>
              <h5 className='text-white text-center px-0'>Caja1</h5>
            </Col>
          </Row>
        </Col>
        <Col sm={3} md={3} lg={3} onClick={openCase} role="button">
          <Row>
            <Col
              sm={12}
              md={12}
              lg={12}
              className='d-flex justify-content-center px-0'
            >
              <img src={Case4} alt='Caja' width={150} height={150} />
            </Col>
            <Col sm={12} md={12} lg={12}>
              <h5 className='text-white text-center px-0'>Caja1</h5>
            </Col>
          </Row>
        </Col>
        <Col sm={3} md={3} lg={3} onClick={openCase} role="button">
          <Row>
            <Col
              sm={12}
              md={12}
              lg={12}
              className='d-flex justify-content-center px-0'
            >
              <img src={Case5} alt='Caja' width={150} height={150} />
            </Col>
            <Col sm={12} md={12} lg={12}>
              <h5 className='text-white text-center px-0'>Caja1</h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
