import React, { useState } from 'react';
import axios from 'axios';

function CodeProcessor() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://flask-on-koyeb-sucker3699.koyeb.app/api', { code });
      setOutput(response.data);
    } catch (error) {
      console.error('Error processing code:', error);
      setOutput('Error occurred while processing code');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your code:
          <textarea value={code} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Output:</h2>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default CodeProcessor;
