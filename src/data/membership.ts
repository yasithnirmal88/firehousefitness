export interface Plan {
  id: string
  name: string
  description: string
  price: number
  period: string
  popular: boolean
  features: { name: string; included: boolean }[]
}

export const plans: Plan[] = [
  {
    id: 'recruit',
    name: 'Recruit',
    description: 'For those ready to begin the journey.',
    price: 49,
    period: '/month',
    popular: false,
    features: [
      { name: 'Gym Access', included: true },
      { name: 'Locker Room', included: true },
      { name: 'Sauna Access', included: false },
      { name: 'Group Classes', included: true },
      { name: 'Guest Passes', included: false },
      { name: 'Parking', included: true },
      { name: 'Coach Support', included: false },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For the dedicated who show up every day.',
    price: 89,
    period: '/month',
    popular: true,
    features: [
      { name: 'Gym Access', included: true },
      { name: 'Locker Room', included: true },
      { name: 'Sauna Access', included: true },
      { name: 'Group Classes', included: true },
      { name: 'Guest Passes', included: true },
      { name: 'Parking', included: true },
      { name: 'Coach Support', included: true },
    ],
  },
  {
    id: 'captain',
    name: 'Captain',
    description: 'Unlimited access with premium perks.',
    price: 129,
    period: '/month',
    popular: false,
    features: [
      { name: 'Gym Access', included: true },
      { name: 'Locker Room', included: true },
      { name: 'Sauna Access', included: true },
      { name: 'Group Classes', included: true },
      { name: 'Guest Passes', included: true },
      { name: 'Parking', included: true },
      { name: 'Coach Support', included: true },
    ],
  },
]

export const discounts = [
  { title: 'Military Discount', description: 'Active duty, reserve, and veterans receive 20% off any membership.', icon: '🎖️' },
  { title: 'Firefighter Discount', description: 'All firefighters — paid and volunteer — get 25% off as our heroes.', icon: '🚒' },
  { title: 'First Responder Discount', description: 'Police, EMT, and dispatch — 15% off for your service.', icon: '🚑' },
]

export const comparisonData = [
  { feature: 'Gym Access', recruit: true, professional: true, captain: true },
  { feature: 'Locker Room', recruit: true, professional: true, captain: true },
  { feature: 'Sauna', recruit: false, professional: true, captain: true },
  { feature: 'Group Classes', recruit: true, professional: true, captain: true },
  { feature: 'Guest Pass', recruit: false, professional: '2/mo', captain: '4/mo' },
  { feature: 'Parking', recruit: true, professional: true, captain: true },
  { feature: 'Coach Support', recruit: false, professional: true, captain: true },
]

export const faq = [
  { question: 'Do I need to be in shape to join?', answer: 'Absolutely not. Firehouse Fitness welcomes all fitness levels. Our coaches scale every workout to match your ability. What matters is your willingness to work.' },
  { question: 'What should I bring to my first class?', answer: 'Bring a water bottle, towel, and wear athletic clothing. We have all the equipment you need. Arrive 15 minutes early so we can show you around.' },
  { question: 'Is there a contract?', answer: 'No long-term contracts. We offer month-to-month memberships with no cancellation fees. Your commitment is to yourself.' },
  { question: 'Do you offer military or first responder discounts?', answer: 'Yes. We honor those who serve with significant discounts. See our discount section above for details.' },
  { question: 'What makes Firehouse different from a regular gym?', answer: 'We are a community built on discipline, service, and brotherhood. Our programming is tactical, our coaches are elite, and every session has purpose.' },
  { question: 'Can I try before I commit?', answer: 'Yes! Sign up for a free trial class and experience the difference. No pressure, no gimmicks.' },
]
