/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CardBody, CardDescription, CardFooter, CardHeader, CardRoot, CardTitle } from '@chakra-ui/react/card'
import { VStack, Heading, Image, Text, Button, HStack } from "@chakra-ui/react";
import ButtonIcon from "./CommonIconButton";
import './Projects.css'


function Cards(props) {

    return (
            <CardRoot
                className='card'
                margin={'12px'}
                size={'sm'}
                onClick={props.handleClick}
                >
                <CardBody>
                    <Image borderRadius={'10px'} src={props.ImageSrc} />
                    <CardHeader color={'#fea8a8'}>Web Application</CardHeader>
                    <CardTitle>{props.title}</CardTitle>
                    <CardDescription>{props.description}</CardDescription>
                </CardBody>
            </CardRoot>
    )
};

export default Cards;
