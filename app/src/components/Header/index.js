import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Flex, Text, Link, UnorderedList, ListItem, Box, Heading } from '@chakra-ui/react'


const Header = () => {
    return (
        <header>
            <Box>
                <Flex mx={'75px'} my={'20px'} justifyContent={'space-between'} alignContent={'center'}>
                    <Heading fontWeight={'600'}>Camden Van Sciver</Heading>
                    <Box>
                        <UnorderedList styleType={'none'} display={'flex'} alignContent={'center'}>
                            <ListItem marginX={'20px'}>
                                <Link as={RouteLink} to={'#'} fontWeight={500} fontSize={'24px'} _hover={{textDecoration: 'none'}}>Home</Link>
                            </ListItem>
                            <ListItem marginX={'20px'}>
                                <Link as={RouteLink} to={'#'} fontWeight={500} fontSize={'24px'} _hover={{textDecoration: 'none'}}>Portfolio</Link>
                            </ListItem>
                            <ListItem marginX={'20px'}>
                                <Link as={RouteLink} to={'#'} fontWeight={500} fontSize={'24px'} _hover={{textDecoration: 'none'}}>Resume</Link>
                            </ListItem>
                            <ListItem marginX={'20px'}>
                                <Link as={RouteLink} to={'#'} fontWeight={500} fontSize={'24px'} _hover={{textDecoration: 'none'}}>Contact</Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
            </Box>
        </header>
    )
}

export default Header