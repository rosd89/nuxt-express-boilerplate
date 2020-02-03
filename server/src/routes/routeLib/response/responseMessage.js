import moment from 'moment-timezone'

// 200 - success
export const success200 = res => res.status(200).send()

// 200 - return Model
export const success200RetObj = (res, obj) => res.status(200).json(obj)

// 200 - return csv
export const success200RetCsv = (res, body) => {
  res.setHeader('content-type', 'application/octet-stream; charset=utf-8')
  res.setHeader('content-disposition', `attachment; filename=${moment().format('YYYYMMDDHHmmss')}.csv`)
  res.send(body)
}

// 201 - create
export const success201 = (res, obj) => res.status(201).json(obj)

// 204 - delete
export const success204 = res => res.status(204).send()

export default {
  success200, success200RetObj, success200RetCsv,
  success201,
  success204
}
