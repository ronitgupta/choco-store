import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';

import classes from './Cart.module.css';
import * as actions from '../../Store/Actions';
import OrderPlaced from '../OrderPlaced/OrderPlaced';

const Cart = props => {

    // Place Order Button Function

    let [orderButtonClicked, setOrderButtonClicked] = useState(false);

    // Disable Increase and Decrease Buttons
    useEffect(() => {
        const chocoMinus = document.getElementById('choco_minus');
        const chocoPlus = document.getElementById('choco_plus');
        const specialMinus = document.getElementById('special_minus');
        const specialPlus = document.getElementById('special_plus');
        

        // Disable Decrease Button for Choco
        if(props.choco === 0){
            chocoMinus.style.color = 'grey';
            chocoMinus.style.cursor = 'not-allowed';
        } else {
            chocoMinus.style.color = 'red';
            chocoMinus.style.cursor = "pointer";
        }
        

        // Disable Increase Button for Choco
        if(props.choco > 8){
            chocoPlus.style.color = 'grey';
            chocoPlus.style.cursor = 'not-allowed';
        } else {
            chocoPlus.style.color = 'green';
            chocoPlus.style.cursor = "pointer";
        }
        
        // Disable Decrease Button for Special
        if(props.specialChoco === 0){
            specialMinus.style.color = 'grey';
            specialMinus.style.cursor = 'not-allowed';
        } else {
            specialMinus.style.color = 'red';
            specialMinus.style.cursor = "pointer";
        }
        
        // Disable Increase Button for Choco
        if(props.specialChoco > 8){
            specialPlus.style.color = 'grey';
            specialPlus.style.cursor = 'not-allowed';
        } else {
            specialPlus.style.color = 'green';
            specialPlus.style.cursor = "pointer";
        }    
    },[props.choco, props.specialChoco])

    const ronit = () => console.log('wow');
    // JSX
    return(
        <React.Fragment>
            <div className={classes.Cart}>
                <h2 onClick={ronit}> {localStorage.getItem('email')}'s Cart</h2>
                <div className={classes.Container}>
                    <table className={classes.Inner}>
                        <tr>
                            <td onClick={props.productDecrement} className={classes.Minus}><FontAwesomeIcon icon={faMinusCircle} id="choco_minus"/></td>
                            <td className={classes.Product}>Choco</td>
                            <td className={classes.Quantity}>{props.choco}</td>
                            <td onClick={props.productIncrement} className={classes.Plus}><FontAwesomeIcon icon={faPlusCircle}  id="choco_plus"/></td>
                        </tr>
                        <tr>
                            <td onClick={props.specialDecrement} className={classes.Minus}><FontAwesomeIcon icon={faMinusCircle}  id="special_minus"/></td>
                            <td className={classes.Product}>Special Choco</td>
                            <td className={classes.Quantity}>{props.specialChoco}</td>
                            <td onClick={props.specialIncrement} className={classes.Plus}><FontAwesomeIcon icon={faPlusCircle}  id="special_plus"/></td>
                        </tr>
                    </table>
                </div>
                <button onClick={() => setOrderButtonClicked(true)} className={classes.Button}>Place Order</button>
            </div>
            {orderButtonClicked ? <OrderPlaced /> : null}
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    choco : state.products,
    specialChoco : state.specialProducts
});

const mapDispatchToProps = dispatch => ({
    specialIncrement : () => dispatch({ type : actions.INCREMENT, product : actions.SPECIAL}),
    productIncrement : () => dispatch({type : actions.INCREMENT, product : actions.NORMAL}),
    specialDecrement : () => dispatch({ type : actions.DECREMENT, product : actions.SPECIAL}),
    productDecrement : () => dispatch({type : actions.DECREMENT, product : actions.NORMAL})
});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);