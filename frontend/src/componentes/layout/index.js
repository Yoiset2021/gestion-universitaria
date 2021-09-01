import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import SiderBar from '../SiderBar'
import Navegacion from '../Navegacion'

function Layout(props) {
    return (
        <>
            <SiderBar />
            <Navegacion />
            <Container>
                <Row>
                    <Col>
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Layout
