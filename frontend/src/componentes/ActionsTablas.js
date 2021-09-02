import React from 'react'
import { Container, Button } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'

function ActionsTablas(props) {

    const { onModalEditOpen, onDelete } = props

    return (
        <Container>
            <div className="d-flex justify-content-center">
                <Button
                    variant="primary"
                    className="mr-2 rounded-circle border-dark"
                    onClick={() => onModalEditOpen(props.data)}
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

ActionsTablas.propTypes = {
    onModalEditOpen: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ActionsTablas
