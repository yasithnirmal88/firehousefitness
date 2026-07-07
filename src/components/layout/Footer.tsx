import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { navLinks } from '@/data/navigation'

const programs = [
  'Firehouse Bootcamp',
  'Strength Training',
  'HIIT',
  'Functional Fitness',
  'Personal Training',
]

const hours = [
  { day: 'Mon – Fri', time: '5:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '6:00 AM – 6:00 PM' },
  { day: 'Sunday', time: '7:00 AM – 4:00 PM' },
]

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Flame className="h-7 w-7 text-accent" />
              <span className="text-xl font-primary text-white uppercase tracking-wider">
                Firehouse <span className="text-accent">Fitness</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm font-body leading-relaxed">
              Train like the brave. Become stronger than yesterday. Forged through fire, built for life.
            </p>
          </div>

          <div>
            <h4 className="font-secondary font-semibold text-white uppercase tracking-wider text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-accent text-sm font-body transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-secondary font-semibold text-white uppercase tracking-wider text-sm mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((p) => (
                <li key={p}>
                  <Link to="/classes" className="text-gray-400 hover:text-accent text-sm font-body transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-secondary font-semibold text-white uppercase tracking-wider text-sm mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm font-body">
                  <span className="text-gray-400">{h.day}</span>
                  <span className="text-white">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-secondary font-semibold text-white uppercase tracking-wider text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+15551234567" className="flex items-center gap-2 text-gray-400 hover:text-accent text-sm font-body transition-colors">
                  <Phone className="h-3.5 w-3.5" /> (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@firehousefitness.com" className="flex items-center gap-2 text-gray-400 hover:text-accent text-sm font-body transition-colors">
                  <Mail className="h-3.5 w-3.5" /> info@firehousefitness.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-gray-400 text-sm font-body">
                  <MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                  1428 Valor Ave, Suite 200<br />Austin, TX 78701
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-body">
            &copy; {new Date().getFullYear()} Firehouse Fitness. All rights reserved. Built for the brave.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-accent text-xs font-body transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-accent text-xs font-body transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
