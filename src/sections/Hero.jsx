import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Starfield from '../components/Starfield';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} id="home" className="relative h-screen w-full overflow-hidden bg-bg-color">
      
      {/* 1. WebGL Background */}
      <Starfield />

      {/* 2. Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        
        <motion.div style={{ y, opacity, scale: textScale }} className="text-center">
            
            {/* Small eyebrow text */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-mono text-accent-secondary text-sm md:text-base tracking-[0.2em] mb-4 uppercase"
            >
                Kgomotso Mkhawane
            </motion.p>

            {/* Massive Headline */}
            <h1 className="flex flex-col items-center justify-center font-display font-bold text-white leading-[0.9] tracking-tighter mix-blend-difference">
                 <motion.span 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[12vw] md:text-[8rem]"
                 >
                    SOFTWARE
                 </motion.span>
                 <motion.span 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[12vw] md:text-[8rem] font-serif italic font-normal text-gray-400"
                    style={{ fontFamily: 'var(--font-serif)' }}
                 >
                    DEVELOPER
                 </motion.span>
            </h1>

        </motion.div>

      </div>

      {/* 3. Scroll Indicator */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs font-mono uppercase flex flex-col items-center gap-2"
      >
          <span>Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>

    </section>
  );
};

export default Hero;
