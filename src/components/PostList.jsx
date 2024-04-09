import React from 'react';
import Post from './Post'; 

function PostList({posts}) {
  return <div>
    {posts.map(function(post){
        return <div>
            <Post title={post.title} postId={post.id} /> 
        </div>
    })}
  </div>
    
  
}

export default PostList;