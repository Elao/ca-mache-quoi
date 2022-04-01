import React from 'react';

import pizza from '../assets/images/pizza.png'
import burger from '../assets/images/hamburger.png'
import salad from '../assets/images/salad.png'
import sushi from '../assets/images/sushi.png'

function Form() {
    return (
        <form>
            <div className="radio-button">
                <input id="pizza" type="radio" name="food-category"/>
                <label for="pizza"><img src={pizza} alt="pizza" />Pizza</label>
            </div>
            <div className="radio-button">
                <input id="burger" type="radio" name="food-category"/>
                <label for="burger"><img src={burger} alt="burger" />Burger</label>
            </div>
            <div className="radio-button">
                <input id="salad" type="radio" name="food-category"/>
                <label for="salad"><img src={salad} alt="salad" />Salad</label>
            </div>
            <div className="radio-button">
                <input id="sushi" type="radio" name="food-category"/>
                <label for="sushi"><img src={sushi} alt="sushi" />Sushi</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
