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
        <h1>Hello</h1>
         <CategoryList categories={categoryList}/>
         <CaseStudyList caseStudies={caseStudyList}/>

        </>
    )

}

export default HomePage;