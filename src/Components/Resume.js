import React from 'react'
import { Box, Heading, Text, Divider, Center, Icon , Flex} from '@chakra-ui/react'
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Resume = () => {
    return (
       <Box bg='white' h='30rem' px={32} py={20} >
           <Heading color='blue.600' fontSize={44} > Resume</Heading>
           <Text fontSize={24} pt={5}>
               My <br /> <Heading as='span' fontSize={32} py={2}> Education</Heading>
           </Text>
           <Box py={10}>
                <Box mx='auto' bg='blue.100' borderRadius={20} color='blue.900' w='9rem' p={2} textAlign='center'>
                     November, 2021
                </Box>
                <Center height="120px">
                    <Divider orientation="vertical"  bg='blue.900'  borderWidth={1} />
                </Center>
                <Flex justfy='center'>
                    <Box textAlign='right'>
                        <Text> October 2017 - November, 2021
                            <Text as='span'>
                                <Icon as={AiOutlineClockCircle} />
                            </Text>
                        </Text> 
                        <Text> University of Ghana, Legon 
                        <Text as='span'>
                                <Icon as={MdLocationOn} />
                            </Text>
                        </Text>
                    </Box>
                </Flex>
                <Box mt={4} mx='auto' bg='blue.100' borderRadius={20} color='blue.900' w='9rem' p={2} textAlign='center'>
                     August, 2014
                </Box>
           </Box>
       </Box>
    )
}

export default Resume
