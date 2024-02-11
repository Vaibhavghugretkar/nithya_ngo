import React from 'react'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <img className='logo' src='./nithya_logo-removebg-preview (2).png'></img>
       <h1  className='title'>Nithya
        <span> Foundation</span>
        </h1>
<ul className='navlist'>
    <a href='/'>Who are we</a>
    <a href='/'>Get involved</a>

    <button className='donateBtn'>Donate</button>
</ul>
    </div>
  )
}
