
import * as Koa from 'koa'
import {getConfig} from './config'
import * as koaServe from 'koa-static'
import * as koaMount from 'koa-mount'
import log from 'loglevel'

export const app = new Koa()
const config = getConfig()
app.use(koaMount('/', koaServe(`./public`)))
app.use(async ctx => {
  log.info(ctx.request.method, ctx.request.path, ctx.request.ip)

  ctx.body = 'Hello world!'
})

app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
})

export const startServer = async () => {
  app.listen(
    config.server.port,
    config.server.host,
    () => log.info(`server listening on ${config.server.host}:${config.server.port}`),
  )
}
