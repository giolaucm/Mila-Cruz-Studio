import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary";
}

export function Badge({ 
  className = "", 
  variant = "default", 
  ...props 
}: BadgeProps) {
  const baseClasses = "badge";
  
  const variantClasses = {
    default: "bg-mila-white text-mila-white border-mila-white",
    secondary: "bg-mila-sage text-mila-teal border-mila-sage"
  };
  
  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}