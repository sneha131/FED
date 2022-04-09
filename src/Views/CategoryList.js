import React, { useEffect, useState } from 'react';
import { listCaseStudies, listCategories } from '../Services/DisplayServices';
import { NotificationManager } from "react-notifications";

function CategoryList(props){


    return(
        <div class="border-b-2 w-5/6 ml-6 pr-4 p-4">
        <button class=" pr-4 p-4 text-white hover:font-bold hover:border-2">All</button>
        {((props.categories)?(props.categories).map((category)=><button class="pr-4 p-4 text-white hover:font-bold hover:border-2">{category.title}</button>):<label>No</label>)}
        </div>
    )

}

export default CategoryList;