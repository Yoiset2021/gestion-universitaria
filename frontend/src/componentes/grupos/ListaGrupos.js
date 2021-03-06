import React from "react"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactTooltip from 'react-tooltip'
import { Button } from 'react-bootstrap'
import { Zoom } from 'react-reveal'

import ModalGrupo from "./ModalGrupo";
import useGrupos from './useGrupos'
import Spinner from "../Spinner";
import NoResultados from '../NoResultados'
import Error from '../Error'
import TablaGrupos from "./TablaGrupos"

function ListaGrupos() {

    const {
        grupos,
        grupo,
        handleModalAddOpen,
        handleModalAddClose,
        handleModalEditOpen,
        handleModalEditClose,
        errorGlobal,
        isOpen,
        isLoading,
        notify
    } = useGrupos()

    return (
        <>
            <ToastContainer />
            <div className="py-5">
                {isLoading ? <Spinner /> :
                    errorGlobal ? <Error /> :
                        <>
                            <div className="d-flex justify-content-between">
                                <h3 className="text-start border-bottom border-3"> Grupos </h3>
                                <Button
                                    type="button"
                                    onClick={handleModalAddOpen}
                                    className="btn btn-info rounded-circle border-dark btn-sm"
                                    data-tip="Adicionar"
                                    data-type="info"
                                >
                                    <ReactTooltip />
                                    <img src="/svg/plus.svg" alt="Adicionar" width="32" height="32" />
                                </Button>
                            </div>
                            <Zoom>
                                {
                                    grupos.length ?
                                        <TablaGrupos
                                            grupos={grupos}
                                            notify={notify}
                                            handleModalEditOpen={handleModalEditOpen}
                                        />
                                        :
                                        <NoResultados />
                                }
                            </Zoom>
                        </>
                }

                {isOpen &&
                    <ModalGrupo
                        onClose={handleModalAddClose}
                        submitText='Crear'
                    />

                }
                {grupo &&
                    <ModalGrupo
                        onClose={handleModalEditClose}
                        submitText='Actualizar'
                        nombre={grupo.nombre}
                        profesorGuia={grupo.profesorGuia && grupo.profesorGuia._id}
                        grup_id={grupo._id}
                    />

                }
            </div>
        </>
    );
}

export default ListaGrupos;