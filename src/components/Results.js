import React from 'react';
import Button from './Button';
import pizza from '../assets/images/pizza-result.png'

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
        <div className='results-group__pick'>
          <img src={pizza} alt="pizza" />
          <span>Pizzaaaa !</span>
        </div>
      </div>
      <div className='results-buttons'>
        <Button name="Je veux rejouer" />
        <Button name="Partager le résultat" />
      </div>
    </div>
  );
}

export default Results;
