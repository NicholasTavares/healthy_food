import React from 'react'

const Footer = () => {

const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <span className='footer__copyright'>
        © Copyrights {year} Stack. All Rights Reserved.
      </span>
      <div className='footer__links'>
        <span>Privacy Policy</span>
        <span>Terms and Conditions</span>
      </div>
    </footer>
  )
}

export default Footer