import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-black fixed-top w-100"
    >
      <Container fluid className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#" className="text-white">
          My App
        </Navbar.Brand>

        {/* BUTTON ALWAYS VISIBLE */}
        <button className="btn light-green-btn">
          Buy Now
        </button>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
