import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/UseFetching";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.GetPostById(id);
        setPost(response.data)
    })

    const [fetchCommentsById, isCommentsLoading, commentError] = useFetching(async (id) => {
        const response = await PostService.GetCommentsById(id);
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
    }, []);

    useEffect(() => {
        fetchCommentsById(params.id)
    }, []);
    return (
        <div>
            <h1>Page of post with id={params.id}</h1>
            {isLoading
                ?
                <Loader/>
                :
                <h4>{post.id}. {post.title}</h4>
            }
            <h1>Comments</h1>
            {isCommentsLoading
                ?
                <Loader/>
                :
                <h4>
                    {comments.map(comment =>
                        <div style={{marginTop: '10px'}}>
                            <h5>{comment.email}</h5>
                            <div>
                                {comment.body}
                            </div>
                        </div>
                    )}
                </h4>
            }
        </div>
    );
};

export default PostIdPage;