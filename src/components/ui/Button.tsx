import { cn } from "@/lib/utils/cn"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          
          // Sizes
          {
            'px-3 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md', 
            'px-8 py-4 text-lg': size === 'lg',
          },
          
          // Variants with Coffee Cabana colors
          {
            'bg-berry-red text-white hover:bg-berry-red/90 focus:ring-berry-red shadow-lg hover:shadow-xl transform hover:scale-105': variant === 'primary',
            'bg-coffee-brown text-white hover:bg-coffee-brown/90 focus:ring-coffee-brown': variant === 'secondary',
            'border-2 border-white text-white hover:bg-white hover:text-coffee-brown focus:ring-white': variant === 'outline',
          },
          
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }