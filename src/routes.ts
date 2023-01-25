import { RequestHandler } from 'express'
import Router from 'express-promise-router'

import shortid from 'shortid'
import validUrl from 'valid-url'

import * as db from './db'

const router = Router()

router.get('/health', (_, res) => res.sendStatus(200))

router.get('/hello', (_, res) => {
  res.json({ message: 'hello' })
})

router.put('/url', (async (_req, res) => {
  res.status(501).send('Not Implemented')
}) as RequestHandler)

router.get('/:slug', (async (_req, res) => {
  res.status(501).send('Not Implemented')
}) as RequestHandler)

export default router
