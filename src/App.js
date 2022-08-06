import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform'
import Alert from './components/Alert.js';
import { useState } from 'react';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "Success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "Success")
    }
  }
  return (
    <>
    <Router>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar/> */}
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<Textform heading="Textulits - Word Counter, Character Counter"  mode={mode} showAlert={showAlert}/>}>
          </Route>
          </Routes>
        {/* <About/> */}
        </div>
        </Router>
    </>
  );
}

export default App;
