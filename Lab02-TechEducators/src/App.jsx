import './App.css'
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  //useEffect hook fetches data from an API
  //https://www.w3schools.com/react/react_useeffect.asp
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
      <h1>Lab: Class 02</h1>
      <section id="grid">
        <div id="image-grid">
        {data.map((item) => (
          <div key={item._id}>
            <img src={item.image_url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Keyword: {item.keyword}</p>
            <p>Horns: {item.horns}</p>
          </div>
        ))}
        </div>
     
      </section>
   
    </div>
  );
}

export default App
