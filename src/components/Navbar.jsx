import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
             setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        "fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-full border transition-all duration-300",
        scrolled 
            ? "bg-surface/80 border-white/10 backdrop-blur-md shadow-lg" 
            : "bg-transparent border-transparent"
      )}
      style={{
        backgroundColor: scrolled ? 'rgba(18, 18, 18, 0.6)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        border: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent'
      }}
    >
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a 
                href={link.href} 
                className="text-sm font-medium text-secondary hover:text-white transition-colors relative group"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-primary transition-all duration-300 group-hover:w-full" 
                    style={{ backgroundColor: 'var(--accent-primary)' }}/>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
