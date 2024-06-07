import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <div className="post--content">
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post--btn">
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Post;