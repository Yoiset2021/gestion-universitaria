import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import NoResultados from '../NoResultados'
import useGrupos from './useGrupos'

function EstudiantesPorGrupo() {

    const { grupos } = useGrupos()
    let { id } = useParams()

    const [estudiantes, setEstudiantes] = useState([])
    const [grupo, setGrupo] = useState(null)

    useEffect(() => {
        if (!estudiantes.length) {
            const grupo = grupos.find(g => g._id === id)
            if (grupo) {
                const { estudiantes } = grupo
                setEstudiantes(estudiantes)
                setGrupo(grupo)
            }
        }
    }, [grupos])

    return (
        <div className="p-5 mt-5 w-75">
            < Card >
                <Card.Header className="bg-info">
                    <h1> Lista de estudiantes del grupo {grupo && grupo.nombre}</h1>
                </Card.Header>
                <Card.Body>
                    {estudiantes.length ?
                        estudiantes.map(estudiante => {
                            return (
                                <Card.Title>{estudiante.nombre}</Card.Title>
                            )
                        })
                        :
                        <NoResultados />
                    }
                </Card.Body>
            </ Card>
        </div >
    )
}

export default EstudiantesPorGrupo
