import React, {useRef, useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import AppWorks from "./Components/AppWorks";
import InputWithH1 from "./Components/InputWithH1";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: "React is JavaScript's framework"},
        {id: 2, title: 'C#', body: "ASP.NET Core is C#'s framework"},
        {id: 3, title: 'Java', body: "Spring is Java's framework"},
        {id: 4, title: 'Python', body: "Jango is Python's framework"}
    ]);

    const CreatePost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const RemovePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }
    
    return (
        <div className="App">
            <AppWorks/>
            <Counter/>
            <ClassCounter/>
            <InputWithH1/>
            <PostForm create={CreatePost}/>
            <PostList remove={RemovePost} posts={posts} title="List of posts"/>


        </div>
    );
}

export default App;
