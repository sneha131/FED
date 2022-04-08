import {getApiCall} from "../Utils/Api";

export const listCaseStudies = async () => {
    try {
      const result = await getApiCall(`/case-studies`, true);
       console.log(result.data)
      return result.data;
    } catch (e) {
      throw e;
    }
  };

  export const listCategories = async () => {
    try {
      const result = await getApiCall(`/categories`, true);
       console.log(result)
      return result.data;
    } catch (e) {
      throw e;
    }
  };