import { FaJsSquare, FaPython, FaHtml5, FaCss3, FaNode, FaReact, FaGit, FaGithub, FaCloud, FaBrain, FaRobot, FaBootstrap } from 'react-icons/fa';

const skills = [
    { title: "Javascript", icon: <FaJsSquare /> },
    { title: "Python", icon: <FaPython /> },
    { title: "HTML5", icon: <FaHtml5 /> },
    { title: "CSS3", icon: <FaCss3 /> },
    { title: "Node.js", icon: <FaNode /> },
    { title: "React", icon: <FaReact /> },
    { title: "Git", icon: <FaGit /> },
    { title: "GitHub", icon: <FaGithub /> },
    { title: "Deployment", icon: <FaCloud /> },
    { title: "Machine Learning", icon: <FaBrain /> },
    { title: "AI/LLM", icon: <FaRobot /> },
];

const Skills = () => {
  return (
    <section style={{ padding: 'var(--space-8) 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-color)', overflow: 'hidden' }}>
        
        <div style={{ display: 'flex', gap: '4rem', width: 'max-content' }} className="marquee-content">
             {/* Duplicate for infinite loop */}
             {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                 <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.7, fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                     <span style={{ fontSize: '2rem', color: 'var(--accent-primary)' }}>{skill.icon}</span>
                     <span>{skill.title}</span>
                 </div>
             ))}
        </div>

        <style>{`
            .marquee-content {
                animation: marquee 40s linear infinite;
            }
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}</style>
    </section>
  );
};

export default Skills;
