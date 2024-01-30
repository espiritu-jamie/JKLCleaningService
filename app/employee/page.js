import React from 'react';

const Employee = () => {
  const blueRectangleStyle = {
    backgroundColor: 'darkblue',
    width: '200px', 
    height: '100%', 
    position: 'fixed', 
    left: '0', 
    top: '0', 
  };

  return (
    <div>
      {/* Blue Rectangle */}
      <div style={blueRectangleStyle}></div>

      {/* Image in front of the blue pillar */}
      <div style={{ position: 'absolute', left: '50px', top: '0' }}>
        <img src="Cleaning2.ico" alt="Cleaning Icon" style={{ width: '50px', height: '50px' }} />
      </div>

      {/* Main Content */}
    </div>
  );
};

export default Employee;
