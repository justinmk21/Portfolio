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
                    <div
                        style={{ marginBottom: '20px' }}
                        >
                        <h1>What I Do</h1>
                    </div>
                    <Text color={'#87909D'}>
                        I develop modern web applications that focus on usability, 
                        performance, and clean visual design. My goal is to create 
                        digital experiences that are both functional and enjoyable to use.
                    </Text>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <Text color={'#87909D'}>
                        From frontend interfaces to backend logic, I use modern tools 
                        and frameworks to deliver fast, reliable web applications.
                    </Text>
                    <Button
                        style={{ margin: '30px 0' }}
                        onClick={scrollToSection}>
                        Say Hi
                    </Button>
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
                            className="boxes"
                            >
                            <Text
                                className="heading"
                                >
                                AI Software Development
                            </Text>
                            <Text
                                color={'#87909D'}
                                >
                                I develop intelligent software solutions that use 
                                artificial intelligence to automate processes, analyze 
                                data, and enhance application functionality.
                            </Text>
                        </Box>
                        <Box
                            minHeight={'100px'}
                            maxWidth={'648px'}
                            className="boxes"
                            >
                            <Text className="heading">Frontend Development</Text>
                            <Text color={'#87909D'}>
                                I build responsive, data-driven interfaces for 
                                AI-powered applications using modern frontend 
                                technologies like React, Chakra UI, and Bootstrap.
                            </Text>
                        </Box>
                        <Box
                            minHeight={'100px'}
                            maxWidth={'648px'}
                            className="boxes"
                            >
                            <Text className="heading">Backend Development</Text>
                            <Text color={'#87909D'}>
                                I design and maintain backend systems, integrating 
                                APIs, AI models and server-side logic technologies 
                                like Node.js, Express, Django, and Python.
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </div>
        </article>
    )
}

export default WorkProcess;