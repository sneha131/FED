import React, { useCallback, useEffect, useState } from 'react';
import { listCaseStudies, listCategories } from '../Services/DisplayServices';
import { NotificationManager } from "react-notifications";
import CategoryList from './CategoryList';
import CaseStudyList from './CaseStudyList';


function HomePage(){

    const [categoryList, setCategoryList]= useState([]);
    const [caseStudyList, setCaseStudyList]= useState([]);

    useEffect(()=>{

        listCategories().then((res) => {
            if(res)
            {
              setCategoryList(res.categories);     
            }
          })
          .catch((err) => {
            if(err.response.data.message) {
              NotificationManager.error(err.response.data.message, 'Error', 5000);
            } else {
              NotificationManager.error("", 'Error', 5000);
            }      
          });
    },[])

    useEffect(()=>{

        listCaseStudies().then((res) => {
            if(res)
            {
              setCaseStudyList(res['case-studies']);     
            }
          })
          .catch((err) => {
            if(err.response.data.message) {
              NotificationManager.error(err.response.data.message, 'Error', 5000);
            } else {
              NotificationManager.error("", 'Error', 5000);
            }      
          });
    },[])


    return(
        <>
        <p class="text-white font-bold text-6xl tracking-widest p-8">Work</p>
         <CategoryList categories={categoryList}/>
         <CaseStudyList caseStudies={caseStudyList}/>
        </>
    )

}

export default HomePage;