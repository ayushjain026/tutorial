import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TextArea(props) {

    // let textData="ayush"
    const [text, setText] = useState('');
    // const [Uppertext, setUpperText] = useState();

    const handleUpperCase = () =>{
        // console.log("Uppercase button was clicked");
        setText(text.toUpperCase());
        toast("Converted to Upper Case")
    }

    const handleLowerCase = () =>{
        setText(text.toLowerCase())
        toast("Converted to Lower Case")
    }
    const handleOnChange = (event) => {
        // console.log("Onchange")
        setText(event.target.value)
    }
    const handleClear = (event) => {
        // console.log("Onchange")
        if(text === ''){
            toast("Please Enter data")
        }
        else{
            setText('')
            toast("Text Cleared")
        }
    }
    const handleCopy = (event) => {
        let textData = text;
        navigator.clipboard.writeText(textData)
        toast("Data Copied Sucessfully")
    }
    const handleRemoveExtraSpaces = () => {
        if(text === ''){
            toast("Please Enter data")
        }
        else{
            let newText = text.split(/[ ]+/);
            setText(newText.join(' '))
            toast("Extra spaces removed")
        }
    }
    // const notify = () => toast("Woow it is soo easy")

    return (
        <>
        {/* <form> */}
            <div className="form-group container my-4">
                <label><h3>{ props.title }</h3></label>
                <textarea className="form-control" name='textData' onChange={handleOnChange} value={text} id="textData" rows="6"></textarea>
                <button className='btn btn-primary my-2' onClick={handleUpperCase}>Upper Case</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleLowerCase}>Lower Case</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleClear}>Clear</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleCopy}>Copy</button>
                <button className='btn btn-primary my-2 mx-2' onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
                {/* <button className='btn btn-primary my-2 mx-2' onClick={notify}>Toaster Test</button> */}
                <ToastContainer />

                <h3>Text Analyzer</h3>
                <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} Words and {text.length} Char</p>
                <h3>Preview</h3>
                <textarea rows={6} readOnly className='container' value={text}></textarea>
            </div>
            <br /><br />
            
        {/* </form> */}
        </>
    )
}
