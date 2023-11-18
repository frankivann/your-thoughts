import { useEffect, useState } from 'react'
import { differenceInSeconds, getHours, getMinutes } from 'date-fns'

export function Timestamp({ timestamp }: { timestamp: string }) {
  const [seconds, setSeconds] = useState(0)

  useEffect(
    function () {
      const intervalId = setInterval(() => {
        const seconds = differenceInSeconds(new Date(), new Date(timestamp))
        setSeconds(seconds)
      }, 1000)

      return () => clearInterval(intervalId)
    },
    [timestamp]
  )

  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)

  const time = () => {
    if (hours > 24) {
      const hour = getHours(new Date(timestamp))
      const minutes = getMinutes(new Date(timestamp))

      return `${hour}:${minutes}`
    } else if (hours > 0) return `${hours}h ago`
    else if (minutes > 0) return `${minutes}m ago`
    else return `${seconds}s ago`
  }

  return <span>{time()}</span>
}
