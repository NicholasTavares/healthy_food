import React from 'react'
import BlocoServices from '../img/bloco_services.svg'

const BestServices = () => {
  return (
    <section className='section-bestServices'>
      <div className='section-bestServices__illustration'>
        <img src={BlocoServices} alt="Illustration" />
      </div>
      <div className="section-bestServices__message">
        <h2>
          The best services ready
          To serve you
        </h2>
        <span>
          Far far away, behind the word mountains, far from
          the countries Vokalia and Consonantia, there live the
          blind texts.
        </span>
        <span>
          Separated they live in Bookmarksgrove right at the
          coast of the Semantics, a large language ocean.
        </span>
        <span>
          A small river named Duden flows by their place and
          supplies it with the necessary regelialia.
        </span>

        <div className="section-bestServices__message__button">
          Know More
        </div>
      </div>
    </section>
  )
}

export default BestServices