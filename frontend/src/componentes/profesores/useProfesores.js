import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'
import Validator from 'validator'

import {
    getAllProfesores,
    addProfesor
} from '../../redux/profesor/action'

function useProfesores() {

    //para abrir y cerrar modal, ya sea cuando actualizo o cuando creo
    const [isOpen, setIsOpen] = useState(false)

    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        if (!profesores.length) {
            dispatch(getAllProfesores())
        }
    }, [dispatch])

    const profesores = useSelector(state => state.profesor.data)
    const isLoading = useSelector(state => state.profesor.isLoading)
    const errorGlobal = useSelector(state => state.profesor.error)
    const status = useSelector(state => state.profesor.status)

    const handleModalOpen = () => {
        setIsOpen(true)
    }

    const handleModalClose = () => {
        setIsOpen(false)
    };

    const notify = text => {
        toast.success(`Se ha ${text} el profesor correctamente`, {
            position: 'top-right',
            autoClose: 5000,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: true
        })
    }

    const handleSubmit = profesor => {
        const errors = validate(profesor)
        setErrors(errors)
        if (Object.keys(errors).length === 0) {
            submit(profesor)
        }
    }

    const validate = profesor => {
        const errors = {}
        if (Validator.isEmpty(profesor.nombre)) {
            errors.nombre = 'Nombre es requerido'
        }
        return errors
    }

    const submit = async (profesor) => {
        await dispatch(addProfesor(profesor))
    }

    return {
        isLoading,
        profesores,
        errorGlobal,
        isOpen,
        handleModalOpen,
        handleModalClose,
        notify,
        handleSubmit,
        errors,
        status
    }
}
const exportFunction = {
    useProfesores
};

export default exportFunction;