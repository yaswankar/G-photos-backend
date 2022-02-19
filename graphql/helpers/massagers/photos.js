const axios = require('axios')

const getData = async (reqObj) => {
    console.log('Hitting');
    const response = await axios(reqObj);
    return response;
}

module.exports = {
    getData
}