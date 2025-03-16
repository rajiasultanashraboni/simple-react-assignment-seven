import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmarks}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
         fetch('blogs.json')
         .then (res=>res.json())
         .then(data=>setBlogs(data))

        },[])
    return (
        <div className='mb-4'>
            {
                blogs.map((blog,idx)=><Blog handleBookmarks={handleBookmarks}  key={idx} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;