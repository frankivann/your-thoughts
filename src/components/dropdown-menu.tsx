import { BoxIcon, HamburgerIcon } from './icons'
import { useTheme } from '../hooks/use-theme'

interface Props {
  deteleAllThoughts: () => void
}

export function DropdownMenu({ deteleAllThoughts }: Props) {
  const { toggleTheme } = useTheme()

  return (
    <nav className='menu'>
      <button className='toggle'>
        <HamburgerIcon />
      </button>
      <div className='dropdown-wrapper'>
        <ul className='menu-ul'>
          <li className='menu-li'>
            <button className='menu-button' onClick={toggleTheme}>
              Toggle Theme
              <kbd>T</kbd>
            </button>
          </li>
          <hr className='menu-divider' />
          <li className='menu-li'>
            <button className='menu-button' onClick={() => deteleAllThoughts()}>
              Clear Thoughts
              <BoxIcon />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
