import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'glass'
  hover?: boolean
}

export function Card({ children, className, variant = 'default', hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'overflow-hidden',
        variant === 'default' && 'bg-white shadow-lg',
        variant === 'dark' && 'bg-[#1B1B1B] border border-white/5',
        variant === 'glass' && 'glass',
        hover && 'hover:shadow-xl transition-shadow duration-300',
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
