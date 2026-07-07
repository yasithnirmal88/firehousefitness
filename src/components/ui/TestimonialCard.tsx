import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { cn } from '@/utils/cn'
import type { Testimonial } from '@/data/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
  variant?: 'default' | 'featured'
  className?: string
}

export function TestimonialCard({ testimonial, variant = 'default', className }: TestimonialCardProps) {
  const { name, occupation, avatar, rating, quote } = testimonial

  if (variant === 'featured' && testimonial.transformation) {
    const { before, after, achievements } = testimonial.transformation
    return (
      <motion.div
        className={cn('bg-[#1B1B1B] border border-white/5 overflow-hidden', className)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2">
          <div className="relative">
            <div className="h-full">
              <div className="grid grid-cols-2 h-full">
                <div className="relative overflow-hidden">
                  <span className="absolute top-3 left-3 z-10 bg-accent text-white px-2 py-1 text-xs font-secondary uppercase tracking-wider">Before</span>
                  <img src={before} alt="Before transformation" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="relative overflow-hidden">
                  <span className="absolute top-3 left-3 z-10 bg-highlight text-white px-2 py-1 text-xs font-secondary uppercase tracking-wider">After</span>
                  <img src={after} alt="After transformation" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-highlight text-highlight" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-white font-body leading-relaxed mb-6">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 mb-6">
              <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
              <div>
                <div className="font-secondary font-semibold text-white uppercase tracking-wider">{name}</div>
                <div className="text-sm text-gray-400">{occupation}</div>
              </div>
            </div>
            <div>
              <h4 className="font-secondary font-semibold text-accent uppercase tracking-wider text-sm mb-2">Achievements</h4>
              <ul className="space-y-1">
                {achievements.map((a) => (
                  <li key={a} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={cn(
        'bg-white p-6 md:p-8 shadow-lg',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-highlight text-highlight" />
        ))}
      </div>
      <blockquote className="text-gray-700 font-body leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
        <div>
          <div className="font-secondary font-semibold text-[#111111] uppercase tracking-wider text-sm">{name}</div>
          <div className="text-xs text-gray-400">{occupation}</div>
        </div>
      </div>
    </motion.div>
  )
}
