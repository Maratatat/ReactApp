import React, {useEffect, useState} from "react";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/Modals/MyModal";
import {UsePosts} from "./hooks/UsePosts";
import PostService from "./API/PostService";
import Loader from "./Components/UI/Loader/Loader";
import {useFetching} from "./hooks/UseFetching";
import {getPageCount} from "./Utils/pages";
import Pagination from "./Components/UI/Pagination";

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
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.GetAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers["x-total-count"]
        setTotalPages(getPageCount(totalCount, limit));
    })


    useEffect(() => {
        fetchPosts()
    }, [page]);

    const ChangePage = (page) => {
        setPage(page);
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
            {postError &&
                <h1>An error occurred: {postError}</h1>}
            {isPostsLoading
                ? <Loader/>
                : <PostList remove={RemovePost} posts={sortedAndSearchedPosts} title="List of posts"/>
            }
            <Pagination page={page} ChangePage={ChangePage} totalPages={totalPages}/>
        </div>
    );
}

export default App;
