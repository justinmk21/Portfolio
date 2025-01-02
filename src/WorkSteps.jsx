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
                    <h1>Work Process</h1>
                    <Text>
                        My development process begins with creating a user-centric
                        design in Figma, ensuring the interface is both intuitive
                        and visually appealing. During this stage, I focus on
                        user experience (UX) principles, paying close attention
                        to layout, accessibility, and responsiveness across devices.
                        After finalizing the UI, I translate the design into clean,
                        structured code using modern frontend frameworks like React.
                    </Text>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <Text>
                        Once the frontend is fully developed, I proceed to
                        integrate it with the backend. Leveraging robust
                        technologies like Django or Flask, I build and connect
                        the necessary APIs, database models, and authentication
                        mechanisms to create a fully functional web application.
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
                            <Box className="icon"><FaBookOpen/></Box>
                            <Text size={'sm'} fontWeight={'bold'}>1. Research</Text>
                            <p>
                                I begin by understanding user needs and project
                                goals through research and analysis, ensuring
                                the design solves real problems.
                            </p>
                        </Box>
                        <Box
                            maxWidth={'330px'}
                            minHeight={'276px'}
                            backgroundColor={'#ccf2ff'}
                            color={'black'}
                            className="box"
                            >
                            <Box className="icon"><FaPencilRuler/></Box>
                            <Text size={'xs'} fontWeight={'bold'}>2. Design</Text>
                            <p>
                                Using tools like Figma, I create wireframes and
                                prototypes that focus on a clean, user-friendly
                                interface and seamless experience.
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
                            backgroundColor={'aqua'}
                            color={'black'}
                            className="box">
                            <Box className="icon"><FaChartLine/></Box>
                            <Text size={'xs'} fontWeight={'bold'}>3. Analyze</Text>
                            <p>
                                I review the design, testing user interactions
                                and functionality to refine and improve the
                                product for optimal usability.
                            </p>
                        </Box>
                        <Box
                            maxWidth={'330px'}
                            minHeight={'276px'}
                            backgroundColor={'aqua'}
                            color={'black'}
                            className="box"
                            >
                            <Box className="icon"><FaLaptop/></Box>
                            <Text size={'xs'} fontWeight={'bold'}>4. Launch</Text>
                            <p>
                                I implement the design into a fully functional
                                web application, integrating both front-end and
                                back-end to deliver a complete solution.
                            </p>
                        </Box>
                    </Flex>
                </div>
            </div>
        </article>
    )
}

export default WorkSteps;