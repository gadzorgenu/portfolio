import React from 'react'
import { Box, Text, Divider, Center, Icon , Flex, List, ListItem, ListIcon} from '@chakra-ui/react'
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

const Structure = ({ mt, startYear,endYear, data, bg, color}) => {
    return (
        <>
         <Box mx='auto' bg='blue.100' borderRadius={20} color='blue.900' w='9rem' p={2} textAlign='center'>
            {endYear}
        </Box>
        <Center height="110px" mt={mt}>
            <Divider orientation="vertical"  bg={ bg || 'blue.900'}  borderWidth={1} />
        </Center>
        {
            data.map(item => (
                <>
                    <Center key={item.id}>
                        <Flex ml={item.ml} mt={3}>
                            <Box textAlign='right' mt={-5} mr={3}>
                                <Text> {item.date}
                                    <Text as='span' ml={1}>
                                        <Icon as={AiOutlineClockCircle} />
                                    </Text>
                                </Text> 
                                <Text>{item.institution}
                                <Text as='span' ml={1}>
                                        <Icon as={MdLocationOn} />
                                    </Text>
                                </Text>
                            </Box> 
                            <Divider  w={20}  bg={ bg || 'blue.900'} borderWidth={1}/>
                            <Box w={6} h={6} bg='blue.900' rounded='xl' fontSize='5px' mt={-3}></Box>
                            <Divider  w={20}  bg={ bg || 'blue.900'}   borderWidth={1}/>
                            <Box  mt={-5} ml={4}>
                                <Text color={ color || 'blue.900'} fontWeight='bold'>{item.course || item.title}</Text> 
                                {item.responsibilities ? (
                                    <List>
                                        {item.responsibilities.map( item => (
                                            <ListItem w='30rem' lineHeight={2}>
                                                <ListIcon as={AiFillCheckCircle} color='blue.600'/>
                                                {item}
                                            </ListItem>
                                        ))}
                                    </List>
                                ): (
                                    <Text >{item.major}</Text>
                                )}
                            </Box> 
                        </Flex>
                    </Center>
                    <Center height={item.height || '110px' } mt={ item.marginTop || -2.5}>
                        <Divider orientation="vertical"  bg={ bg || 'blue.900'}   borderWidth={1} />
                    </Center>
                    </>
            ))
        }
            <Box mx='auto' bg='blue.100' borderRadius={20} color='blue.900' w='9rem' p={2} textAlign='center'>
                    {startYear}
            </Box>
        </>
    )
}
export default Structure
