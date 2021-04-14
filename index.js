const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-cors'))

fastify.get('/v1', function (req, reply) {
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