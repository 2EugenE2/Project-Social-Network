import React from 'react'
import s from'./Navbar.module.css'

 // let s = {
 //   'nav': 'Navbar_nav__2S0Mt',
 //   'item': 'Navbar_item__3T-WS'
 // }

const Navbar = () => {
  return <nav className= {s.nav}>
    <div className= {s.item}> 
      <a>Profile</a>
    </div>
    <div className={s.item}>
      <a>Messages</a>
    </div>
    <div className={s.item}>
      <a>News</a>
    </div>
    <div className={s.item}>
      <a>Music</a>
    </div>
    <div className={s.item}>
      <a>Setings</a>
    </div>
  </nav>
}

export default Navbar