import {getApiCall} from "../Utils/Api";

export const listCaseStudies = async () => {
    try {
      const result = await getApiCall(`/case-studies`, true);
      return result.data;
    } catch (e) {
      throw e;
    }
  };

  export const listCategories = async () => {
    try {
      const result = await getApiCall(`/categories`, true);
      return result.data;
    } catch (e) {
      throw e;
    }
  };