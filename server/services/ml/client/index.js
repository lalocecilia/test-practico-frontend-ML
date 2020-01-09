const config = rootRequire('./config');
const defaultClient = rootRequire('./client').defaultClient;

const mlClient = defaultClient.defaults({
  baseUrl: config.ml.rest.host
});

exports.getSearch = (query) => {
  const url = '/sites/MLA/search?q=' + query + '&limit=4';
  return new Promise((resolve, reject) => {
    mlClient.get({ url, json: true }, (err, response, body) => {
      if (err == null && response.statusCode === 200) {
        return resolve(body);
      }
      return reject(err);
    });
  });
};

exports.getProduct = (id) => {
  const url = '/items/' + id;
  return new Promise((resolve, reject) => {
    mlClient.get({ url, json: true }, (err, response, body) => {
      if (err == null && response.statusCode === 200) {
        return resolve(body);
      }
      return reject(err);
    });
  });
};

exports.getProductDescription = (id) => {
  const url = '/items/' + id + '/description';
  return new Promise((resolve, reject) => {
    mlClient.get({ url, json: true }, (err, response, body) => {
      if (err == null && response.statusCode === 200) {
        return resolve(body);
      }
      return reject(err);
    });
  });
};
