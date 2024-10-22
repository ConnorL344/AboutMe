import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BasicNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container className='d-flex align-items-center justify-content-center'>
        <h1 >Connor Laverty</h1>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;