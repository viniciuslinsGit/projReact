import axios from 'axios'

const BASE_URL = 'https://api.punkapi.com/v2/'
const ERROR_TIMEOUT = 'Infelizmente estamos com problemas de conexão, tente novamente mais tarde'

const createHttp = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {'Access-Control-Allow-Origin': '*'}
  })

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (!error.response) {
        throw new Error(ERROR_TIMEOUT + error)
      }

      return Promise.reject(error)
    }
  )
  return axiosInstance
}

export default createHttp()