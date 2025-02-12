'use client';

import React, { useEffect, useState } from 'react';
import Introduction from '@components/Hero/Introduction';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { heroIcons } from '@/assets';

const Hero: React.FC = () => {
  // Initialize with current window dimensions (with fallback values)
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: typeof window !== 'undefined' ? window.innerWidth : 1000,
    innerHeight: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  const [mouseMove, setMouseMove] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Update window dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowOffset({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    setMouseMove(true);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth || 1000], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight || 800], [10, -50]);

  const onClickTalkToMe = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="home"
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <motion.div
            className="flex items-center justify-center"
            style={{
              // Apply the transforms only if the mouse has moved
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: '0.1s'
            }}
          >
            <Image
              src="/person.png"
              alt="Person Image"
              width={500}
              height={500}
              priority
              className="h-auto w-[350px]"
            />
          </motion.div>
          <Introduction />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl"
        >
          {heroIcons.map((icon, i) => (
            <a
              href="#"
              key={i}
              className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
            >
              {icon}
            </a>
          ))}
        </motion.div>
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          onClick={onClickTalkToMe}
        >
          Talk to me
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
