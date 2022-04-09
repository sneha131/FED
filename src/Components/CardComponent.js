import React, { useEffect, useState } from 'react';
import { listCaseStudies, listCategories } from '../Services/DisplayServices';
import { NotificationManager } from "react-notifications";

function CardComponent(props){

    return(
        <div class="container mx-auto text-white pt-6 grid grid-rows-3 grid-flow-col gap-4 w-1/2 h-full">
            <img class="row-span-4 w-5/6 h-full "src={props.cslist.thumbnail}/>
            <label class=" col-span-2 row-start-1 border-b-2" >{props.cslist.categories[0].title}</label>
            <label class=" row-span-2 col-span-2 ">{(props.cslist).title} </label>
            <button class="row-span-3 col-span-3 " onClick={props.cslist.link} >Learn More</button>
        </div>
    )

}

export default CardComponent;