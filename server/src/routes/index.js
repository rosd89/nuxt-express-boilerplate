import domains from './domains'

export default app => {
  domains.forEach(({ path, router }) => app.use(path, router))
}
