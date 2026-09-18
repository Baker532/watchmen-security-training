export interface TrainingPath {
  title: string
  description: string
  focusAreas: string[]
}

export interface SpecialtyTraining {
  title: string
  audience: string
  description: string
}

export interface NavItem {
  href: string
  label: string
}

export interface ContentLink {
  href: string
  label: string
}

export interface PendingContactDetail {
  verified: false
  placeholder: string
}

export const business = {
  name: 'Watchmen Security and Training LLC',
  shortName: 'Watchmen',
  supportingName: 'Security & Training',
  tagline: 'Practical preparation built on safety, judgment, and responsibility.',
  instructorName: 'Darren Baker',
  instructorInitials: 'DMB',
  regionLabel: 'Alabama Gulf Coast and Northwest Florida',
  serviceAreas: [
    'Baldwin County, Alabama',
    'Mobile County, Alabama',
    'Escambia County, Florida',
    'Pensacola, Florida',
  ],
  contact: {
    email: {
      verified: false,
      placeholder: 'Email address pending verification',
    } satisfies PendingContactDetail,
    phone: {
      verified: false,
      placeholder: 'Phone number pending verification',
    } satisfies PendingContactDetail,
  },
  squareBooking: {
    verified: false,
    url: '#square-booking-placeholder',
    displayUrl: 'squareup.com/appointments/book/[pending-verification]',
    label: 'Square booking URL pending verification',
  },
} as const

export const metadata = {
  title: 'Watchmen Security and Training | Firearms Training and Consulting',
  description:
    'Safety-led firearms training and security consulting serving Baldwin and Mobile Counties in Alabama and Escambia County and Pensacola in Florida.',
  ogTitle: 'Watchmen Security and Training LLC',
  ogDescription:
    'Practical firearms instruction and organizational security consulting for the Alabama Gulf Coast and Northwest Florida.',
} as const

export const primaryNavigation: NavItem[] = [
  { href: '#training', label: 'Training' },
  { href: '#specialty', label: 'Specialty' },
  { href: '#organizations', label: 'Organizations' },
  { href: '#about', label: 'Instructor' },
  { href: '#service-area', label: 'Service area' },
]

export const headerCta: ContentLink = {
  href: '#contact',
  label: 'Contact us',
}

export const footerNavigation: NavItem[] = [
  { href: '#training', label: 'Training' },
  { href: '#organizations', label: 'Organizations' },
  { href: '#about', label: 'Instructor' },
  { href: '#contact', label: 'Contact' },
]

export const hero = {
  eyebrow: 'Safety-led firearms training',
  title: 'Prepared people make safer decisions.',
  lede:
    'Practical instruction and security consulting for responsible individuals, families, businesses, and community organizations across the Alabama Gulf Coast and Northwest Florida.',
  primaryCta: { href: '#training', label: 'Explore training' } satisfies ContentLink,
  secondaryCta: { href: '#contact', label: 'Start an inquiry' } satisfies ContentLink,
  principles: ['Beginner welcoming', 'Scenario informed', 'Safety centered'],
  artCaption: 'Awareness before action',
} as const

export const trustStrip = [
  { label: 'Serving', value: 'Coastal Alabama + Northwest Florida' },
  { label: 'Approach', value: 'Clear, calm, practical instruction' },
  { label: 'Formats', value: 'Individual, private + organizational' },
] as const

export const trainingSection = {
  eyebrow: 'Core training paths',
  title: 'Build capability from a sound foundation.',
  intro:
    'Each path emphasizes safe handling, repeatable fundamentals, and sound judgment. Final course lengths, prerequisites, and pricing will be published after client approval.',
  cardCtaLabel: 'Ask about this path',
} as const

export const coreTraining: TrainingPath[] = [
  {
    title: 'Defensive Handgun',
    description:
      'A progressive path for responsible handgun owners, from safe handling and marksmanship to practical defensive application.',
    focusAreas: ['Safe handling', 'Core marksmanship', 'Practical decision-making'],
  },
  {
    title: 'Patrol Rifle',
    description:
      'Structured rifle instruction that develops confident handling, reliable fundamentals, and responsible use under direction.',
    focusAreas: ['Administrative handling', 'Position and control', 'Accuracy and accountability'],
  },
  {
    title: 'Tactical Shotgun',
    description:
      'Purposeful shotgun training centered on safe operation, recoil management, pattern awareness, and dependable technique.',
    focusAreas: ['Operation and loading', 'Recoil management', 'Patterning fundamentals'],
  },
]

export const specialtySection = {
  eyebrow: 'Specialty and private instruction',
  title: 'Training shaped around real needs.',
  intro:
    'Focused options help students close a specific skills gap or learn in a more personal setting.',
  cardCtaLabel: 'Ask about this option',
} as const

