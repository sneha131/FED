import React, { useEffect, useState } from 'react';
import { listCaseStudies, listCategories } from '../Services/DisplayServices';
import { NotificationManager } from "react-notifications";

function CategoryList(props){


    return(
        <>
        {((props.categories)?(props.categories).map((m)=><label>{m.title}   </label>):<label>No</label>)}
        </>
    )

}

export default CategoryList;