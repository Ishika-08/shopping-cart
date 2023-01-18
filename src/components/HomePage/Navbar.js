import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./main.css"

export default function Main(){
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
      <Navbar.Brand className="Navbar-brand" as={Link} to="/">Shopping</Navbar.Brand>
        <div className="links justify-content-end">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}

