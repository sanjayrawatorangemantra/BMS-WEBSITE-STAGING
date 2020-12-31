var urlString = "https://stagapi.beatmysugar.com/BackofficeApi/";

//  var urlString = "http://localhost:7000/BackofficeApi/";

// var urlString = "http://localhost:5000/BackofficeApi/";

// const urlString = "https://stagapi.beatmysugar.com/BackofficeApi/";

const GetApiCall = {
  getRequest(url) {

   return fetch(urlString+url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers' : '*',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      // console.log(response)
      return(response)
     
    })
    .catch(error => { console.log('request failed', error); 
    return error;
  });
  },
};

export default GetApiCall;
