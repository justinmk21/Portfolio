/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import './AboutMe.css';
import { Heading, VStack, Text, Image, Flex } from "@chakra-ui/react";
import { AvatarIcon } from "@chakra-ui/react/avatar";
import Kgomotso from './assets/Justin.jpg';


function AboutMe() {

    return (
        <section
            className="message-container"
            >
            <article
                className='message'
                >
                <Flex
                    className='intro-contents'
                    justifyContent={'space-between'}
                    maxWidth="1280px"
                    width={'100%'}
                    minHeight="60vh"
                    alignItems={'center'}
                    >
                    <div
                        className='intro-card'
                        >
                        <h1>
                            Hello, I'm Kgomotso Mkhawane
                        </h1>
                        <p>
                            I am a Full Stack Software Developer Specialised in
                            React.js, Python Developer(Django), based in
                            Johannesburg, South Africa. I strive to develop
                            immersive and beautiful web applications
                            through carefully crafted code and user-cetric design.
                        </p>
                    </div>
                    <div
                        className='intro-image'
                        >
                        <Image
                            src={Kgomotso}
                            boxSize="400px"
                            borderRadius={'25px'}
                            fit="cover"
                            alt="Kgomotso Mkhawane"
                        />
                    </div>
                </Flex>
            </article>
        </section>
    )
}

export default AboutMe