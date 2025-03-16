import { useState } from 'react'
import './App.css'
import Blog from './Components/Blog/Blog'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);

  const handleBookmarks= (blog)=>{
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks);
   

  }

  return (
    <>
    
    <Header></Header>
    <div className='w-[80%] mx-auto flex'>

        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
    
      
    </>
  )
}

export default App
