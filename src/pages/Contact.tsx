import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTA } from '@/components/ui/CTA'

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
  transition: { staggerChildren: 0.1 },
}

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567' },
  { icon: Mail, label: 'Email', value: 'info@firehousefitness.com', href: 'mailto:info@firehousefitness.com' },
  { icon: MapPin, label: 'Address', value: '1428 Valor Ave, Suite 200\nAustin, TX 78701' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri: 5AM-9PM\nSat: 6AM-6PM\nSun: 7AM-4PM' },
]

interface FormData {
  name: string
  phone: string
  email: string
  message: string
}

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs: Partial<FormData> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address'
    if (!form.message.trim()) errs.message = 'Message is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setForm({ name: '', phone: '', email: '', message: '' })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80"
          alt="Contact Firehouse Fitness"
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
              Sound <span className="text-accent">Off</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg font-body max-w-xl mx-auto">
              Ready to start your journey? Reach out and we will get back to you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeUp}>
              <SectionHeader title="Get in Touch" subtitle="Have a question or ready to start? Drop us a line." align="left" />
              {submitted ? (
                <motion.div
                  className="bg-accent/5 border border-accent/20 p-8 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <h3 className="text-2xl font-primary text-[#111111] uppercase mb-2">Message Sent!</h3>
                  <p className="text-gray-600 font-body">Thank you for reaching out. We will be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-secondary uppercase tracking-wider text-gray-700 font-semibold mb-1">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[#F5F5F5] border ${errors.name ? 'border-accent' : 'border-transparent'} focus:border-accent focus:outline-none transition-colors font-body`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-accent font-body">{errors.name}</p>}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-secondary uppercase tracking-wider text-gray-700 font-semibold mb-1">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F5F5F5] border border-transparent focus:border-accent focus:outline-none transition-colors font-body"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-secondary uppercase tracking-wider text-gray-700 font-semibold mb-1">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-[#F5F5F5] border ${errors.email ? 'border-accent' : 'border-transparent'} focus:border-accent focus:outline-none transition-colors font-body`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-accent font-body">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-secondary uppercase tracking-wider text-gray-700 font-semibold mb-1">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[#F5F5F5] border ${errors.message ? 'border-accent' : 'border-transparent'} focus:border-accent focus:outline-none transition-colors font-body resize-none`}
                      placeholder="Tell us about your goals..."
                    />
                    {errors.message && <p className="mt-1 text-xs text-accent font-body">{errors.message}</p>}
                  </div>
                  <Button type="submit" variant="primary" size="lg">
                    Send Message <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-secondary font-semibold text-[#111111] uppercase tracking-wider text-sm">{info.label}</h4>
                      {info.href ? (
                        <a href={info.href} className="text-gray-600 font-body text-sm hover:text-accent transition-colors">{info.value}</a>
                      ) : (
                        <p className="text-gray-600 font-body text-sm whitespace-pre-line">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#F5F5F5] h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm font-body">1428 Valor Ave, Suite 200, Austin, TX 78701</p>
                  <a
                    href="https://maps.google.com/?q=1428+Valor+Ave+Suite+200+Austin+TX+78701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm font-secondary uppercase tracking-wider hover:text-highlight transition-colors mt-2 inline-block"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA
        title="Book Your Free Trial"
        subtitle="Your first session is on us. Come feel the Firehouse difference."
        buttonText="Claim Your Free Session"
        buttonHref="/contact"
      />
    </>
  )
}
