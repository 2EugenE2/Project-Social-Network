import React from 'react'
import s from './MyProfile.module.css'
import MyPosts  from './MyPosts/MyPosts'


const MyProfile = () => {
  return <div className= {s.content}>
    <div>
      <img src='https://ktonanovenkogo.ru/image/priroda-gora.jpg'
        alt="Национальном парк Анза-Боррего на фоне звёздного неба" />
    </div>
    <div>
      ava + description
    </div>
   <MyPosts/>
   </div>
}

export default MyProfile