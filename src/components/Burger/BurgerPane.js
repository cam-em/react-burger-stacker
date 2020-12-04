import React, { useState } from "react"
import BurgerStack from "./BurgerStack"

const BurgerPane = () => {
  return (
    <div className="burgerPane">
        <BurgerStack />
        <button>Clear</button>
    </div>
  )
};

export default BurgerPane
