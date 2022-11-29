import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"



interface IMyNavbar { }
export const MyNavbar: React.FC<IMyNavbar> = (props) => {
  return <>



    <Navbar bg="light" expand="xl">
      <Container>
        <Navbar.Brand href="#home">My Shoppe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">


            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
            <Nav.Link><Link to='/jewlry'>Jewlry</Link></Nav.Link>



            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Themes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Feedback</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Website Details
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
}