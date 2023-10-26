import { useState } from 'react'
import Info from '/src/assets/example.json'
import './App.css'
import Header from './components/Header';

function App() {

  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedImages, setSelectedImages] = useState(null);

  const handleNumberChange = (event) => {
    setSelectedImages(event.target.value);
  };

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const filteredImages = selectedImages
  ? Info.filter((item) => item === parseInt(selectedImages))
  : Info;

  const filteredImagesWithSearch = filteredImages.filter((item) =>
  item.caption.toLowerCase().includes(searchKeyword.toLowerCase())
);

  return (
 <div>
  <Header handleNumberChange={handleNumberChange} handleSearch={handleSearch} />

 {/* how to write comments! */}
 <section>

 <div id="grid">
  {filteredImagesWithSearch.map((item) => (
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
