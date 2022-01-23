import React from 'react'
import Header from '../components/Header'
import Illustration from '../img/Illustration.svg'
import {AiOutlineSearch} from 'react-icons/ai'
 
const Home = () => {
  return (
    <section className='section-home'>
      <div className='section-home__illustration'>
        <img src={Illustration} alt="Illustration" />
      </div>
      <div className="container">
        <Header />
      </div>
      <div className="container">

        <form className='section-home__form'>
          <label className='section-home__form__title'
          htmlFor="input">
            Ready for <br />
            Trying a new <br />
            recipe? <br />
          </label>
          <div className="section-home__form__container-text-button">
            <input type="text" id='input' placeholder='Search healthy recipes'
            className='section-home__form__container-text-button__input' />
            <div className="section-home__form__container-text-button__button">
              <AiOutlineSearch />
            </div>
          </div>
        </form>

      </div>
    </section>
  )
}

export default Home