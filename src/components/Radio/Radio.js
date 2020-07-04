import React from 'react';
import './radio.scss';

const Radio = (props) => {
    const { label, checked } = props;
    return (
        <div className={`radio ${checked ? "radio--isActive" : ""}`}>
            <label htmlFor={props.id} className="radio__label" >
                <input {...props} style={{ display: 'none' }} type="radio" />
                {label}
            </label>
        </div>
    );
}

export default Radio;