import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import {logo} from './assets';
import { Home, CreatePost, Tutorial } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/dalle-clone'>
          <img src={logo} alt="logo" className='w-28 object-contain'/>
        </Link>
        <Link to='/dalle-clone/tutorial' className='font-inter font-medium px-4 py-2 text-xs'>
          Tutorial API Key
        </Link>

        <Link to='/dalle-clone/create-post' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>Create</Link>
      </header>
      <main className='sm: p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/dalle-clone' element={<Home/>}/>
          <Route path='/dalle-clone/create-post' element={<CreatePost/>}/>
          <Route path='/dalle-clone/tutorial' element={<Tutorial/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App