import { useTheme } from '../hooks/use-theme'
import { useModal } from '../hooks/use-modal'
import { useDropdown } from '../hooks/use-dropdown'
import { Modal } from './modal'
import { MenuItem } from './menu-item'
import { DropdownMenu } from './dropdown-menu'
import { HamburgerIcon } from './icons'

interface Props {
  deteleAllThoughts: () => void
  hasThoughts: boolean
}

export function Menu({ hasThoughts, deteleAllThoughts }: Props) {
  const { toggleTheme } = useTheme()
  const { showModal, closeModal, openModal } = useModal()
  const { menuRef, showDropdown, closeDropdownMenu, toggleDropdownMenu } =
    useDropdown()

  const handleOpenModalAndCloseMenu = () => {
    if (!hasThoughts) return

    openModal()
    closeDropdownMenu()
  }

  const backgroundColor = showDropdown ? 'var(--gray2)' : ''

  return (
    <>
      <nav className='menu' ref={menuRef}>
        <button
          aria-label='Toggle dropdown'
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
            <MenuItem
              title='Clear Thoughts'
              onClick={handleOpenModalAndCloseMenu}
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
