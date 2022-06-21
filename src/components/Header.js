import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className="Header">
            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Jarvisa</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="/dashboard">
                                    Dashboard
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/merchant">
                                    Merchant Offers
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/payment">
                                    Add Payment
                                </Link>
                            </Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

            <>
            <Navbar key="sm" expanded={expanded} expand="md" className="mb-3" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand>JarVISA</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} aria-controls="offcanvasNavbar-expand-sm" />
                <Navbar.Offcanvas
                id="offcanvasNavbar-expand-sm"
                aria-labelledby="offcanvasNavbarLabel-expand-sm"
                placement="end"
                >
                <Offcanvas.Header closeButton onClick={() => setExpanded(expanded ? false : true)}>
                    <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                    Offcanvas
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link>
                                <Link to="/dashboard" onClick={() => setExpanded(false)}>
                                    Dashboard
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/offers" onClick={() => setExpanded(false)}>
                                    Merchant Offers
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/payment" onClick={() => setExpanded(false)}>
                                    Add Payment
                                </Link>
                            </Nav.Link>
                        <NavDropdown
                            title="Dropdown"
                            id="offcanvasNavbarDropdown-expand-sm"
                        >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                            Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
            </>
        </div>
    )
}

export default Header;