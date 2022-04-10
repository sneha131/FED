import React, { useEffect, useState } from 'react';
import NoData from './NoData';


function CategoryList(props){

    const [selectedCategory, setSelectedCategory]=useState("All");
    useEffect(()=>{
        props.filterContent(selectedCategory)
    },[selectedCategory]);

    return(
        <div className="border-b-2 w-fit pr-4 xl:m-8">
            <button className=" pr-12 p-4 text-white hover:font-bold hover:border-2" onClick={(e)=>setSelectedCategory("All")}>All</button>
            {((props.categories)
            ?(props.categories).map((category,id)=><button key={id} onClick={(e)=>setSelectedCategory(category.title)} className="pr-12 p-4 text-white hover:font-bold hover:border-2">{category.title}</button>)
            :<NoData/>)}
        </div>
    )

}
export default CategoryList;