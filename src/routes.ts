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

router.put('/url', (async (req, res) => {
  const { url } = req.body

  if (!validUrl.isUri(url)) {
    return res.status(400).json('Invalid URL')
  }

  const slug = shortid.generate()
  await db.createUrl(url, slug)

  res.json({ url, slug })
}) as RequestHandler)

router.get('/:slug', (async (req, res) => {
  const { slug } = req.params
  const url = await db.getUrl(slug)

  if (!url) {
    return res.status(404).json('URL not found')
  }

  res.redirect(url)
}) as RequestHandler)

export default router
