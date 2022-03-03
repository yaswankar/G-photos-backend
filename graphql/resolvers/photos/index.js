
const {getActivePhotos, getTrashedPhotos} = require('./photos.resolvers');


async function photosContext(_, args, req) {
  const reqObject = {};
  return {};
}

module.exports = {
  Query: {
    photo: photosContext,
  },
  PhotoQuery: {
    activePhotos: getActivePhotos,
    trashedPhotos: getTrashedPhotos
  },
//   PhotoMutation: {
//   }
};
