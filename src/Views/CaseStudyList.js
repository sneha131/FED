import React, { useEffect, useState } from 'react';
import CardComponent from '../Components/CardComponent';
import NoData from './NoData';

function CaseStudyList(props){

    const [filteredList,setFilteredList]= useState(props.caseStudies);

    useEffect(()=>{
        if (props.selectedCategory==="All")
        {
            setFilteredList(props.caseStudies);
        }
        else
        {
            setFilteredList(props.caseStudies.filter((cs)=> cs.categories[0].title === props.selectedCategory));
        }
    },[props.selectedCategory,props.caseStudies])

    return(
        <div  class="flex flex-wrap container">
            {((filteredList)?(filteredList).map((m)=><CardComponent cslist={m}/>):<NoData />)}
        </div>
    )

}

export default CaseStudyList;