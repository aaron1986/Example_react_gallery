import './App.css'
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'src/data.json'; 
    fetch(apiUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      <h1>JSON Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <img src={item.image_url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Keyword: {item.keyword}</p>
            <p>Horns: {item.horns}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
