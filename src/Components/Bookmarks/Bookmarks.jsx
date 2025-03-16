import React from 'react';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='w-[50%]'>
            <h1>Bookmarks:{bookmarks.length}</h1>
        </div>
    );
};

export default Bookmarks;