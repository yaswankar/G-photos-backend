const { GraphQLError } = require('graphql');
const photoService = require('../../services/photos.js')

async function getActivePhotos(parent, args, req) {
    try {
        const activePhotos = await photoService.getActivePhotos(req).then(resp => resp.data.map(item => item));
        return activePhotos;
    } catch (error) {
        // logger.error(__filename + ': Failed to get response for getActivePhotos, err=' + JSON.stringify(error));
        return new GraphQLError(JSON.stringify(error));
    }
}

async function getTrashedPhotos(parent, args, req) {
    try {
        const trashedPhotos = await photoService.getTrashedPhotos(req);
        return trashedPhotos;
    } catch (error) {
        // logger.error(__filename + ': Failed to get response for getTrashedPhotos, err=' + JSON.stringify(error));
        return new GraphQLError(JSON.stringify(error));
    }
}

module.exports = {
    getActivePhotos,
    getTrashedPhotos
}