import React from 'react';

import Title from './Title';
import Button from './Button';

import pizza from '../assets/images/pizza.png'
import burger from '../assets/images/hamburger.png'
import salad from '../assets/images/salad.png'
import sushi from '../assets/images/sushi.png'

function Form() {
  return (
    <div className="form-section">
      <Title />
      <form>
        <div class="form-group">
          <div className="checkbox-button">
            <input id="pizza" type="checkbox" name="food-category"/>
            <label for="pizza"><img src={pizza} alt="pizza" />Pizza</label>
          </div>
          <div className="checkbox-button">
            <input id="burger" type="checkbox" name="food-category"/>
            <label for="burger"><img src={burger} alt="burger" />Burger</label>
          </div>
          <div className="checkbox-button">
            <input id="salad" type="checkbox" name="food-category"/>
            <label for="salad"><img src={salad} alt="salad" />Salad</label>
          </div>
          <div className="checkbox-button">
            <input id="sushi" type="checkbox" name="food-category"/>
            <label for="sushi"><img src={sushi} alt="sushi" />Sushi</label>
          </div>
          <div className="checkbox-button">
            <input id="pizza2" type="checkbox" name="food-category"/>
            <label for="pizza2"><img src={pizza} alt="pizza" />Pizza</label>
          </div>
          <div className="checkbox-button">
            <input id="burger3" type="checkbox" name="food-category"/>
            <label for="burger3"><img src={burger} alt="burger" />Burger</label>
          </div>
          <div className="checkbox-button">
            <input id="salad4" type="checkbox" name="food-category"/>
            <label for="salad4"><img src={salad} alt="salad" />Salad</label>
          </div>
          <div className="checkbox-button">
            <input id="sushi5" type="checkbox" name="food-category"/>
            <label for="sushi5"><img src={sushi} alt="sushi" />Sushi</label>
          </div>
        </div>
        <Button />
      </form>
    </div>
  );
}

export default Form;
