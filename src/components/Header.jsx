/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <a href='#'>Healthy Food</a>
      </div>
      <div className='header__options'>
        <a href='#'>HEALTHY RECIPES</a>
        <a href='#'>BLOG</a>
        <a href='#'>JOIN</a>
        <a href='#'>REGISTER</a>
      </div>
    </header>
  )
}

export default Header