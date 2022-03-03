const serviceMapper = require('../helpers/service-mapper');
const helpers = require('../helpers/massagers/photos');
const serviceArgs = require('../config/photo-service-riq.json')

const getActivePhotos = async(req) => {
    console.log('into services');
    const serviceObject = {
        url: serviceArgs.GET_ACTIVE_PHOTOS.url,
        method: serviceArgs.GET_ACTIVE_PHOTOS.method
    }
    let requestObject = serviceMapper.generateReqObj(serviceObject, req, { reqBody: {} });
    const resp = await helpers.getData(requestObject);
    console.log('response service', {response: resp.data.map(item => { return {createdAt: item.createdAt}})});
    return resp;
}

module.exports = {
    getActivePhotos
}