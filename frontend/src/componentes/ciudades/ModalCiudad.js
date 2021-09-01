import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ReactDOM from 'react-dom'
import { Container, Card, Button, Form } from 'react-bootstrap'

import MensajeError from '../MensajeError'
import hook from '../ciudades/useCiudades'
import { cleanError } from '../../redux/ciudad/action'

function ModalCiudad({ submitText, onClose }) {

    const {
        handleSubmit,
        errors,
        notify,
        status
    } = hook.useCiudades()

    const dispatch = useDispatch()

    const [state, setState] = useState({
        nombre: ''
    })

    useEffect(() => {
        if (status === 'success') {
            setState({
                nombre: ''
            })
            notify('creado')
            dispatch(cleanError())
        }
    }, [dispatch, status])

    const handleChange = e => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = e => {
        e.preventDefault()
        const { nombre } = state
        const ciudad = {
            nombre
        }
        handleSubmit(ciudad)
    }

    const { nombre } = state

    return ReactDOM.createPortal(
        <div className="modalContainer">
            <div className="modalBox">
                <Container>
                    <Card className="mt-5">
                        <Card.Header className="bg-primary">
                            <Card.Title className="display-6 text-white text-center">
                                {submitText} Ciudad
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Container>
                                    <Form.Group className="mb-1">
                                        {errors && errors.nombre && <MensajeError text={errors.nombre} />}
                                        <Form.Label> Nombre </Form.Label>
                                        <Form.Control size="sm" className="border-primary" onChange={handleChange} type="text" name="nombre" value={nombre} />
                                    </Form.Group>
                                    <div className="modal-footer">
                                        <Button variant="primary" type="submit">
                                            {submitText}
                                        </Button>
                                        <Button onClick={onClose} variant="outline-primary" type="submit" >
                                            Cancelar
                                        </Button>
                                    </div>
                                </Container>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </div>, document.getElementById('modal'));
}

export default ModalCiudad;