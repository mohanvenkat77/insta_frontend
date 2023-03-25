import React from 'react'
import LandingPage from './LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostView from './PostView'
import NewPost from './NewPost';
export * from "react-router";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path="/posts" element={<PostView/>}></Route>
        <Route path="/newpost" element={<NewPost/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
