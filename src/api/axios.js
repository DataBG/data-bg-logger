import axios from 'axios'
import { baseURL } from './config'
import { consoleGroup } from '../utils/index'

const instance = axios.create({
  baseURL,
  withCredentials: true,
})

instance.interceptors.request.use(
  (config) => {
    consoleGroup(`[axios.request] ${config.url}`, () => {
      console.log(config)
    })
    return config
  },
  (err) => {
    console.error(err)
    return err
  }
)

instance.interceptors.response.use(
  (response) => {
    const config = response.config
    consoleGroup(`[axios.response] ${config.url}`, () => {
      console.log(response)
    })
    return response
  },
  (err) => {
    console.error(err)
    return err
  }
)

export default instance
