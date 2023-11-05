import { Container, Nav, NavItem, Navbar } from "reactstrap"


function NavbarComponent() {
  return (
 <>
      {/* Top Navbar */}
      <Navbar color="dark" dark expand="md">
        <Container>
          <Nav navbar>
            <NavItem>
              <a className="nav-link" href="/">Home</a>
            </NavItem>
            <NavItem>
              <a className="nav-link" href="/about">About</a>
            </NavItem>
            <NavItem>
              <a className="nav-link" href="/contact">Contact</a>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
 
 </>
  )
}

export default NavbarComponent