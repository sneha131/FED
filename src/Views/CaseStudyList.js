import React, { useEffect, useState } from 'react';
import { listCaseStudies, listCategories } from '../Services/DisplayServices';
import { NotificationManager } from "react-notifications";
import CardComponent from '../Components/CardComponent';

function CaseStudyList(props){


    return(
        <div  class="flex flex-wrap">
       {((props.caseStudies)?(props.caseStudies).map((m)=><CardComponent cslist={m}/>):<label>No</label>)}
        </div>
    )

}

export default CaseStudyList;