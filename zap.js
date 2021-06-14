const axios = require('axios').default;
axios.get('').then(response =>{
    console.log(response);
}).catch((error) =>{
    console.error(error);
});