import React from 'react';

const Selector = (props) => {
    const { options, handleChange, selectedOption, title } = props;
    return (
        <div className="employee-form__options">
            <div className="employee-form__options-title">{title}</div>
            <div className="employee-form__options-values">
                {options.map((option, i) => 
                    <label className="employee-form__options-value" key={i}>
                        <input type="radio" value={option} onChange={handleChange} checked={option === selectedOption} />
                        {option}
                    </label>
                )}
            </div>
        </div>  
    );
}

export default Selector;