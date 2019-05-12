import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const title = "This is Agung's app";
  const anotherTitle = "Tadaaa another title";
  return (
    <div className="App">
      <h1>
        {
          true ? anotherTitle : title
        }
      </h1>
    </div>

  );
}

export default App;
