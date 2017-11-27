import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
  salad: 0.4,
  bacon: 0.9,
  cheese: 0.7,
  meat: 1.3,
};

class BurgerBuilder extends React.Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    canBuy: false,
      buying: false,
  };

    buyingHandler = () => {
        this.setState({
            buying: true,
        })
    };

    cancelBuyingHandler = () => {
        this.setState({
            buying: false,
        })
    };

    continueBuyingHandler = () => {
        alert('continue');
    };

  updateCanBuyState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((ingKey) => {
        return ingredients[ingKey];
      })
      .reduce((sum,el) => {
        return sum + el
      }, 0);

      this.setState({
        canBuy: sum > 0
      })
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const ingPrice = INGREDIENTS_PRICES[type];
    const oldTotal = this.state.totalPrice;
    const newTotal = oldTotal + ingPrice;

    this.setState({
      totalPrice: newTotal,
      ingredients: updatedIngredients
    });

    this.updateCanBuyState(updatedIngredients);

  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    //copy the opriginal state, immutable way
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const ingPrice = INGREDIENTS_PRICES[type];
    const oldTotal = this.state.totalPrice;
    const newTotal = oldTotal - ingPrice;

    this.setState({
      totalPrice: newTotal,
      ingredients: updatedIngredients
    });
      this.updateCanBuyState(updatedIngredients);
  };

  render() {
    const disabledInfo = {...this.state.ingredients};
    for(let key in disabledInfo) {
      //changing the copy of state.ingredients
      //return true or false ie. {salad:true, meat:false...}
      disabledInfo[key] =  disabledInfo[key] <= 0
    }

    return(
      <Wrapper>
          <Modal show={this.state.buying} modalClosed={this.cancelBuyingHandler}>
            <OrderSummary
                ingredients={this.state.ingredients}
                continueBuying={this.continueBuyingHandler}
                cancelBuying={this.cancelBuyingHandler}
            />
          </Modal>
         <Burger ingredients ={this.state.ingredients} />
         <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            canBuy = { this.state.canBuy }
            price={this.state.totalPrice}
            order = {this.buyingHandler}
          />
        </Wrapper>
    );
  }
}

export default BurgerBuilder;
