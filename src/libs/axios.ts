import axios from 'axios'

const Api = () => {
  const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  return API
}

export const AXIOS = Api()
