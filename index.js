const fastify = require('fastify')({ logger: {level: "error"}, trustProxy: true })

fastify.register(require('fastify-cors'))

fastify.get('/', function (req, reply) {
  console.log(req.headers['x-real-ip'])
  
  return {}
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

