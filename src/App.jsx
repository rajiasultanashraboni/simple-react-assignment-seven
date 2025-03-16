import './App.css'
import Blog from './Components/Blog/Blog'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/header'

function App() {

  return (
    <>
    
    <Header></Header>
    <div className='w-[80%] mx-auto border-4'>

        <Blogs></Blogs>
    </div>
    
      
    </>
  )
}

export default App
