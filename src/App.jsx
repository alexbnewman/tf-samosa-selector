import './App.css';
import { useState } from 'react';

const App = () => {
  // hooks must run before stuff in the return statment is rendered
  // thus they cannot be inside the return statement
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 2);
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 2);
      setCount(count - 1000);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" 
        src="https://img.freepik.com/premium-psd/golden-brown-samosa-indian-snack-fried-pastry-triangle-shaped-food-delicious-treat_84443-35171.jpg?semt=ais_hybrid&w=740"
        onClick={updateCount}/>
        <div className="container">
          <div className="upgrade">
            <h3>Double Stuffed 👯‍♀️</h3>
            <p>2x per click</p>
            <button onClick={buyDoubleStuffed}>10 samosas</button>
          </div>
          <div className="upgrade">
            <h3>Party Pack 🎉	</h3>
            <p>5x per click</p>
            <button onClick={buyPartyPack}>100 samosas</button>
          </div>
          <div className="upgrade">
            <h3>Full Feast 👩🏽‍🍳</h3>
            <p>10x per click</p>
            <button onClick={buyFullFeast}>1000 samosas</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App