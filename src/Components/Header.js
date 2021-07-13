import React from 'react'
import { Heading,Box, Flex,Text,Image,Icon, Link} from '@chakra-ui/react'
import Gina from '../assets/Gina.jpg'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

import { FaLinkedin, FaGithub, FaInstagram , FaTwitter} from "react-icons/fa";

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

  const iconVariant = {
    hidden:{
      opacity: 0
    },
    visible: {
      opacity: 1,
      delay: 1.8,
      transition: {
        type: 'spring', stiffness:60
      }
    }
  }



const Header = () => {
    return (
      <>
        <Navbar/>
        <Flex h='40rem' bg='black'>
            <Box >
              <motion.div variants={variants_} initial='hidden' animate='visible'>
              <Box px={32} pt={56} color='white' w='60.23rem'>
                      <Heading fontSize={72} >Hello! I am <br/> Georgina Adzorgenu </Heading>
                      <motion.p variants={childVariant} >
                          <Text fontSize={32} pt={4}> I am a Software Developer</Text>
                          <Text fontSize={32} > I develop both web and mobile apps</Text>
                      </motion.p>
                      <motion.div variants={iconVariant}>
                        <Flex my={3}>
                          <Link href='https://www.linkedin.com/in/georgina-adzorgenu/' mr={6}><Icon as={FaLinkedin} w={6} h={6}  /></Link>
                          <Link href='https://github.com/gadzorgenu' mr={6}><Icon  as={FaGithub} w={6} h={6}  /></Link>
                          <Link href='https://www.instagram.com/gynasweetie/' mr={6}><Icon as={FaInstagram} w={6} h={6}  /></Link>
                          <Link href='https://twitter.com/gynasweetie'><Icon as={FaTwitter} w={6} h={6}  /></Link>
                        </Flex>
                      </motion.div>
                </Box>
              </motion.div>
            </Box>
            <Box >
                <Box bg='blue.500' h='full' w='39.77rem'  pt={40}>
                  <motion.Box variants={imageVariant} initial='hidden' animate='visible' >
                  <Image alt='Georgina Adzorgenu' src={Gina} w='23rem' h='23rem' rounded='full' mx='auto'/>
                  </motion.Box>
                </Box>
            </Box>
          </Flex>
      </>
    )
}

export default Header
