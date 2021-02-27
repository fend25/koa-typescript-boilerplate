import 'module-alias/register'
import {startServer} from 'src/server'
import log from 'loglevel'

startServer().catch(log.error)
