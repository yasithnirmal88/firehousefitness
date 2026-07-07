import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'

interface AccordionItem {
  id: string
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id} className="border border-white/10 bg-white/5">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between p-5 text-left font-secondary font-semibold text-white uppercase tracking-wider transition-colors hover:bg-white/5"
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 text-accent transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-gray-300 font-body leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
