import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../hooks/use-theme'
import { useModal } from '../hooks/use-modal'
import { Modal } from './modal'
import { MenuItem } from './menu-item'
import { DropdownMenu } from './dropdown-menu'
import { BoxIcon, HamburgerIcon } from './icons'

interface Props {
  deteleAllThoughts: () => void
}

export function Menu({ deteleAllThoughts }: Props) {
  const { toggleTheme } = useTheme()
  const { showModal, closeModal, openModal } = useModal()
  const [showDropdown, setShowDropdown] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = menuRef.current
      if (!showDropdown || !menu) return

      const isTarget = menu.contains(event.target as Node)
      if (!isTarget) closeDropdonwMenu()
    }

    window.document.addEventListener('click', handleClickOutside)
    return () => {
      window.document.removeEventListener('click', handleClickOutside)
    }
  }, [menuRef, showDropdown])

  const toggleDropdownMenu = () => {
    setShowDropdown(!showDropdown)
  }

  const closeDropdonwMenu = () => {
    setShowDropdown(false)
  }

  const handleClick = () => {
    openModal()
    closeDropdonwMenu()
  }

  const backgroundColor = showDropdown ? 'var(--gray2)' : ''

  return (
    <>
      <nav className='menu' ref={menuRef}>
        <button
          className='toggle'
          onClick={toggleDropdownMenu}
          style={{ backgroundColor }}
        >
          <HamburgerIcon />
        </button>

        {showDropdown && (
          <DropdownMenu>
            <MenuItem
              title='Toggle Theme'
              icon={<kbd>T</kbd>}
              onClick={toggleTheme}
            />
            <hr className='menu-divider' />
            <MenuItem
              title='Clear Thoughts'
              icon={<BoxIcon />}
              onClick={handleClick}
            />
          </DropdownMenu>
        )}
      </nav>

      <Modal
        showModal={showModal}
        closeModal={closeModal}
        onAccept={deteleAllThoughts}
      />
    </>
  )
}
