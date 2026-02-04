import { motion } from 'framer-motion';
import profileImg from '../images/kgomotso.png';

const About = () => {
  return (
    <section id="about" style={{ padding: 'var(--space-24) 0' }}>
        <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-12)' }} className="md:grid-cols-2 lg:grid-cols-2 items-center">
                
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ position: 'relative' }}
                >
                    <div style={{ 
                        borderRadius: 'var(--radius-lg)', 
                        overflow: 'hidden', 
                        border: '1px solid var(--border-light)',
                        height: '500px'
                    }}>
                        <img 
                            src={profileImg} 
                            alt="Kgomotso Mkhawane" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }}
                        />
                    </div>
                </motion.div>

                {/* Text Side */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: 'var(--space-6)', lineHeight: 0.9 }}
                    >
                        About <span className="font-serif italic font-normal text-gray-500">Me.</span>
                    </motion.h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                        {[
                            "I'm a passionate software developer based in South Africa, dedicated to building digital products that make a difference.",
                            "With a strong foundation in both frontend and backend technologies, I bridge the gap between design and engineering.",
                            "I believe that great software is not just about code—it's about creating intuitive, seamless experiences that solve real problems."
                        ].map((text, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 * index }}
                                viewport={{ once: true }}
                                style={{ fontSize: index === 0 ? '1.5rem' : '1.125rem', color: index === 0 ? 'var(--text-primary)' : 'var(--text-secondary)', lineHeight: 1.4, fontFamily: index === 0 ? 'var(--font-serif)' : 'inherit' }}
                            >
                                {text}
                            </motion.p>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                        style={{ marginTop: 'var(--space-8)' }}
                    >
                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                            <li>
                                <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Location</span>
                                South Africa
                            </li>
                            <li>
                                <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Experience</span>
                                2+ Years
                            </li>
                             <li>
                                <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Education</span>
                                AI Software Development
                            </li>
                             <li>
                                <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Availability</span>
                                <span style={{ color: '#22c55e' }}>● Open to work</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

            </div>
            
            {/* Grid Hack */}
            <style>{`
                @media (min-width: 768px) {
                    .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
                }
            `}</style>
        </div>
    </section>
  );
};

export default About;
