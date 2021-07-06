import React from 'react'
import { Heading , Box, Text, Flex,Image} from '@chakra-ui/react'
import Gina from '../assets/Gina.jpg'
import { motion } from 'framer-motion'

const About = () => {
    return (
       <Box px={24} pt={40} color='white'>
           <Flex >
               <Box pt={16}>
                    <Heading fontSize={72} > I am a <br/> Software Developer </Heading>
                    <Text fontSize={40}> I develop  both web and mobile apps</Text>
                </Box>
                <motion.Box ml={44} initial={{ x:100,}} animate={{ x:0,}} transition={{ type:'spring',delay:1,}}>
                <Image alt='Georgina Adzorgenu' src={Gina} w='23rem' h='23rem' rounded='full'/>
                </motion.Box>
           </Flex>
       </Box>
    )
}

export default About
