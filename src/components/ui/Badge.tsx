import { cn } from '@/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'accent'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-secondary font-semibold uppercase tracking-wider',
        variant === 'default' && 'bg-accent text-white',
        variant === 'outline' && 'border border-white/20 text-white',
        variant === 'accent' && 'bg-accent/10 text-accent border border-accent/20',
        className
      )}
    >
      {children}
    </span>
  )
}
