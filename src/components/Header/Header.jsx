import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header id='header'>
      <div className='header__inner container'>
        <h1 className='logo'>
          <Link href='/'>NOL.GG</Link>
        </h1>
        <nav className='menu'>
          <ul>
            <li><Link href='/'>Home</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header