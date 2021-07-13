import React from 'react'
import { Box, Text, Heading, Flex, Image,Container } from '@chakra-ui/react'
import js from '../../assets/js.PNG'
import AI from '../../assets/AI.PNG'
import cyber from '../../assets/cyber.PNG'
import Fraud from '../../assets/Fraud.PNG'
import Chatbot from '../../assets/Chatbot.PNG'
import html_css from '../../assets/js.PNG'
import IoT from '../../assets/IoT.PNG'
import Watson from '../../assets/Watson.PNG'
import web from '../../assets/web.PNG'

function Certifications() {

    const Pic = ({src, alt}) => {
        return(
        <Box borderWidth={2} borderColor='blue.900' borderRadius='6px' mr={16} _hover={{background:'red'}}  w='22rem'>
            <Image src={src} alt={alt} h='12rem'/>
        </Box>
        )
    }

    return (
        <Box px={32}  pt={10}>
            <Text fontSize={24} pt={5}>
               My <br /> <Heading as='span' fontSize={32} py={2} color='blue.600'> Certifications</Heading>
           </Text>
           <Container maxW='90rem' mx='auto'>
            <Flex pt={10} justify='center'>
               <Pic src={js} alt='Javascript'/>
               <Pic src={AI} alt='Artificial Intelligence'/>
               <Pic src={Chatbot} alt='Chatbot Design'/>
            </Flex>
            <Flex  pt={10} justify='center'>
               <Pic src={web} alt='Web Development'/>
               <Pic src={Watson} alt='Watson Assistance'/>
                <Pic src={IoT} alt='Internet of Things'/>
            </Flex>
            <Flex  pt={10} justify='center'>
               <Pic src={html_css} alt='HTM_CSS'/>
               <Pic src={cyber} alt='Cybersecurity'/>
               <Pic src={Fraud} alt='Fraud detection'/>
            </Flex>
           </Container>
        </Box>
    )
}

export default Certifications
