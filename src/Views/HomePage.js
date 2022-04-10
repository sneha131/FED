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
        <div className=" w-screen homepage2 p8" >
            <div className="homepage3">
                <p className="text-white font-bold text-6xl tracking-widest p-2 xl:m-4">Work</p>
                <CategoryList categories={categoryList} filterContent={filterContent}/>
                <CaseStudyList caseStudies={caseStudyList} selectedCategory={selectedCategory}/>
            </div>
        </div>
    )

}

export default HomePage;