import React from 'react';
import '../css/header.css'
const Header = () => {
  return (
    <div>
      <header>
        <nav className="box-container">
          <div className="logodiv"><img src="app\assets\logo.png" /></div>
          <div className="namediv">
            <h1> JKL Cleaning Service</h1>
            <h5> We Treat you house like ours</h5>
             </div>
          <div className="cocdiv"><p>587-999-9999</p> <button type="button" class="btn btn-primary active">Active Primary</button></div>
          
        </nav>
      </header>
    </div>
  );
};

export default Header;
