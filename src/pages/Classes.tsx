import { motion } from 'framer-motion'
import { ArrowRight, Clock, Flame, Dumbbell, Zap, Target, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { CTA } from '@/components/ui/CTA'
import { classes, howItWorks } from '@/data/classes'

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 },
}

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

const iconMap: Record<string, React.ElementType> = {
  Flame, Dumbbell, Zap, Target, Heart,
}

export function Classes() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Gym interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-noise" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block w-12 h-1 bg-accent mb-6 mx-auto" />
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-primary text-white uppercase leading-none">
              Our <span className="text-accent">Classes</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg font-body max-w-xl mx-auto">
              Battle-tested programs designed to forge elite performance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Choose Your Battle" subtitle="Every class is designed with purpose. Find the one that calls to you." />
          <motion.div className="space-y-16" {...stagger}>
            {classes.map((c, i) => {
              const Icon = iconMap[c.id as string] || Flame
              const isReversed = i % 2 === 1
              return (
                <motion.div key={c.id} {...staggerItem} className={`grid lg:grid-cols-2 gap-10 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}>
                  <div className={`${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden img-zoom">
                      <img src={c.image} alt={c.title} className="w-full h-[350px] object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                    <Icon className="h-8 w-8 text-accent mb-3" />
                    <h3 className="text-3xl md:text-4xl font-primary text-[#111111] uppercase">{c.title}</h3>
                    <p className="mt-3 text-gray-600 font-body leading-relaxed">{c.description}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Badge variant="accent">{c.difficulty}</Badge>
                      <Badge variant="outline" className="!border-gray-300 !text-gray-600">{c.duration}</Badge>
                      <Badge variant="outline" className="!border-gray-300 !text-gray-600">{c.calories} cal</Badge>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="How It Works" subtitle="Every session follows a proven structure for maximum results." light />
          <motion.div className="grid md:grid-cols-3 gap-10" {...stagger}>
            {howItWorks.map((step, i) => (
              <motion.div key={step.step} {...staggerItem} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-secondary font-bold mb-3">
                  {step.step}
                </div>
                <h3 className="text-2xl font-primary text-white uppercase mb-2">{step.title}</h3>
                <p className="text-gray-400 font-body leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA
        title="Find Your Class"
        subtitle="Ready to get started? Sign up for a free trial and find the class that fits your goals."
        buttonText="Book a Free Trial"
        buttonHref="/contact"
      />
    </>
  )
}
