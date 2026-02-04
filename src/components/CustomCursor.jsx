import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
            setIsHovered(true);
        } else {
            setIsHovered(false);
        }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
        style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            position: 'fixed',
            left: 0,
            top: 0,
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: '2px solid var(--accent-secondary)',
            pointerEvents: 'none',
            zIndex: 9999,
            mixBlendMode: 'difference'
        }}
        animate={{
            scale: isHovered ? 2.5 : 1,
            backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
            borderColor: isHovered ? 'transparent' : 'var(--accent-secondary)'
        }}
        transition={{ duration: 0.2 }}
    >
        {/* Inner dot */}
        {!isHovered && (
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '4px',
                height: '4px',
                backgroundColor: 'var(--accent-primary)',
                borderRadius: '50%'
            }} />
        )}
    </motion.div>
  );
};

export default CustomCursor;
