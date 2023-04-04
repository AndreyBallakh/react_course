import React, { useState } from "react";
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

  const [title, setTitle] = useState('fds')
  const bodyInputRef = useRef();
  const addNewPost = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="post name" 
        />
        <MyInput 
          ref={bodyInputRef}
          placeholder="post description" 
        />

        <MyButton onClick={addNewPost} >Create</MyButton>
      </form>
      <PostList posts={posts} title="post about JS" />
    </div>
  );
}

export default App;