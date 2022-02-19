
const {getActivePhotos, getTrashedPhotos} = require('./photos.resolvers');


// async function photosContext(_, args, req) {
//   const reqObject = {};
//   return {};
// }

module.exports = {
  PhotoQuery: {
    activePhotos: getActivePhotos,
    trashedPhotos: getTrashedPhotos
  },
//   PhotoMutation: {
//   }
};
