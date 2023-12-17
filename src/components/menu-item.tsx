interface Props {
  title: string
  icon?: React.ReactNode
  onClick: () => void
}

export function MenuItem({ onClick, title, icon }: Props) {
  return (
    <li className='menu-li'>
      <button className='menu-button' onClick={onClick}>
        {title}
        {icon}
      </button>
    </li>
  )
}