export const specialtyTraining: SpecialtyTraining[] = [
  {
    title: 'Everyday Carry Essentials',
    audience: 'Responsible carriers',
    description:
      'Explore equipment choices, safe carry habits, access, awareness, and the responsibilities that accompany everyday carry.',
  },
  {
    title: 'Pistol Optic Development',
    audience: 'Optic-equipped pistols',
    description:
      'Build a repeatable presentation, understand visual focus, and improve confidence with a pistol-mounted optic.',
  },
  {
    title: 'Couples Training',
    audience: 'Learn together',
    description:
      'A welcoming shared format that helps partners develop common safety language, expectations, and foundational skills.',
  },
  {
    title: 'Private Instruction',
    audience: 'Individual goals',
    description:
      'Focused instruction adapted to the student’s current experience, equipment, concerns, and next practical objective.',
  },
]

export const organizationSection = {
  eyebrow: 'Organizational readiness',
  title: 'A clearer plan before an emergency.',
  intro:
    'Scenario-aware education and security consulting can help a team understand responsibilities, identify vulnerabilities, and make measured improvements without creating a culture of fear.',
  cta: {
    href: '#contact',
    label: 'Discuss your organization',
  } satisfies ContentLink,
  services: [
    {
      number: '01',
      title: 'Active-shooter preparedness',
      description:
        'Educational sessions for businesses, schools, and faith communities focused on awareness, communication, and response planning.',
    },
    {
      number: '02',
      title: 'Security consulting',
      description:
        'Practical reviews of procedures, team roles, and physical considerations, followed by prioritized recommendations.',
    },
  ],
} as const

export const aboutSection = {
  eyebrow: 'Meet the instructor',
  title: 'Experience grounded in public service and instruction.',
  lead: `${business.instructorName}’s supplied résumé describes more than three decades of law-enforcement experience and extensive work in firearms instruction, field training, organizational readiness, and security education.`,
  verificationNote:
    'Credential names, dates, agency references, and publication permissions must be confirmed before launch. No endorsement by any current or former law-enforcement agency is expressed or implied.',
  portraitCaption: 'Instructor portrait pending approved image and usage rights',
} as const

export const experienceHighlights = [
  'Law-enforcement service beginning in 1993',
  'Handgun, rifle, and shotgun instruction experience',
  'Active-shooter preparedness instruction',
  'Field training and team leadership experience',
  'Hostage negotiation and peer-support experience',
  'Firearms armorer and pistol-optic training experience',
] as const

export const serviceAreaSection = {
  eyebrow: 'Local service area',
  title: 'Training close to the Gulf Coast community.',
  listLabel: 'Primary service locations',
} as const

export const contactSection = {
  eyebrow: 'Start a conversation',
  title: 'Tell us what you want to be better prepared for.',
  intro:
    'Share your goals, experience level, and preferred training format. This prototype validates the inquiry locally; the final site will connect the form and a verified Square booking link.',
  booking: {
    label: 'Ready to book?',
    title: 'Square booking and payment',
    description:
      'A secure Square-hosted link will handle scheduling, deposits, and payments after course details are approved. Watchmen will not collect payment on this website.',
    placeholderNote:
      'This is a clearly marked placeholder. It does not open a live Square scheduler or accept payment.',
    inquiryCta: {
      href: '#inquiry-form',
      label: 'Ask about availability',
    } satisfies ContentLink,
  },
} as const

export const inquiryFormCopy = {
  title: 'Inquiry form',
  submitLabel: 'Preview inquiry',
  requiredNote:
    'Fields marked * are required. This prototype validates locally and does not send messages.',
  nameLabel: 'Name *',
  emailLabel: 'Email *',
  phoneLabel: 'Phone',
  phoneHint: 'Optional.',
  interestLabel: 'I’m interested in *',
  interestPlaceholder: 'Select a topic',
  messageLabel: 'What would you like help with? *',
  messageHint: 'Please include at least 20 characters.',
  errorSummary: 'Please correct the highlighted fields before continuing.',
  prototypeSuccess:
    'Prototype only: your inquiry passed validation, but no message was sent. Connect an approved form service before launch.',
} as const

export const inquiryTopics = [
  'Handgun training',
  'Patrol-rifle training',
  'Tactical-shotgun training',
  'EDC or pistol-optic training',
  'Couples or private training',
  'Organizational active-shooter preparedness',
  'Security consulting',
  'Something else',
] as const

export const footerContent = {
  legal:
    'Training and consulting information is educational and is not legal advice. Participation is subject to eligibility, safety requirements, instructor approval, and range policies. No endorsement by any current or former law-enforcement agency is expressed or implied.',
  prototypeNote: 'Prototype content. Not a live booking, payment, or inquiry service.',
  blockersTitle: 'Launch blockers',
  blockersIntro:
    'These items remain placeholders until the client supplies verified facts, approvals, and production services.',
} as const

export const launchBlockers = [
  'Verified public email address',
  'Verified public phone number',
  'Final Square booking URL',
  'Hosted form or serverless endpoint for inquiry delivery, including success, error, spam protection, and privacy language',
  'Approved instructor biography, credential names, dates, and written publication permission',
  'Written permission for any agency references, awards, logos, and photographs',
  'Approved instructor photograph, usage rights, and optimized image derivatives',
  'Confirmed course names, audiences, prerequisites, duration, price, equipment expectations, and schedules',
  'Production domain, canonical URL, social preview image, robots.txt, and sitemap',
] as const
