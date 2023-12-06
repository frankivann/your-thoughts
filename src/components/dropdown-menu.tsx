interface Props {
  children: React.ReactNode
}

export function DropdownMenu({ children }: Props) {
  return <ul className='menu-ul'>{children}</ul>
}
