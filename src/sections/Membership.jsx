import React from 'react'
import Illustration from '../img/bloco_final_image.svg'

const Membership = () => {
  return (
    <section className='section-membership'>
      <div className='section-membership__illustration'>
        <img src={Illustration} alt="Illustration" />
      </div>
      <div className="container">
        <form className='section-membership__form'>
          <label className='section-membership__form__title'
            htmlFor="input">
            Join our membership
            to get special offer
          </label>
          <div className="section-membership__form__container-text-button">
            <input type="text" id='input' placeholder='Enter your email address'
              className='section-membership__form__container-text-button__input' />
            <div className="section-membership__form__container-text-button__button">
              Join
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Membership