import React from 'react'
import { Container, Button } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'

function ActionShow(props) {

    return (
        <Container>
            <div className="d-flex justify-content-center">
                <Button
                    variant="outline-info"
                >
                    <a
                        className="text-decoration-none"
                        href={"/grupos/" + props.data._id + "/estudiantes"}
                        data-tip="Mostrar estudiantes"
                    >
                        Ver Estudiantes
                    </a>
                    <ReactTooltip />
                </Button>
            </div>
        </Container>
    )
}

export default ActionShow
