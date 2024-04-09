import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function UserTodos() {
  const { userId } = useParams();
  const [Todos, setTodos] = useState([]);


  useEffect(() => {
    const fetchUserTodos = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/Todos`);
      const data = await response.json();
      console.log(data)
      setTodos(data);
    };

    fetchUserTodos();
  },[]);

  if (!Todos.length) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <h1>Todos</h1>
      {Todos.map(todo => (
        <li key={todo.id} style={{
      padding: '10px',
      margin: '7px 10px',
      borderRadius: '5px',
      backgroundColor: todo.completed ?'#006400' : '#8b0000',
  }}>{todo.title}</li>
      ))}
    </div>
  );
}

export default UserTodos;
