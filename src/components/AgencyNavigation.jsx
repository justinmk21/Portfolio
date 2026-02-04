import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

const navLinks = [
  { name: 'Home', href: '#home', label: '01' },
  { name: 'Work', href: '#work', label: '02' },
  { name: 'About', href: '#about', label: '03' },
  { name: 'Contact', href: '#contact', label: '04' },
];

const AgencyNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Stop Lenis if possible (we might need context for that, but CSS overflow hidden usually works)
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    return (
        <>
            {/* Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-8 right-8 z-[1000] w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group mix-blend-difference"
                style={{ cursor: 'none' }} 
            >
                <div className="relative w-6 h-4">
                    <span className={clsx("absolute left-0 w-full h-[2px] bg-white transition-all duration-300", isOpen ? "top-2 rotate-45" : "top-0")} />
                    <span className={clsx("absolute left-0 w-full h-[2px] bg-white transition-all duration-300", isOpen ? "top-2 opacity-0" : "top-2")} />
                    <span className={clsx("absolute left-0 w-full h-[2px] bg-white transition-all duration-300", isOpen ? "top-2 -rotate-45" : "top-4")} />
                </div>
            </button>

            {/* Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Exponential ease
                        className="fixed inset-0 z-[999] bg-[#050505] flex items-center justify-center"
                    >
                         {/* Background Grid/Noise (Optional) */}
                         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                        <nav className="relative z-10 flex flex-col gap-4 w-full max-w-4xl px-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 100, opacity: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
                                    className="group flex items-baseline gap-8 text-white no-underline border-b border-white/10 pb-4 hover:border-white/50 transition-colors"
                                    style={{ cursor: 'none' }}
                                >
                                    <span className="text-sm font-mono text-gray-500 group-hover:text-accent-primary transition-colors">
                                        {link.label}
                                    </span>
                                    <span className="text-6xl md:text-8xl font-display font-light uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500 ease-out">
                                        {link.name}
                                    </span>
                                </motion.a>
                            ))}
                        </nav>
                        
                        {/* Footer Info in Menu */}
                        <div className="absolute bottom-12 left-12 text-gray-500 font-mono text-xs">
                             <p>LOCATION: SOUTH AFRICA</p>
                             <p>LOCAL TIME: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AgencyNavigation;
