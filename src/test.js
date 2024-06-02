import React, { useState } from 'react';

const ApiRequestComponent = () => {
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

      const apiUrl = 'http://127.0.0.1:5000/ortus';
      const response = await fetch(apiUrl, requestOptions);
      const responseData = await response.json();
      setResponse(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter code"
      />
      <button onClick={handleSubmit}>Send API Request</button>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiRequestComponent;
