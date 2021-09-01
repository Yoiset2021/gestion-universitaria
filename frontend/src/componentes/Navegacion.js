import React from 'react'
import { Container, Navbar, NavDropdown, Button } from 'react-bootstrap'

function Navegacion() {

    return (
        <div>
            <Navbar bg="primary">
                <Container >
                    <Navbar.Brand href="/">
                        <strong style={{ color: 'white' }}>Gestion Universitaria</strong>
                    </Navbar.Brand>
                    <Button size="sm" variant="info" className="text-white">
                        <div className="d-flex justify-content-center">
                            <img className="rounded-circle img-thumbnail" src="/svg/file-person.svg" alt="Adicionar" width="32" height="32" />
                            <NavDropdown title="Yoiset" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Cerrar Session</NavDropdown.Item>
                            </NavDropdown>
                        </div>

                    </Button>
                </Container>
            </Navbar>

        </div>

    )
}

export default Navegacion