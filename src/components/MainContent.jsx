import React from 'react';
import Post from './Post'; // Make sure to create the Post component
import PostList from './PostList';
import { useEffect,useState} from 'react';

function MainContent() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    getData();
  },[])
  async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response)
    const json = await response.json();
    console.log(json)
    setPosts(json);
  }
  return (
    <main className="container">
      <div className="grid">
        <section>
          <hgroup>
            <h2>Welcome to Our Blog</h2>
            <h3>Your daily dose of interesting reads</h3>
          </hgroup>
          <p>Here you'll find posts on a variety of topics. Feel free to explore and engage with our community.</p>
          <PostList posts={posts} />
        </section>
      </div>
    </main>
  );
}

export default MainContent;
