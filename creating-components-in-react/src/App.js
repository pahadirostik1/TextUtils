
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from  "react-router-dom";

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
    const removeColor=()=>{
      document.body.classList.remove("bg-success");
      document.body.classList.remove("bg-warning");
      document.body.classList.remove("bg-light");
      document.body.classList.remove("bg-danger");
      document.body.classList.remove("bg-dark");
      // document.body.classList.remove("bg-primary");
 }

    const toggleMode=(cls)=>{
      removeColor();
      document.body.classList.add('bg-'+cls);
      console.log(mode);
     
      if(mode=== "light"){
        setMode("dark");
        document.body.style.backgroundColor= "#042743";
        showAlert("Dark Mode has been Enabled","success");
        // document.title="TextUtils- Dark mode";
      }
      else {
        setMode("light");
        document.body.style.backgroundColor= "white";
        showAlert("Light Mode has been Enabled","success");
        // document.title="TextUtils- Light mode";
      }
    }
     
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter any text" mode={mode} />} />
          </Routes>
        </div>
   
      </Router>
     </> 
    );
}
export default App;
      
    
      
