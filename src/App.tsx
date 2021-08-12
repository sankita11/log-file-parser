import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    

  return (
    <div className="App bg-light d-flex flex-column">
      <Header />
      <HomePage />
    </div>  
  );
}

export default App;
