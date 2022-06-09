import React from 'react';

function Button(props) {
    return (
        <button className="button">
            {props.name}
        </button>
    );
}

export default Button;
