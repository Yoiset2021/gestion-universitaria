import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'
import Validator from 'validator'

import {
    getAllGrupos,
    handleSubmitGrupo
} from '../../redux/grupo/action'
import { getAllProfesores } from '../../redux/profesor/action'

function useGrupos() {

    //para abrir y cerrar modal, ya sea cuando actualizo o cuando creo
    const [state, setState] = useState({
        isOpen: false,
        grupoId: null,
    })

    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllGrupos())
        dispatch(getAllProfesores())
    }, [dispatch])

    const profesores = useSelector(state => state.profesor.data)
    const grupos = useSelector(state => state.grupo.data)
    const isLoading = useSelector(state => state.grupo.isLoading)
    const errorGlobal = useSelector(state => state.grupo.error)
    const errorServer = useSelector(state => state.grupo.errorServer)
    const status = useSelector(state => state.grupo.status)

    const handleModalAddOpen = () => {
        setState({ ...state, isOpen: true })
    };
    const handleModalAddClose = () => {
        setState({ ...state, isOpen: false })
    };

    const handleModalEditClose = () => {
        setState({ ...state, grupoId: null })
    }

    const notify = text => {
        toast.success(`Se ha ${text} el grupo correctamente`, {
            position: 'top-right',
            autoClose: 5000,
            closeOnClick: true,
            hideProgressBar: true,
            pauseOnHover: true
        })
    }

    const handleSubmit = grupo => {
        const errors = validate(grupo)
        setErrors(errors)
        if (Object.keys(errors).length === 0) {
            submit(grupo)
        }
    }

    const validate = grupo => {
        const errors = {}
        if (Validator.isEmpty(grupo.nombre)) {
            errors.nombre = 'Nombre es requerido'
        }
        if (!grupo.profesorGuia) {
            errors.profeso = 'Profesor es requerido'
        } else if (!grupo.profesorGuia._id) {
            errors.profeso = 'Selecciona un profesor valido'
        }
        return errors
    }

    const submit = async (grupo) => {
        await dispatch(handleSubmitGrupo(grupo))
    }

    const { grupoId, isOpen } = state
    const grupo = grupos.find(g => g._id === grupoId)

    return {
        isLoading,
        grupos,
        grupo,
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
        profesores,
        status
    }
}
const exportFunction = {
    useGrupos
};

export default exportFunction;