import axios from 'axios'

export const getAll = async () => {
    const response = await axios.get('http://localhost:8000/api/ciudades')
    return response.data
}