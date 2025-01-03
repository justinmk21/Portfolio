/* eslint-disable no-unused-vars */
import './Projects.css';
import { VStack, Heading, Image, Box, Button, HStack, Alert } from "@chakra-ui/react";
import image1 from './images/photo1.jpg';
import image2 from './images/photo2.jpg';
import image3 from './images/photo3.jpg';
import image4 from './images/photo4.jpg';
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
      title: "React Space",
      description:
        "Handy tool belt to create amazing AR components in a React app, with \
        redux integration via middleware️",
      getImageSrc: image1,
    },
    {
      title: "React Infinite Scroll",
      description:
        "A scrollable bottom sheet with virtualisation support, native animations\
         at 60 FPS and fully implemented in JS land 🔥️",
      getImageSrc: image2,
    },
    {
      title: "Photo Gallery",
      description:
        "A One-stop shop for photographers to share and monetize their photos, \
        allowing them to have a second source of income",
      getImageSrc: image3,
    },
    {
      title: "Event planner",
      description:
        "A mobile application for leisure seekers to discover unique events and \
        activities in their city with a few taps",
      getImageSrc: image4,
    },
  ];

function Projects() {

    const [add, setAdd] = useState(2);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('projects');
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
                    Projects
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
                      handleClick={handleButtonClick}
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
