import { Heading, VStack, Box } from "@chakra-ui/react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import ButtonIcon from "./CommonIconButton";



function ProjectA() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <VStack maxWidth={"1280px"} minHeight={"100vh"}>
            <Box>
                <ButtonIcon handleClick={handleClick} Icon={<RiArrowLeftLine/>}/>
                <Heading margin={'60px'}>This is a project heading</Heading>
            </Box>
        </VStack>
    )
}

export default ProjectA