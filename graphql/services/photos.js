const serviceMapper = require('../helpers/service-mapper');
const helpers = require('../helpers/massagers/photos');
const serviceArgs = require('../config/photo-service-riq.json')

const getActivePhotos = (req) => {
    console.log('into services');
    const serviceObject = {
        url: serviceArgs.GET_ACTIVE_PHOTOS.url,
        method: serviceArgs.GET_ACTIVE_PHOTOS.method
    }
    let requestObject = serviceMapper.generateReqObj(serviceObject, req, { reqBody: {} });
    return helpers.getData(requestObject);
}

module.exports = {
    getActivePhotos
}