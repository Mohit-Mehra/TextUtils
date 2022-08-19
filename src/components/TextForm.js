import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase!","success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase!","success")
    }
    const handleclearClick = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text Cleared ","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied to Clipboard.","success")
    }

    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been removed","success");
    }
    const [text, setText] = useState('');

    return (
        <>
        <div style={{color:props.mode==='dark'?'white':'black'}} className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#343a40':'white' , color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert To UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert To LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleclearClick} >Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} >CopyText</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div style={{color:props.mode==='dark'?'white':'black'}} className="conatiner my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length-1} word, {text.length} Charaters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            
        </div>
        </>
    )
}
