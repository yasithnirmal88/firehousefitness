import { motion } from 'framer-motion'
import { Shield, Heart, Users, Zap, Target, Crosshair } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Stats } from '@/components/ui/Stats'
import { CTA } from '@/components/ui/CTA'
import { galleryImages } from '@/data/gallery'

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

const values = [
  { icon: Shield, title: 'Discipline', desc: 'The foundation of every great achievement. We train with purpose and precision.' },
  { icon: Heart, title: 'Service', desc: 'Serving our community and each other. Strength is a responsibility.' },
  { icon: Users, title: 'Brotherhood', desc: 'No one fights alone. We rise together or not at all.' },
  { icon: Crosshair, title: 'Mental Toughness', desc: 'The mind breaks before the body. We forge both.' },
  { icon: Zap, title: 'Leadership', desc: 'Lead by example. Every member is a leader in training.' },
  { icon: Target, title: 'Resilience', desc: 'Adapt, overcome, and grow stronger through every challenge.' },
]

const statsData = [
  { label: 'Members', value: 1200, suffix: '+' },
  { label: 'Coaches', value: 16 },
  { label: 'Years', value: 8 },
  { label: 'Sessions', value: 25000, suffix: '+' },
]

export function About() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=1920&q=80"
          alt="Firehouse Fitness facility"
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
            <span className="inline-block w-12 h-1 bg-accent mb-6" />
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-primary text-white uppercase leading-none">
              The Firehouse <span className="text-accent">Legacy</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block w-12 h-1 bg-accent mb-6" />
              <h2 className="text-4xl md:text-5xl font-primary text-[#111111] uppercase leading-tight">
                Born from the <span className="text-accent">Firehouse</span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 font-body leading-relaxed">
                <p>
                  Firehouse Fitness was founded on the values that define the brave men and women who run toward danger when everyone else runs away. Discipline. Service. Brotherhood. Mental toughness. Leadership.
                </p>
                <p>
                  We are not a typical gym. We are a training ground for the dedicated — firefighters, military personnel, first responders, and anyone who shares their relentless work ethic.
                </p>
                <p>
                  Every piece of equipment, every program, every coach is selected to prepare you for the demands of real life. Because the strongest version of you is not just a goal. It is a responsibility.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden img-zoom">
                <img
                  src="https://images.unsplash.com/photo-1534256957339-8ba153d7c5ac?w=800&q=80"
                  alt="Training equipment"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 max-w-xs hidden md:block">
                <p className="text-white font-secondary uppercase tracking-wider text-sm font-semibold">Train Like The Brave</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden img-zoom">
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
                  alt="Team training"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#111111] p-6 max-w-xs hidden md:block">
                <p className="text-white font-secondary uppercase tracking-wider text-sm font-semibold">No One Fights Alone</p>
              </div>
            </motion.div>
            <motion.div className="order-1 lg:order-2" {...fadeUp}>
              <span className="inline-block w-12 h-1 bg-accent mb-6" />
              <h2 className="text-4xl md:text-5xl font-primary text-[#111111] uppercase leading-tight">
                Our <span className="text-accent">Mission</span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 font-body leading-relaxed">
                <p>
                  No one fights alone. That is not just a phrase — it is our operating principle. Firehouse Fitness is built on community, accountability, and the unshakable belief that we are stronger together.
                </p>
                <p>
                  Our mission is to provide the highest level of tactical fitness training in an environment that challenges, supports, and transforms. We measure our success not by dollars earned, but by lives changed.
                </p>
                <p>
                  Whether you are a seasoned athlete or taking your first step into fitness, you belong here. The only prerequisite is the willingness to work.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Values" subtitle="The principles that guide everything we do." />
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" {...stagger}>
            {values.map((v) => (
              <motion.div key={v.title} {...staggerItem} className="bg-[#F5F5F5] p-8">
                <v.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-2xl font-primary text-[#111111] uppercase mb-2">{v.title}</h3>
                <p className="text-gray-500 font-body leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Stats items={statsData} />
        </div>
      </section>

      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="The Facility" subtitle="Industrial. Functional. Built for performance." light />
          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" {...stagger}>
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className={`relative overflow-hidden img-zoom group cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''} ${i === 7 ? 'col-span-2' : ''}`}
                {...staggerItem}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover min-h-[200px]" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-secondary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">{img.caption}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA
        title="Join the Crew"
        subtitle="Become part of something bigger than yourself."
        buttonText="Become a Member"
        buttonHref="/membership"
      />
    </>
  )
}
