import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-logo">
        <span className="logo-icon">Q</span>
        RecipeFinder
      </div>
      <nav className="header-nav">
        <a href="/" className="nav-link">Home</a>
        <a href="/recipes" className="nav-link">Recipes</a>
        <a href="/about" className="nav-link">About</a>
      </nav>
      <div className="header-auth">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;