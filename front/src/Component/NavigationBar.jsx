import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="#home">E-book Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">          
            <Nav.Link href="/homepage">Home</Nav.Link>   
            <Nav.Link href="/specialOffer">Books Suggestion</Nav.Link>         
            <NavDropdown title="Categories" id="basic-nav-dropdown">
          <NavDropdown.Item href="/categoryWiseBook/Auto Biography">Auto Biography</NavDropdown.Item>
          <NavDropdown.Item href="/categoryWiseBook/Comics">Comics</NavDropdown.Item>
          <NavDropdown.Item href="/categoryWiseBook/Programming">Programming</NavDropdown.Item>
          <NavDropdown.Item href="/categoryWiseBook/History">History</NavDropdown.Item>
          <NavDropdown.Item href="/categoryWiseBook/Thriller">Thriller</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/categoryWiseBook/bestSeller">Best Seller Books</Nav.Link>
        <Nav.Link href="/about-us">About Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/register">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  );
}
