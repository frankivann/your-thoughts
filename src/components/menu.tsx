import { HamburgerIcon } from './icons'
import { useTheme } from '../hooks/use-theme'
import { useState } from 'react'
import { DropdownMenu } from './dropdown-menu'

interface Props {
  deteleAllThoughts: () => void
}

export function Menu({ deteleAllThoughts }: Props) {
  const { toggleTheme } = useTheme()
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdownMenu = () => {
    setShowDropdown(!showDropdown)
  }

  const closeDropdonwMenu = () => {
    setShowDropdown(false)
  }

  const backgroundColor = showDropdown ? 'var(--gray2)' : ''

  return (
    <nav className='menu'>
      <button
        className='toggle'
        onClick={toggleDropdownMenu}
        style={{ backgroundColor }}
      >
        <HamburgerIcon />
      </button>

      {showDropdown && (
        <DropdownMenu
          toggleTheme={toggleTheme}
          closeDropdonwMenu={closeDropdonwMenu}
          deteleAllThoughts={deteleAllThoughts}
        />
      )}
    </nav>
  )
}
