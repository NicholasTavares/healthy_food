/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = ({setShowModal}) => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <a href='#'>Healthy Food</a>
      </div>
      <div className='header__options'>
        <a href='#'>HEALTHY RECIPES</a>
        <a href='#'>BLOG</a>
        <a href='#'>JOIN</a>
        <a onClick={() => setShowModal(true)}>REGISTER</a>
      </div>
    </header>
  )
}

export default Header