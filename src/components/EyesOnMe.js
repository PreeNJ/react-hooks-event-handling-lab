// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
  const handleFocus = () => {
    console.log("Good!");
  };

  const handleBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  return (
    <div className="eyes-on-me">
      <button 
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;