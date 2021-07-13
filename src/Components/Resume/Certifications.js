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

    const Pic = ({src, alt, institution}) => {
        return(
        <Box borderWidth={2} bgImage={src} borderColor='blue.900' borderRadius='6px' bgSize='cover' mr={16} 
            _hover={{
                cursor:'pointer', 
                bg:'blue.900', 
                opacity:0.5,
                color:'white',
                fontSize:24,
                textAlign:'center',
                py:20
            }}  
            w='32rem' 
             h='15rem'

            >
               <Box color='white'>
                    <Text > {alt}</Text> 
                    <Text> {institution}</Text> 
               </Box>
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
               <Pic src={js} alt='Javascript' institution='IBM'/>
               <Pic src={AI} alt='Artificial Intelligence' institution='IBM'/>
               <Pic src={Chatbot} alt='Chatbot Design' institution='IBM'/>
            </Flex>
            <Flex  pt={10} justify='center'>
               <Pic src={web} alt='Web Development' institution='IBM'/>
               <Pic src={Watson} alt='Watson Assistance' institution='IBM'/>
                <Pic src={IoT} alt='Internet of Things' institution='IBM'/>
            </Flex>
            <Flex  pt={10} justify='center'>
               <Pic src={html_css} alt='HTM_CSS'institution='IBM' />
               <Pic src={cyber} alt='Cybersecurity' institution='IBM'/>
               <Pic src={Fraud} alt='Fraud detection' institution='IBM'/>
            </Flex>
           </Container>
        </Box>
    )
}

export default Certifications
