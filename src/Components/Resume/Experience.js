import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'
import Structure from './Structure'

const Experience = () => {
    const data=[
        {
            id:1,
            date:'July, 2021 - Present',
            title:'Mentor',
            responsibilities:[
                'Mentoring two beneficiaries of Compassion International Ghana (CIG) under the Compassion International Mentoring Program (CIMP) being run by iMentor Ghana for a year.',
                'Helping them nurture their dreams, ensure career and personal development'
            ],
            institution:'iMentor Ghana',
            ml: '20.5rem',
            height:'15rem',
            marginTop:-36
        },
        {
            id:2,
            date:'April, 2021 - June, 2021',
            course:'Full Stack Developer Intern',
            responsibilities:[
                ' Worked with other team members in an agile environment comprising of two-week sprints to deliver usable software components',
                'Collaborated and worked with a team of designers to translate designs and wireframes into workable software',
                'Wrote unit tests for implemented functions and endpoints',
                'Resolved minor issues on deployed systems'
            ],
            institution:'Complete Farmer Limited, East Legon, Accra',
            ml:'9.8rem',
            height: '18rem',
            marginTop:-52
        },
        {
            id:3,
            date:'July, 2020 - January, 2021',
            title:'Full Stack Developer Intern',
            responsibilities:[
                ' Worked with other team members in an agile environment comprising of two-week sprints to deliver usable software components',
                'Collaborated and worked with a team of designers to translate designs and wireframes into workable software',
                'Wrote unit tests for implemented functions and endpoints',
                'Resolved minor issues on deployed systems'
            ],
            institution:'Complete Farmer Limited, East Legon, Accra',
            ml: '9.8rem',
            height: '18rem',
            marginTop:-52
        },
        {
            id:4,
            date:'May, 2020 - September, 2020',
            title:'Web developer Intern',
            responsibilities: [
                'Used Search Engine Optimisation tools like SEO Site Checkup to analyze several websites and generate audit reports on those sites.',
                'Used Mailchimp templates to design the landing page of the Caribbean Future Summit held by the company and tracked the number of visits on the webpage'
            ],
            institution:'Global Startup Ecosystem, Accra , Ghana',
            ml:'11.3rem',
            height: '15rem',
            marginTop:-36
        },
        {
            id:5,
            date:'August, 2019 - September, 2019',
            title:'Mobile Application Developer Trainee',
            responsibilities:[ 
                'Developed a mobile application to track long-distance travels and the ability to share rides using flutter' 
            ],
            institution:'Stanbic Bank Incubator, Accra, Ghana',
            ml:'12.6rem',
            height: '8rem',
            marginTop:-12
        }
    ]
    return (
        <Box bg='blackAlpha.900' px={32}  pt={10}  color='white'>
           <Text fontSize={24} pt={5}>
               My <br /> <Heading as='span' fontSize={32} py={2} color='blue.600'> Experience</Heading>
           </Text>
           <Box py={10}>
               <Structure  data={data}  startYear='August, 2019' endYear='July, 2021' bg='white' color='blue.600' />
           </Box>
        </Box>
            
    )
}

export default Experience
