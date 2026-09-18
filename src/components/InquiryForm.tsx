import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { inquiryFormCopy, inquiryTopics } from '../data/siteContent'

interface InquiryValues {
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

type FieldName = keyof InquiryValues
type FieldErrors = Partial<Record<FieldName, string>>

type FormStatus =
  | { kind: 'idle' }
  | { kind: 'error'; message: string }
  | { kind: 'prototype'; message: string }

const initialValues: InquiryValues = {
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
}

const fieldOrder: FieldName[] = ['name', 'email', 'phone', 'interest', 'message']

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function validateInquiry(values: InquiryValues): FieldErrors {
  const errors: FieldErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Enter your name.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Enter at least 2 characters for your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Enter your email address.'
  } else if (!isValidEmail(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (values.phone.trim()) {
    const digits = values.phone.replace(/\D/g, '')
    if (digits.length < 10) {
      errors.phone = 'Enter at least 10 digits, or leave this field blank.'
    }
  }

  if (!values.interest) {
    errors.interest = 'Select a training topic.'
  }

  if (!values.message.trim()) {
    errors.message = 'Describe what you would like help with.'
  } else if (values.message.trim().length < 20) {
    errors.message = 'Please share at least 20 characters so we understand your request.'
  }

  return errors
}

export function InquiryForm() {
  const formId = useId()
  const statusRef = useRef<HTMLParagraphElement>(null)
  const [values, setValues] = useState<InquiryValues>(initialValues)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<FormStatus>({ kind: 'idle' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (status.kind === 'prototype') {
      statusRef.current?.focus()
    }
  }, [status])

  const updateField = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))

    if (submitted) {
      setErrors((current) => {
        const nextValues = { ...values, [field]: value }
        const nextErrors = validateInquiry(nextValues)
        return { ...current, [field]: nextErrors[field] }
      })
    }

    if (status.kind !== 'idle') {
      setStatus({ kind: 'idle' })
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateInquiry(values)
    setSubmitted(true)
    setErrors(nextErrors)

    const firstError = fieldOrder.find((field) => nextErrors[field])
    if (firstError) {
      setStatus({ kind: 'error', message: inquiryFormCopy.errorSummary })
      document.getElementById(`${formId}-${firstError}`)?.focus()
      return
    }

    setStatus({ kind: 'prototype', message: inquiryFormCopy.prototypeSuccess })
  }

  const statusClassName =
    status.kind === 'error'
      ? 'form-status form-status--error'
      : status.kind === 'prototype'
        ? 'form-status form-status--prototype'
        : 'form-status'

  return (
    <div className="inquiry-panel" id="inquiry-form">
      <h3 id={`${formId}-title`}>{inquiryFormCopy.title}</h3>
      <form
        className="inquiry-form"
        onSubmit={handleSubmit}
        noValidate
        aria-labelledby={`${formId}-title`}
      >
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor={`${formId}-name`}>{inquiryFormCopy.nameLabel}</label>
            <input
              id={`${formId}-name`}
              name="name"
              autoComplete="name"
              required
              value={values.name}
              onChange={(event) => updateField('name', event.target.value)}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            />
            {errors.name && (
              <p className="field-error" id={`${formId}-name-error`}>
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor={`${formId}-email`}>{inquiryFormCopy.emailLabel}</label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={(event) => updateField('email', event.target.value)}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            />
            {errors.email && (
              <p className="field-error" id={`${formId}-email-error`}>
                {errors.email}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor={`${formId}-phone`}>{inquiryFormCopy.phoneLabel}</label>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => updateField('phone', event.target.value)}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={
                errors.phone
                  ? `${formId}-phone-error ${formId}-phone-hint`
                  : `${formId}-phone-hint`
              }
            />
            <p className="field-hint" id={`${formId}-phone-hint`}>
              {inquiryFormCopy.phoneHint}
            </p>
            {errors.phone && (
              <p className="field-error" id={`${formId}-phone-error`}>
                {errors.phone}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor={`${formId}-interest`}>{inquiryFormCopy.interestLabel}</label>
            <select
              id={`${formId}-interest`}
              name="interest"
              required
              value={values.interest}
              onChange={(event) => updateField('interest', event.target.value)}
              aria-invalid={errors.interest ? true : undefined}
              aria-describedby={errors.interest ? `${formId}-interest-error` : undefined}
            >
              <option value="" disabled>
                {inquiryFormCopy.interestPlaceholder}
              </option>
              {inquiryTopics.map((topic) => (
                <option value={topic} key={topic}>
                  {topic}
                </option>
              ))}
            </select>
            {errors.interest && (
              <p className="field-error" id={`${formId}-interest-error`}>
                {errors.interest}
              </p>
            )}
          </div>

          <div className="form-field form-field--full">
            <label htmlFor={`${formId}-message`}>{inquiryFormCopy.messageLabel}</label>
            <textarea
              id={`${formId}-message`}
              name="message"
              minLength={20}
              required
              value={values.message}
              onChange={(event) => updateField('message', event.target.value)}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={
                errors.message
                  ? `${formId}-message-error ${formId}-message-hint`
                  : `${formId}-message-hint`
              }
            />
            <p className="field-hint" id={`${formId}-message-hint`}>
              {inquiryFormCopy.messageHint}
            </p>
            {errors.message && (
              <p className="field-error" id={`${formId}-message-error`}>
                {errors.message}
              </p>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button className="button button--primary" type="submit">
            {inquiryFormCopy.submitLabel}
          </button>
          <p className="form-note">{inquiryFormCopy.requiredNote}</p>
        </div>

        {status.kind !== 'idle' && (
          <p
            className={statusClassName}
            role={status.kind === 'error' ? 'alert' : 'status'}
            aria-live={status.kind === 'error' ? 'assertive' : 'polite'}
            tabIndex={-1}
            ref={statusRef}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  )
}
