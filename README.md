# FrontEnd Project Demo

## Objective

1. Display the CaseStudies List
2. Filter the CaseStudies with Categories Provided
3. Navigate to CaseStudies
4. Implement Animation to components

## RoadMap

1. Run the project
2. Click on different Categories to filter the CaseStudies
3. Click on "Learn More" to navigate to a particular CaseStudy

## Technologies/Libraries

1. Reactjs
2. HTML/CSS
3. Tailwind to style components
4. Axios for Data retrieval
5. Postman for testing API
6. Project developed in Visual Studio Code
7. Project uploaded on GitHub

## Drilldown/Roadmap of Pages

### Folders and Pages

1. Views\
    i. HomePage.js\
   ii. CategoryList.js\
  iii. CaseStudyList.js\
   iv. NoData.js
   
2. Components\
   i. CardComponent.js
   
3. Assets\
   i. placeholder-image.svg
   
4. Utils\
   i. Api.js
   
5. Services\
   i. DisplayService.js

### Index.js

The primary page that will load which includes the home page that we see on the browser

### HomePage.js

This page calls API to retrive data with the help of DisplayService Page and display the data with CategoryList and CaseStudyList

### CategoryList.js

CategoryList Page is responsible to display the categories on the page and handle onclick events for different categories

### CaseStudy.js

This page is used to display list of casestudies on the basis of category selection 

### NoData.js

This page is used when there are no data to display

### CardComponent.js

This is a designed section of a casestudy which is called each time a casestudy is to be displayed

### Api.js

This page includes a function to retreive data from API using axios

### DisplayService.js

This page contains 2 functions for category API call and casestudy API call

## References

CaseStudy API: https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies \
Category API: https://plankdesign.com/wp-json/plank/v1/fed-test/categories \
Tailwind: https://tailwindcss.com/docs
