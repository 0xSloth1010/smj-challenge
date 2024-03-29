import express, { Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import pino, { Options } from 'pino-http'
import errorHandler from './middleware/error'
import routes from './routes'

export function makeApp(): Express {
  const app = express()
  // Prettify logs in dev
  const options: Options =
    process.env.NODE_ENV === 'dev'
      ? {
          transport: { target: 'pino-pretty', options: { colorize: true } },
          serializers: {
            req: (req) => {
              req.headers['x-api-key'] = 'redacted'
              if (process.env.NODE_ENV === 'dev') {
                req.body = req.raw.body
              }
              return req
            }
          }
        }
      : {}

  const corsOptions = {
    origin: 'http://localhost:3000'
  }

  app.use(cors(corsOptions))

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use(express.json({ verify: () => true })) // Just force it to parse all requests as json
  app.use(pino(options))

  app.use(routes)

  app.use(errorHandler)

  app.use((_, res) => {
    res.status(404).json({
      message: 'Not Found'
    })
  })
  return app
}

export const app = makeApp()
