/* eslint-disable no-unused-vars */
import './Projects.css';
import { VStack, Heading, Image, Box, Button, HStack, Alert, DialogRoot, DialogBody, DialogTitle, DialogContent, DialogTrigger } from "@chakra-ui/react";
import image1 from './images/photo1.jpg';
import image2 from './images/photo2.jpg';
import image3 from './images/photo3.jpg';
import image4 from './images/photo4.jpg';
import image5 from './images/EstateHouse.jpg';
import image6 from './images/promo2.jpg';
import computer from './images/computer.jpg';
import tech from './images/tech.jpg';
import laptop from './images/Laptop.jpg';
import car from './images/car.jpg';
import karola from './assets/karola.jpg'
import { CardBody, CardDescription, CardFooter, CardHeader, CardRoot, CardTitle } from '@chakra-ui/react/card'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { RiArrowRightLine, RiMailLine } from "react-icons/ri";
import { RiArrowLeftLine } from "react-icons/ri";
import ProjectA from './ProjectA';
import ButtonIcon from './CommonIconButton';
import Cards from './Card';
import { useState } from 'react';

const projects = [
  {
      title: "Justin 'n Beats",
      description:
        "An e-commerce platform for music lovers to buy and sell music.",
        link: "https://justinn-beats-kb3hprz4b-kgomotsos-projects-70a9ec9b.vercel.app/",
        repoLink: "https://github.com/justinmk21/JustinnBeats",
        repoApi: "",
      getImageSrc: karola,
    },
    {
      title: "Cosmetic Store",
      description:
        "An online cosmetic store for easy skincare and makeup shopping.",
      getImageSrc: image6,
      link: 'https://justinmk21.github.io/Lenature/',
      repoLink: 'https://github.com/justinmk21/Lenature.git',
      repoApi: '',
    },
    {
      title: "Chatbot",
      description:
        "Multi-LLM chatbot connecting OpenAI, Google Studio, and \
        Hugging Face to generate text and images instantly 🔥",
      getImageSrc: laptop,
      link: "https://alexa-beryl.vercel.app/",
      repoLink: "https://github.com/justinmk21/Alexa",
      repoApi: "https://github.com/justinmk21/Alexa-Server",
    },
    {
      title: "Morent",
      description:
        "A smart car rental platform with AI-powered search and chatbot assistance.",
        link: "https://morent-nu.vercel.app/",
        repoLink: "https://github.com/justinmk21/Morent-Frontend",
        repoApi: "https://github.com/justinmk21/Morent-Server",
      getImageSrc: car,
    },
    {
      title: "Real Estate App",
      description:
        "A modern and intuitive web application designed for seamless property \
        management and exploration.",
      getImageSrc: image5,
      link: 'https://justinmk21.github.io/NolaEstates/',
      repoLink: 'https://github.com/justinmk21/NolaEstates.git',
      repoApi: 'https://github.com/justinmk21/Real-Estate-API.git',
    },
  ];

function Projects() {

    const [add, setAdd] = useState(2);

    const handleButtonClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <section
          className='projects'
          id='projects'
          >
            <VStack
              maxWidth={"1320px"}
              >
                <h1
                  >
                    Featured Work
                </h1>
                <Box
                  className='project-items'
                >
                  {projects.slice(0, add).map((project) => (
                    <Cards
                      key={project.title}
                      ImageSrc={project.getImageSrc}
                      title={project.title}
                      description={project.description}
                      handleClick={() => {handleButtonClick(project.link)}}
                      gitRepoLink={project['repoLink']}
                      repoApi={project['repoApi']}
                    />
                  ))}
                </Box>
                {add < projects.length && (
                  <Button
                    onClick={() =>
                      setAdd(prevAdd => prevAdd + 2)
                    }
                    >
                      More
                  </Button>
                )}
            </VStack>
        </section>
    )
}

export default Projects
