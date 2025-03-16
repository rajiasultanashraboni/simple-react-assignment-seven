import React from 'react';

const Blog = ({blog,handleBookmarks}) => {
    const {image,author,date,read_time,title}=blog;
    return (
        <div className='w-[50%] min-h-[400px] my-4'>
            <img className='w-full' src={image} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='h-[50px]' src={author.profile_image} alt="" />
                    <div>
                        <h4 >{author.name}</h4>
                        <p>Posted date: {date}</p>
                    </div>
                </div>

                <div className='flex items-center'>
                    <p>{read_time} </p>
                    <span ><img  onClick={() => handleBookmarks(blog)}  src="https://img.icons8.com/?size=24&id=83134&format=png" alt="" /></span>
                </div>

            </div>
            {/* title  */}
            <h4>{title}</h4>
            <button className='mb-5'>mark as read</button>
        </div>
    );
};

export default Blog;