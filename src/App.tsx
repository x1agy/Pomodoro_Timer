import React from 'react';
import './assest/app.css';
import Header from './components/Header/Header';
import Timer from './components/TImer/Timer';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <Settings />
    </div>
  );
}

export default App;
