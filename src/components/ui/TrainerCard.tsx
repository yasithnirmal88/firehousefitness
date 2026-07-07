import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { cn } from '@/utils/cn'
import { Badge } from './Badge'
import type { Trainer } from '@/data/trainers'

interface TrainerCardProps {
  trainer: Trainer
  className?: string
}

const socialIcons: Record<string, React.ElementType> = {
  instagram: Globe,
  twitter: Globe,
  linkedin: Globe,
}

export function TrainerCard({ trainer, className }: TrainerCardProps) {
  return (
    <motion.div
      className={cn('bg-white shadow-lg overflow-hidden', className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      <div className="relative overflow-hidden img-zoom aspect-[3/4]">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-3">
            {trainer.social.map((s) => {
              const Icon = socialIcons[s.platform] || Globe
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  className="text-white hover:text-accent transition-colors"
                  aria-label={`${trainer.name} on ${s.platform}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-primary text-[#111111] uppercase">{trainer.name}</h3>
        <p className="text-sm font-secondary uppercase tracking-wider text-accent font-semibold mt-1">{trainer.role}</p>
        <p className="mt-3 text-gray-600 text-sm font-body leading-relaxed">{trainer.bio}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {trainer.specialties.map((s) => (
            <Badge key={s} variant="accent">{s}</Badge>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {trainer.certificates.map((c) => (
            <span key={c} className="text-xs text-gray-400 font-body">| {c}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
