import axios from 'axios'

export const getAll = async () => {
    const response = await axios.get('http://localhost:8000/api/ciudades')
    return response.data
}

export const add = async (ciudad) => {
    const response = await axios.post('http://localhost:8000/api/ciudades', ciudad)
    return response.data
}