import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmarks,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
         fetch('blogs.json')
         .then (res=>res.json())
         .then(data=>setBlogs(data))

        },[])
    return (
        <div className='mb-4'>
            {
                blogs.map((blog,idx)=><Blog handleMarkAsRead={handleMarkAsRead} handleBookmarks={handleBookmarks}  key={idx} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;