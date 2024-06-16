import React, {useMemo, useRef, useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import AppWorks from "./Components/AppWorks";
import InputWithH1 from "./Components/InputWithH1";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/Select/MySelect";
import PostFilter from "./Components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: "React is JavaScript's framework"},
        {id: 2, title: 'C#', body: "ASP.NET Core is C#'s framework"},
        {id: 3, title: 'Java', body: "Spring is Java's framework"},
        {id: 4, title: 'Python', body: "Jango is Python's framework"}
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''})


    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase())
            || post.body.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPosts])

    const CreatePost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const RemovePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }


    return (
        <div className="App" style={{padding: '30px'}}>
            {/*<AppWorks/>
            <Counter/>
            <ClassCounter/>
            <InputWithH1/>*/}
            <PostForm create={CreatePost}/>
            <hr style={{margin: '15px 0', width: '100%'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={RemovePost} posts={sortedAndSearchedPosts} title="List of posts"/>


        </div>
    );
}

export default App;
