import { Star } from 'lucide-react';
import { cn } from '../../lib/cn';

interface StarsProps {
  rating: number;
  className?: string;
  /** Tailwind size class for each star. */
  size?: string;
}

/** Five-star rating with an accessible text label. */
export function Stars({ rating, className, size = 'size-5' }: StarsProps) {
  return (
    <span
      role="img"
      aria-label={`Rated ${rating} out of 5`}
      className={cn('inline-flex gap-0.5', className)}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn(
            size,
            i <= Math.round(rating) ? 'fill-amber-500 text-amber-500' : 'text-border',
          )}
        />
      ))}
    </span>
  );
}
