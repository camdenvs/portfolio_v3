import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react'

import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <Header />
      <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} minH={'100vh'} overflowX={'hidden'}>
        <Routes>
          <Route 
            path='/portfolio_v3/'
            element={<Home />}
          />
          <Route 
            path='/portfolio_v3/portfolio'
            element={<Portfolio />}
          />
          <Route 
            path='/portfolio_v3/resume'
            element={<Resume />}
          />
          <Route path='*' element={<Navigate to='/portfolio_v3/'/>} />
        </Routes>
      <Footer />
      </Box>
    </Router>
  );
}

export default App;
