import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Flame } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { navLinks } from '@/data/navigation'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrollPosition(50)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
        scrolled || !isHome
          ? 'bg-[#111111]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Flame className="h-8 w-8 text-accent group-hover:text-highlight transition-colors" />
            <span className="text-2xl font-primary text-white uppercase tracking-wider">
              Firehouse <span className="text-accent">Fitness</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-secondary uppercase tracking-wider transition-colors',
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-[#111111] border-t border-white/5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block px-4 py-3 font-secondary uppercase tracking-wider text-sm transition-colors',
                      isActive ? 'text-accent bg-white/5' : 'text-white/60 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
