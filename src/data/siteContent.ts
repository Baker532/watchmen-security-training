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

export const business = {
  name: 'Watchmen Security and Training LLC',
  tagline: 'Practical preparation built on safety, judgment, and responsibility.',
  serviceAreas: [
    'Baldwin County, Alabama',
    'Mobile County, Alabama',
    'Escambia County, Florida',
    'Pensacola, Florida',
  ],
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

export const experienceHighlights = [
  'Law-enforcement service beginning in 1993',
  'Handgun, rifle, and shotgun instruction experience',
  'Active-shooter preparedness instruction',
  'Field training and team leadership experience',
  'Hostage negotiation and peer-support experience',
  'Firearms armorer and pistol-optic training experience',
]

export const inquiryTopics = [
  'Handgun training',
  'Patrol-rifle training',
  'Tactical-shotgun training',
  'EDC or pistol-optic training',
  'Couples or private training',
  'Organizational active-shooter preparedness',
  'Security consulting',
  'Something else',
]
