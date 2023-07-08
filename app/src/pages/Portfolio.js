import React from 'react'
import Projects from '../projects.json'
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { FaArrowDown, FaGithub } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Portfolio = () => {

    return (
        <>
            <Heading fontSize={'74px'} mx={'auto'} mt={'200px'}>Wanna see what I've done?</Heading>
            <Text display={'flex'} fontSize={'18px'} opacity={'80%'} mx={'auto'} my='100px'>
                <FaArrowDown />Psst... It's down there <FaArrowDown />
            </Text>
            {Projects.map((project, index) => (
                (index % 2 === 0) ? (
                    <Box key={project.name} width={'80%'} mx='auto' display={'flex'} justifyContent={'space-evenly'} my={'30px'} bgColor={'#b39967'} padding={'20px'} flexDirection={{base: 'column', md: 'row'}}>
                        <Box display={{base: 'flex', md: 'auto'}} justifyContent={{base: 'end', md: 'auto'}}><Link to={project.repoUrl}><FaGithub size='32px' /></Link></Box>
                        <Link to={project.deployedUrl}>
                        <Box display={'flex'} justifyContent={'space-evenly'} flexDirection={{base: 'column', md: 'row'}}>
                            <Stack width={{md: '45%'}} justifyContent={'space-evenly'} mb={{base: '5px', md: 'none'}}>
                                <Heading>{project.name}</Heading>
                                <Text>{project.description}</Text>
                                <Text>{project.tech}</Text>
                            </Stack>
                            <Image src={`images/${project.image}`} width={{md: '45%'}} />
                        </Box>
                        </Link>
                    </Box>
                ) : (
                    <Box key={project.name} width={'80%'} mx='auto' display={'flex'} justifyContent={'space-evenly'} my={'30px'} bgColor={'#d6c6a9'} padding={'20px'} flexDirection={{base: 'column', md: 'row'}}>
                        <Link to={project.deployedUrl}>
                            <Box display={'flex'} justifyContent={'space-evenly'} flexDirection={{base: 'column', md: 'row'}}>
                                <Image src={`images/${project.image}`} width={{md: '45%'}} />
                                <Stack width={{md: '45%'}} justifyContent={'space-evenly'} mb={{base: '5px', md: 'none'}}>
                                    <Heading>{project.name}</Heading>
                                    <Text>{project.description}</Text>
                                    <Text>{project.tech}</Text>
                                </Stack>
                            </Box>
                        </Link>
                        <Box display={{base: 'flex', md: 'auto'}} justifyContent={{base: 'end', md: 'auto'}}><Link to={project.repoUrl}><FaGithub size='32px' /></Link></Box>
                    </Box>
                )

            ))}
        </>
    )
}

export default Portfolio