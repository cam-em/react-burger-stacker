import React from "react"
// Components imports
import IngredientList from "./components/Ingredient/IngredientList"
import BurgerPane from "./components/Burger/BurgerPane"
// CSS imports
import "./css/App.css"

const App = () => {
  return (
    <div className="App">
      <IngredientList />
    </div>
  )
}

export default App
