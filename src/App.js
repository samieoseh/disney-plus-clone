// React library
import React from 'react';

// Custom functions
import { Counter } from './features/counter/Counter';

// Components
import Header from './components/Header'
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
