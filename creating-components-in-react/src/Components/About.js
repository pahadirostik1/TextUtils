import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState(
    //   {
    //     color: "black",
    //     backgroundColor:"white"
    //   }
    // )
    let myStyle= {
        color:props.mode==="dark"?"white":"#042743",
        backgroundColor: props.mode==="dark"?"#042743":"white",
        boder: "1px solid"
        
    }
  
    return (
    <div className='container' style={myStyle}>
        <h1>About Us</h1>
        < div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Yout Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count,character counter .
                    
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed " type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong> Free to use </strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse " data-bs-parent="#accordionExample" >
                <div className='accordion-body' style={myStyle}>

                TextUtils is a free character counter tool that provides instant character count and word count statistis For a given text.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 <strong> Browser Compatible</strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div className="accordion-body"style={myStyle} >
                   TextUtils is used to count characters in facebook,blog ,books,excel document ,pdf document ,essays,etc. 
                                 
                </div>
                </div>
            </div>
       </div>
    
    </div>
     
    )
}
                
                
     

                
    

