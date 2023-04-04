import React, { useState, useRef } from "react";
import './styles/App.css';
import PostItem from './components/PostItem'
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript", body: "Description" },
    { id: 3, title: "JavaScript", body: "Description" },
  ]);

  const [post, setPost] = useState({title: '', body: ''})
  const bodyInputRef = useRef();
  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, {...post, id: Date.now()}])
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="post name"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          placeholder="post description"
        />

        <MyButton onClick={addNewPost}>Create</MyButton>
      </form>
      <PostList posts={posts} title="post about JS" />
    </div>
  );
}

export default App;

