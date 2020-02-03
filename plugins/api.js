import axios from 'axios'

export default (ctx, inject) => {
  const api = function (url, ...options) {
    if (process.server) {
      const headers = { ...ctx.req.headers }
      delete headers.accept
      const port = process.env.PORT || 3000
      const http = axios.create({
        baseURL: `http://localhost:${port}`,
        headers
      })
      return http.get(url, ...options).then(r => r.data)
    }
    return axios.get(url, ...options).then(r => r.data)
  }

  inject('api', api)
}
