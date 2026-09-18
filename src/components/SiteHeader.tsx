import { useEffect, useId, useRef, useState } from 'react'
import { business, headerCta, primaryNavigation } from '../data/siteContent'

const desktopQuery = '(min-width: 1101px)'

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const navId = useId()

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setIsOpen(false)
      toggleRef.current?.focus()
    }

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || window.matchMedia(desktopQuery).matches) return

      const focusable = [
        toggleRef.current,
        ...Array.from(navRef.current?.querySelectorAll<HTMLElement>('a') ?? []),
      ].filter((node): node is HTMLElement => Boolean(node))

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('keydown', trapFocus)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('keydown', trapFocus)
    }
  }, [isOpen])

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.matchMedia(desktopQuery).matches) setIsOpen(false)
    }

    window.addEventListener('resize', closeOnDesktop)
    return () => window.removeEventListener('resize', closeOnDesktop)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {isOpen && (
        <div className="nav-backdrop" aria-hidden="true" onClick={closeMenu} />
      )}

      <header className="site-header" id="top">
        <div className="section-shell site-header__inner">
          <a
            className="brand"
            href="#top"
            aria-label={`${business.name} home`}
            onClick={closeMenu}
          >
            <span className="brand__mark" aria-hidden="true">
              <span className="brand__mark-letter">W</span>
            </span>
            <span className="brand__text">
              <strong>{business.shortName}</strong>
              <small>{business.supportingName}</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            ref={toggleRef}
            aria-expanded={isOpen}
            aria-controls={navId}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="visually-hidden">{isOpen ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

          <nav
            className={`site-nav${isOpen ? ' site-nav--open' : ''}`}
            id={navId}
            ref={navRef}
            aria-label="Primary navigation"
          >
            {primaryNavigation.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="button button--primary" href={headerCta.href} onClick={closeMenu}>
              {headerCta.label}
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
