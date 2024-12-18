import { Spinner, Container } from 'react-bootstrap';

const LoadingSpinner = () => (
  <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
    <Spinner animation="border" role="status" variant="primary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </Container>
);

export default LoadingSpinner;
