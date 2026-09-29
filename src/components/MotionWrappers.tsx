import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

// Smooth cubic bezier easing
export const transitionEase = [0.16, 1, 0.3, 1] as const;

// Section Viewport Entrance Animation
export const MotionSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}> = ({ children, className = '', delay = 0, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Stagger Container for Grids and Lists
export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = '', staggerDelay = 0.08 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger Item Child
export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Card Hover Wrapper with lift and subtle shadow expansion
export const HoverCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = '', onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        y: -6,
        transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
      }}
      whileTap={{
        scale: 0.99,
        transition: { duration: 0.1 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Animated Interactive Button
export const AnimatedButton: React.FC<
  HTMLMotionProps<'button'> & {
    children: React.ReactNode;
    className?: string;
  }
> = ({ children, className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.025, transition: { duration: 0.18 } }}
      whileTap={{ scale: 0.975, transition: { duration: 0.1 } }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Continuous Marquee Ribbon
export const MarqueeRibbon: React.FC<{ items: string[]; speed?: number }> = ({
  items,
  speed = 25,
}) => {
  return (
    <div className="relative w-full overflow-hidden py-3 border-y border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/40 dark:bg-zinc-900/40 backdrop-blur-xs select-none">
      <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent pointer-events-none" />

      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xs font-mono font-medium tracking-wider text-zinc-600 dark:text-zinc-400 uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" aria-hidden="true" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
