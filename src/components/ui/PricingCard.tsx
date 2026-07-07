import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { cn } from '@/utils/cn'
import { Button } from './Button'
import type { Plan } from '@/data/membership'

interface PricingCardProps {
  plan: Plan
  className?: string
}

export function PricingCard({ plan, className }: PricingCardProps) {
  return (
    <motion.div
      className={cn(
        'relative bg-white border-2 overflow-hidden',
        plan.popular ? 'border-accent shadow-xl shadow-accent/10' : 'border-gray-100 shadow-lg',
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1.5 text-xs font-secondary uppercase tracking-widest font-semibold">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-primary text-[#111111] uppercase">{plan.name}</h3>
        <p className="mt-1 text-sm text-gray-500 font-body">{plan.description}</p>
        <div className="mt-6 mb-8">
          <span className="text-5xl font-primary text-[#111111]">${plan.price}</span>
          <span className="text-gray-400 font-body ml-1">{plan.period}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature) => (
            <li key={feature.name} className="flex items-center gap-3">
              {feature.included ? (
                <Check className="h-4 w-4 text-accent flex-shrink-0" />
              ) : (
                <X className="h-4 w-4 text-gray-300 flex-shrink-0" />
              )}
              <span className={cn(
                'text-sm font-body',
                feature.included ? 'text-gray-700' : 'text-gray-400'
              )}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
        <Button
          variant={plan.popular ? 'primary' : 'secondary'}
          className="w-full"
        >
          {plan.popular ? 'Get Started' : 'Choose Plan'}
        </Button>
      </div>
    </motion.div>
  )
}
