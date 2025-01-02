/* eslint-disable no-unused-vars */
import './AboutMe.css';
import { Heading, VStack, Text, Image } from "@chakra-ui/react";
import { AvatarIcon } from "@chakra-ui/react/avatar";
import Kgomotso from './assets/Justin.jpg';


function AboutMe() {

    return (
        <div
            className="message-container"
            >
            <div
                className='message'
                >
                <VStack
                    maxWidth="1280px"
                    minHeight="60vh"
                    alignItems={'center'}
                    >
                    <Image
                        src={Kgomotso}
                        border={'4px solid #ffcccc'}
                        boxSize="150px"
                        borderRadius="full"
                        fit="cover"
                        alt="Kgomotso Mkhawane"
                    />
                    <p>Kgomotso Mkhawane</p>
                    <h1>A Full Stack Developer</h1>
                    <p>
                        I am a Full Stack Software Developer Specialised in
                        React.js, Python Developer(Django), based in
                        Johannesburg, South Africa. I strive to develop
                        immersive and beautiful web applications
                        through carefully crafted code and user-cetric design.
                    </p>
                </VStack>
            </div>
        </div>
    )
}

export default AboutMe