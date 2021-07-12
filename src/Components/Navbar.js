import React from 'react'
import { Avatar, Flex,Link, Text } from '@chakra-ui/react'

const Navbar = () => {
    return (
       <Flex  w='full'  justify='space-between' color='violet' fontSize={20} fontWeight='bold' h={20}
       as='header'
       pos='fixed'
       zIndex={100}
       bg='black'
        >
            <Flex py={5} pl={20} >
                <Avatar  name='Georgina Adzorgenu' bg='violet' size='md' />
            </Flex>
            <Flex pt={5} ml='40rem' color='blue.600'>
                <Link mr={10}  _hover={{ textDecor: 'none'}}>Home</Link>
                <Link mr={10}  _hover={{ textDecor: 'none'}}>About</Link>
            </Flex>
           <Flex pt={5} pl={5}  bg='blue.600' color='white' >
                    <Link mr={10}  _hover={{ textDecor: 'none'}}>Resume</Link>
                    <Link mr={10}  _hover={{ textDecor: 'none'}}>Skills&Certifications</Link>
                    <Link mr={10}  _hover={{ textDecor: 'none'}}>Portfolio</Link>
                    <Link mr={10}  _hover={{ textDecor: 'none'}}>Contact Me</Link>
           </Flex>
       </Flex>
    )
}

export default Navbar
