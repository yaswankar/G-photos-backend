const express = require('express');
const photosRouter = express.Router();
const cors = require('cors');
const photoService = require('../services/photo-service');
const photosDataMassager = require('../helpers/photos-data-massager');

photosRouter.use(cors({
    origin: '*' // To allow localHost
}));

// To get all/single photos
photosRouter.get('/', photosDataMassager.getPhotosData, photoService.getPhotos);

// To get all trashed images
photosRouter.get('/trashed', photosDataMassager.getTrashedPhotos, photoService.getPhotos);

// To upload a photo
photosRouter.post('/', photoService.uploadPhoto);


// To update photo details
photosRouter.patch('/', photosDataMassager.getPhotosData, photoService.updatePhotoData);

// To delete a photo
photosRouter.delete('/trashed', photosDataMassager.getTrashedPhotos, photoService.deletePhoto)


module.exports = photosRouter