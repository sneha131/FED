import React, { useEffect, useState } from 'react';
import { listCaseStudies, listCategories } from '../Services/DisplayServices';
import { NotificationManager } from "react-notifications";
import CategoryList from './CategoryList';
import CaseStudyList from './CaseStudyList';


function HomePage(){

    const [categoryList, setCategoryList]= useState([]);
    const [caseStudyList, setCaseStudyList]= useState([]);
    const [selectedCategory,setSelectedCategory]=useState("All");

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

    function filterContent(filter){
        setSelectedCategory(filter);
    }

    return(
        <div className="w-screen">
            <p class="text-white font-bold text-6xl tracking-widest pt-8 pl-8">Work</p>
            <CategoryList categories={categoryList} filterContent={filterContent}/>
            <CaseStudyList caseStudies={caseStudyList} selectedCategory={selectedCategory}/>
        </div>
    )

}

export default HomePage;