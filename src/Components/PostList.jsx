import React from 'react';
import Post from "./Post";

const PostList = ({posts, title, remove}) => {
    return (
        <div style={{width:'100%'}}>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {
                posts.map((post, index) =>
                    <Post remove={remove} number={index + 1} post={post} key={post.id}/>
                )
            }
        </div>
    );
};

export default PostList;