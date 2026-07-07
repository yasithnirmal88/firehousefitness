import { motion } from 'framer-motion'
import { useCounter } from '@/hooks/useCounter'
import { cn } from '@/utils/cn'

interface StatItem {
  label: string
  value: number
  suffix?: string
}

interface StatsProps {
  items: StatItem[]
  className?: string
  light?: boolean
}

function StatNumber({ end, suffix = '' }: { end: number; suffix?: string }) {
  const { count, ref } = useCounter(end, 2000, true)
  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export function Stats({ items, className, light = false }: StatsProps) {
  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-8', className)}>
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="text-center"
        >
          <div className={cn(
            'text-4xl md:text-5xl font-primary font-bold',
            light ? 'text-white' : 'text-[#111111]'
          )}>
            <StatNumber end={item.value} suffix={item.suffix} />
          </div>
          <div className={cn(
            'mt-1 text-sm font-secondary uppercase tracking-widest',
            light ? 'text-gray-400' : 'text-gray-500'
          )}>
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
