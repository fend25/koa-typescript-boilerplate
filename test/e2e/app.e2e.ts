import * as supertest from 'supertest'
import {app} from 'src/server'

describe('AppController (e2e)', () => {
  beforeEach(async () => {
  })

  it('[GET /]', async () => {
    const request = supertest(app.callback())
    const result = await request.get('/')
    expect(result.status).toBe(200)
    expect(result.text).toBe('Hello world!')
  })

  it('[GET /favicon.ico]', async () => {
    const request = supertest(app.callback())
    const result = await request.get('/favicon.ico')
    expect(result.status).toBe(200)
    expect(result.type).toBe('image/vnd.microsoft.icon')
  })
})
