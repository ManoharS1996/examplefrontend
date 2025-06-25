import React, { useState } from 'react';
import axios from 'axios';

const ApiButton = () => {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/hello');
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Error fetching data');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click Me
      </button>
      <p>{message}</p>
    </div>
  );
};

export default ApiButton;
