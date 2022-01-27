import React from 'react'

const BestRecipe = ({ name, photo }) => {
  return (
    <div className='best-recipe-container'>
      <img className='best-recipe-container__img'
        src={photo} alt="Imagem ilustrativa" />
      <div className='best-recipe-container__title-container'>
        <h3 className='best-recipe-container__title-container__title'>
          {name}
        </h3>
        <div className="best-recipe-container__title-container__input" >
          <span>
            See Recipe
          </span>
        </div>
      </div>
    </div>
  )
}

export default BestRecipe