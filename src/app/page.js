'use client';
import { useState, useRef, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

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
      }, { threshold: 0.3 },
    )
    const compsArr = Array.from(compsRef.current.children);
    compsArr.forEach((comp) => {
      observer.observe(comp);
    });
  }, []);
  return (
    <>
      <Navbar id={id} />
      <div ref={compsRef}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}