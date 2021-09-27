import { baseIP, port, baseURL } from '../api/config'

export const consoleGroup = (name, cb) => {
  console.group(name)
  cb()
  console.groupEnd(name)
}

export const envControl = (envSwitch) => {
  if (envSwitch) {
    baseURL = baseIP + port.PRE
  } else {
    baseURL = baseIP + port.PROD
  }
}
