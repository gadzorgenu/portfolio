import React from 'react'
import { Flex,Link } from '@chakra-ui/react'

const Navbar = () => {
    return (
       <Flex bg='whitesmoke' w='full' justify='flex-end' py={5} color='violet' fontSize={20} fontWeight='bold'>
           <Link mr={10} _hover={{ textDecor: 'none'}}>Nothing</Link>
           <Link mr={10}  _hover={{ textDecor: 'none'}}>About</Link>
           <Link mr={10}  _hover={{ textDecor: 'none'}}>Portfolio</Link>
           <Link mr={10}  _hover={{ textDecor: 'none'}}>Contact</Link>
       </Flex>
    )
}

export default Navbar
