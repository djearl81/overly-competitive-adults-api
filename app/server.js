'use strict'

const Hapi = require('@hapi/hapi')
const Inert = require('inert')
const Vision = require('vision')
const HapiSwagger = require('hapi-swagger')

const init = async () => {

    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    })

    const swaggerOptions = {
        info: {
                title: 'Test API Documentation',
                version: '1.0.0',
            },
        }

    await server.register(require('hapi-auto-route'))

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ])
    
    await server.start()
    console.log('Server running on %s', server.info.uri)
    console.log(`Swagger: ${server.info.uri}/documentation`)
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})

init()