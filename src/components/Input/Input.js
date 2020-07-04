import React from 'react';
import './input.scss';

const Input = (props) => {
    const { label } = props;
    return (
        <div className="input-container">
            <label className="input-container__label" htmlFor={label}>{label}</label>
            <input id={label} className="input-container__input" {...props} />
        </div>
    );
}

export default Input;