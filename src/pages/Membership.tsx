import { motion } from 'framer-motion'
import { Check, X, Shield, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PricingCard } from '@/components/ui/PricingCard'
import { Accordion } from '@/components/ui/Accordion'
import { CTA } from '@/components/ui/CTA'
import { plans, discounts, comparisonData, faq } from '@/data/membership'

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

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

export function Membership() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
          alt="Gym training"
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
              Earn Your Spot <span className="text-accent">on the Rig</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg font-body max-w-xl mx-auto">
              Choose your membership. Commit to the mission.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Choose Your Path" subtitle="Three memberships, one mission: build the strongest version of you." />
          <motion.div className="grid md:grid-cols-3 gap-8" {...stagger}>
            {plans.map((plan) => (
              <motion.div key={plan.id} {...staggerItem}>
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Honoring Those Who Serve" subtitle="We are proud to offer exclusive discounts for our everyday heroes." light />
          <motion.div className="grid md:grid-cols-3 gap-8" {...stagger}>
            {discounts.map((d) => (
              <motion.div key={d.title} {...staggerItem} className="bg-white/5 border border-white/10 p-8 text-center">
                <span className="text-4xl block mb-4">{d.icon}</span>
                <h3 className="text-2xl font-primary text-white uppercase mb-2">{d.title}</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">{d.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Compare Plans" subtitle="See exactly what each membership includes." />
          <motion.div className="overflow-x-auto" {...fadeUp}>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#111111]">
                  <th className="py-4 pr-4 font-secondary font-semibold text-[#111111] uppercase tracking-wider">Feature</th>
                  <th className="py-4 px-4 font-secondary font-semibold text-[#111111] uppercase tracking-wider text-center">Recruit</th>
                  <th className="py-4 px-4 font-secondary font-semibold text-accent uppercase tracking-wider text-center">Professional</th>
                  <th className="py-4 px-4 font-secondary font-semibold text-[#111111] uppercase tracking-wider text-center">Captain</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100">
                    <td className="py-4 pr-4 font-body text-gray-700">{row.feature}</td>
                    <td className="py-4 px-4 text-center">{renderCell(row.recruit)}</td>
                    <td className="py-4 px-4 text-center bg-accent/5">{renderCell(row.professional)}</td>
                    <td className="py-4 px-4 text-center">{renderCell(row.captain)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked Questions" subtitle="Everything you need to know before joining." />
          <motion.div className="max-w-3xl mx-auto" {...fadeUp}>
            <Accordion
              items={faq.map((item, i) => ({ id: `faq-${i}`, title: item.question, content: item.answer }))}
            />
          </motion.div>
        </div>
      </section>

      <CTA
        title="Join Today"
        subtitle="Your first session is free. No commitment, no pressure — just results."
        buttonText="Become a Member"
        buttonHref="/contact"
      />
    </>
  )
}

function renderCell(value: boolean | string) {
  if (typeof value === 'boolean') {
    return value
      ? <Check className="h-5 w-5 text-accent mx-auto" />
      : <X className="h-5 w-5 text-gray-300 mx-auto" />
  }
  return <span className="font-body text-sm text-gray-600">{value}</span>
}
