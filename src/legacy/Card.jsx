/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CardBody, CardDescription, CardFooter, CardHeader, CardRoot, CardTitle } from '@chakra-ui/react/card'
import { VStack, Heading, Image, Text, Button, HStack, Flex } from "@chakra-ui/react";
import ButtonIcon from "./CommonIconButton";
import { FaGithub } from 'react-icons/fa';
import './Projects.css'


function Cards({ handleClick, ImageSrc, title, description, gitRepoLink, repoApi }) {

    return (
            <CardRoot
                className='card'
                margin={'12px'}
                size={'sm'}
                onClick={handleClick}
                >
                <CardBody>
                    <Image
                        borderRadius={'10px'}
                        boxSize={'fit'}
                        src={ImageSrc}
                        maxHeight={'380px'}
                        height={'100%'}
                        />
                    <CardHeader color={'#87909D'}>Web Application</CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription color={'#556070'}>
                        {description}
                    </CardDescription>
                    <CardFooter>
                        <Button
                            className='repo-link'
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(gitRepoLink, '_blank');

                            }}
                            style={{
                                marginTop: '20px',
                                border: '1px solid lightgray',
                            }}>
                            <Flex alignItems={'center'}><FaGithub size="3x"/>(src)</Flex>
                        </Button>
                        <Button
                            className='repo-link'
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(repoApi, '_blank');

                            }}
                            style={{
                                marginTop: '20px',
                                border: '1px solid lightgray',
                            }}>
                            <Flex alignItems={'center'}><FaGithub size="3x"/>(api)</Flex>
                        </Button>
                    </CardFooter>
                </CardBody>
            </CardRoot>
    )
};

export default Cards;
