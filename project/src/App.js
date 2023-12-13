import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import "./App.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
    return (
        <React.Fragment>
            <div className='App'>


                {/* Navbar */}


            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <h1>Contact Us</h1>

      {/* Cards */}

      <div className='card-div'>    
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>BMW</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Latest version</Card.Subtitle>
        <Card.Text>
        BMW cars in India are expected to launch i5 (Rs. 1.00 Crore), 5 Series 2024 (Rs. 70.00 Lakh) and M3 (Rs. 65.00 Lakh) in the year 2023-2024 .
        </Card.Text>
        <Card.Link href="#">BMW</Card.Link>
        <Card.Link href="#">BMW</Card.Link>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Porsche</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Latest version</Card.Subtitle>
        <Card.Text>
        The Porsche Cayenne has been given a comprehensive update for 2023, with new styling, engines and interior
         options making an appearance. Design wide, you still have the option of SUV and coupe body styles, and you get tweaked bumpers and lights.
        </Card.Text>
        <Card.Link href="#">Porsche</Card.Link>
        <Card.Link href="#">Porsche</Card.Link>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Ferrari</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Latest version</Card.Subtitle>
        <Card.Text>
        Current Ferrari Models
2023 Ferrari Model List & Pricing. 2023 Ferrari 812 GTS (Starts at $429,815 ) 2023 Ferrari 296 GTB (Starts at $338,255) 2023 Ferrari 296 GTS (Starts at $367,189) 2023 Ferrari SF90 Stradale 
(Starts at $524,815)...
2023 Ferrari Models. The Current Ferrari Cars for Enthusiasts.
        </Card.Text>
        <Card.Link href="#">Ferrari</Card.Link>
        <Card.Link href="#">Ferrari</Card.Link>
      </Card.Body>
    </Card>
    </div>

     {/* Form */}

     
    <div className='form-div'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
            </div>
        </React.Fragment>
    )
}

export default App;


