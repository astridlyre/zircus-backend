import axios from 'axios'

const API_ENDPOINT = 'https://zircus.herokuapp.com/api'
// const API_ENDPOINT = 'http://localhost:3000/api'

export async function login(username, password) {
    return await axios.post(`${API_ENDPOINT}/login`, {
        username,
        password,
    })
}

export async function getInv() {
    return await axios.get(`${API_ENDPOINT}/inv`)
}

export async function updateItem(item, token) {
    return await axios.put(`${API_ENDPOINT}/inv`, item, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
