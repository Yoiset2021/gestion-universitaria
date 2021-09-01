import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Card } from 'react-bootstrap'

import { getAllEstudiantes } from '../redux/estudiante/action'
import { getAllGrupos } from '../redux/grupo/action'

function Home() {

    const estudiantes = useSelector(state => state.estudiante.data)
    const grupos = useSelector(state => state.grupo.data)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllEstudiantes())
        dispatch(getAllGrupos())
    }, [dispatch])

    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card className="w-50">
                <Card.Title className="bg-info">
                    <h1 className="text-center text-white"> Bienvenidos a Gestion Universitaria </h1>
                </Card.Title>
                <Card.Body>
                    <div>
                        Cantidad de estudiantes: {estudiantes.length}
                    </div>
                    <div>
                        Cantidad de grupos: {grupos.length}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Home