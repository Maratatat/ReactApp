import React, {useState} from "react";
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
    
    const addNewPost = (e) => {
        e.preventDefault();
    }

    return (
        <div className="App">
            <AppWorks/>
            <Counter/>
            <ClassCounter/>
            <InputWithH1/>
            <PostList posts={posts} title="List of posts 1"/>
            <form action="">
                <MyInput value={title} onChange={e=>setTitle(e.target.value) } type="text" placeholder="Post's name"/>
                <MyInput type="text" placeholder="Post's description"/>
                <MyButton onClick={addNewPost('sss')}>Create post</MyButton>
            </form>

        </div>
    );
}

export default App;
