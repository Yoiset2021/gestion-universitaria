import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ReactDOM from 'react-dom'
import { Container, Card, Button, Form } from 'react-bootstrap'

import MensajeError from '../MensajeError'
import useGrupos from '../grupos/useGrupos'
import { cleanError } from '../../redux/grupo/action'

function ModalGrupo(props) {

    const {
        handleSubmit,
        errors,
        errorServer,
        profesores,
        status,
        notify
    } = useGrupos()

    const dispatch = useDispatch()

    const [state, setState] = useState({
        nombre: props.nombre || '',
        profesorGuia: props.profesorGuia || ''
    })

    useEffect(() => {
        if (status === 'success') {
            if (!props.grup_id) {
                setState({
                    nombre: '',
                    profesorGuia: ''
                })
                notify('creado')
            }
            else {
                notify('actualizado')
                props.onClose()
            }
            dispatch(cleanError())
        }
    }, [status])

    const handleChange = e => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = e => {
        e.preventDefault()
        const { nombre, profesorGuia } = state
        const { grup_id } = props
        const profesor_request = profesores.find(g => g._id === profesorGuia)
        const grupo_request = {
            nombre,
            profesorGuia: profesorGuia ? profesor_request : ''
        }
        if (grup_id) {
            grupo_request._id = grup_id
        }
        handleSubmit(grupo_request)
    }

    const { nombre, profesorGuia } = state
    const { onClose, submitText } = props

    return ReactDOM.createPortal(
        <div className="modalContainer">
            <div className="modalBox">
                <Container>
                    <Card className="mt-5">
                        <Card.Header className="bg-primary">
                            <Card.Title className="display-6 text-white text-center">
                                {submitText} Grupo
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Container>
                                    {errors && errors.server && <MensajeError text={errors.server} />}
                                    <Form.Group className="mb-1">
                                        {errors && errors.nombre && <MensajeError text={errors.nombre} />}
                                        {errorServer && errorServer.nombre_server && !errors.nombre && <MensajeError text={errorServer.nombre_server} />}
                                        <Form.Label> Nombre </Form.Label>
                                        <Form.Control size="sm" className="border-primary" onChange={handleChange} type="text" name="nombre" value={nombre} />
                                    </Form.Group>
                                    <Form.Group className="mb-1">
                                        {errors && errors.profesor && !errors.nombre && <MensajeError text={errors.profesor} />}
                                        {errorServer && errorServer.profesor_server && !errors.profesor && <MensajeError text={errorServer.profesor_server} />}
                                        <Form.Label> Profesor Guia </Form.Label>
                                        <select onChange={handleChange} name="profesorGuia" value={profesorGuia} className="form-control border-primary">
                                            <option value={0}> *** Seleccione un Profesor *** </option>
                                            {profesores.map(p => (
                                                <option key={p._id} value={p._id}> {p.nombre} </option>
                                            ))
                                            }
                                        </select>
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

export default ModalGrupo;