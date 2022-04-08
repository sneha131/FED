import React, { useEffect, useState } from 'react';
import { listCaseStudies, listCategories } from '../Services/DisplayServices';
import { NotificationManager } from "react-notifications";

function CaseStudyList(props){


    return(
        <>
       {((props.caseStudies)?(props.caseStudies).map((m)=><label>{m.title}   </label>):<label>No</label>)}
        </>
    )

}

export default CaseStudyList;