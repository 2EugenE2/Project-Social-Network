import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'


let posts = [
    {id: 1, message: 'Hi , how are you?', likesCount: 12},
    {id: 2, message: 'what about you?', likesCount: 11},
    {id: 3, message: 'BlaBlaBla', likesCount: 11},
    {id: 4, message: 'Oh yech', likesCount: 11},
  ]

ReactDOM.render(<App posts={posts} />, 
    document.getElementById('root')
    )

   
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
