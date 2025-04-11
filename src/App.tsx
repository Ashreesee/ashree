import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Work from './pages/Work';
import Process from './pages/Process';
import Contact from './pages/Contact';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 text-white relative">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-purple-400 rounded-full mix-blend-screen pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: cursorVariant === "hover" ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <Navigation />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-lg rounded-full p-4 z-40"
        style={{ opacity }}
      >
        <motion.div
          className="w-2 h-2 bg-purple-400 rounded-full"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="snap-y snap-mandatory">
        <section id="home" className="snap-start">
          <Home />
        </section>

        <section id="work" className="snap-start">
          <Work />
        </section>

        <section id="process" className="snap-start">
          <Process />
        </section>

        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;