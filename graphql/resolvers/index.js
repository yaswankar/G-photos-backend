const { merge } = require("../helpers/util");
const root = require('./root');
const photos = require('./photos');
const getResolvers = () => merge(root, photos);

module.exports = getResolvers;