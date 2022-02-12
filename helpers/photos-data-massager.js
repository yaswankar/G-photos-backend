const PhotoSchema = require('../models/photos');

/**
 * 
 * @param {params} req 
 * @param {*} res 
 * @param {*} next 
 * @returns List of Images
 */
const getPhotosData = async(req, res, next) => {
    let photos;
    if(req.query.id) {
        try {
            photos = await PhotoSchema.findById(req.query.id);
            if(photos === null) return res.status(404).send('Photo not found');
        } catch (error) {
            return res.status(500).send('Photo not found');
        }
    } else if(req.query.desc && req.query.desc === 'favourite') {
        try {
            photos = await PhotoSchema.find({favourite: true});
            if(photos === null) return res.status(404).send('Photo not found');
        } catch (error) {
            return res.status(500).send('Photo not found');
        }
    } else if(req.query.desc && req.query.desc === 'recent') {
        try {
            photos = await PhotoSchema.find({createdAt: { // 15 minutes ago (from now)
                $gt: Date.now() - 1000 * 60 * 15
            }});
            if(photos === null) return res.status(404).send('Photo not found');
        } catch (error) {
            return res.status(500).send('Photo not found');
        }
    } else {
        try {
            photos = await PhotoSchema.find({trashed: false});
            if(photos.length == 0) return res.status(404).send('Photos not found');
        } catch (error) {
            return res.status(500).send('Photos not found');
        }
    }
    res.photos = photos;
    next();
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns List of Trash Images
 */
const getTrashedPhotos = async(req, res, next) => {
    let photos;
    if(req.query.id) {
        try {
            photos = await PhotoSchema.findById(req.query.id);
            if(photos === null) return res.status(404).send('Photo not found');
        } catch (error) {
            return res.status(500).send('Photo not found');
        }
    } else {
        try {
            photos = await getTrash();
            if(photos.length == 0) return res.status(404).send('Photos not found');
        } catch (error) {
            return res.status(500).send('Photos not found');
        }
    }
    res.photos = photos;
    next();
}
/**
 * 
 * @returns returns updated trash list
 */
const getTrash = async() => {
    const photos  = await PhotoSchema.find({trashed: true});
    return photos;
}


module.exports = {
    getPhotosData: getPhotosData,
    getTrashedPhotos: getTrashedPhotos,
    getTrash: getTrash
}