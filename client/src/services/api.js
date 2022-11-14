import Axios from 'axios'
import { BASE_URL } from '../globals'

// export const BASE_URL = 'http://localhost:3001'

// export const BASE_URL = 'https://revinyl-backend.herokuapp.com/api'

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Client
