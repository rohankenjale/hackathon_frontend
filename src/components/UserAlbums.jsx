import React from 'react';
import { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UserAlbums() {
  const { userId } = useParams();
  const [Albums, setAlbums] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    getAlbums();
  },[])
  async function getAlbums(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
    console.log(response)
    const json = await response.json();
    console.log(json)
    setAlbums(json);
  }
  const cardStyle = {
    width: '500px',
    padding: '20px',
    margin: '10px 10px',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    background: '#555555',
  };

  return (
    <div>
      <h1>Albums</h1>
      <div style={{ display: 'flex',  flexWrap: 'wrap',justifyContent: 'center' }}>
        {Albums.map(album => (
          <div key={album.id} style={cardStyle} onClick={() => navigate(`/album/${userId}`)}>
            <h2>{album.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
export default UserAlbums;
