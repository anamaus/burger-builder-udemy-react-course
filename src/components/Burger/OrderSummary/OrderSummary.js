import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
    //This could be functional component, left as class for debugging purpose
        componentWillUpdate () {
            console.log('updated');
        }

    render () {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(ingkey => {
                return (
                   <li key={ingkey}><span style={{textTransform: 'capitalize'}}>{ingkey}</span>: {this.props.ingredients[ingkey]}</li>
                )
            });


        return (
            <Wrapper>
                <h1>Your order</h1>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>

                <Button btnType='Danger' clicked={this.props.cancelBuying}>CANCEL</Button>
                <Button  btnType='Success' clicked={this.props.continueBuying}>CONTINUE</Button>

            </Wrapper>
        )
    }
}

export default OrderSummary;