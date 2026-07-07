export interface Testimonial {
  id: string
  name: string
  occupation: string
  avatar: string
  rating: number
  quote: string
  transformation?: {
    before: string
    after: string
    achievements: string[]
  }
}

export const testimonials: Testimonial[] = [
  {
    id: 'mark-d',
    name: 'Mark D.',
    occupation: 'Firefighter, FDNY',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    quote: 'Firehouse Fitness changed my life. The programming is built for people who need to perform under pressure. This is not a gym — it is a brotherhood.',
    transformation: {
      before: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
      after: 'https://images.unsplash.com/photo-1534256957339-8ba153d7c5ac?w=600&q=80',
      achievements: [
        'Lost 35 lbs',
        'Increased VO2 max by 22%',
        'Placed 2nd in department fitness test',
      ],
    },
  },
  {
    id: 'jessica-t',
    name: 'Jessica T.',
    occupation: 'Army Veteran',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    quote: 'After the military I struggled to find a community that understood me. Firehouse Fitness gave me back that sense of purpose and camaraderie.',
  },
  {
    id: 'marcus-w',
    name: 'Marcus W.',
    occupation: 'Police Officer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
    quote: 'The tactical focus here is unmatched. Every workout prepares me for the street. I am stronger, faster, and more resilient than ever.',
  },
  {
    id: 'laura-h',
    name: 'Laura H.',
    occupation: 'EMT',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 4,
    quote: 'The coaches actually care about form and safety. I have never felt more supported in a fitness environment. The 5 AM crew is family.',
  },
  {
    id: 'carlos-r',
    name: 'Carlos R.',
    occupation: 'CrossFit Athlete',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 5,
    quote: 'I have trained at dozens of gyms. Nothing compares to the intensity and community at Firehouse. This is where champions are forged.',
  },
  {
    id: 'amanda-k',
    name: 'Amanda K.',
    occupation: 'Nurse',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    rating: 5,
    quote: 'I was intimidated at first, but everyone here is so welcoming. The scaling options make every workout accessible. I have never been stronger.',
  },
]

export const communityEvents = [
  { title: 'Annual Firehouse Games', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80' },
  { title: 'Charity Ruck March', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80' },
  { title: 'Team Competition', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80' },
  { title: 'Holiday Celebration', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80' },
]
