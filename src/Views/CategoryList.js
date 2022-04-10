import React, { useEffect, useState } from 'react';


function CategoryList(props){

    const [selectedCategory, setSelectedCategory]=useState("All");
    useEffect(()=>{
        props.filterContent(selectedCategory)
    },[selectedCategory]);

    return(
        <div class="border-b-2 w-fit mr-10 ml-10 pr-4 p-4">
            <button class=" pr-12 p-4 text-white hover:font-bold hover:border-2" onClick={(e)=>setSelectedCategory("All")}>All</button>
            {((props.categories)?(props.categories).map((category)=><button onClick={(e)=>setSelectedCategory(category.title)} className="pr-12 p-4 text-white hover:font-bold hover:border-2">{category.title}</button>):<label>No</label>)}
        </div>
    )

}
export default CategoryList;