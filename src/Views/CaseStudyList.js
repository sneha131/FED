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
    },[props.selectedCategory,props.caseStudies]) //filter case studies on categor basis

    return(
        <div className="homepage3">
            <div className="flex flex-wrap container items-center">
                {((filteredList.length<1)
                ?<NoData/>
                :(filteredList).map((casestudy,id)=><CardComponent key={id} cslist={casestudy}/>))} 
            </div>
        </div>
    )

}

export default CaseStudyList;