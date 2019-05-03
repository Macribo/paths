import React from 'react';
import logo from './logo.svg';
import './App.css';
import Storyteller from './components/Storyteller';
import Counter from './components/Counter';
import store from './store/';
function App() {
  return (
    <div
      className="App"
      style={{
        position: 'relative',
        left: 'auto',
        right: 'auto'
      }}
    >
      {/* <Counter store={store} /> */}
      <Storyteller />
    </div>
  );
}

export default App;
