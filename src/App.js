import React, {useEffect, useMemo, useRef, useState} from "react";
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
import MyModal from "./Components/Modals/MyModal";
import {UsePosts} from "./hooks/UsePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./Components/UI/Loader/Loader";

function App() {
    const [posts, setPosts] = useState([
        /*{id: 1, title: 'JS', body: "React is JavaScript's framework"},
        {id: 2, title: 'C#', body: "ASP.NET Core is C#'s framework"},
        {id: 3, title: 'Java', body: "Spring is Java's framework"},
        {id: 4, title: 'Python', body: "Jango is Python's framework"}*/
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = UsePosts(posts, filter.sort, filter.query);
    const [isPostsLoading, setIsPostsLoading] = useState(false);

    useEffect(() => {
        fetchPosts()
    }, []);

    async function fetchPosts() {
        setIsPostsLoading(true)
        setTimeout(async () => {
            const posts = await PostService.GetAll()
            setPosts(posts)
            setIsPostsLoading(false)
        }, 1000)
    }

    const CreatePost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
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
            <MyButton onClick={() => setModal(true)}>Create post</MyButton>
            <MyModal visible={modal} setVisible={setModal}><PostForm create={CreatePost}/> </MyModal>
            <hr style={{margin: '15px 0', width: '100%'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {isPostsLoading
                ? <Loader/>
                : <PostList remove={RemovePost} posts={sortedAndSearchedPosts} title="List of posts"/>
            }

        </div>
    );
}

export default App;
