import React, {useRef, useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import AppWorks from "./Components/AppWorks";
import InputWithH1 from "./Components/InputWithH1";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/Select/MySelect";

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

    const [selectedSort, setSelectedSort] = React.useState('');

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    }

    return (
        <div className="App">
            <AppWorks/>
            <Counter/>
            <ClassCounter/>
            <InputWithH1/>
            <PostForm create={CreatePost}/>
            <hr style={{margin: '15px 0', width: '100%'}}/>
            <MySelect value={selectedSort} onChange={sortPosts} defaultValue="Sort" options={[
                {value: 'title', name: 'By name'},
                {value: 'body', name: 'By description'},
            ]}/>
            {posts.length !== 0
                ? <PostList remove={RemovePost} posts={posts} title="List of posts"/>
                :
                <h1 style={{textAlign: 'center'}}>No posts to show</h1>}


        </div>
    );
}

export default App;
