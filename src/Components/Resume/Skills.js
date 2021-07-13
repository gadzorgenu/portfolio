import React from 'react'
import { Box, Text, Heading,Flex, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const Skills = () => {

    const Skill = ({ skill, value, percentage}) => {
        return (
            <Box mr={28}>
                <CircularProgress value={value}  size="150px" color='blue.900' >
                    <CircularProgressLabel  fontSize={24} color='blue.900'>{percentage}</CircularProgressLabel>
                </CircularProgress>
                <Text fontSize={20} fontWeight='bold' align='center'>{skill}</Text>
            </Box>
        )
    }

    return (
        <Box  px={32}  pt={10}  >
           <Text fontSize={24} pt={5}>
               My coding <br /> <Heading as='span' fontSize={32} py={2} color='blue.600'> Skills</Heading>
           </Text>
           <Flex py={10}>
               <Skill skill='HTML' value={80} percentage='80%'/>
               <Skill skill='CSS' value={70} percentage='70%'/>
               <Skill skill='JavaScript' value={70} percentage='70%'/>
               <Skill skill='React' value={80} percentage='80%'/>
                <Skill skill='Node Js' value={70} percentage='60%'/>
          </Flex>
          <Flex>
               <Skill skill='React Native' value={60} percentage='60%'/>
               <Skill skill='Flutter' value={10} percentage='10%'/>
         
          </Flex>

           <Text fontSize={24} pt={20}>
               My design <br /> <Heading as='span' fontSize={32} py={2} color='blue.600'> Skills</Heading>
           </Text>
           <Flex py={10}>
               <Skill skill='Adobe Photoshop' value={90} percentage='90%'/>
               <Skill skill='Adobe XD' value={70} percentage='70%'/>
               <Skill skill='Figma' value={80} percentage='80%'/>
           </Flex>
        </Box>
    )
}

export default Skills
