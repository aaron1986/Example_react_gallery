import './App.css'
import Header from './Header.jsx'
import Gallery from './Gallery.jsx'
import Footer from './Footer.jsx'

function App() {

  const gallery = [];

for (let i = 1; i <= 6; i++) {
  gallery.push({
    title: `Vinyl Image${i}`,
    imageUrl: `./src/img/images${i}.jpg`,
    description: "random images of vinyl",
  });
}

  /* const gallery = [
    {
    title: "Vinyl Image1",
    imageUrl: "./src/img/images1.jpg",
    Description: "random images of vinyl",
  },
  {
    title: "Vinyl Image2",
    imageUrl: "./src/img/images2.jpg",
    Description: "random images of vinyl",
  },
  {
    title: "Vinyl Image3",
    imageUrl: "./src/img/images3.jpg",
    Description: "random images of vinyl",
  },{
    title: "Vinyl Image4",
    imageUrl: "./src/img/images4.jpg",
    Description: "random images of vinyl",
  },{
    title: "Vinyl Image5",
    imageUrl: "../src/img/images5.jpg",
    Description: "random images of vinyl",
  },
  {
    title: "Vinyl Image6",
    imageUrl: "./src/img/images6.jpg",
    Description: "random images of vinyl",
  }
]; */

//Images Array
const imageArray = [];

//for loop
for(let i = 0; i < gallery.length; i++) {
  const items = gallery[i];
  imageArray.push(
    <Gallery
    key = {i}
    title={items.title}
    imageUrl={items.imageUrl}
    description={items.description}
    /> //end of Gallery
  ); //end of push
} //end of for loop

  return (
   <div className='App'>
    <Header />
    <div className='grid'>
      {imageArray}
    </div>
    <Footer />
   </div> // end of App div
  )
}

export default App
