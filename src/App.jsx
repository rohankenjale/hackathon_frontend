import { useState } from 'react';
import './App.css';
import Navbar from './components/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent.jsx';
import PostDetails from './components/PostDetails.jsx';
import UsersList from './components/UserList.jsx';
import UserDetail from './components/UserDetails.jsx';
import UserPosts from './components/UserPosts.jsx';
import UserTodos from './components/UserTodos.jsx';
import UserAlbums from './components/UserAlbums.jsx';
import AlbumPhotos from './components/AlbumPhotos.jsx';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="/album/:albumId" element={<AlbumPhotos />} />
        <Route path="/users" element={<UsersList />} /> 
        <Route path="/user/:userId" element={<UserDetail />} />
        <Route path="/user/:userId/posts" element={<UserPosts />} />
        <Route path="/user/:userId/todos" element={<UserTodos />} />
        <Route path="/user/:userId/albums" element={<UserAlbums />} />
      </Routes>
    </Router>
  );
}

export default App;
