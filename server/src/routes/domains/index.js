import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'Hello, world'
  })
})

export default [
  { path: '/', router }
]
