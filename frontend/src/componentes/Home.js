import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Card } from 'react-bootstrap'

import { getAllEstudiantes } from '../redux/estudiante/action'
import { getAllGrupos } from '../redux/grupo/action'
import { getAllProfesores } from '../redux/profesor/action'
import { getAllCiudades } from '../redux/ciudad/action'

function Home() {

    const estudiantes = useSelector(state => state.estudiante.data)
    const grupos = useSelector(state => state.grupo.data)
    const ciudades = useSelector(state => state.ciudad.data)
    const profesores = useSelector(state => state.profesor.data)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllEstudiantes())
        dispatch(getAllGrupos())
        dispatch(getAllCiudades())
        dispatch(getAllProfesores())
    }, [dispatch])

    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card className="w-50">
                <Card.Title className="bg-info">
                    <h1 className="text-center text-white"> Bienvenidos a Gestion Universitaria </h1>
                </Card.Title>
                <Card.Body>
                    <div className="fst-italic">
                        Cantidad de estudiantes:
                        <button className="ml-2">
                            {estudiantes.length}
                        </button>
                    </div>
                    <div className="fst-italic">
                        Cantidad de grupos:
                        <button className="ml-2">
                            {grupos.length}
                        </button>
                    </div>
                    <div className="fst-italic">
                        Cantidad de ciudades:
                        <button className="ml-2">
                            {ciudades.length}
                        </button>
                    </div>
                    <div className="fst-italic">
                        Cantidad de profesores:
                        <button className="ml-2">
                            {profesores.length}
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Home