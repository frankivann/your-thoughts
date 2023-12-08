import { useState, useEffect, useRef } from 'react'

export function useDropdown() {
  const [showDropdown, setShowDropdown] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = menuRef.current
      if (!showDropdown || !menu) return

      const isTarget = menu.contains(event.target as Node)
      if (!isTarget) closeDropdownMenu()
    }

    window.document.addEventListener('click', handleClickOutside)
    return () => {
      window.document.removeEventListener('click', handleClickOutside)
    }
  }, [menuRef, showDropdown])

  const closeDropdownMenu = () => {
    setShowDropdown(false)
  }

  const toggleDropdownMenu = () => {
    setShowDropdown(!showDropdown)
  }

  return {
    showDropdown,
    menuRef,
    closeDropdownMenu,
    toggleDropdownMenu,
  }
}
