import React from 'react'
import { Heading,Box, Flex,Text,Image} from '@chakra-ui/react'
import Gina from '../assets/Gina.jpg'
import { motion } from 'framer-motion'

const  imageVariant = {
    hidden: {
      x:'80vw',
      opacity: 0
    },
    visible:{
      opacity:1,
      x: 0,
      transition:{
        type:'spring', 
        delay:0.3,
        stiffness:60,
        duration:2.5
      }
    },
    hover: {
        scale:1.1,
        boxShadow:'0px 0px 8px rgb(255,255,255)',
        originX:0,
      },
  }
  const variants_ = {
    hidden: {
      x:'-80vw',
      opacity: 0
    },
    visible:{
      opacity:1,
      x: 0,
      transition:{
        type:'spring', 
        // delay:1.1,
        stiffness:60,
        // duration:1.8,
        //mass: the higher mass mean it would move slower, vice versa
        mass: 0.4,
        //damping: the strength of the opposing force
        //higher number mean less osolation, zero mean it would osolate indefinately,
        damping: 10,
        //when: dictate when the animate should occur in relation to any child  element which are animating too
        when:'beforeChildren'
    
      }
    }
  }

  const childVariant = {
    hidden:{
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }

const About = () => {
    return (
       <Box px={24} pt={40} color='white'>
           <Flex >
               <motion.div variants={variants_} initial='hidden' animate='visible'>
                <Box pt={16}>
                        <Heading fontSize={72} > I am a <br/> Software Developer </Heading>
                        <motion.p variants={childVariant} >
                            <Text fontSize={32} py={4}> I develop  both web and mobile apps</Text>
                        </motion.p>
                    </Box>
               </motion.div>
                <motion.Box variants={imageVariant} initial='hidden' animate='visible' whileHover='hover'>
                <Image alt='Georgina Adzorgenu' src={Gina} w='23rem' h='23rem' rounded='full' ml={60}/>
                </motion.Box>
           </Flex>
       </Box>
    )
}

export default About
