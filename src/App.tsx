import './App.css'
import { InquiryForm } from './components/InquiryForm'
import { SiteHeader } from './components/SiteHeader'
import { TrainingCard } from './components/TrainingCard'
import {
  business,
  coreTraining,
  experienceHighlights,
  specialtyTraining,
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
              <p className="eyebrow">Safety-led firearms training</p>
              <h1 id="hero-title">Prepared people make safer decisions.</h1>
              <p className="hero-lede">
                Practical instruction and security consulting for responsible
                individuals, families, businesses, and community organizations
                across the Alabama Gulf Coast and Northwest Florida.
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button--primary" href="#training">
                  Explore training
                </a>
                <a className="button button--secondary" href="#contact">
                  Start an inquiry
                </a>
              </div>
              <ul className="hero-points" aria-label="Training principles">
                <li>Beginner welcoming</li>
                <li>Scenario informed</li>
                <li>Safety centered</li>
              </ul>
            </div>

            <div className="watchtower-art" aria-hidden="true">
              <div className="watchtower-art__sun" />
              <div className="watchtower-art__tower">
                <span className="watchtower-art__roof" />
                <span className="watchtower-art__room" />
                <span className="watchtower-art__leg watchtower-art__leg--left" />
                <span className="watchtower-art__leg watchtower-art__leg--right" />
                <span className="watchtower-art__cross watchtower-art__cross--one" />
                <span className="watchtower-art__cross watchtower-art__cross--two" />
              </div>
              <p>Awareness before action</p>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Service summary">
          <div className="section-shell trust-strip__grid">
            <p>
              <strong>Serving</strong>
              <span>Coastal Alabama + Northwest Florida</span>
            </p>
            <p>
              <strong>Approach</strong>
              <span>Clear, calm, practical instruction</span>
            </p>
            <p>
              <strong>Formats</strong>
              <span>Individual, private + organizational</span>
            </p>
          </div>
        </section>

        <section className="section section--canvas" id="training" aria-labelledby="training-title">
          <div className="section-shell">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Core training paths</p>
                <h2 id="training-title">Build capability from a sound foundation.</h2>
              </div>
              <p>
                Each path emphasizes safe handling, repeatable fundamentals,
                and sound judgment. Final course lengths, prerequisites, and
                pricing will be published after client approval.
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

        <section className="section section--dark" aria-labelledby="specialty-title">
          <div className="section-shell">
            <div className="section-heading section-heading--inverse">
              <p className="eyebrow">Specialty and private instruction</p>
              <h2 id="specialty-title">Training shaped around real needs.</h2>
              <p>
                Focused options help students close a specific skills gap or
                learn in a more personal setting.
              </p>
            </div>

            <div className="specialty-grid">
              {specialtyTraining.map((course) => (
                <article className="specialty-card" key={course.title}>
                  <p className="specialty-card__label">{course.audience}</p>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--olive" id="organizations" aria-labelledby="organizations-title">
          <div className="section-shell organization-layout">
            <div className="organization-copy">
              <p className="eyebrow">Organizational readiness</p>
              <h2 id="organizations-title">A clearer plan before an emergency.</h2>
              <p>
                Scenario-aware education and security consulting can help a
                team understand responsibilities, identify vulnerabilities,
                and make measured improvements without creating a culture of
                fear.
              </p>
              <a className="text-link" href="#contact">
                Discuss your organization <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="organization-services">
              <article>
                <p className="service-number">01</p>
                <div>
                  <h3>Active-shooter preparedness</h3>
                  <p>
                    Educational sessions for businesses, schools, and faith
                    communities focused on awareness, communication, and
                    response planning.
                  </p>
                </div>
              </article>
              <article>
                <p className="service-number">02</p>
                <div>
                  <h3>Security consulting</h3>
                  <p>
                    Practical reviews of procedures, team roles, and physical
                    considerations, followed by prioritized recommendations.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--canvas" id="about" aria-labelledby="about-title">
          <div className="section-shell about-layout">
            <div className="portrait-placeholder" aria-label="Instructor portrait placeholder">
              <span>DMB</span>
              <p>Instructor portrait pending</p>
            </div>

            <div className="about-copy">
              <p className="eyebrow">Meet the instructor</p>
              <h2 id="about-title">Experience grounded in public service and instruction.</h2>
              <p className="about-copy__lead">
                Darren Baker’s supplied résumé describes more than three
                decades of law-enforcement experience and extensive work in
                firearms instruction, field training, organizational readiness,
                and security education.
              </p>
              <ul className="experience-list">
                {experienceHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p className="verification-note">
                Credential names, dates, agency references, and publication
                permissions must be confirmed before launch.
              </p>
            </div>
          </div>
        </section>

        <section className="section service-area" id="service-area" aria-labelledby="service-area-title">
          <div className="section-shell service-area__layout">
            <div>
              <p className="eyebrow">Local service area</p>
              <h2 id="service-area-title">Training close to the Gulf Coast community.</h2>
            </div>
            <ul aria-label="Primary service locations">
              {business.serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--contact" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">Start a conversation</p>
              <h2 id="contact-title">Tell us what you want to be better prepared for.</h2>
              <p>
                Share your goals, experience level, and preferred training
                format. This prototype validates the inquiry locally; the final
                site will connect the form and verified Square booking link.
              </p>

              <div className="booking-panel">
                <p className="booking-panel__label">Ready to book?</p>
                <h3>Square booking and payment</h3>
                <p>
                  A secure Square-hosted link will handle scheduling, deposits,
                  and payments after course details are approved.
                </p>
                <a className="button button--secondary" href="#inquiry-form">
                  Ask about availability
                </a>
              </div>
            </div>

            <InquiryForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell site-footer__top">
          <div>
            <a className="brand brand--footer" href="#top" aria-label={`${business.name} home`}>
              <span className="brand__mark" aria-hidden="true">W</span>
              <span className="brand__text">
                <strong>Watchmen</strong>
                <small>Security &amp; Training</small>
              </span>
            </a>
            <p>{business.tagline}</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#training">Training</a>
            <a href="#organizations">Organizations</a>
            <a href="#about">Instructor</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="section-shell site-footer__legal">
          <p>
            Training and consulting information is educational and is not legal
            advice. Participation is subject to eligibility, safety requirements,
            instructor approval, and range policies. No endorsement by any current
            or former law-enforcement agency is expressed or implied.
          </p>
          <p>© {new Date().getFullYear()} {business.name}. Prototype content.</p>
        </div>
      </footer>
    </>
  )
}

export default App
