import { Flex, Box, Text, Button } from "@chakra-ui/react";
import './WorkProcess.css';


function WorkProcess() {

    const scrollToSection = () => {
        document.getElementById("contact-me").scrollIntoView();
    }

    return (
        <article
            className="what-i-do-container"
            >
            <div
                className="what-i-do"
                >
                <Box
                    className="first-text"
                    minHeight={'576px'}
                    maxWidth={'648px'}
                    direction={'column'}
                    >
                    <div>
                        <h1>What I Do</h1>
                    </div>
                    <Text opacity={'0.8'}>
                        As a full-stack developer with a passion for both design
                        and functionality, I specialize in creating intuitive,
                        user-centered web applications. I bridge the gap between
                        frontend and backend development to ensure that each project
                        not only looks great but also performs efficiently.
                    </Text>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <Text opacity={'0.8'}>
                        I am experienced in using frameworks such as React for
                        frontend development and Django, Flask, or Node.js for
                        backend architecture. From developing RESTful APIs and
                        implementing user authentication to integrating third-party
                        services and deploying applications, I take a holistic
                        approach to web development.
                    </Text>
                    <Button onClick={scrollToSection}>Say Hi</Button>
                </Box>
                <Box
                    className="work-process-cards"
                    display={'flex'}
                    alignItems={'center'}
                    minHeight={'576px'}
                    maxWidth={'648px'}
                    >
                    <Flex
                        direction={'column'}
                        gap={'4'}
                        >
                        <Box
                            minHeight={'100px'}
                            maxWidth={'648px'}
                            className="box"
                            >
                            <Text
                                className="heading"
                                >
                                User Experience And User interface
                            </Text>
                            <Text
                                color={'black'}
                                >
                                I design user interfaces and experiences that are
                                functional and visually engaging, ensuring intuitive
                                interaction with products.
                            </Text>
                        </Box>
                        <Box
                            minHeight={'100px'}
                            maxWidth={'648px'}
                            className="box"
                            >
                            <Text className="heading">Frontend Development</Text>
                            <Text color={'black'}>
                                I build responsive, dynamic web applications
                                using modern frontend technologies like React,
                                Chakra ui and Bootstrap.
                            </Text>
                        </Box>
                        <Box
                            minHeight={'100px'}
                            maxWidth={'648px'}
                            className="box"
                            >
                            <Text className="heading">Backend Development</Text>
                            <Text color={'black'}>
                                My backend development expertise involves
                                designing and maintaining robust server-side
                                logic, ensuring the seamless integration of
                                front and back-end systems using technologies
                                like Node.js, Express, and Django.
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </div>
        </article>
    )
}

export default WorkProcess;