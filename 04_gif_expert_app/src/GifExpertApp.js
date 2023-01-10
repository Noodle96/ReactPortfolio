import { Fragment, useState } from "react";

//FUNCTIONAL COMPONENT
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['common','rare','legendary']);
    const handleAdd = () => {
        // setCategories([...categories, 'newRare']);
        setCategories(cats => [...cats,'legends']);
    }
    return (
        <Fragment>
            <h2>GiftExpertApp</h2>
            <hr />
            <button onClick={(e) => {handleAdd(e)}}>Add Category</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </Fragment>
    );
};
