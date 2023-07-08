import React from 'react'
import { Box, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import { FaHouseChimney, FaEnvelope } from 'react-icons/fa6'

const Home = () => {
    const toast = useToast()
    const copyEmail = (e) => {
        e.preventDefault()
        navigator.clipboard.writeText('camdenvs02@gmail.com')
        toast({
            title: 'Email Copied',
            status: 'info',
            duration: 1500,
            isClosable: true,
            position: 'top'
          })
    }

    return (
        <>
        <Box width={'80%'} mx={'auto'} mt={'100px'} marginBottom={'-100px'}>
            <Heading position='relative' fontSize={'82px'} zIndex={'2'}>I'm a Full-Stack Developer, constructing beautiful homes on the web.</Heading>
            <Box overflowX={'hidden'} position='relative' top='-200px' right={'-50%'} zIndex={'1'}><FaHouseChimney size={'500px'} color={'#8b2733'}/></Box>
        </Box>
        <Flex mb={'50px'} justifyContent={'center'} flexDirection={{base: 'column', md: 'row'}}>
            <Text fontSize={'18px'} opacity={'80%'} width={{base: '80%', md: '30%'}} mx={{base: 'auto', md: 'none'}} mr={{md: '50px'}} mb={{base: '15px', md: 'none'}}>
                I help clients build the website of their dreams. 
                Every square foot, custom-built. I handle everything, 
                from database creation and management to front-end design and development.
            </Text>
            <Box border={'1px'} display={'flex'} height={'100px'} width={{base: '80%', md: 'auto'}} mx={{base: 'auto', md: 'none'}}>
                <Box padding={'41px'} borderRight='1px' my='auto' _hover={{cursor: 'pointer', bgColor: '#b39967'}} onClick={copyEmail}><FaEnvelope /></Box>
                <Text my='auto' pl={'25px'} pr={'100px'} fontSize={'20px'}>camdenvs02@gmail.com</Text>
            </Box>
        </Flex>
        </>
    )
}

export default Home