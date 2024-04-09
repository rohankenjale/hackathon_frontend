import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect,useState} from 'react';

function PostDetails() {
  let { postId } = useParams();
  const [postBody, setPostBody] = useState();
  const [postTitle, setPostTitle] = useState();
  const [user, setUser] = useState({});
  const [userId,setUserId] =useState()
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    getData();
  },[])

  async function getData(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    console.log(response)
    const json = await response.json();
    console.log(json)
    setPostBody(json.body);
    setPostTitle(json.title)
    const userId = json.userId
    setUserId(userId);
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const userData = await userRes.json();
    setUser(userData)
    const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const commentsData = await commentsRes.json();
    setComments(commentsData);
  }
  const navigate = useNavigate();

    const commentSectionStyle = {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  };

  const commentStyle = {
    background: '#555555',
    padding: '20px',
    margin: '10px 0',
    borderRadius: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const commentAuthorStyle = {
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  return (
    <div>
      <h2>{postTitle}</h2>
      <h3>{postBody}</h3>
      <div onClick={() => navigate(`/user/${userId}`)}>{`by - ${user.name}`}</div>
      <div style={commentSectionStyle}>
        <h3>Comments:</h3>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} style={commentStyle}>
              <p style={commentAuthorStyle}>{comment.name} says:</p>
              <p>{comment.body}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}

export default PostDetails;
