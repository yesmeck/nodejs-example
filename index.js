const fastify = require('fastify')({ logger: {level: "error"}, trustProxy: true })

const PORT = process.env.PORT || 3000;

fastify.register(require('fastify-cors'))

fastify.get('/', function (req, reply) {
  console.log(process.env.TEST)
  return { hello: "main-updatess!!" }
})

const start = async () => {
  try {
    await fastify.listen(PORT, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

