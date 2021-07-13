import React from 'react'
import { Box, Heading , Text} from '@chakra-ui/react'

const About = () => {
    return (
       <Box px={32} py={16} h='40rem'  w='100vw'>
           <Heading color='blue.900' fontSize={44} py={7}> About me</Heading>
           <Box borderRadius={10}  h='20rem' bg='blue.500' p={8} color='white'>
                <Text fontSize={20}>Professional</Text>
                <Heading>Summary</Heading>
                <Box pt={8}>
                    <Text fontSize={20}> I am an ambitious and passionate Software Developer who has developed a mature and responsible approach to any task I am presented with.
                    Despite my great background in information management, I have a passion for Software Engineering.
                        I am a Ghanaian based software developer who specializes in building both web and mobile applications. 
                    </Text>
                </Box>
           </Box>
       </Box>
    )
}

export default About
