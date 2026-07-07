import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TrainerCard } from '@/components/ui/TrainerCard'
import { CTA } from '@/components/ui/CTA'
import { trainers } from '@/data/trainers'

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.12 },
}

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export function Trainers() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=1920&q=80"
          alt="Trainer coaching"
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
              Meet Your <span className="text-accent">Command</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg font-body max-w-xl mx-auto">
              Elite coaches with real-world experience. They will push you further than you thought possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Your Training Command" subtitle="Every coach at Firehouse Fitness brings real tactical experience and elite credentials." />
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" {...stagger}>
            {trainers.map((trainer) => (
              <motion.div key={trainer.id} {...staggerItem}>
                <TrainerCard trainer={trainer} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden img-zoom">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                  alt="Personal training session"
                  className="w-full h-[450px] object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block w-12 h-1 bg-accent mb-6" />
              <h2 className="text-4xl md:text-5xl font-primary text-[#111111] uppercase leading-tight">
                Why Our <span className="text-accent">Coaches</span> Matter
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 font-body leading-relaxed">
                <p>
                  Our coaches are not just certified — they are battle-tested. From military service to elite athletic competition, every trainer brings real-world experience that goes beyond textbook knowledge.
                </p>
                <p>
                  They understand the demands of tactical athletes because they have lived them. They know how to push you to your limits while keeping you safe and building long-term resilience.
                </p>
                <p>
                  When you train at Firehouse Fitness, you are not just getting a workout. You are getting mentorship from people who have walked the path.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA
        title="Train With The Best"
        subtitle="Ready to work with elite coaches? Start with a free trial session."
        buttonText="Book Your Free Trial"
        buttonHref="/contact"
      />
    </>
  )
}
