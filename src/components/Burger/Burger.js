import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let tranformedIngredients = Object.keys(props.ingredients)
  //make array from object keys
      .map(ingKey => {
        // console.log(ingKey, props.ingredients[ingKey])
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
          return <BurgerIngredient key={ingKey + i} type={ingKey}/>
        })
      })
      // flattens the array
      .reduce((arr, el) => {
        return arr.concat(el)
      }, []);

  if (tranformedIngredients.length === 0) {
    tranformedIngredients = <p>Start adding ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {tranformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger;
