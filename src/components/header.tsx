import { DropdownMenu } from './dropdown-menu'
import { LogoIcon } from './icons'

export function Header() {
  return (
    <header className='header'>
      <LogoIcon />
      <DropdownMenu />
    </header>
  )
}
