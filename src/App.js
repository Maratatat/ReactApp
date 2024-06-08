import React, {useRef, useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import AppWorks from "./Components/AppWorks";
import InputWithH1 from "./Components/InputWithH1";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: "React is JavaScript's framework"},
        {id: 2, title: 'C#', body: "ASP.NET Core is C#'s framework"},
        {id: 3, title: 'Java', body: "Spring is Java's framework"},
        {id: 4, title: 'Python', body: "Jango is Python's framework"}
    ]);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost])
        setTitle('')
        setBody('')
    }

    return (
        <div className="App">
            <AppWorks/>
            <Counter/>
            <ClassCounter/>
            <InputWithH1/>
            <form action="">
                <MyInput value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Post's name"/>
                <MyInput value={body} onChange={e => setBody(e.target.value)} type="text"
                         placeholder="Post's description"/>
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
            <PostList posts={posts} title="List of posts"/>


        </div>
    );
}

export default App;
