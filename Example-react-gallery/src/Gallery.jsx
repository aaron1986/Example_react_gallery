import Header from './Header.jsx'

export default function Gallery({ title, imageUrl, description }) {
    return (
        <div gallery>
            <h2>{title}</h2>
              <img src={imageUrl} alt={title} />
                 <p>{description}</p>
        </div> 
    );
}