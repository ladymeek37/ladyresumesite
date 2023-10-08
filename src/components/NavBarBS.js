import {Navbar, Nav, Container} from "react-bootstrap"
import "./customNav.scss"

export const NavBarBootstrap = () => {

    return (
        <>
        <Navbar bg="light" data-bs-theme="light" className="navbar" sticky="top">
            <Container>
            <Navbar.Brand href="/" className="navbar-title lady">Lady Meek </Navbar.Brand>
            <Navbar.Brand href="/" className="navbar-title">Website Development</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    )
};
