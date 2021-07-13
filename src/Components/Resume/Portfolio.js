/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react'
import { Box, Heading, Flex, Button, Grid, Image } from '@chakra-ui/react'
import digifarmer from '../../assets/digifarmer.PNG'
import website_support from '../../assets/website_support.PNG'
import marketplace from '../../assets/marketplace.PNG'

const Portfolio = () => {
    const [filteredImages, setFilteredImages] = useState([])
    const [tag, setTag] = useState('photoshop')
    
    const Images = [
        {
            id:1, 
            name: digifarmer,
            title:'digifarmer',
            tag:'web'
        },
        {
            id:2, 
            name: website_support,
            title:'website_support',
            tag:'web'
        },
        {
            id:3, 
            name: marketplace,
            title:'marketplace',
            tag:'web'
        },
        {
            id:4, 
            name: marketplace,
            title:'marketplace',
            tag:'photoshop'
        },
        {
            id:4, 
            name: marketplace,
            title:'marketplace',
            tag:'mobile'
        },
     
    ]

    const Header = ({name, active, handleTag}) => {
        return(
            <Button 
                isActive={`tag ${active ? 'active' : null}`} 
                _focus={{
                    bg:'blue.600' ,
                    borderRadius: 20, 
                    color: 'white'
                }}
                variant='transparent'
                onClick={() => handleTag(name)}
                color='blue.900'
                fontSize={20}
            >
                {name.toUpperCase()}
            </Button>
        )
    }

    useEffect(() => {
        setFilteredImages(Images.filter( image => image.tag === tag))
    }, [tag])

    return (
        <Box   px={32}  py={10}>
            <Heading pt={5} fontSize={32} py={2} color='blue.600'> Portfolio</Heading>

            <Flex>
               <Header  name='photoshop' handleTag={setTag} active={tag === 'photoshop' ? true : false}/>
               <Header  name='web' handleTag={setTag} active={tag === 'web' ? true : false}/>
               <Header  name='mobile' handleTag={setTag} active={tag === 'mobile' ? true : false}/>
            </Flex>

            {/* <Center> */}
                <Grid templateColumns='repeat(2, 1fr)' gap={6} >
                    {
                        filteredImages.map(item => (
                            <Box key={item.id} borderRadius={20} mr={5} my={4} borderWidth={2} borderColor='blue.900'>
                                <Image src={item.name} alt={item.title} borderRadius={16} h='20rem' w='40rem'/>
                            </Box>
                        ))
                    }
                </Grid>
            {/* </Center> */}
        </Box>
    )
}

export default Portfolio
