import React from 'react';
import { useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
function UsersList() {
  const [Users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    getUsers();
  },[])
  async function getUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response)
    const json = await response.json();
    console.log(json)
    setUsers(json);
  }
  const cardStyle = {
    width:'360px',
    padding: '20px',
    margin: '10px 10px',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    background: '#555555',
  };

  return (
    <div>
      <h1>Users</h1>
      <div style={{ display: 'flex',  flexWrap: 'wrap',justifyContent: 'center' }}>
        {Users.map(user => (
          <div key={user.id} style={cardStyle} onClick={() => navigate(`/user/${user.id}`)}>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default UsersList;
