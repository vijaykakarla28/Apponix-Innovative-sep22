import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap"



interface IMyNavbar{}
export const MyNavbar:React.FC<IMyNavbar>=(props)=>{
    return <>
     

    <Navbar bg="danger" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">MY SHOPPE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Feedback</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Report
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Website
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
}