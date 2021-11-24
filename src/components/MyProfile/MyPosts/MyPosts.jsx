import React from 'react'
import s from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div>
      <div>
        My post
      </div>
      <textarea></textarea>
      <button>Add post</button>
      <div>
        New post
      </div>
      <div className={s.posts}>
        <div className={s.itom}>
          post 1
        </div>
        <div className='item'>
          post 2
        </div>
      </div>
    </div>)
}
export default MyPosts