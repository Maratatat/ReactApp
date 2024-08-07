import React, {useEffect, useRef, useState} from "react";
import PostList from "../Components/PostList";
import MyButton from "../Components/UI/button/MyButton";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import MyModal from "../Components/Modals/MyModal";
import {UsePosts} from "../hooks/UsePosts";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";
import {useFetching} from "../hooks/UseFetching";
import {getPageCount} from "../Utils/pages";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../Components/UI/Select/MySelect";

function Posts() {
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
    const lastElement = useRef();
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.GetAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers["x-total-count"]
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page + 1));

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit]);

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
            <MySelect className="mySelect" value={limit} onChange={value => setLimit(value)}
                      defaultValue="Elements' quantity on page"
                      options={[
                          {value: 5, name: "5"},
                          {value: 10, name: "10"},
                          {value: 15, name: "15"},
                          {value: 20, name: "20"},
                          {value: 25, name: "25"},
                          {value: -1, name: "Show all"}
                      ]}
            > </MySelect>
            {postError &&
                <h1>An error occurred: {postError}</h1>}
            <PostList remove={RemovePost} posts={sortedAndSearchedPosts} title="List of posts"/>
            <div ref={lastElement} style={{height: '20px'}}></div>
            {isPostsLoading &&
                <Loader/>}


            {/*<Pagination page={page} ChangePage={ChangePage} totalPages={totalPages}/>*/}
        </div>
    );
}

export default Posts;
