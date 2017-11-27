import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(ingkey => {
            return (
               <li key={ingkey}><span style={{textTransform: 'capitalize'}}>{ingkey}</span>: {props.ingredients[ingkey]}</li>
            )
        });

    return (
        <Wrapper>
            <h1>Your order</h1>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>

            <Button btnType='Danger' clicked={props.cancelBuying}>CANCEL</Button>
            <Button  btnType='Success' clicked={props.continueBuying}>CONTINUE</Button>

        </Wrapper>
    )
};

export default orderSummary;