const fastify = require('fastify')({ logger: {level: "error"}, trustProxy: true })

fastify.register(require('fastify-cors'))

fastify.get('/', function (req, reply) {
  return { hello: "world" }
})

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

