import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface AchievementsProps {
  title: string;
  amount: number;
  mustShowCurrency?: boolean;
  mustShowK?: boolean;
  children: React.ReactNode;
}

const Achievements = ({
  title,
  amount,
  mustShowCurrency = false,
  mustShowK = false,
  children
}: AchievementsProps) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 10 });

  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    motionValue.set(amount);
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayNumber(Math.round(latest));
    });

    return () => unsubscribe();
  }, [amount]);

  return (
    <div className="flex items-end gap-x-3">
      <span className="text-4xl lg:text-2xl text-gray-300">{children}</span>
      <h1 className="flex flex-col gap-y-2">
        <motion.span
          className="text-2xl lg:text-xl font-light text-yellow-500"
          viewport={{ once: true }}
        >
          {mustShowCurrency && <span>$</span>}
          {displayNumber}
          {mustShowK && <span>K</span>}
          {mustShowCurrency && <span>M</span>}
          <span>+</span>
        </motion.span>
        <span className="text-sm tracking-wide text-gray-500 dark:text-white transition-colors">
          {title}
        </span>
      </h1>
    </div>
  );
};

export default Achievements;
