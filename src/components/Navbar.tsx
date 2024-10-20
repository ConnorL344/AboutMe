import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark"> 
      <Container>
        <Navbar.Brand href="#home">Connor Laverty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Work</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;