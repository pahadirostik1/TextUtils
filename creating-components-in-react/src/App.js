
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';

function App() {
    const [mode, setMode] = useState("light");

    const [alert, setAlert] = useState(null);
    const showAlert=(message, type)=>{
      setAlert({
        message:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1000);
    }


    const toggleMode=()=>{
      if(mode=== "light"){
        setMode("dark");
        document.body.style.backgroundColor= "#042743";
        showAlert("Dark Mode has been Enabled","success");
      }
      else {
        setMode("light");
        document.body.style.backgroundColor= "white";
        showAlert("Light Mode has been Enabled","success");
      }
    }
     
  return (
    <>
  <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} />;
  <Alert alert={alert}/>
  <div className="container my-3">
    <TextForm  showAlert={showAlert} heading="Enter any text" mode={mode}/>
   {/* <About/>; */}
  </div>
    </>
   
  );
}

export default App;
