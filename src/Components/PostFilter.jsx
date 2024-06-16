import React from 'react';
import PostForm from "./PostForm";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput placeholder='Search' value={filter.query}
                     onChange={e => setFilter({...filter, query: e.target.value})}/>
            <MySelect value={filter.sort} onChange={sort => setFilter({...filter, sort: sort})} defaultValue="Sort"
                      options={[
                          {value: 'title', name: 'By name'},
                          {value: 'body', name: 'By description'},
                      ]}/>
        </div>
    );
};

export default PostFilter;