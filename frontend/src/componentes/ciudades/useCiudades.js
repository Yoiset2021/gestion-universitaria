import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'
import Validator from 'validator'

import {
    getAllCiudades,
    addCiudad
} from '../../redux/ciudad/action'

function useCiudades() {

    //para abrir y cerrar modal, ya sea cuando actualizo o cuando creo
    const [isOpen, setIsOpen] = useState(false)
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch()

    useEffect(() => {
        if (!ciudades.length) {
            dispatch(getAllCiudades())
        }
    }, [dispatch])

    const ciudades = useSelector(state => state.ciudad.data)
    const isLoading = useSelector(state => state.ciudad.isLoading)
    const errorGlobal = useSelector(state => state.ciudad.error)
    const status = useSelector(state => state.ciudad.status)

    const handleModalOpen = () => {
        setIsOpen(true)
    }

    const handleModalClose = () => {
        setIsOpen(false)
    };

    const notify = text => {
        toast.success(`Se ha ${text} la ciudad correctamente`, {
            position: 'top-right',
            autoClose: 5000,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: true
        })
    }

    const handleSubmit = ciudad => {
        const errors = validate(ciudad)
        setErrors(errors)
        if (Object.keys(errors).length === 0) {
            submit(ciudad)
        }
    }

    const validate = ciudad => {
        const errors = {}
        if (Validator.isEmpty(ciudad.nombre)) {
            errors.nombre = 'Nombre es requerido'
        } else if (!Validator.isAlpha(ciudad.nombre)) {
            errors.nombre = 'El nombre solo puede tener letras'
        }
        return errors
    }

    const submit = async (ciudad) => {
        await dispatch(addCiudad(ciudad))
    }

    return {
        isLoading,
        ciudades,
        status,
        errorGlobal,
        isOpen,
        handleModalOpen,
        handleModalClose,
        notify,
        handleSubmit,
        errors
    }
}
const exportFunction = {
    useCiudades
};

export default exportFunction;