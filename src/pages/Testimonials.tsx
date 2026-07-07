import { motion } from 'framer-motion'
import { Quote, Award } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { CTA } from '@/components/ui/CTA'
import { testimonials, communityEvents } from '@/data/testimonials'

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

const featured = testimonials[0]
const gridTestimonials = testimonials.slice(1)

export function Testimonials() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80"
          alt="Firehouse Fitness community"
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
              Brotherhood <span className="text-accent">Stories</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg font-body max-w-xl mx-auto">
              Real transformations from real members of the Firehouse family.
            </p>
          </motion.div>
        </div>
      </section>

      {featured.transformation && (
        <section className="py-24 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Featured Transformation" subtitle="See the incredible journey of one of our members." />
            <TestimonialCard testimonial={featured} variant="featured" />
          </div>
        </section>
      )}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Member Stories" subtitle="Hear from the Firehouse community." />
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" {...stagger}>
            {gridTestimonials.map((t) => (
              <motion.div key={t.id} {...staggerItem}>
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Community" subtitle="Firehouse Fitness is more than a gym — it is a family." light />
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" {...stagger}>
            {communityEvents.map((event, i) => (
              <motion.div key={i} {...staggerItem} className="relative overflow-hidden img-zoom group aspect-square cursor-pointer">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                  <h3 className="text-white font-secondary uppercase tracking-wider text-sm font-semibold">{event.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA
        title="Write Your Story"
        subtitle="Your transformation starts today. Join the Firehouse and become part of the brotherhood."
        buttonText="Start Your Journey"
        buttonHref="/membership"
      />
    </>
  )
}
