import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import Structure from './Structure'

const Education = () => {

    const data=[
        {
            id:1,
            date:'October, 2017 - November, 2021',
            course:'B.A Information Studies',
            major:'Majored in Information Stiudies',
            institution:'University of Ghana, Legon',
            ml: -6
        },
        {
            id:2,
            date:'September,2014 - May,2017',
            course:'General Arts',
            major:'Majored in Geography, Economics, French and EMaths',
            institution:'Accra Girls Secondary School',
            ml:'10.2rem'
        }
    ]

    return (
       <Box bg='white' px={32} pt={20} >
           <Heading color='blue.900' fontSize={44} > Resume</Heading>
           <Text fontSize={24} pt={5}>
               My <br /> <Heading as='span' fontSize={32} py={2} color='blue.600'> Education</Heading>
           </Text>
           <Box py={10}>
               <Structure  data={data}  startYear='August, 2014' endYear='November, 2021' />
           </Box>
       </Box>
    )
}

export default Education
