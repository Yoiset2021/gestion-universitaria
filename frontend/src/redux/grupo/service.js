import axios from 'axios'

export const getAll = async () => {
    const response = await axios.get('http://localhost:8000/api/grupos')
    return response.data
}
export const add = async (grupo) => {
    const response = await axios.post('http://localhost:8000/api/grupos', grupo)
    return response.data
}
export const edit = async (grupo) => {
    const response = await axios.put(`http://localhost:8000/api/grupos/${grupo._id}`, grupo)
    return response.data
}

export const delet = async (grupo) => {
    const response = await axios.delete(`http://localhost:8000/api/grupos/${grupo._id}`, grupo)
    return response.data
}