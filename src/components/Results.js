import React from 'react';

import pizza from '../assets/images/pizza.png'

function Results() {

  return (
    <div className='results'>
      <nav className='breadcrumb'>
        <ol>
            <li className='breadcrumb__item'>
                <a href="#">Retour aux options</a>
            </li>
        </ol>
      </nav>
      <div className='results-group'>
        <span><img src={pizza} alt="pizza" /></span>
        <p>Pizzaaa!</p>
      </div>
    </div>
  );
}

export default Results;
