import React from 'react';

import Title from './Title';
import Button from './Button';

import pizza from '../assets/images/pizza.png'
import burger from '../assets/images/hamburger.png'
import salad from '../assets/images/salad.png'
import sushi from '../assets/images/sushi.png'
import takeoutbox from '../assets/images/takeout-box.png'

function Form() {
  return (
    <div className="form-section">
      <Title />
      <form>
        <div className="form-group">
          <div className="checkbox-button">
            <input id="pizza" type="checkbox" name="food-category"/>
            <label htmlFor="pizza"><img src={pizza} alt="pizza" />Pizza</label>
          </div>
          <div className="checkbox-button">
            <input id="burger" type="checkbox" name="food-category"/>
            <label htmlFor="burger"><img src={burger} alt="burger" />Burger</label>
          </div>
          <div className="checkbox-button">
            <input id="salad" type="checkbox" name="food-category"/>
            <label htmlFor="salad"><img src={salad} alt="salad" />Salad</label>
          </div>
          <div className="checkbox-button">
            <input id="sushi" type="checkbox" name="food-category"/>
            <label htmlFor="sushi"><img src={sushi} alt="sushi" />Sushi</label>
          </div>
          <div className="checkbox-button">
            <input id="pizza2" type="checkbox" name="food-category"/>
            <label htmlFor="pizza2"><img src={pizza} alt="pizza" />Pizza</label>
          </div>
          <div className="checkbox-button">
            <input id="burger3" type="checkbox" name="food-category"/>
            <label htmlFor="burger3"><img src={burger} alt="burger" />Burger</label>
          </div>
          <div className="checkbox-button">
            <input id="salad4" type="checkbox" name="food-category"/>
            <label htmlFor="salad4"><img src={salad} alt="salad" />Salad</label>
          </div>
          <div className="checkbox-button">
            <input id="sushi5" type="checkbox" name="food-category"/>
            <label htmlFor="sushi5"><img src={sushi} alt="sushi" />Sushi</label>
          </div>
          <div className="select-all">
            <input id="select-all" type="button" name="all-food"/>
            <label htmlFor="select-all">Tout sélectionner<img src={takeoutbox} alt="selectall-takeout" /></label>
          </div>
        </div>
        <Button name="Fais tourner la roue !" />
      </form>
    </div>
  );
}

export default Form;
