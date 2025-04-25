// Code Keypad Component Here
import React, { useState } from 'react';

function Keypad() {
  const handleChange = (event) => {
    console.log("Entering password...");
  };

  return (
    <div className="keypad">
      <h2>Security Keypad</h2>
      <input 
        type="password"
        onChange={handleChange}
        placeholder="Enter password" 
      />
    </div>
  );
}

export default Keypad;