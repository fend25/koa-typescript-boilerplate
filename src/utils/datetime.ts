export const formatLocalTime = (date: Date): string => {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const ms = date.getMilliseconds()

  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.` +
    `${ms < 10 ? '00' : ms < 100 ? '0' : ''}${ms}`
}
