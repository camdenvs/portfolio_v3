import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { FaStackOverflow, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

    return (
        <Box position={'relative'} bottom={0} display={'flex'} justifyContent={'space-evenly'} fontSize={'54px'} my={'25px'}>
            <Link to={'https://stackoverflow.com/users/21194514/camden-van-sciver'}><FaStackOverflow /></Link>
            <Link to={'https://github.com/camdenvs'}><FaGithub /></Link>
            <Link to={'https://www.linkedin.com/in/camden-van-sciver/'}><FaLinkedin /></Link>
        </Box>
    )
}

export default Footer