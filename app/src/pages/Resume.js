import { Box, Center, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Resume = () => {

    return (
        <Box>
            <Text ml='100px' fontSize={'20px'}>Want a copy? Click <a href='/files/CamdenVanSciver_Resume.pdf' download><Text display={'inline'} textDecoration='underline'>here</Text></a> to download.</Text>
            <Center fontSize={'20px'}>Camden Van Sciver</Center>
            <Center>camdenvs02@gmail.com | (480)-826-2147 | Mesa, Arizona</Center>
            <Center><Link to={'https://www.linkedin.com/in/camden-van-sciver/'}><Text display={'inline'} textDecoration='underline' mx={'5px'}>LinkedIn</Text></Link> | <Link to={'https://github.com/camdenvs'}><Text display={'inline'} textDecoration='underline' mx={'5px'}>GitHub</Text></Link>  | <Link to={'https://camdenvs.github.io/portfolio_v3/'}><Text display={'inline'} textDecoration='underline' mx={'5px'}>Portfolio</Text></Link> </Center>
            <Box mx={'100px'}>
                <Text fontSize={'20px'} fontWeight={'700'} mt={'10px'}>Career Summary</Text>
                <Text>My first programming language was Python, which I had taught myself. Working with Python to make some personal projects is what gave me an understanding of computer logic and made me comfortable with coding. After learning Python for about a year as a hobby, I decided to take a full-stack web development course through the University of Arizona. I completed the course 6 months later at the age of 20 with an A+. Since then I’ve made it a goal to make Github contributions every day on personal projects and work for clients.</Text>
                <Text fontSize={'20px'} fontWeight={'700'} mt={'10px'}>Technical Skills</Text>
                <Text>Frontend: HTML5, CSS, JQuery, Javascript, Bootstrap, AJAX, XML</Text>
                <Text>Backend: MySQL, MongoDB, Express, ReactJS, Node, Handlebars, Python</Text>

                <Text fontSize={'20px'} fontWeight={'700'} mt={'10px'}>Projects</Text>
                <Text fontSize={'18px'} fontWeight={'500'} mt={'5px'}>CyberFrog Shop | <Link to='https://github.com/camdenvs/comic-campaign'><Text display={'inline'} textDecoration='underline'>Repo</Text></Link> | <Link to='https://cyberfrogshop.com'><Text display={'inline'} textDecoration='underline'>Deployed</Text></Link></Text>
                <Text>Solo Project</Text>
                <UnorderedList>
                    <ListItem>An Ecommerce website built by me for professional use for All CAPS Comics.</ListItem>
                    <ListItem>This application allows users with an admin account to list products and campaigns on their respective pages for customers to browse and shop.</ListItem>
                    <ListItem>Deployed with custom domain using Heroku for server hosting and Netlify for front-end hosting.</ListItem>
                    <ListItem>Tools/Languages: MERN Stack, Stripe.js, CSS (Chakra UI), HTML, JWT</ListItem>
                </UnorderedList>
                <Text fontSize={'18px'} fontWeight={'500'} mt={'5px'}>Ocean Driven | <Link to='https://github.com/mayamckinney/ocean-driven'><Text display={'inline'} textDecoration='underline'>Repo</Text></Link> | <Link to='https://ocean-driven.herokuapp.com/'><Text display={'inline'} textDecoration='underline'>Deployed</Text></Link></Text>
                <Text>Back-end and front-end development</Text>
                <UnorderedList>
                    <ListItem>A boat booking web application for renters to profit and consumers to enjoy.</ListItem>
                    <ListItem>This application allows a user to either add their boat to the website to rent out, or book a boat that has been listed by other users.</ListItem>
                    <ListItem>Tools/Languages: MongoDB, React, Node.js, CSS (Chakra UI), HTML, JWT</ListItem>
                </UnorderedList>
                <Text fontSize={'18px'} fontWeight={'500'} mt={'5px'}>Spoon-Fed Reviews | <Link to='https://github.com/camdenvs/spoon-fed-reviews'><Text display={'inline'} textDecoration='underline'>Repo</Text></Link> | <Link to='https://spoon-fed-reviews.herokuapp.com/'><Text display={'inline'} textDecoration='underline'>Deployed</Text></Link></Text>
                <Text>Front-end functionality, Database</Text>
                <UnorderedList>
                    <ListItem>A social media platform that allows users to share and comment on recipes.</ListItem>
                    <ListItem>I was responsible for creating the database models for user, recipe, and comments.</ListItem>
                    <ListItem>Tools/Languages: MySQL, Node.js, Handlebars, HTML, CSS</ListItem>
                </UnorderedList>
                <Text fontSize={'20px'} fontWeight={'700'} mt={'10px'}>Work Experience</Text>
                <Text fontSize={'18px'} fontWeight={'500'}>Hobby Lobby</Text>
                <Text>November 2021 - March 2023</Text>
                <Text>Mesa, Arizona</Text>
                <Text>Stockman</Text>
                <UnorderedList>
                    <ListItem>Maintained a clean work environment by promoting best-practice organization</ListItem>
                    <ListItem>Streamlined work by setting quicker paces for unloading and processing product shipments</ListItem>
                    <ListItem>Formed a supportive work environment with coworkers by assisting in overcoming workloads</ListItem>
                </UnorderedList>
                <Text fontSize={'20px'} fontWeight={'700'} mt={'10px'}>Education</Text>

                <Text fontSize={'18px'} fontWeight={'500'} mt={'5px'}>Desert Ridge High School - Mesa, Arizona							                     May 2021</Text>
                <Text>High School Diploma</Text>

                <Text fontSize={'18px'} fontWeight={'500'} mt={'5px'}>University of Arizona, Fullstack Coding Bootcamp						                 March 2023</Text>
                <Text>Certificate of Completion</Text>
            </Box>
        </Box>
    )
}

export default Resume