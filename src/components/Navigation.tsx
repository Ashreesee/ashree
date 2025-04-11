import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Palette, Briefcase, Send, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const links = [
    { href: '#home', icon: <Home size={22} />, label: 'Home' },
    { href: '#work', icon: <Briefcase size={22} />, label: 'Work' },
    { href: '#process', icon: <Palette size={22} />, label: 'Process' },
    { href: '#contact', icon: <Send size={22} />, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleSectionVisibility = () => {
      const sections = links.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleSectionVisibility);
    return () => window.removeEventListener('scroll', handleSectionVisibility);
  }, []);

  return (
    <motion.nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl z-50 bg-white/10 backdrop-blur-lg shadow-lg rounded-full transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
      style={{
        boxShadow: "0 0 10px rgba(192, 132, 252, 0.8)",
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-400 animate-pulse"
        animate={{
          boxShadow: [
            "0 0 10px rgba(192,132,252,0.8)",
            "0 0 15px rgba(255,105,180,0.8)",
            "0 0 10px rgba(192,132,252,0.8)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="flex items-center justify-between px-6 py-3 relative">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
        >
          <motion.span
            className="text-xl font-bold text-white border-b-2 border-transparent"
            whileHover={{ borderColor: "rgb(192,132,252)" }}
          >
            Ashree Chaurasiya
          </motion.span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`flex items-center space-x-2 transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? "text-purple-400 font-bold animate-pulse"
                  : "text-white hover:text-purple-400"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                animate={
                  activeSection === link.href.substring(1)
                    ? {
                        textShadow: [
                          "0px 0px 5px rgba(192,132,252,1)",
                          "0px 0px 10px rgba(255,105,180,1)",
                          "0px 0px 5px rgba(192,132,252,1)",
                        ],
                      }
                    : {}
                }
              >
                {link.icon}
              </motion.div>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-14 left-0 w-full bg-black/80 backdrop-blur-lg rounded-b-lg shadow-lg md:hidden"
          >
            <div className="px-4 py-3 space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "bg-purple-500/20 text-purple-400 font-bold animate-pulse"
                      : "text-white hover:bg-purple-500/20 hover:text-purple-400"
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;