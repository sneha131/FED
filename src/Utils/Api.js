import axios from 'axios'; //importing Axios

export const getApiCall = async (endpoint) => {
    let options = {
      url: `https://plankdesign.com/wp-json/plank/v1/fed-test${endpoint}`,
      method: 'GET',
      data: {},
    };
    const response = await axios(options);
    return response;
  }; //Function to create axios api call