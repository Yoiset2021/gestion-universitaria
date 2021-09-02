import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'
import Validator from 'validator'

import {
    getAllEstudiantes,
    handleSubmitEstudiante
} from '../../redux/estudiante/action'
import { getAllCiudades } from '../../redux/ciudad/action'
import { getAllGrupos } from '../../redux/grupo/action'

function useEstudiantes() {

    //para abrir y cerrar modal, ya sea cuando actualizo o cuando creo
    const [state, setState] = useState({
        isOpen: false,
        estudianteId: null
    })
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        if (!estudiantes.length) {
            dispatch(getAllEstudiantes())
        }
        if (!ciudades.length) {
            dispatch(getAllCiudades())
        }
        if (!grupos.length) {
            dispatch(getAllGrupos())
        }
    }, [dispatch])

    const ciudades = useSelector(state => state.ciudad.data)
    const grupos = useSelector(state => state.grupo.data)
    const estudiantes = useSelector(state => state.estudiante.data)
    const isLoading = useSelector(state => state.estudiante.isLoading)
    const errorGlobal = useSelector(state => state.estudiante.errorGlobal)
    const errorServer = useSelector(state => state.estudiante.errorServer)
    const status = useSelector(state => state.estudiante.status)

    const handleModalAddOpen = () => {
        setState({ ...state, isOpen: true })
    };

    const handleModalAddClose = () => {
        setState({ ...state, isOpen: false })
    };

    const handleModalEditClose = () => {
        setState({ ...state, estudianteId: null })
    }

    const notify = text => {
        toast.success(`Se ha ${text} el estudiante correctamente`, {
            position: 'top-right',
            autoClose: 5000,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: true
        })
    }

    const handleSubmit = estudiante => {
        const errors = validate(estudiante)
        setErrors(errors)
        if (Object.keys(errors).length === 0) {
            submit(estudiante)
        }
    }

    const validate = estudiante => {
        const errors = {}
        if (Validator.isEmpty(estudiante.nombre)) {
            errors.nombre = 'Nombre es requerido'
        }
        if (Validator.isEmpty(estudiante.sexo)) {
            errors.sexo = 'Sexo es requerido'
        }
        if (!estudiante.edad) {
            errors.edad = 'Edad es requerido'
        }
        if (Validator.isEmpty(estudiante.fechaNacimiento)) {
            errors.fechaNacimiento = 'Fecha de nacimiento es requerido'
        }
        if (Validator.isEmpty(estudiante.email)) {
            errors.email = 'Email es obligatorio'
        } else if (!Validator.isEmail(estudiante.email)) {
            errors.email = 'Ha introducido un email invalido'
        }
        if (!estudiante.grupo) {
            errors.grupo = 'Grupo es requerido'
        } else if (!estudiante.grupo._id) {
            errors.grupo = 'Selecciona un grupo valido'
        }
        if (!estudiante.ciudad) {
            errors.ciudad = 'Ciudad es requerido'
        } else if (!estudiante.ciudad._id) {
            errors.ciudad = 'Selecciona un grupo valido'
        }
        return errors
    }

    const submit = (estudiante) => {
        dispatch(handleSubmitEstudiante(estudiante))
    }

    const { estudianteId, isOpen } = state
    const estudiante = estudiantes.find(e => e._id === estudianteId)

    return {
        isLoading,
        estudiantes,
        estudiante,
        errorGlobal,
        isOpen,
        handleModalAddOpen,
        handleModalAddClose,
        handleModalEditClose,
        notify,
        setState,
        state,
        handleSubmit,
        errors,
        errorServer,
        ciudades,
        grupos,
        status
    }
}
const exportFunction = {
    useEstudiantes
};

export default exportFunction;