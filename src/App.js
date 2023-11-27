import React from 'react';
import Navbar from './components/Navbar.js';
import MyRouter from './router/index.js';


function App() {
  //const value = 'Team4';
  return (
    <div>
      <Navbar />
      
      <MyRouter />
    </div>
  );
}

export default App;