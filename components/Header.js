import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My Website(HINA AAMIR)</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;