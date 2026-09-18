import './App.css'
import { InquiryForm } from './components/InquiryForm'
import { PlaceholderFlag } from './components/PlaceholderFlag'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TrainingCard } from './components/TrainingCard'
import {
  aboutSection,
  business,
  contactSection,
  coreTraining,
  hero,
  organizationSection,
  serviceAreaSection,
  specialtySection,
  specialtyTraining,
  trainingSection,
  trustStrip,
} from './data/siteContent'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="section-shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 id="hero-title">{hero.title}</h1>
              <p className="hero-lede">{hero.lede}</p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button--primary" href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </a>
                <a className="button button--secondary" href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </a>
              </div>
              <ul className="hero-points" aria-label="Training principles">
                {hero.principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </div>

            <div className="watchtower-art">
              <div className="watchtower-art__scene" aria-hidden="true">
                <div className="watchtower-art__sun" />
                <div className="watchtower-art__tower">
                  <span className="watchtower-art__roof" />
                  <span className="watchtower-art__room" />
                  <span className="watchtower-art__leg watchtower-art__leg--left" />
                  <span className="watchtower-art__leg watchtower-art__leg--right" />
                  <span className="watchtower-art__cross watchtower-art__cross--one" />
                  <span className="watchtower-art__cross watchtower-art__cross--two" />
                </div>
              </div>
              <p>
                <PlaceholderFlag /> {hero.artCaption}
              </p>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Service summary">
          <div className="section-shell trust-strip__grid">
            {trustStrip.map((item) => (
              <p key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </p>
            ))}
          </div>
        </section>

        <section
          className="section section--canvas"
          id="training"
          aria-labelledby="training-title"
        >
          <div className="section-shell">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">{trainingSection.eyebrow}</p>
                <h2 id="training-title">{trainingSection.title}</h2>
              </div>
              <p>
                <PlaceholderFlag /> {trainingSection.intro}
              </p>
            </div>

            <div className="training-grid">
              {coreTraining.map((course, index) => (
                <TrainingCard
                  key={course.title}
                  course={course}
                  number={String(index + 1).padStart(2, '0')}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className="section section--dark"
          id="specialty"
          aria-labelledby="specialty-title"
        >
          <div className="section-shell">
            <div className="section-heading section-heading--inverse">
              <p className="eyebrow">{specialtySection.eyebrow}</p>
              <h2 id="specialty-title">{specialtySection.title}</h2>
              <p>
                <PlaceholderFlag /> {specialtySection.intro}
              </p>
            </div>

            <div className="specialty-grid">
              {specialtyTraining.map((course) => (
                <article className="specialty-card" key={course.title}>
                  <p className="specialty-card__label">{course.audience}</p>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <p className="card-placeholder">
                    <PlaceholderFlag /> {specialtySection.placeholderLogistics}
                  </p>
                  <a className="text-link" href="#contact">
                    {specialtySection.cardCtaLabel} <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section section--olive"
          id="organizations"
          aria-labelledby="organizations-title"
        >
          <div className="section-shell organization-layout">
            <div className="organization-copy">
              <p className="eyebrow">{organizationSection.eyebrow}</p>
              <h2 id="organizations-title">{organizationSection.title}</h2>
              <p>{organizationSection.intro}</p>
              <a className="text-link" href={organizationSection.cta.href}>
                {organizationSection.cta.label} <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="organization-services">
              {organizationSection.services.map((service) => (
                <article key={service.number}>
                  <p className="service-number">{service.number}</p>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section section--canvas"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-shell about-layout">
            <div
              className="portrait-placeholder"
              role="img"
              aria-label={aboutSection.portraitCaption}
            >
              <span aria-hidden="true">{business.instructorInitials}</span>
              <p>
                <PlaceholderFlag /> {aboutSection.portraitCaption}
              </p>
            </div>

            <div className="about-copy">
              <p className="eyebrow">{aboutSection.eyebrow}</p>
              <h2 id="about-title">{aboutSection.title}</h2>
              <p className="about-copy__lead">{aboutSection.lead}</p>
              <p className="about-copy__body">{aboutSection.body}</p>
            </div>
          </div>
        </section>

        <section
          className="section service-area"
          id="service-area"
          aria-labelledby="service-area-title"
        >
          <div className="section-shell service-area__layout">
            <div>
              <p className="eyebrow">{serviceAreaSection.eyebrow}</p>
              <h2 id="service-area-title">{serviceAreaSection.title}</h2>
            </div>
            <ul aria-label={serviceAreaSection.listLabel}>
              {business.serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="section section--contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="section-shell contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">{contactSection.eyebrow}</p>
              <h2 id="contact-title">{contactSection.title}</h2>
              <p>{contactSection.intro}</p>

              <div className="booking-panel" id="square-booking-placeholder">
                <p className="booking-panel__label">{contactSection.booking.label}</p>
                <h3>{contactSection.booking.title}</h3>
                <p>{contactSection.booking.description}</p>
                <p className="placeholder-block">
                  <PlaceholderFlag />
                  <span>
                    {business.squareBooking.label}: {business.squareBooking.displayUrl}.{' '}
                    {contactSection.booking.placeholderNote}
                  </span>
                </p>
                <a
                  className="button button--secondary"
                  href={contactSection.booking.inquiryCta.href}
                >
                  {contactSection.booking.inquiryCta.label}
                </a>
              </div>
            </div>

            <InquiryForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

export default App
