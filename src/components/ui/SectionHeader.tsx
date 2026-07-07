import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeader({ title, subtitle, align = 'center', light = false, className }: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        'max-w-2xl mb-16',
        align === 'center' && 'mx-auto text-center',
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <span className={cn(
        'inline-block w-12 h-1 bg-accent mb-6',
        align === 'center' && 'mx-auto'
      )} />
      <h2 className={cn(
        'text-4xl md:text-5xl lg:text-6xl font-primary uppercase leading-none',
        light ? 'text-white' : 'text-[#111111]'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-4 text-lg font-body leading-relaxed',
          light ? 'text-gray-300' : 'text-gray-500'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
