import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.API_URL || 'https://localhost:5001/api',
})

export default instance
