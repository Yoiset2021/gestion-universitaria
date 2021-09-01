import axios from 'axios'

export const getAll = async () => {
    const response = await axios.get('http://localhost:8000/api/estudiantes')
    return response.data
}
export const add = async (estudiante) => {
    const response = await axios.post('http://localhost:8000/api/estudiantes', estudiante)
    return response.data
}
export const edit = async (estudiante) => {
    const response = await axios.put(`http://localhost:8000/api/estudiantes/${estudiante._id}`, estudiante)
    return response.data
}

export const delet = async (estudiante) => {
    const response = await axios.delete(`http://localhost:8000/api/estudiantes/${estudiante._id}`, estudiante)
    return response.data
}