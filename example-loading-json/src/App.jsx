import { useState } from 'react'
import Info from '/src/assets/example.json'
import './App.css'

function App() {

  return (
 <div>
 {/* how to write comments! */}
 <section>

 <div id="grid">
  {Info.map((item) => (
    <div key={item._id}>
      <img 
        src={item.image_url}
        alt={item.caption}
      />
      <h3>{item.caption}</h3>
      <p>{item.camera}</p>
      </div>
  ))}
</div>

 </section>
</div>
  );
  
  }
  
export default App;
