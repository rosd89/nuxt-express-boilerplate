import acao from './acao'
import json from './bodyparser'
import urlencoded from './bodyparser.urlencoded'
import errorHandler from '../routes/routeLib/response/error.handler'
import defaultErrorMiddleware from './defauleRoute.middleware'

const middlewares = [
  acao, json, urlencoded
]

const error = [
  errorHandler, defaultErrorMiddleware
]

export default {
  init: app => {
    middlewares.forEach(m => app.use(m))
  },
  error: app => {
    error.forEach(m => app.use(m))
  }
}
