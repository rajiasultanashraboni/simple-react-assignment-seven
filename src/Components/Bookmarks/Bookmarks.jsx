import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,markAsRead}) => {
    return (
        <div className='w-[50%] min-h-[100px] bg-slate-400 p-4 !important'>
            <h1 className="text-xl font-bold">Read Time: {markAsRead} min</h1>
            <h1>Bookmark</h1>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;