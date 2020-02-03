import express from 'express'
import negotiator from './negotiator'

const server = express()
server.use(negotiator)

export default {
  path: '/',
  handler: server
}
