import React from 'react';
import FileUploadForm from './components/FileUploadForm'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App bg-light d-flex flex-column">
      <nav className="navbar bg-white">
        <div className="container-fluid justify-content-center">
          <span className="navbar-text">
            Page Views
          </span>
        </div>
      </nav>
      <div className="container">
        <FileUploadForm />
      </div>
    </div>
  );
}

export default App;
