import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'

const Post = ({ title, photo, author }) => {
  return (
    <div className='post-container'>
      <img className='post-container__img'
        src={photo} alt="Imagem ilustrativa" />
      <div className='post-container__title-container'>
        <h3 className='post-container__title-container__title'>
          {title}
        </h3>
        <div className="post-container__title-container__author">
          <div className="post-container__title-container__author__photo">
            <BsFillPersonFill />
          </div>
          <span className="post-container__title-container__author__name"> 
            {author}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Post