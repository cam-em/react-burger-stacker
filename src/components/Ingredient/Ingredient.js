import React from 'react'

const Ingredient = ({ingredient, addBurgerIngredient}) => {
    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <div>{ingredient}</div>
            <button onClick={addBurgerIngredient}>></button>
        </div>
    )
}

export default Ingredient