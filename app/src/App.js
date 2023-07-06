import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react'

import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} minH={'100vh'}>
      <Header />
      <Footer />
      </Box>
    </Router>
  );
}

export default App;
