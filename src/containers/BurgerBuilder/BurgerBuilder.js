import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICES = {
  salad: 0.4,
  bacon: 0.9,
  cheese: 0.7,
  meat: 1.3,
}

class BurgerBuilder extends React.Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const ingPrice = INGREDIENTS_PRICES[type];
    const oldTotal = this.state.totalPrice;
    const newTotal = oldTotal + ingPrice;

    this.setState({
      totalPrice: newTotal,
      ingredients: updatedIngredients
    })

  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    //copy the opriginal state, immutable way
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    const ingPrice = INGREDIENTS_PRICES[type];
    const oldTotal = this.state.totalPrice;
    const newTotal = oldTotal - ingPrice;

    this.setState({
      totalPrice: newTotal,
      ingredients: updatedIngredients
    })
  }

  render() {
    const disabledInfo = {...this.state.ingredients};
    for(let key in disabledInfo) {
      //changing the copy of state.ingredients
      //return true or false ie. {salad:true, meat:false...}
      disabledInfo[key] =  disabledInfo[key] <=0
    }

    return(
      <Aux>
        <Burger ingredients ={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          />
      </Aux>
    );
  }
}

export default BurgerBuilder;
