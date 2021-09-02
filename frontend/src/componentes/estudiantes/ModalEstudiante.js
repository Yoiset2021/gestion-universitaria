import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ReactDOM from 'react-dom'
import { Container, Card, Button, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

import MensajeError from '../MensajeError'
import useEstudiantes from '../estudiantes/useEstudiantes'
import { cleanError } from '../../redux/estudiante/action'

export default function ModalEstudiante(props) {

    const {
        handleSubmit,
        errors,
        errorServer,
        ciudades,
        grupos,
        status,
        notify
    } = useEstudiantes()

    const dispatch = useDispatch()

    const [state, setState] = useState({
        nombre: props.nombre || '',
        edad: props.edad || '',
        sexo: props.sexo || '',
        fechaNacimiento: props.fechaNacimiento || '',
        email: props.email || '',
        grupo: props.grupo || '',
        ciudad: props.ciudad || ''
    })

    useEffect(() => {
        if (status === 'success') {
            if (!props.estud_id) {
                setState({
                    nombre: '',
                    edad: '',
                    sexo: '',
                    fechaNacimiento: '',
                    email: '',
                    grupo: '',
                    ciudad: ''
                })
                notify('creado')
            }
            else {
                notify('actualizado')
                props.onClose()
            }
            dispatch(cleanError())
        }
    }, [dispatch, status])

    const handleChange = e => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = e => {
        e.preventDefault()
        const { nombre, edad, sexo, fechaNacimiento, email, grupo, ciudad } = state
        const { estud_id } = props
        const grupo_request = grupos.find(g => g._id === grupo)
        const ciudad_request = ciudades.find(c => c._id === ciudad)
        const estudiante_request = {
            nombre,
            edad,
            sexo,
            fechaNacimiento,
            email,
            grupo: grupo ? grupo_request : '',
            ciudad: ciudad ? ciudad_request : ''
        }
        if (estud_id) {
            estudiante_request._id = estud_id
        }
        handleSubmit(estudiante_request)
    }

    const { nombre, edad, sexo, fechaNacimiento, email, grupo, ciudad } = state
    const { onClose, submitText } = props

    return ReactDOM.createPortal(
        <div className="modalContainer">
            <div className="modalBox">
                <Container style={{ overflowY: 'auto' }}>
                    <Card className="mt-5">
                        <Card.Header className="bg-primary">
                            <Card.Title className="display-6 text-white text-center">
                                {submitText} Estudiante
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Container>
                                    <Form.Group className="mb-1">
                                        <Form.Label> Nombre </Form.Label>
                                        <Form.Control size="sm" className="border-primary" onChange={handleChange} type="text" name="nombre" value={nombre} />
                                        {errors && errors.nombre && <MensajeError text={errors.nombre} />}
                                    </Form.Group>
                                    <Form.Group className="mb-1">
                                        <Form.Label> Edad </Form.Label>
                                        <Form.Control size="sm" className="border-primary" onChange={handleChange} type="number" name="edad" value={edad} />
                                        {errors && errors.edad && !errors.nombre && <MensajeError text={errors.edad} />}
                                    </Form.Group>
                                    <Form.Group className="mb-1">
                                        <Form.Label> Sexo </Form.Label>
                                        <select onChange={handleChange} name="sexo" value={sexo} className="form-control border-primary">
                                            <option> *** Seleccione un Sexo *** </option>
                                            <option value="Masculino"> Masculino </option>
                                            <option value="Femenino"> Femenino </option>
                                        </select>
                                        {errors && errors.sexo && !errors.edad && <MensajeError text={errors.sexo} />}
                                    </Form.Group>
                                    <Form.Group className="mb-1">
                                        <Form.Label> Fecha de Nacimiento </Form.Label>
                                        <Form.Control size="sm" className="border-primary" onChange={handleChange} type="date" name="fechaNacimiento" value={fechaNacimiento} />
                                        {errors && errors.fechaNacimiento && !errors.sexo && <MensajeError text={errors.fechaNacimiento} />}
                                        {errorServer && errorServer.fecha_server && !errors.fechaNacimiento && <MensajeError text={errorServer.fecha_server} />}
                                    </Form.Group>
                                    <Form.Group className="mb-1">
                                        <Form.Label> Email </Form.Label>
                                        <Form.Control size="sm" className="border-primary" onChange={handleChange} type="text" name="email" value={email} />
                                        {errors && errors.email && !errors.fechaNacimiento && <MensajeError text={errors.email} />}
                                        {errorServer && errorServer.correo && !errors.email && <MensajeError text={errorServer.correo} />}
                                    </Form.Group>
                                    <Form.Group className="mb-1">
                                        <Form.Label> Grupo </Form.Label>
                                        <select onChange={handleChange} name="grupo" value={grupo} className="form-control border-primary">
                                            <option value={0}> *** Seleccione un Grupo *** </option>
                                            {grupos.map(g => (
                                                <option key={g._id} value={g._id}> {g.nombre} </option>
                                            ))
                                            }
                                        </select>
                                        {errors && errors.grupo && !errors.email && !errors.correo && <MensajeError text={errors.grupo} />}
                                        {errorServer && errorServer.grupo_server && !errors.grupo && <MensajeError text={errorServer.grupo_server} />}
                                    </Form.Group>
                                    <Form.Group className="mb-1">
                                        <Form.Label> Ciudad </Form.Label>
                                        <select onChange={handleChange} name="ciudad" value={ciudad} className="form-control border-primary">
                                            <option value={0}> *** Seleccione una Ciudad ***</option>
                                            {ciudades.map(c => (
                                                <option key={c._id} value={c._id}> {c.nombre}  </option>
                                            ))
                                            }
                                        </select>
                                        {errors && errors.ciudad && !errors.grupo && <MensajeError text={errors.ciudad} />}
                                        {errorServer && errorServer.ciudad_server && !errors.ciudad && <MensajeError text={errorServer.ciudad_server} />}
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
        </div>, document.getElementById('modal'))
}

ModalEstudiante.propTypes = {
    onClose: PropTypes.func.isRequired,
    submitText: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    sexo: PropTypes.string.isRequired,
    fechaNacimiento: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    ciudad: PropTypes.object,
    grupo: PropTypes.object,
    estud_id: PropTypes.string
}