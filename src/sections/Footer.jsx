import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" style={{ padding: 'var(--space-24) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center' }}>
            <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ 
                    fontSize: 'clamp(3rem, 10vw, 8rem)', 
                    lineHeight: 1, 
                    fontWeight: 700, 
                    marginBottom: 'var(--space-8)',
                    letterSpacing: '-0.03em'
                }}
            >
                Let's Work <br/> <span className="text-gradient">Together</span>
            </motion.h2>

            <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 style={{ marginBottom: 'var(--space-12)' }}
            >
                <a 
                    href="mailto:kgomotso.mkhawane@example.com" 
                    style={{ 
                        fontSize: 'clamp(1.2rem, 3vw, 2rem)', 
                        borderBottom: '2px solid var(--accent-primary)',
                        paddingBottom: '4px'
                    }}
                    className="hover:text-white transition-colors"
                >
                    Get in touch
                </a>
            </motion.div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-8)', color: 'var(--text-secondary)' }}>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>

            <div style={{ marginTop: 'var(--space-24)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                © {new Date().getFullYear()} Kgomotso Mkhawane. Crafted with React & Framer Motion.
            </div>
        </div>
    </footer>
  );
};

export default Footer;
