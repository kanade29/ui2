// Assignment 3

// take an array of different colors. Let's say red, yellow, blue, green, and many more. Take an input field in which you need to input the color name. That input will match the colors from colorArray and the background color will be changed according to that. For example, you put red into your input field, and if red is found in your colorArray, the background will change to red color, else nothing happens.

import React, { useState } from 'react';
import './App.css';

const ColorChanger = () => {
  const colorArray = ["red", "yellow", "blue", "green", /* add more colors */];
  const [inputColor, setInputColor] = useState('');

  const handleInputChange = (event) => {
    const color = event.target.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    setInputColor(color);

    if (colorArray.includes(color)) {
      document.body.style.backgroundColor = color;
    } else {
      // Handle case when the color is not in the array
      // For now, do nothing
    }
  };

  return (
    <div className="color-container">
      <input
        type="text"
        placeholder="Enter color name"
        value={inputColor}
        onChange={handleInputChange}
      />

      {colorArray.includes(inputColor) && (
        <div className="selected-color" style={{ backgroundColor: inputColor }}>
          Selected Color: {inputColor}
        </div>
      )}
      {!colorArray.includes(inputColor) && (
        <div className="error-message">
          Color not found in the array.
        </div>
      )}
    </div>
  );
};

export default ColorChanger;




