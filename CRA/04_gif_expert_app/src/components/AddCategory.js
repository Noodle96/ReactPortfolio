//rafc
import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log('handleInputChange llamado');
    }
    
    const handleSubmit = (e) =>  {
        e.preventDefault();
        console.log('handleSubmit llamado, ',inputValue);
        // console.log('hecho submit');
        if(inputValue.trim().length > 1){
            setCategories((cats) => [...cats, inputValue]);
            // setCategories([inputValue])
            setInputValue('');
        }
    }
    return (
        <form onSubmit={ (e) => handleSubmit(e)}>
            {/* <h1>{inputValue}</h1> */}
            <p>{inputValue}</p>
            <input 
                type='text'
                value={inputValue}
                onChange={(e) => handleInputChange(e)}
            />
        </form>
    );
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}