const fastify = require('fastify')({ logger: {level: "error"}, trustProxy: true })

fastify.register(require('fastify-cors'))

fastify.get('/', function (req, reply) {
  console.log(req.raw.ip)
  console.log(req.raw.hostname)
  return {}
})

const start = async () => {
  try {
    await fastify.listen(3003, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

