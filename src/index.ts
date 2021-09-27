import { IDEF, EEnv } from './model'
import { envControl } from './utils/index'

// 環境參數
let appName: string = ''
let namespace: string = ''
let env: EEnv = null

// 環境控制開關
// 默認線上環境 PROD
let envSwitch: boolean = false

const init = (def: IDEF): boolean => {
  appName = def.appName
  namespace = def.namespace
  env = def.env
  envSwitch = env === EEnv.PROD ? false : true
  envControl(envSwitch)
  return
}

const log = () => {}

const info = () => {}

const warn = () => {}

const error = () => {}

const debug = () => {}

const Logger = {
  log,
  info,
  warn,
  error,
  debug,
}

const query = () => {}
