import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from './logo.png'
import {Link} from "react-router-dom"


function NavBar() {
  return (
    <Navbar className="NavBar" collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Link to="/"><img className='ImgLogo' src={img} alt="logo" /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto letter" activeKey="/home">
            <Link className="NavBar" to="/">Inicio</Link>
            <Link className="NavBar" to="/about">Nosotros</Link>
            <Link className="NavBar" to="/contact">Contacto</Link>
            <Link className="NavBar" to="/category/men's clothing">Ropa de Hombre</Link>
            <Link className="NavBar" to="/category/women's clothing">Ropa de Mujer</Link>
            <Link className="NavBar" to="/category/jewelery">Joyeria</Link>
            <Link className="NavBar" to="/category/electronics">Electronica</Link>
            <Nav.Link href="#"><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;