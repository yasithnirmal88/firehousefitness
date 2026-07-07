import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { Button } from './Button'

interface CTAProps {
  title: string
  subtitle?: string
  buttonText: string
  buttonHref?: string
  variant?: 'default' | 'dark' | 'accent'
  className?: string
}

export function CTA({ title, subtitle, buttonText, buttonHref = '#', variant = 'default', className }: CTAProps) {
  return (
    <section className={cn(
      'py-24 relative overflow-hidden',
      variant === 'default' && 'bg-[#111111]',
      variant === 'dark' && 'bg-[#1B1B1B]',
      variant === 'accent' && 'bg-accent',
      className
    )}>
      <div className="bg-noise absolute inset-0" />
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={cn(
          'text-4xl md:text-5xl lg:text-6xl font-primary uppercase leading-none',
          variant === 'accent' ? 'text-white' : 'text-white'
        )}>
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-gray-300 font-body max-w-xl mx-auto">{subtitle}</p>
        )}
        <div className="mt-8">
          <Button variant="primary" size="lg" as="a" href={buttonHref}>
            {buttonText}
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
