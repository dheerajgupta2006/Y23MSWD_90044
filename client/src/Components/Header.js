import React from 'react'
import Logo from './images.jpeg'
import './Header.css'

const user ={
    pic1 : Logo,
}

function Header() {
  return (
    <div className='Header'>
      <img src={user.pic1}/>

    </div>
  )
}

export default Header
