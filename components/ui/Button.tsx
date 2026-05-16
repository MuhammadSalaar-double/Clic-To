import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "neon";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base = "rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-luxury-gold text-white hover:bg-amber-600 shadow-lg",
    secondary: "glass text-luxury-charcoal hover:shadow-xl",
    neon: "bg-transparent border-2 border-neon-pink text-neon-pink neon-text hover:bg-neon-pink/10",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}