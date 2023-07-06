import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Flex, Text, Link, UnorderedList, ListItem, Box, Heading } from '@chakra-ui/react'


const Header = () => {
    return (
        <header>
            <Box bg={'primary.300'}>
                <Flex mx={'75px'} my={'20px'} justifyContent={'space-between'} alignContent={'center'}>
                    <Heading fontWeight={'600'}>Camden Van Sciver</Heading>
                    <Box>
                        <UnorderedList styleType={'none'} display={'flex'} alignContent={'center'}>
                            <ListItem marginX={'20px'}>
                                <Link as={RouteLink} to={'#'} transition={'0.5s'} _hover={{color: 'tertiary.700'}} fontWeight={500} fontSize={'24px'}>About</Link>
                            </ListItem>
                            <ListItem marginX={'20px'}>
                                <Link as={RouteLink} to={'#'} transition={'0.5s'} _hover={{color: 'tertiary.700'}} fontWeight={500} fontSize={'24px'}>Portfolio</Link>
                            </ListItem>
                            <ListItem marginX={'20px'}>
                                <Link as={RouteLink} to={'#'} transition={'0.5s'} _hover={{color: 'tertiary.700'}} fontWeight={500} fontSize={'24px'}>Resume</Link>
                            </ListItem>
                            <ListItem marginX={'20px'}>
                                <Link as={RouteLink} to={'#'} transition={'0.5s'} _hover={{color: 'tertiary.700'}} fontWeight={500} fontSize={'24px'}>Contact</Link>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
            </Box>
        </header>
    )
}

export default Header