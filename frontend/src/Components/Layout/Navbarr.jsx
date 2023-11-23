import axios from 'axios';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';

function Navbarr() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    await axios.get('/api/auth/logout');
    window.location.reload(); // Refresh the page
    window.location.href = '/'; // Redirect to the index page
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">

        {/* Regular Navbar with Dropdown for medium to large screens */}
        <Navbar expand="lg" className="bg-body-tertiary mb-1">
          <Container fluid>
            <Navbar.Brand href="/">TOURISM</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavDropdown" />
            <Navbar.Collapse id="navbarNavDropdown" className="justify-content-center">
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
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <div className="flex items-center gap-4 px-4 text-gray-600">

              <Link to="/"> Home</Link>
              <Link to="/Tours"> Tours</Link>
                </div>

                {!user ?
                  <Nav.Link href="/sign-in">Sign in</Nav.Link>
                  : (
                    
                    <NavDropdown title="Profile" id="navbarNavDropdown">
                      <div className="flex flex-col px-3 gap-2">
                      <Link to="/account"> Account</Link>
                    
                      <Link to="/profile"> Profile</Link>

                      <Link to="/posttour"> Post A Tour</Link>


                    </div>
                      
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  )
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Off-canvas Navbar for small screens */}
        <Offcanvas
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="d-lg-none"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {!user ?
                <Nav.Link href="/sign-in">Sign in</Nav.Link>
                : (
                  <>
                    <Nav.Link href="/account">Account</Nav.Link>
                    <Nav.Link href="/posttour">Post a Tour</Nav.Link>
                    <Nav.Item onClick={handleLogout}>Logout</Nav.Item>
                  </>
                )
              }
            </Nav>
            <Form className="d-flex mt-2">
              <Form.Control
                type="search"
                placeholder="Search"
                className="mt-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Navbarr;
