import { useEffect, useState } from 'react'
import { business } from '../data/siteContent'

const navigation = [
  { href: '#training', label: 'Training' },
  { href: '#organizations', label: 'Organizations' },
  { href: '#about', label: 'Instructor' },
  { href: '#service-area', label: 'Service area' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header" id="top">
      <div className="section-shell site-header__inner">
        <a className="brand" href="#top" aria-label={`${business.name} home`} onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">W</span>
          <span className="brand__text">
            <strong>Watchmen</strong>
            <small>Security &amp; Training</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="visually-hidden">{isOpen ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav
          className={`site-nav${isOpen ? ' site-nav--open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="button button--primary" href="#contact" onClick={closeMenu}>
            Contact us
          </a>
        </nav>
      </div>
    </header>
  )
}
