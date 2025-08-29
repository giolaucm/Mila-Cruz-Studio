import * as React from "react";

interface CollapsibleProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Collapsible({ open, onOpenChange, children }: CollapsibleProps) {
  return <div>{children}</div>;
}

export function CollapsibleTrigger({ 
  children, 
  asChild, 
  ...props 
}: { 
  children: React.ReactNode; 
  asChild?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, props);
  }
  return <div {...props}>{children}</div>;
}

export function CollapsibleContent({ 
  children, 
  className = "",
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}