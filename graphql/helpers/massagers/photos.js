const axios = require('axios')

const getData = async (reqObj) => {
    const response = await axios(reqObj);
    return response;
}

module.exports = {
    getData
}