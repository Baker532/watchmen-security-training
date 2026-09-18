import {
  business,
  footerContent,
  footerNavigation,
  launchBlockers,
} from '../data/siteContent'
import { PlaceholderFlag } from './PlaceholderFlag'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__top">
        <div>
          <a
            className="brand brand--footer"
            href="#top"
            aria-label={`${business.name} home`}
          >
            <span className="brand__mark" aria-hidden="true">
              <span className="brand__mark-letter">W</span>
            </span>
            <span className="brand__text">
              <strong>{business.shortName}</strong>
              <small>{business.supportingName}</small>
            </span>
          </a>
          <p>{business.tagline}</p>
        </div>
        <nav aria-label="Footer navigation">
          {footerNavigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="section-shell site-footer__contact">
        <div>
          <p className="booking-panel__label">Public contact</p>
          <ul className="placeholder-list">
            <li>
              <PlaceholderFlag />
              {business.contact.email.placeholder}
            </li>
            <li>
              <PlaceholderFlag />
              {business.contact.phone.placeholder}
            </li>
          </ul>
        </div>
        <p className="site-footer__prototype">{footerContent.prototypeNote}</p>
      </div>

      <div className="section-shell site-footer__legal">
        <p>{footerContent.legal}</p>
        <p>
          © {year} {business.name}.
        </p>
      </div>

      <div className="section-shell site-footer__blockers">
        <details>
          <summary>{footerContent.blockersTitle}</summary>
          <p>{footerContent.blockersIntro}</p>
          <ul>
            {launchBlockers.map((blocker) => (
              <li key={blocker}>{blocker}</li>
            ))}
          </ul>
        </details>
      </div>
    </footer>
  )
}
