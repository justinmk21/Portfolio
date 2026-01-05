import { Flex, Box, Text } from "@chakra-ui/react";
import { FaPencilRuler, FaLaptop, FaBookOpen, FaChartLine } from "react-icons/fa";
import './WorkSteps.css';

function WorkSteps() {

    return (
        <article
            className="work-steps-display"
            >
            <div
                className="work-steps-stack"
                >
                <Box
                    maxWidth={'660px'}
                    minHeight={'600px'}
                    className="box-l"
                    >
                    <h1
                        style={{ marginBottom: '20px' }}
                        >
                        Work Process
                    </h1>
                    <Text>
                        I start with understading the problem and defining how 
                        artificial intelligence can add value. I plan data flow, 
                        model usage, and system architecture before building 
                        intelligence features an application logic using modern tools.
                    </Text>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <Text>
                        Once the logic is set in place, I integrate AI components with backend, connect APIs
                        and databases, and deploy systems using technologies like Node.js, Django, or Flask.
                    </Text>
                </Box>
                <div
                    className="four-cards"
                    >
                    <Flex
                        className="work-steps-cards"
                        direction={'column'}
                        gap={'6'}
                        >
                        <Box
                            maxWidth={'330px'}
                            minHeight={'276px'}
                            className="box"
                            color={'black'}
                            >
                            <Flex
                                flexDirection={'column'}
                                justifyItems={'center'}
                                >
                                <Box className="icon"><FaBookOpen/></Box>
                                <Text size={'sm'} fontWeight={'bold'}>1. Research</Text>
                                <p>
                                    I start by understanding the problem, data requirements and project
                                    goals through research and analysis, I identify where AI can add real value.                                    
                                </p>
                            </Flex>
                        </Box>
                        <Box
                            maxWidth={'330px'}
                            minHeight={'276px'}
                            backgroundColor={'#fff'}
                            color={'black'}
                            className="box"
                            >
                            <Box className="icon"><FaPencilRuler/></Box>
                            <Text size={'xs'} fontWeight={'bold'}>2. Design</Text>
                            <p>
                                I design the system architecture, data flow, and model structure, 
                                defining how AI interact with the application.
                            </p>
                        </Box>
                    </Flex>
                    <Flex
                        direction={'column'}
                        gap={'6'}
                        marginTop={'25px'}
                        >
                        <Box
                            maxWidth={'330px'}
                            minHeight={'276px'}
                            backgroundColor={'#fff'}
                            color={'black'}
                            className="box">
                            <Box className="icon"><FaChartLine/></Box>
                            <Text size={'xs'} fontWeight={'bold'}>3. Analyze</Text>
                            <p>
                                I test models, evaluate performance, and analyze outputs
                                to improve accuracy, efficiency, and reliability of the solution implemented.
                            </p>
                        </Box>
                        <Box
                            maxWidth={'330px'}
                            minHeight={'276px'}
                            backgroundColor={'#fff'}
                            color={'black'}
                            className="box"
                            >
                            <Box className="icon"><FaLaptop/></Box>
                            <Text size={'xs'} fontWeight={'bold'}>4. Launch</Text>
                            <p>
                                I deploy the appliocation, integrating AI models 
                                with backend systems, and ensure everything runs 
                                smoothly in a production environment.
                            </p>
                        </Box>
                    </Flex>
                </div>
            </div>
        </article>
    )
}

export default WorkSteps;