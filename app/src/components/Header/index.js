import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, UnorderedList, ListItem, Box, Heading, Text, Show, Hide, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa6'

const Header = () => {
    return (
        <header>
            <Box>
                <Flex mx={'75px'} my={'20px'} justifyContent={'space-between'} alignContent={'center'}>
                    <Heading fontWeight={'600'} textShadow={'1px 1px #554729'}>Camden Van Sciver</Heading>
                    <Show above={'md'}>
                        <Box>
                            <UnorderedList styleType={'none'} display={'flex'} alignContent={'center'}>
                                <ListItem as={Link} to={'/portfolio_v3/'} marginX={'20px'}>
                                    <Text fontWeight={500} fontSize={'24px'} _hover={{ borderBottom: '2px' }}>Home</Text>
                                </ListItem>
                                <ListItem as={Link} to={'/portfolio_v3/portfolio'} marginX={'20px'}>
                                    <Text fontWeight={500} fontSize={'24px'} _hover={{ borderBottom: '2px' }}>Portfolio</Text>
                                </ListItem>
                                <ListItem as={Link} to={'/portfolio_v3/resume'} marginX={'20px'}>
                                    <Text fontWeight={500} fontSize={'24px'} _hover={{ borderBottom: '2px' }}>Resume</Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Show>
                    <Hide above='md'>
                        <Menu pos='fixed' top='10px' left={'15px'} color={'#212C42'}>
                            <MenuButton pos='fixed' top='5vh' left={'15px'} color={'#212C42'}>
                                <FaBars size={'20px'} />
                            </MenuButton>
                            <MenuList zIndex={999}>
                                <MenuItem as={Link} to='/portfolio_v3/'>Home</MenuItem>
                                <MenuItem as={Link} to='/portfolio_v3/portfolio'>Portfolio</MenuItem>
                                <MenuItem as={Link} to='/portfolio_v3/resume'>Resume</MenuItem>
                            </MenuList>
                        </Menu>
                    </Hide>
                </Flex>
            </Box>
        </header>
    )
}

export default Header
