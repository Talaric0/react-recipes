import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title, calories, image, ingredients, url}) => {
  return(
    <div className={style.recipe}>
      <h2>{title}</h2>
      <h3>Ingredients:</h3>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {Math.floor(calories)}</p>
      <a href={url} rel="noreferrer" target="_blank">
        <img className={style.image} src={image} alt={title} />
      </a>
    </div>
  );
}

export default Recipe;