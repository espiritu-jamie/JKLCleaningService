import React from 'react';

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-start">
      <div className="bg-gray-200 p-8 w-full  max-w-screen-xl" style={{ backgroundImage: 'url("Cleaning2.ico")' }}>
        <div className="bg-blue-300 w-2/5 mx-auto p-4" >
          <div>
            <p className="text-lg text-black text-center">Call us now for free Quote</p>
            <p className="text-l text-center text-yellow-600 font-bold">(587) 999 9999</p>
            <p className="text-lg text-black text-center font-bold">--------------------------------------</p>
            <p className="text-xl text-black text-center font-bold">Your Spotless</p>
            <p className="text-xl text-black text-center font-bold">Sanctuary Starts Here</p>
            <p className="text-l text-black text-center">Elevating Cleanliness to perfection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
