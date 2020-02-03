import api from './src/index'

const wantsJson = req => (req.method !== 'GET' || req.accepts(['html', 'json']) === 'json')

export default (req, res, nuxt) => {
  if (wantsJson(req)) {
    return api(req, res)
  }
  nuxt()
}
