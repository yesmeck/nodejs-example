const fastify = require('fastify')({ logger: {level: "error"}, trustProxy: true })

fastify.register(require('fastify-cors'))

fastify.get('/', function (req, reply) {
  return {raw:req.raw}
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

