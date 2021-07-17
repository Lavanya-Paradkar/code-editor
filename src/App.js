import { useState } from 'react';
import './App.css';
import Editor from './Editor';

function App() {

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');
  

  const viewCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${javascript}</script>
    </html>

  `


  let htmlfileReader;
  let cssfileReader;
  let jsfileReader;

  //HTML

  const handleFileReadHtml = (e) => {
  const content = htmlfileReader.result;
  console.log(content);
  setHtml(content);
  

  };
  
  const handleFileChosenHtml = (file) => {
    htmlfileReader = new FileReader();
    htmlfileReader.onloadend = handleFileReadHtml;
    htmlfileReader.readAsText(file);
  };

  //CSS

  const handleFileReadCss = (e) => {
    const content = cssfileReader.result;
    console.log(content);
    setHtml(content);
    
  
    };
    
    const handleFileChosenCss = (file) => {
      cssfileReader = new FileReader();
      cssfileReader.onloadend = handleFileReadCss;
      cssfileReader.readAsText(file);
    };

    //JS

    const handleFileReadJs = (e) => {
      const content = jsfileReader.result;
      console.log(content);
      setHtml(content);
      
    
      };
      
      const handleFileChosenJs = (file) => {
        jsfileReader = new FileReader();
        jsfileReader.onloadend = handleFileReadJs;
        jsfileReader.readAsText(file);
      };

  
  

  return (

    <div className="app">

      <div className="app__heading">
        <h1>Code N View</h1>
      </div>

      <div className="app__top">

        <div className="app__fileSection">

          <h2>File Explorer</h2>

          <div className="app__file">

            <div className = "file__html">
                <input 
                    type='file'
                    id='fileHtml'
                    className='inputfileHtml'
                    accept='.html'
                    onChange={e => handleFileChosenHtml(e.target.files[0])}
                />

                <label for="fileHtml">Select HTML file</label>
            </div>

            <div className = "file__css">
                <input 
                    type='file'
                    id='fileCss'
                    className='inputfileCss'
                    accept='.css'
                    onChange={e => handleFileChosenCss(e.target.files[0])}
                />

                <label for="fileCss">Select CSS file</label>
            </div>

            <div className = "file__js">
                <input 
                    type='file'
                    id='fileJs'
                    className='inputfileJs'
                    accept='.js'
                    onChange={e => handleFileChosenJs(e.target.files[0])}
                />

                <label for="fileJs">Select JS file</label>
            </div>

          </div>
          
        </div>  
        
        <Editor language="xml" value={html} onCodeChange={setHtml}/>
        
      </div>

      <div className="app__bottom">
        <iframe
          srcDoc={viewCode}
          title = "output"
          sandbox = "allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          frameBorder = "0"
          width = "100%"
          height = "100%"
        />
      </div>
      
    </div>
  );
}

export default App;
