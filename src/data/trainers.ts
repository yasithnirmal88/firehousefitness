export interface Trainer {
  id: string
  name: string
  role: string
  image: string
  bio: string
  specialties: string[]
  certificates: string[]
  social: { platform: string; url: string }[]
}

export const trainers: Trainer[] = [
  {
    id: 'jake-ryder',
    name: 'Jake Ryder',
    role: 'Head Strength Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80',
    bio: 'Former U.S. Marine with 12 years of tactical strength coaching experience. Jake has trained special operations units and elite firefighters. His philosophy: strength is a responsibility.',
    specialties: ['Powerlifting', 'Tactical Strength', 'Injury Prevention'],
    certificates: ['CSCS', 'TSAC-F', 'CrossFit L2'],
    social: [
      { platform: 'instagram', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    id: 'maya-cruz',
    name: 'Maya Cruz',
    role: 'HIIT & Conditioning Coach',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80',
    bio: 'Maya is a competitive CrossFit athlete and former firefighter EMT. She brings real emergency-room intensity to every session. Her HIIT classes are legendary.',
    specialties: ['HIIT', 'Metcons', 'Agility Drills'],
    certificates: ['CrossFit L3', 'CF-LVL', 'NSCA-CPT'],
    social: [
      { platform: 'instagram', url: '#' },
      { platform: 'linkedin', url: '#' },
    ],
  },
  {
    id: 'derek-hale',
    name: 'Derek Hale',
    role: 'Bootcamp Commander',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80',
    bio: 'Derek served 8 years as a U.S. Army Ranger before finding his calling in fitness. He leads our bootcamp program with military precision and unwavering motivation.',
    specialties: ['Bootcamp', 'Rucking', 'Team Training'],
    certificates: ['Army Master Fitness Trainer', 'CrossFit L2', 'FMS'],
    social: [
      { platform: 'instagram', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    id: 'sarah-kincaid',
    name: 'Sarah Kincaid',
    role: 'Recovery & Mobility Coach',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    bio: 'Sarah is a Doctor of Physical Therapy specializing in tactical athlete recovery. She ensures our members stay operational and injury-free.',
    specialties: ['Mobility', 'Recovery', 'Injury Rehab'],
    certificates: ['DPT', 'FRCms', 'NASM-CES'],
    social: [
      { platform: 'instagram', url: '#' },
      { platform: 'linkedin', url: '#' },
    ],
  },
]
