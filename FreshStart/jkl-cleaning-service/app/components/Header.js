import React from 'react';

const Header = () => {
  return (
    <div>
      <header>
        <nav className="flex justify-between mt-5 items-center bg-gray-100 py-4 px-6">
          <div className="w-100 h-100 ml-5">
            <img src="/favicon.ico" className="rounded-full h-20 w-20 " />
          </div>
          <div className="namediv">
            <h1 className="text-3xl font-bold text-blue-800">JKL Cleaning Service</h1>
            <h5 className="bg-yellow-600 text-black py-1 text-lg px-4 rounded-full">
              We Treat your house like ours
            </h5>
          </div>
          <div className="cocdiv">
            <p className="text-lg font-bold">587-999-9999</p>
            <button className="bg-yellow-600 text-black py-2 px-4 rounded-full hover:bg-gray-800 hover:text-white">
              Contact Now
            </button>
          </div>
        </nav>
      </header>
      <nav className="flex justify-evenly mt-5 bg-blue-800 text-white py-2">
        <div>
          <p>
            <a className="nav-link hover:text-black" href="#menu">
              Menu
            </a>
          </p>
        </div>
        <div>
          <p>
            <a className="nav-link hover:text-black" href="#about">
              Prop
            </a>
          </p>
        </div>
        <div>
          <p>
            <a className="nav-link hover:text-black" href="#contact">
              Contact
            </a>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
