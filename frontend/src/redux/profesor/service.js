import axios from 'axios'

export const getAll = async () => {
    const response = await axios.get('http://localhost:8000/api/profesores')
    return response.data
}

export const add = async (profesor) => {
    const response = await axios.post('http://localhost:8000/api/profesores', profesor)
    return response.data
}