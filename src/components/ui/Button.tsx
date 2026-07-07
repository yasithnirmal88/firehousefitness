import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import type { MotionProps } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
}

const variants = {
  primary: 'bg-accent text-white hover:bg-red-700 hover-glow border border-accent',
  secondary: 'bg-[#111111] text-white hover:bg-[#2a2a2a] border border-white/10',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-[#111111]',
  ghost: 'text-white/80 hover:text-white hover:bg-white/5',
}

const sizes = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-lg',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps & MotionProps>(
  ({ className, variant = 'primary', size = 'md', as = 'button', href, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 font-secondary font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer',
      variants[variant],
      sizes[size],
      className
    )

    if (as === 'a' && href) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
export { Button }
