import React, { useState } from 'react';
import Navbar from './Navbar';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume.js';
import Contact from './pages/Contact';

const Styles = {
    body: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    }
}


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Portfolio');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={Styles.body}>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
