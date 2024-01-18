import React from 'react';
import '../css/header.css'
const Header = () => {
  return (
    <div>
      <header>
        <h1>Your Website Name</h1>
        <nav className="box-container">
          <div className="logodiv">logo</div>
          <div className="namediv">company name </div>
          <div className="cocdiv">contact details</div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
