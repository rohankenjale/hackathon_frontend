import React from 'react';
import { useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

function AlbumPhotos() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  useEffect(()=>{
    getPhotos();
  },[])
  async function getPhotos(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
    console.log(response)
    const json = await response.json();
    console.log(json)
    setPhotos(json);
  }
  const cardStyle = {
    width: "300px",
    padding: '20px',
    margin: '10px 10px',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    background: '#555555',
  };

  return (
    <div>
      <h1>Photos</h1>
      <div style={{ display: 'flex',  flexWrap: 'wrap',justifyContent: 'center' }}>
        {photos.map(photo => (
          <div key={photo.id} style={cardStyle}>
            <p>{photo.title}</p>
            <img src= {photo.thumbnailUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default AlbumPhotos;
