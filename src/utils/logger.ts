import logger from 'loglevel'
import * as chalk from 'chalk'
import * as prefix from 'loglevel-plugin-prefix'
import {isDev, isProd} from './index'
import {formatLocalTime} from 'src/utils/datetime'

const colors: Record<string, chalk.Chalk> = {
  TRACE: chalk.magenta,
  DEBUG: chalk.cyan,
  INFO: chalk.greenBright,
  WARN: chalk.yellow,
  ERROR: chalk.red,
}

prefix.reg(logger)
if (isDev) logger.enableAll()

const prefixOptions: prefix.LoglevelPluginPrefixOptions = {
  format(level, name, timestamp) {
    return isDev
      ? `${chalk.gray(`[${timestamp}]`)} ${colors[level.toUpperCase()](level.padEnd(5, ' '))}` // ${chalk.gray(`[${name}]`)}
      : `[${timestamp}] ${level.padEnd(5, ' ')}`
  },
  timestampFormatter(date) {
    return isDev ? formatLocalTime(date) : date.toJSON()
  }
}

prefix.apply(logger, prefixOptions)
