import { useEffect, useRef } from 'react'
import { BoxIcon } from './icons'

interface Props {
  deteleAllThoughts: () => void
  closeDropdonwMenu: () => void
  toggleTheme: () => void
}

export function DropdownMenu({
  deteleAllThoughts,
  closeDropdonwMenu,
  toggleTheme,
}: Props) {
  const dropdownRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = dropdownRef.current
      if (!dropdown) return

      const isTarget = dropdown.contains(event.target as Node)
      if (!isTarget) closeDropdonwMenu()
    }

    window.document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [closeDropdonwMenu])

  return (
    <ul className='menu-ul' ref={dropdownRef}>
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
  )
}
