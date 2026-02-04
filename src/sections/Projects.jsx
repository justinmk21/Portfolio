import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

// Import images
import image6 from '../images/promo2.jpg'; // Cosmetic Store
import image5 from '../images/EstateHouse.jpg'; // Real Estate
import laptop from '../images/Laptop.jpg'; // Chatbot
import car from '../images/car.jpg'; // Morent

const projectsData = [
    {
      id: 1,
      title: "Cosmetic Store",
      description: "An online cosmetic store for easy skincare and makeup shopping.",
      image: image6,
      link: 'https://justinmk21.github.io/Lenature/',
      repoLink: 'https://github.com/justinmk21/Lenature.git',
      featured: true // Takes up more space
    },
    {
      id: 2,
      title: "Real Estate App",
      description: "Modern web application designed for seamless property management.",
      image: image5,
      link: 'https://justinmk21.github.io/NolaEstates/',
      repoLink: 'https://github.com/justinmk21/NolaEstates.git',
    },
    {
      id: 3,
      title: "Chatbot - AI Multi-LLM",
      description: "Connecting OpenAI, Google Studio, and Hugging Face to generate text and images instantly.",
      image: laptop,
      link: "https://alexa-beryl.vercel.app/",
      repoLink: "https://github.com/justinmk21/Alexa",
    },
    {
      id: 4,
      title: "Morent - Car Rental",
      description: "Smart car rental platform with AI-powered search and chatbot assistance.",
      image: car,
      link: "https://morent-nu.vercel.app/",
      repoLink: "https://github.com/justinmk21/Morent-Frontend",
    },
];

const Projects = () => {
    return (
        <section id="work" style={{ padding: 'var(--space-16) 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                        marginBottom: 'var(--space-4)',
                        letterSpacing: '-0.02em'
                    }}>
                        Selected <span className="text-gradient">Work</span>
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(1, 1fr)',
                    gap: 'var(--space-4)',
                }}
                className="md:grid-cols-2 lg:grid-cols-12 auto-rows-[400px]"
                >
                    {/* CSS doesn't support 'md:' inside style prop easily without inline media queries or clsx+tailwind classes.
                        Since we are not strictly using Tailwind for grid, we will use basic inline styles + media queries in global css OR just simple grid logic.
                        Actually, let's use a classname and add it to global.css or just use style for simple layout.
                        
                        To achieve the Bento look:
                        Item 1: span 2 cols (or 7/12)
                        Item 2: span 1 col (or 5/12)
                        Item 3: span 1 col (or 5/12)
                        Item 4: span 2 cols (or 7/12)
                    */}
                    
                    {/* 
                        Note: Since I don't have full tailwind enabled properly (I removed bootstrap but I am not sure if tailwind is fully configured, 
                        I see 'index.css' has @tailwind directives usually? The user's index.css was 109 bytes. 
                        I will assume raw CSS Grid is safer.
                    */}
                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px', width: '100%' }}>
                        
                        {/* Project 1 - Large */}
                        <div style={{ gridColumn: 'span 12', height: '500px' }} className="lg:col-span-8">
                             <ProjectCard project={projectsData[0]} className="h-full" />
                        </div>

                         {/* Project 2 - Small */}
                        <div style={{ gridColumn: 'span 12', height: '500px' }} className="lg:col-span-4">
                             <ProjectCard project={projectsData[1]} className="h-full" />
                        </div>

                        {/* Project 3 - Small */}
                        <div style={{ gridColumn: 'span 12', height: '500px' }} className="lg:col-span-5">
                             <ProjectCard project={projectsData[2]} className="h-full" />
                        </div>
                        
                        {/* Project 4 - Large */}
                        <div style={{ gridColumn: 'span 12', height: '500px' }} className="lg:col-span-7">
                             <ProjectCard project={projectsData[3]} className="h-full" />
                        </div>

                     </div>
                </div>
            </div>
            
            {/* Responsive Helper - We actually need media queries for the grid columns. 
                I will inject a style tag or update global.css. 
                The 'lg:col-span-X' classes won't work if Tailwind isn't processing them.
                I'll verify if tailwind is present. Package.json didn't show tailwindcss as dev dependency.
                So I MUST use standard CSS media queries.
            */}
            <style>{`
                @media (min-width: 1024px) {
                    .lg\\:col-span-8 { grid-column: span 8 !important; }
                    .lg\\:col-span-4 { grid-column: span 4 !important; }
                    .lg\\:col-span-5 { grid-column: span 5 !important; }
                    .lg\\:col-span-7 { grid-column: span 7 !important; }
                }
            `}</style>
        </section>
    );
};

export default Projects;
