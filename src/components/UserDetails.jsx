import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUserDetails();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Address:</strong></p>
      <p>{"street : "+user.address.street + " , siute : "+user.address.suite + " , city : "+user.address.city}</p>
      <p>{}</p>
      <p>{}</p>
      <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
      <button onClick={() => navigate(`/user/${userId}/posts`)}>My Posts</button>
      <button onClick={() => navigate(`/user/${userId}/todos`)}>My Todos</button>
      <button onClick={() => navigate(`/user/${userId}/albums`)}>My Albums</button>
    </div>
  );
}

export default UserDetail;
