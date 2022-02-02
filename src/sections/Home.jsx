import { useState } from 'react'
import Header from '../components/Header'
import Illustration from '../img/Illustration.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import Modal from '../components/Modal'
import Register from '../components/forms/Register'

const Home = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <section className='section-home'>
      <div className='section-home__illustration'>
        <img src={Illustration} alt="Illustration" />
      </div>
      <div className="container">
        <Header setShowModal={setShowModal} />
      </div>
      <div className="container section-home__container-form">
        <form className='section-home__container-form__form'>
          <label className='section-home__container-form__form__title'
            htmlFor="input">
            Ready for <br />
            Trying a new <br />
            recipe? <br />
          </label>
          <div className="section-home__container-form__form__container-text-button">
            <input type="text" id='input' placeholder='Search healthy recipes'
              className='section-home__container-form__form__container-text-button__input' />
            <div className="section-home__container-form__form__container-text-button__button">
              <AiOutlineSearch />
            </div>
          </div>
        </form>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} title='Register'>
          <Register />
        </Modal>
      )}
    </section>
  )
}

export default Home