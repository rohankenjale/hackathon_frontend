import './Post.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Post({title, postId}) {
  const navigate = useNavigate();
  const navigateToPostDetail = () => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="card" onClick={navigateToPostDetail}>
      <div className="card-header">
        <img className="profile-photo" src="https://th.bing.com/th/id/OIP.T1fWh8eJtLQnwsLwHGdeLAHaHa?rs=1&pid=ImgDetMain" alt="Profile" />
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default Post;
