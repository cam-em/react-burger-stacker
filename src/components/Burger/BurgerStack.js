import React, {useState} from 'react'


const BurgerStack = ({ingredient, color}) => {
    return(
        <>
        <div style={{backgroundColor: color}}>{ingredient} </div>
        </>
    )
}

export default BurgerStack