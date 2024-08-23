import React ,{useState} from 'react'

export default function TextForm(props) {
    const HandleUp=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
        
    }
    const HandleLow=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
       
    }
    const HandleClear=()=>{
        let newText=" ";
        setText(newText.trim());
        props.showAlert("Text has been cleared","success");
         
    }  
    const HandleCopy=()=>{
        var text= document.querySelector("#myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }
    const HandleExtraSpace=()=>{
        var newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space has been removed","success");
    }

    const HandleChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    
    const [text, setText]= useState("");
  return (
    <>
    <div className='container' style={{color: props.mode==="dark" ? "white":"#042743"}}>
        <label for="myBox"><h1>{props.heading}</h1></label>
        <div className="mb-3">
           <textarea className="form-control" value={text}  onChange={HandleChange} style={{backgroundColor: props.mode==="dark"?"grey":"white",
            color: props.mode==="dark"?"black":"#042743"}} id="myBox"  rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-3" onClick={HandleUp}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={HandleLow}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={HandleClear}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={HandleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={HandleExtraSpace}>Remove Extra Spaces</button> 
    </div>
    <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}} >
        <h2> Your text contains </h2>
        <p>{text.length=== 0 ? 0 : text.trim().split(" ").length} words and {text.replace(/\s+/g, '').length} characters</p>        
        <p> {0.008 *text.split(" ").length } minutes to read</p> 
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter any text to preview"}</p>
    </div>
    </>
    )
}
            
    
    

    
      
