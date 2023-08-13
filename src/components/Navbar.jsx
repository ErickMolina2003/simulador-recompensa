import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CaseLogo from '../assets/logo.svg';
import StadisticsLogo from '../assets/stadistics.svg';
import BoxLogo from '../assets/case.svg';
import InfoLogo from '../assets/info.svg';

export function NavBar() {
  return (
    <Navbar expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#home'>
          <img src={CaseLogo} width={200} alt='Simulador de Recompensa'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll' className='justify-content-end'>
          <Nav style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href='#action1'>
              <img src={BoxLogo} alt='caja' width={30} height={15} />
              Cajas
            </Nav.Link>
            <Nav.Link href='#action1'>
              <img src={BoxLogo} alt='caja' width={30} height={15} />
              Crear caja
            </Nav.Link>
            <Nav.Link href='#action1'>
              <img
                src={StadisticsLogo}
                alt='estadisticas'
                width={30}
                height={15}
              />
              Estadística
            </Nav.Link>
            <Nav.Link href='#action1'>
              <img src={InfoLogo} alt='funcionamiento' width={30} height={15} />
              Cómo funciona
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
