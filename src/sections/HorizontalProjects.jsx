import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

import image6 from '../images/promo2.jpg';
import image5 from '../images/EstateHouse.jpg';
import laptop from '../images/Laptop.jpg';
import car from '../images/car.jpg';

const projects = [
    {
        id: 1,
        title: "Cosmetic Store",
        category: "E-Commerce",
        image: image6,
        link: 'https://justinmk21.github.io/Lenature/',
        year: "2024"
    },
    {
        id: 2,
        title: "Nola Estates",
        category: "Real Estate",
        image: image5,
        link: 'https://justinmk21.github.io/NolaEstates/',
        year: "2024"
    },
    {
        id: 3,
        title: "AI Chatbot",
        category: "Artificial Intelligence",
        image: laptop,
        link: "https://alexa-beryl.vercel.app/",
        year: "2023"
    },
    {
        id: 4,
        title: "Morent Rental",
        category: "Platform",
        image: car,
        link: "https://morent-nu.vercel.app/",
        year: "2023"
    } 
];

const HorizontalProjects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    let ctx = gsap.context(() => {
        gsap.fromTo(
            section,
            { translateX: 0 },
            {
                translateX: "-300vw", // 4 slides, so move 3 viewports worth? Adjust based on content width
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: trigger,
                    start: "top top",
                    end: "+=3000", // Distance to scroll
                    scrub: 1, // Smooth scrub
                    pin: true,
                    anticipatePin: 1
                }
            }
        );
    }, trigger);

    return () => ctx.revert();
  }, []);

  return (
    <div id="work" ref={triggerRef} className="overflow-hidden bg-bg-color relative">
        <div 
             ref={sectionRef} 
             className="flex h-screen w-[400vw]" // 400vw for 4 items full width
        >
            {projects.map((project, index) => (
                <div 
                    key={project.id} 
                    className="w-screen h-screen flex flex-col justify-center px-8 md:px-24 relative border-r border-white/5"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-center w-full max-w-[1600px] mx-auto">
                        
                        {/* Image Container with Parallax Potential */}
                        <div 
                            className="w-full md:w-3/5 aspect-video md:aspect-[16/9] relative overflow-hidden rounded-[2px]"
                            onClick={() => window.open(project.link, '_blank')}
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-none" 
                                // In a real "Awwwards" site, we would use WebGL here too, but simple scale is safe for now
                            />
                            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500" />
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-2/5 flex flex-col items-start gap-4">
                            <span className="font-mono text-accent-primary text-sm tracking-widest uppercase">
                                {project.year} — {project.category}
                            </span>
                            <h2 className="font-display text-6xl md:text-8xl text-white leading-[0.9] uppercase mix-blend-difference">
                                {project.title}
                            </h2>
                             <button
                                onClick={() => window.open(project.link, '_blank')}
                                className="mt-8 px-8 py-4 border border-white/20 rounded-full text-white font-mono text-sm hover:bg-white hover:text-black transition-all duration-300"
                            >
                                VIEW PROJECT
                            </button>
                        </div>

                    </div>
                    
                    {/* Big Background Number */}
                    <span 
                        className="absolute bottom-0 right-4 md:right-32 font-display font-bold text-[20vw] text-white/5 pointer-events-none leading-none -mb-8"
                    >
                        0{index + 1}
                    </span>

                </div>
            ))}
        </div>
    </div>
  );
};

export default HorizontalProjects;
