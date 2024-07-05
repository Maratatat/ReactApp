import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom"

const Post = (props) => {
    const navigate = useNavigate();
    return (
        <div className="post">
            <div className="post--content">
                <strong>
                    {props.post.id ?? props.number}. {props.post.title}
                </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <div className="post--btn">
                    <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Open</MyButton>
                </div>
                <div className="post--btn">
                    <MyButton onClick={() => props.remove(props.post.id)}>Delete</MyButton>
                </div>
            </div>
        </div>
    )
}

export default Post;