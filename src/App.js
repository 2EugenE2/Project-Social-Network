import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import MyProfile from './components/MyProfile/MyProfile'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <MyProfile />
    </div>)
}

export default App
