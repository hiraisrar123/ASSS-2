import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">My App</Navbar.Brand>
        <button className="btn btn-danger">Buy Now</button>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
