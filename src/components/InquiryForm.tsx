import { useState, type FormEvent } from 'react'
import { inquiryTopics } from '../data/siteContent'

export function InquiryForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      setStatus('Please complete the required fields before continuing.')
      form.reportValidity()
      return
    }

    setStatus(
      'Prototype only: your inquiry passed validation, but no message was sent. Connect the approved form service before launch.',
    )
  }

  return (
    <form className="inquiry-form" id="inquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>

        <div className="form-field">
          <label htmlFor="interest">I’m interested in *</label>
          <select id="interest" name="interest" defaultValue="" required>
            <option value="" disabled>Select a topic</option>
            {inquiryTopics.map((topic) => (
              <option value={topic} key={topic}>{topic}</option>
            ))}
          </select>
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="message">What would you like help with? *</label>
          <textarea id="message" name="message" minLength={20} required />
        </div>
      </div>

      <div className="form-actions">
        <button className="button button--primary" type="submit">Preview inquiry</button>
        <p className="form-note">Fields marked * are required.</p>
      </div>

      {status && (
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      )}
    </form>
  )
}
