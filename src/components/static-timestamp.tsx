import { lightFormat } from 'date-fns'

export function StaticTimestamp({ timestamp }: { timestamp: string }) {
  return (
    <span className='timestamp'>
      {lightFormat(new Date(timestamp), 'HH:mm')}
    </span>
  )
}
