import React, { useState } from 'react';
import './App.css';

function FileUpload() {

    const [file , setFile] = useState("");
    function handleUpload(event) {
        setFile(event.target.files[0]);
        //
      }

    let fileReader;

    const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(content);
    

    };
    
    const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
    };

    return (
        <div className = "file">
            <input 
                type='file'
                id='file'
                className='inputfile'
                accept='.html'
                onChange={e => handleFileChosen(e.target.files[0])}
            />
            <label for="file">Choose HTML file</label>
        </div>
    )
}

export default FileUpload