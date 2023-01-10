//rafc
import React, { form, useState } from 'react'

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('card');
    const handleInputChange = (e) => {setInputValue(e.target.value)}
    const handleSubmit = (e) =>  {
        e.preventDefault();
        console.log('hecho submit');
    }
    return (
        <form onSubmit={ (e) => handleSubmit(e)}>
            {/* <h1>{inputValue}</h1> */}
            <input 
                type='text'
                value={inputValue}
                onChange={(e) => handleInputChange(e)}
            />
        </form>
    );
}
