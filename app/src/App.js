import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react'

import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Header />
      <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} minH={'100vh'} overflowX={'hidden'}>
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />
          <Route 
            path='/portfolio'
            element={<Portfolio />}
          />
          <Route 
            path='/resume'
            element={<Home />}
          />
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      <Footer />
      </Box>
    </Router>
  );
}

export default App;
