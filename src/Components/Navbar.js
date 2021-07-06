import React from 'react'
import { Avatar, Flex,Link, Text } from '@chakra-ui/react'

const Navbar = () => {
    return (
       <Flex  w='full'  py={5} justify='space-between' color='violet' fontSize={20} fontWeight='bold' px={20}>
           <Flex>
                <Avatar  name='Georgina Adzorgenu' bg='violet' />
                <Text color='white' fontSize={24} pt={2} ml={3}>
                        Georgina <Text as='span' color='violet' fontWeight='thin'> Adzorgenu</Text>
                </Text>
           </Flex>
           <Flex >
                <Link mr={10} _hover={{ textDecor: 'none'}}>Nothing</Link>
                <Link mr={10}  _hover={{ textDecor: 'none'}}>About</Link>
                <Link mr={10}  _hover={{ textDecor: 'none'}}>Portfolio</Link>
                <Link mr={10}  _hover={{ textDecor: 'none'}}>Contact</Link>
           </Flex>
       </Flex>
    )
}

export default Navbar
