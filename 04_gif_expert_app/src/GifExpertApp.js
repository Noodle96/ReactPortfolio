import { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//FUNCTIONAL COMPONENT
export const GifExpertApp = ({defaultCategories = []}) => {
    const [categories, setCategories] = useState(defaultCategories);
  
    return (
        <Fragment>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            {/* <button onClick={(e) => {handleAdd(e)}}>Add Category</button> */}
            <ol>
                {
                    categories.map( category => (
                         <GifGrid 
                            key={category}
                            category={category}
                         />
                    ))
                    
                }
            </ol>     
        </Fragment>
    );
};
