import React, { useState } from "react"
import Ingredient from "./Ingredient"
import BurgerPane from "../Burger/BurgerPane"
import BurgerStack from "../Burger/BurgerStack"

const IngredientList = () => {
  const [ingredients, setIngredients] = useState([
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Brioche Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
  ])

  const [burger, setBurger] = useState([])

  const addBurgerIngredient = (name, color) => {
    console.log(`Name: ${name} Color: ${color}`)
    setBurger([{name: name, color: color}, ...burger])
    console.log(burger)
  }

  const clearBurgerList = () => {
    console.log("Before clear: " + burger)
    setBurger([])
    console.log("After clear: " + burger)
  }

  return (
    <>
      <div className="ingredientList">
          {ingredients.map(ingredient => (
            //mapping through the arrow of todos in the state
          <Ingredient 
            ingredient={ingredient.name} 
            color={ingredient.color}
            addBurgerIngredient={() => addBurgerIngredient(ingredient.name, ingredient.color)}
          />
          ))}
      </div>
      <div className="burgerPane">
          {burger.map(ingredient => (
            //mapping through the arrow of todos in the state
          <BurgerStack 
            ingredient={ingredient.name} 
            color={ingredient.color}
          />
          ))}
          <button onClick={clearBurgerList}>clear</button>
      </div>
    </>
  )
};

export default IngredientList
