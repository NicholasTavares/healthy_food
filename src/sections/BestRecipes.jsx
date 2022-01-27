import React from 'react'
import BestRecipe from '../components/BestRecipe'
import comida1 from '../img/comida_1.svg'
import comida2 from '../img/comida_2.svg'
import comida3 from '../img/comida_3.svg'
import comida4 from '../img/comida_4.svg'

const BestRecipes = () => {

  const recipes = [
    {
      id: 1,
      name: 'Broccoli Salad with Bacon',
      photo: comida1
    },
    {
      id: 2,
      name: 'Classic Beef Burgers',
      photo: comida2
    },
    {
      id: 3,
      name: 'Classic Potato Salad',
      photo: comida3
    },
    {
      id: 4,
      name: 'Cherry Cobbler on the Grill',
      photo: comida4
    },
  ]

  return (
    <section className='section-bestRecipes'>
      <div className="container section-bestRecipes__message">
        <h2>Our Best Recipes</h2>
        <span>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </span>
      </div>
      <div className="container section-bestRecipes__recipes-container">
        {recipes && recipes.map(recipe => (
          <BestRecipe name={recipe.name} photo={recipe.photo} />
        ))}
      </div>
    </section>
  )
}

export default BestRecipes