import { motion } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';

// Using simple SVG icons for now to avoid dependency hell if fontawesome/lucide isn't perfectly set up
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);


const ProjectCard = ({ project, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
        className={clsx(
            "relative overflow-hidden rounded-[24px] bg-surface group cursor-pointer border border-white/5",
            className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(project.link, '_blank')}
    >
        {/* Check if image is loaded properly in parent, assuming project.image is valid src */}
        <div className="absolute inset-0 z-0">
             <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ filter: 'brightness(0.6)' }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: isHovered ? -10 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display">{project.title}</h3>
                <p className="text-secondary text-base mb-4 line-clamp-2 md:line-clamp-none max-w-md">
                    {project.description}
                </p>
            </motion.div>

            <motion.div 
                className="flex gap-4 items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3 }}
            >
                {project.link && (
                    <button 
                        onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank'); }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-sm font-medium transition-colors border border-white/10"
                    >
                        <ExternalLinkIcon /> Live Demo
                    </button>
                )}
                {project.repoLink && (
                    <button 
                         onClick={(e) => { e.stopPropagation(); window.open(project.repoLink, '_blank'); }}
                         className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors border border-white/10"
                         title="View Source"
                    >
                        <GithubIcon />
                    </button>
                )}
            </motion.div>
        </div>
    </motion.div>
  );
};

export default ProjectCard;
