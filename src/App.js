import React, {useState} from "react";
import Counter from "./Components/Counter";
import counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import AppWorks from "./Components/AppWorks";
import InputWithH1 from "./Components/InputWithH1";
import Post from "./Components/Post";
import PostList from "./Components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: "React is JavaScript's framework"},
        {id: 2, title: 'C#', body: "ASP.NET Core is C#'s framework"},
        {id: 3, title: 'Java', body: "Spring is Java's framework"},
        {id: 4, title: 'Python', body: "Jango is Python's framework"}
    ]);
    const [posts2, setPosts2] = useState([
        {id: 1, title: 'JS', body: "React is JavaScript's framework"},
        {id: 2, title: 'C#', body: "ASP.NET Core is C#'s framework"},
        {id: 3, title: 'Java', body: "Spring is Java's framework"},
        {id: 4, title: 'Python', body: "Jango is Python's framework"}
    ]);

    return (
        <div className="App">
            <AppWorks/>
            <Counter/>
            <ClassCounter/>
            <InputWithH1/>
            <PostList posts={posts} title="List of posts 1" />
            <PostList posts={posts2} title="List of posts 2" />
        </div>
    );
}

export default App;
