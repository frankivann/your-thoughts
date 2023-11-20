import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'

export function DynamicTimestamp({ timestamp }: { timestamp: string }) {
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

  const formatTime =
    hours > 0
      ? `${hours}h ago`
      : minutes > 0
      ? `${minutes}m ago`
      : `${seconds}s ago`

  return <span>{formatTime}</span>
}
