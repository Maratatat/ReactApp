import React from 'react';
import MyButton from "./UI/button/MyButton";

const Post = (props, remove) => {
    return (
        <div className="post">
            <div className="post--content">
                <strong>
                    {props.number ?? props.post.id}. {props.post.title}
                </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post--btn">
                <MyButton onClick={() => props.remove(props.post.id)}>Delete</MyButton>
            </div>
        </div>
    )
}

export default Post;