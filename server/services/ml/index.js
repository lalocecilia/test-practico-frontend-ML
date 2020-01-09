const externalClient = require('./client');

exports.getSearch = query => externalClient.getSearch(query);
exports.getProduct = id => externalClient.getProduct(id);
exports.getProductDescription = id => externalClient.getProductDescription(id);
