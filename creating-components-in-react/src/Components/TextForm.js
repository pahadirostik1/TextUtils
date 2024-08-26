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
        document.getSelection().removeAllRanges();
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
           <textarea className="form-control" value={text}  onChange={HandleChange} style={{backgroundColor: props.mode==="dark"?"#13466e":"white",
            color: props.mode==="dark"?"white":"#042743"}} id="myBox"  rows="5"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleUp}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleLow}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleClear}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandleExtraSpace}>Remove Extra Spaces</button> 
    </div>
    <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}} >
        <h2> Your text contains </h2>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.replace(/\s+/g, '').length} characters</p>        
        <p> {0.008 *text.split(" ").filter((element)=>{return element.length!=0}).length } minutes to read</p> 
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter any text to preview"}</p>
    </div>
    </>
    )
}
            
    
    

    
      
