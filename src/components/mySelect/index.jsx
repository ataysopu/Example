import React from 'react';

const MySelect = ({options, defaultValue, singhIn, onceAgain}) => {
    return (
        <select
            value={singhIn}
            onChange={event => onceAgain(event.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;