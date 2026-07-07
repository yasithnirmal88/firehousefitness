import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Flame, Shield, Users, Target, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Stats } from '@/components/ui/Stats'
import { Card } from '@/components/ui/Card'
import { CTA } from '@/components/ui/CTA'
import { classes } from '@/data/classes'
import { trainers } from '@/data/trainers'
import { testimonials } from '@/data/testimonials'
import { plans } from '@/data/membership'
import { galleryImages } from '@/data/gallery'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

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
}

const statsData = [
  { label: 'Members', value: 1200, suffix: '+' },
  { label: 'Coaches', value: 16 },
  { label: 'Years', value: 8 },
  { label: 'Sessions', value: 25000, suffix: '+' },
]

const values = [
  { icon: Shield, title: 'Discipline', desc: 'Every rep, every set, every day. Discipline is the bridge between goals and achievement.' },
  { icon: Users, title: 'Brotherhood', desc: 'You do not train alone. We build each other up, push each other forward.' },
  { icon: Target, title: 'Purpose', desc: 'Every workout has intent. No wasted movement. No wasted time.' },
]

export function Home() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <>
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=1920&q=80"
            alt="Firefighter training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-noise" />
        </motion.div>

        <motion.div className="relative z-10 h-full flex items-center" style={{ opacity: heroOpacity }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="inline-block text-accent font-secondary uppercase tracking-[0.2em] text-sm mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Firehouse Fitness
              </motion.span>
              <motion.h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-primary text-white uppercase leading-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Forged<br />Through <span className="text-accent">Fire.</span>
              </motion.h1>
              <motion.p
                className="text-2xl sm:text-3xl md:text-4xl font-primary text-white uppercase mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Built For Life.
              </motion.p>
              <motion.p
                className="mt-4 text-gray-300 text-lg font-body max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Train like the brave. Become stronger than yesterday.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button as="a" href="/membership" variant="primary" size="lg">
                  Join Today <ArrowRight className="h-5 w-5" />
                </Button>
                <Button as="a" href="/contact" variant="outline" size="lg">
                  Free Trial
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Stats items={statsData} />
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Firehouse" subtitle="We are not a gym. We are a brotherhood forged in discipline, built on service." />
          <motion.div className="grid md:grid-cols-3 gap-8" {...stagger}>
            {values.map((v) => (
              <motion.div key={v.title} {...staggerItem} transition={{ duration: 0.5 }}>
                <Card className="p-8 text-center h-full">
                  <v.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-primary text-[#111111] uppercase mb-2">{v.title}</h3>
                  <p className="text-gray-500 font-body leading-relaxed">{v.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Programs" subtitle="Battle-tested training protocols designed for real-world performance." light />
          <motion.div className="grid md:grid-cols-3 gap-8" {...stagger}>
            {classes.slice(0, 3).map((c) => (
              <motion.div key={c.id} {...staggerItem} transition={{ duration: 0.5 }}>
                <Card variant="dark" className="h-full flex flex-col">
                  <div className="relative overflow-hidden img-zoom aspect-video">
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <c.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-primary text-white uppercase">{c.title}</h3>
                    <p className="mt-2 text-gray-400 text-sm font-body leading-relaxed flex-1">{c.description}</p>
                    <div className="mt-4 flex gap-4 text-xs font-secondary uppercase tracking-wider text-gray-500">
                      <span>{c.duration}</span>
                      <span>{c.calories} cal</span>
                      <span>{c.difficulty}</span>
                    </div>
                    <Link to="/classes" className="mt-4 inline-flex items-center gap-1 text-accent text-sm font-secondary uppercase tracking-wider hover:text-highlight transition-colors">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center mt-12" {...fadeUp}>
            <Button as="a" href="/classes" variant="primary" size="lg">View All Programs</Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Meet Your Command" subtitle="Elite coaches with real military and tactical experience." />
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" {...stagger}>
            {trainers.slice(0, 4).map((t) => (
              <motion.div key={t.id} {...staggerItem} transition={{ duration: 0.5 }}>
                <Card className="h-full">
                  <div className="relative overflow-hidden img-zoom aspect-[3/4]">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-primary text-[#111111] uppercase">{t.name}</h3>
                    <p className="text-xs font-secondary uppercase tracking-wider text-accent font-semibold mt-0.5">{t.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center mt-12" {...fadeUp}>
            <Button as="a" href="/trainers" variant="secondary" size="lg">Meet All Trainers</Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Brotherhood Stories" subtitle="Real transformations from real members." />
          <motion.div className="grid md:grid-cols-3 gap-6" {...stagger}>
            {testimonials.slice(0, 3).map((t) => (
              <motion.div key={t.id} {...staggerItem} transition={{ duration: 0.5 }}>
                <Card className="p-6 h-full">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-highlight text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm font-body leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                    <div>
                      <div className="font-secondary font-semibold text-[#111111] uppercase tracking-wider text-sm">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.occupation}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center mt-12" {...fadeUp}>
            <Button as="a" href="/testimonials" variant="secondary" size="lg">Read More Stories</Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Choose Your Path" subtitle="Earn your spot on the rig. Three memberships. One mission." />
          <motion.div className="grid md:grid-cols-3 gap-8" {...stagger}>
            {plans.map((p) => (
              <motion.div key={p.id} {...staggerItem} transition={{ duration: 0.5 }}>
                <div className="relative bg-white border-2 overflow-hidden shadow-lg h-full flex flex-col">
                  {p.popular && (
                    <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1.5 text-xs font-secondary uppercase tracking-widest font-semibold z-10">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-primary text-[#111111] uppercase">{p.name}</h3>
                    <p className="mt-1 text-sm text-gray-500 font-body">{p.description}</p>
                    <div className="mt-4 mb-6">
                      <span className="text-4xl font-primary text-[#111111]">${p.price}</span>
                      <span className="text-gray-400 font-body ml-1">{p.period}</span>
                    </div>
                    <ul className="space-y-2 mb-8 flex-1">
                      {p.features.map((f) => (
                        <li key={f.name} className="flex items-center gap-2 text-sm font-body">
                          {f.included ? <Check className="h-4 w-4 text-accent flex-shrink-0" /> : <span className="w-4 flex-shrink-0" />}
                          <span className={f.included ? 'text-gray-700' : 'text-gray-400'}>{f.name}</span>
                        </li>
                      ))}
                    </ul>
                    <Button as="a" href="/membership" variant={p.popular ? 'primary' : 'secondary'} className="w-full">
                      {p.popular ? 'Get Started' : 'Learn More'}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="The Firehouse" subtitle="Where warriors are made. A look inside our facility." light />
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" {...stagger}>
            {galleryImages.slice(0, 8).map((img, i) => (
              <motion.div
                key={i}
                className={`relative overflow-hidden img-zoom group cursor-pointer ${i === 0 || i === 7 ? 'col-span-2 row-span-2' : ''}`}
                {...staggerItem}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover min-h-[200px]" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-secondary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.caption}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA
        title="Join the Crew"
        subtitle="Your first session is on us. Come experience the difference."
        buttonText="Become a Member"
        buttonHref="/membership"
      />
    </>
  )
}
