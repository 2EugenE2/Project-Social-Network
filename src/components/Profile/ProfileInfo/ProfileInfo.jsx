import React from 'react'
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://ktonanovenkogo.ru/image/priroda-gora.jpg'
          alt="Национальном парк Анза-Боррего на фоне звёздного неба" />
      </div>
      <div className={s.descriptionBlok}>
        ava + description
      </div>
    </div>)
}

export default ProfileInfo