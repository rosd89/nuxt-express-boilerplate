// for parsing application/x-www-form-urlencoded
import express from 'express'
export default express.urlencoded({
  extended: true,
  limit: `${5 * 1024 * 1024}b`,
  parameterLimit: 1000000
})
