import React from 'react'
import './App.css'
import './index.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
     <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile />} /><Route />
            <Route path='/messages' element={<Dialogs />} /><Route />
            {/* <Route path='/news' element={<News />} /><Route /> */}
            {/* <Route path='/music' element={<Music />} /><Route /> */}
            {/* <Route path='/setings' element={<Setings />} /><Route /> */}
          </Routes>
        </div>
       </div> 
    </BrowserRouter>
  )
}

export default App
