import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true, ...props }) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300 relative overflow-hidden",
        hoverEffect && "hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
