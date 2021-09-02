import React from "react"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactTooltip from 'react-tooltip'
import { Button } from 'react-bootstrap'
import { Zoom } from 'react-reveal'

import ModalProfesor from "./ModalProfesor";
import customHook from './useProfesores'
import Spinner from "../Spinner";
import NoResultados from '../NoResultados'
import Error from '../Error'
import TablaProfesor from "./TablaProfesor";

function ListaProfesores() {

    const {
        profesores,
        handleModalOpen,
        handleModalClose,
        errorGlobal,
        isOpen,
        isLoading,
    } = customHook.useProfesores()

    return (
        <>
            <ToastContainer />
            <div className="py-5">
                {
                    isLoading ? <Spinner /> :
                        errorGlobal ? <Error /> :
                            <>
                                <div className="d-flex justify-content-between">
                                    <h3 className="text-start border-bottom border-3"> Profesores </h3>
                                    <Button
                                        type="button"
                                        onClick={handleModalOpen}
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
                                        profesores.length ?
                                            <TablaProfesor
                                                profesores={profesores}
                                            />
                                            :
                                            <NoResultados />
                                    }
                                </Zoom>
                            </>
                }
                {
                    isOpen && (
                        <ModalProfesor
                            onClose={handleModalClose}
                            submitText='Crear'
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaProfesores;