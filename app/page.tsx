'use client';

import { useEffect, useRef, useState } from 'react';
import { personName } from '@/assets';
import {
  About,
  Contact,
  Experience,
  Hero,
  Load,
  Navbar,
  PricingPlans,
  Projects,
  Questions,
  Reviews,
  Skills,
  Toggle
} from '@/components';

export default function Home() {
  const [id, setId] = useState(0);
  const compsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const compsArr = Array.from(compsRef.current.children);
    compsArr.forEach((comp) => {
      observer.observe(comp);
    });
  }, []);
  return (
    <>
      <Load />
      <Toggle>
        <Navbar id={id} />
        <div className="w-min" ref={compsRef}>
          <Hero personName={personName} />
          <About />
          <Experience />
          <Skills />
          <Reviews />
          <Projects />
          <PricingPlans />
          <Contact />
          <Questions />
        </div>
      </Toggle>
    </>
  );
}
