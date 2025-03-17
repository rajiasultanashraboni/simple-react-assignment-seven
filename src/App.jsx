import { useState } from 'react'
import './App.css'
import Blog from './Components/Blog/Blog'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [markAsRead,setMarkAsRead]=useState(0)

  const handleBookmarks= (blog)=>{
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks);
   

  }

  const handleMarkAsRead = (time) => {
    const timeInMinutes = parseInt(time, 10); 
    setMarkAsRead(prevTime => prevTime + timeInMinutes); 
  };

  return (
    <>
    
    <Header></Header>
    <div className='w-[80%] mx-auto flex'>

        <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarks>
    </div>
    
      
    </>
  )
}

export default App
