interface Props {
  children: React.ReactNode
}

export function Header({ children }: Props) {
  return <header className='header'>{children}</header>
}
