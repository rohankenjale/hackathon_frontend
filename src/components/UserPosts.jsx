import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';

function UserPosts() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    fetchUserPosts();
  }, [userId]);

  if (!posts.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <Post title={post.title} postId={post.id}></Post>
      ))}
    </div>
  );
}

export default UserPosts;
