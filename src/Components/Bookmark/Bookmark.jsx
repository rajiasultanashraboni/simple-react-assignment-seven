import React from 'react';

const Bookmark = ({bookmark}) => {
    return (
        <div className='bg-slate-200 !important'>
            <h4>{bookmark.title}</h4>
        </div>
    );
};

export default Bookmark;