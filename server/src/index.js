import express  from 'express'

import middleware from './middlewares'
import routes from './routes'

const router = express.Router()

middleware.init(router)

routes(router)

middleware.error(router)

export default router
