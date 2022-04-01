import React from 'react';

import pizza from '../assets/images/pizza.png'

function Category() {
    return (
        <div className="category">
            <div class="image">
                <img src={pizza} alt="pizza" />
            </div>
            <span>Pizza</span>
        </div>
    )
}

export default Category;
