import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import ApiRequestComponent from './test';

function App() {
  const [code, setCode] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append('code', code);

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
      };

      const apiUrl = 'https://flask-on-koyeb-sucker3699.koyeb.app/api';
      const response = await fetch(apiUrl, requestOptions);
      const responseData = await response.json();
      setResponse(responseData.output);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const text ='if(y)'
  const text2 ="{"
  const text3 ="}"

  return (
    <div className="App">
      <div className='lang'>
        &nbsp;&nbsp;&nbsp;Ortus Compiler
        &nbsp;&nbsp;
      </div>
      <div className='editor'>
        <textarea placeholder="Enter your code "className='text' value={code} onChange={(e) => { setCode(e.target.value) }}></textarea>
        <div className='details'>
          <div className ="welcome"><h>Welcome to Ortus </h></div>
          <p>&nbsp;&nbsp;Commands you can execute:</p>
          <ul>exit(); to print integer values to console as currently our compiler does'nt support Strings</ul>
          <ul>set : It is an integer data type to assign integer value</ul>
          <ul>Also you can apply Mathematical operations to these variables and store it in another variable</ul>
          <ul>if(only accepts boolean value currently)</ul>
          <ul>elif(again only accepts boolean value)</ul>
          <div className ='example'>
            <div>
              <ul>example:
                <ul>set y = 5;</ul>
                <ul>set z=10;</ul>
                <ul>{text}</ul>
                <ul>{text2}</ul>
                <ul>&nbsp; &nbsp; exit(z);</ul>
                <ul>{text3}</ul>
              </ul>
            </div>
            <div className ="example2">
            <ul>example:
                <ul>set y = 5;</ul>
                <ul>set z=10*5-4/3;</ul>
                <ul>exit(z-y);</ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='button-container'>
        <button className='btn' onClick={handleSubmit}>Run</button>
      </div>
      <hr />
      <div className='output'>
        <p>Output:</p>
        <pre>{response}</pre>
      </div>
    </div>
  );
}

export default App;
