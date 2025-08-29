import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export function Button({ 
  className = "", 
  variant = "default", 
  size = "default", 
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";
  
  const variantClasses = {
    default: "bg-mila-terracotta text-mila-white hover:bg-mila-terracotta",
    outline: "border border-mila-teal text-mila-teal hover:bg-mila-teal",
    ghost: "hover:bg-mila-cream"
  };
  
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8"
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}