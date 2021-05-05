import { Navbar, NavDropdown, Nav, Button, Container } from 'react-bootstrap';

import styles from './Navibar.module.css';

const NaviBar = () => {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container className={styles.container}>
        <Navbar.Brand href="#home">
          <img
            src="images/logo.jpg"
            className="d-inline-block align-top"
            alt="logo"
            width="180px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="tenders" className={styles.link}>
              Home
            </Nav.Link>
            <Nav.Link href="#PROFILE" className={styles.link}>
              Stocks
            </Nav.Link>
            <Nav.Link href="#SUBSCRIBE" className={styles.link}>
              Quote
            </Nav.Link>
            <Nav.Link href="#SUBSCRIBE" className={styles.link}>
              Price History
            </Nav.Link>
            {/* <NavDropdown
              title="MY TENDERS"
              id="basic-nav-dropdown"
              className={styles.link}
            >
              <NavDropdown.Item href="my/tenders">
                MANAGE TENDER
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">NEW TENDER</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Button href="#SIGNIN" variant="outline-success">
            Sign In
          </Button>
          <Button href="#SIGNUP">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NaviBar;
