import { BoxIcon, HamburgerIcon, MoonIcon } from './icons'

export function DropdownMenu() {
  return (
    <nav className='menu'>
      <button className='toggle'>
        <HamburgerIcon />
      </button>
      <div className='dropdown-wrapper'>
        <ul className='menu-ul'>
          <li className='menu-li'>
            <button className='menu-button'>
              Toggle Theme
              <MoonIcon />
            </button>
          </li>
          <hr className='menu-divider' />
          <li className='menu-li'>
            <button className='menu-button'>
              Clear Thoughts
              <BoxIcon />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
