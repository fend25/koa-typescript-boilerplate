import * as dotenv from 'dotenv'
import * as dotenvExpand from 'dotenv-expand'
import {parseNumber} from 'src/utils'

export const getConfig = () => {
  const rawEnv = dotenv.config()
  const env = dotenvExpand(rawEnv).parsed || {}

  const config = {
    server: {
      port: parseNumber(env.PORT, 3000),
      host: env.HOST ?? '127.0.0.1',
    },
    database: {
      host: env.DATABASE_HOST,
      port: parseNumber(env.DATABASE_PORT, 5432),
    },
  }

  return config
}
