import React from "react"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactTooltip from 'react-tooltip'
import { Button } from 'react-bootstrap'
import { Zoom } from 'react-reveal'

import ModalEstudiante from "./ModalEstudiante";
import useEstudiantes from './useEstudiantes'
import Spinner from "../Spinner";
import NoResultados from '../NoResultados'
import Error from '../Error'
import TablaEstudiantes from "./TablaEstudiantes";

export default function ListaEstudiantes() {

    const {
        estudiante,
        estudiantes,
        handleModalAddOpen,
        handleModalAddClose,
        handleModalEditClose,
        errorGlobal,
        isOpen,
        isLoading,
        notify,
        setState,
        state
    } = useEstudiantes()

    return (
        <>
            <ToastContainer />
            <div className="py-5">
                {isLoading ? <Spinner /> :
                    errorGlobal ? <Error /> :
                        <>
                            <div className="d-flex justify-content-between">
                                <h3 className="text-start border-bottom border-3"> Estudiantes </h3>
                                <Button
                                    type="button"
                                    onClick={handleModalAddOpen}
                                    className="btn btn-info rounded-circle border-dark btn-sm"
                                    data-tip="Adicionar"
                                    data-place="right"
                                    data-type="info"
                                >
                                    <ReactTooltip />
                                    <img src="/svg/plus.svg" alt="Adicionar" width="32" height="32" />
                                </Button>
                            </div>
                            <Zoom>
                                {
                                    estudiantes.length ?
                                        <TablaEstudiantes
                                            estudiantes={estudiantes}
                                            notify={notify}
                                            setState={setState}
                                            state={state}
                                        />
                                        :
                                        <NoResultados />
                                }
                            </Zoom>
                        </>
                }

                {isOpen &&
                    <ModalEstudiante
                        onClose={handleModalAddClose}
                        submitText='Crear'
                    />
                }
                {estudiante &&
                    <ModalEstudiante
                        onClose={handleModalEditClose}
                        submitText='Actualizar'
                        nombre={estudiante.nombre}
                        edad={estudiante.edad}
                        sexo={estudiante.sexo}
                        fechaNacimiento={estudiante.fechaNacimiento}
                        email={estudiante.email}
                        ciudad={estudiante.ciudad && estudiante.ciudad._id}
                        grupo={estudiante.grupo && estudiante.grupo._id}
                        estud_id={estudiante._id}
                    />

                }
            </div>
        </>
    );
}

