// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(100);  // Initial price

  // Function to update the price (increase)
  const increasePrice = () => {
    setPrice(price + 10);
  };

  // Function to update the price (decrease)
  const decreasePrice = () => {
    setPrice(price - 10);
  };

  return (
    <div className="app">
      <div className="card">
        <h2 className="card-title">Product Card</h2>
        <p className="price">${price}</p>
        <div className="buttons">
          <button onClick={increasePrice}>Increase Price</button>
          <button onClick={decreasePrice}>Decrease Price</button>
        </div>
      </div>
    </div>
  );
}

export default App;
