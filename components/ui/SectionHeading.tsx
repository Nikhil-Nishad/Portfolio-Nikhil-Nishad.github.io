import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  className,
  align = 'left',
}) => {
  return (
    <div className={cn("space-y-3 mb-14", align === 'center' && "text-center mx-auto max-w-2xl", className)}>
      {eyebrow && (
        <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-gradient">
        {title}
      </h2>
      {description && (
        <p className="text-[#A1A1AA] text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
