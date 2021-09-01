import React from 'react'
import { Container, Button } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'

function ActionsTablas(props) {

    const { onModalEdit, onDelete } = props

    return (
        <Container>
            <div className="d-flex justify-content-center">
                <Button
                    variant="primary"
                    className="mr-2 rounded-circle border-dark"
                    onClick={() => onModalEdit(props.data)}
                    data-tip="Editar"
                >
                    <img src="/svg/edit.svg" alt="edit" width="16" height="16" />
                </Button>
                <ReactTooltip />
                <Button
                    variant="danger"
                    className="rounded-circle border-dark"
                    onClick={() => onDelete(props.data)}
                    data-tip="Eliminar"
                >
                    <img src="/svg/delete.svg" alt="edit" width="16" height="16" />
                </Button>
                <ReactTooltip />
            </div>
        </Container>
    )
}

export default ActionsTablas
