import { Flame, Dumbbell, Zap, Heart, Target } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ClassItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
  image: string
  difficulty: string
  duration: string
  calories: string
}

export const classes: ClassItem[] = [
  {
    id: 'bootcamp',
    title: 'Firehouse Bootcamp',
    description: 'A high-intensity, full-body workout that combines strength, cardio, and agility drills. Inspired by firefighter training evolutions.',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1534256957339-8ba153d7c5ac?w=800&q=80',
    difficulty: 'Intermediate',
    duration: '60 min',
    calories: '700-900',
  },
  {
    id: 'strength',
    title: 'Strength',
    description: 'Build raw power with compound lifts, progressive overload, and battle-tested strength protocols used by tactical athletes.',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
    difficulty: 'All Levels',
    duration: '60 min',
    calories: '500-700',
  },
  {
    id: 'hiit',
    title: 'HIIT',
    description: 'Maximum intensity interval training designed to torch fat and build explosive cardiovascular endurance in minimal time.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80',
    difficulty: 'Advanced',
    duration: '45 min',
    calories: '600-800',
  },
  {
    id: 'functional',
    title: 'Functional Fitness',
    description: 'Real-world movement patterns using battle ropes, sandbags, sleds, and kettlebells. Build the body that serves you.',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80',
    difficulty: 'All Levels',
    duration: '60 min',
    calories: '600-850',
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    description: 'One-on-one coaching with certified tactical fitness specialists. Custom programming tailored to your goals.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    difficulty: 'Custom',
    duration: '60 min',
    calories: 'Varies',
  },
]

export const howItWorks = [
  {
    step: 1,
    title: 'Warm Up',
    description: 'Mobilize, activate, and prepare your body for the work ahead. Every session starts with a purpose.',
    icon: '🔥',
  },
  {
    step: 2,
    title: 'Workout',
    description: 'Push through the main set. Whether it is strength, conditioning, or a metcon — leave everything on the floor.',
    icon: '💪',
  },
  {
    step: 3,
    title: 'Cool Down',
    description: 'Recover, stretch, and reflect. Progress happens when you train smart, not just hard.',
    icon: '🧘',
  },
]
