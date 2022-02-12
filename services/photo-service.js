const { getTrash } = require('../helpers/photos-data-massager');
const PhotoSchema = require('../models/photos');

/**
 * 
 * @param {*} req 
 * @param {Recieves the final list from massager function} res 
 */
const getPhotos = async(req, res) => { 
    res.send(res.photos);
};
/**
 * 
 * @param {description: String, location: String, createdAt: Number, favourite: Boolean, trashed: Boolean, size: Number} req 
 * @param {*} res 
 */
const uploadPhoto = async(req, res) => {
    const newPhoto = new PhotoSchema({
        description: req.body.description ? req.body.description : "",
        location: req.body.location,
        createdAt: Date.now(),
        favourite: req.body.favourite,
        trashed: req.body.trashed,
        size: req.body.size ? req.body.size : 0
    })
    try {
        const photoUploaded = await newPhoto.save();
        res.status(200).json(photoUploaded);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
/**
 * 
 * @param {description: String, favourite: Boolean, trashed: Boolean } req 
 * @param {*} res 
 */
const updatePhotoData = async(req, res) => {
    res.photos.description = (req.body.description && req.body.description !== "") ? req.body.description : res.photosdescription;
    res.photos.favourite = req.body.favourite;
    res.photos.trashed = req.body.trashed;
    try {
        const updatedUser = await res.photos.save();
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
/**
 * 
 * @param {*} req 
 * @param { receives target object from massager function} res 
 */
const deletePhoto = async(req, res) => {
    try {
        await res.photos.remove();
        const updatedList = await getTrash();
        res.status(200).json(updatedList);
    } catch (error) {
        res.send(500).json({ message: error.message })
    }
}

module.exports = {
    getPhotos: getPhotos,
    uploadPhoto: uploadPhoto,
    updatePhotoData: updatePhotoData,
    deletePhoto: deletePhoto
}