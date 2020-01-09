const mlService = rootRequire('./services/ml');

exports.getSearch = (req, res) => {
  mlService.getSearch(req.query.q).then(
    (data) => {
      console.log('ML Search: GET - SUCCESS');

      const items = data.results.map((item) => {
        const price = (item.price).toFixed(2).toString().split('.');
        const amount = parseInt(price[0], 10);
        const decimals = parseInt(price[1], 10);

        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount,
            decimals
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          address: item.address.state_name
        };
      });

      let categories = [];
      try {
        const allCategories = data.filters.filter(f => f.id = 'category');
        if (allCategories.length > 0) {
          // TODO: Asumo que el servicio me devuelve en la primera posición la categoría con mas resultados.
          categories = allCategories[0].values[0].path_from_root.map(c => c.name);
        }
      } catch (e) {
        console.log('ML Search: ERROR reading categories: ' + e);
      }

      const resp = {
        author: {
          name: 'Eduardo',
          lastname: 'Cecilia'
        },
        categories,
        items
      };

      res.json(resp);
    },
    (error) => {
      console.log('ML Search: GET - ERROR: ' + JSON.stringify(error));
      const statusCode = (error !== null && error.statusCode !== null ? error.statusCode : 500);
      res.sendStatus(statusCode);
    }
  );
};

exports.getProductDetail = (req, res) => {
  mlService.getProduct(req.params.id).then(
    (product) => {
      console.log('ML Product: GET - SUCCESS');
      mlService.getProductDescription(req.params.id).then(
        (description) => {
          console.log('ML Product description: GET - SUCCESS');

          const price = (product.price).toFixed(2).toString().split('.');
          const amount = parseInt(price[0], 10);
          const decimals = parseInt(price[1], 10);

          const resp = {
            author: {
              name: 'Eduardo',
              lastname: 'Cecilia'
            },
            item: {
              id: product.id,
              title: product.title,
              price: {
                currency: product.currency_id,
                amount,
                decimals
              },
              // TODO: Devuelvo solo el primer elemento ya que solo se muestra una imagen en la prueba.
              picture: (product.pictures && product.pictures.length > 0 && product.pictures.slice(0, 1)[0].url),
              condition: product.condition,
              free_shipping: product.shipping.free_shipping,
              sold_quantity: product.sold_quantity,
              description: description.plain_text
            }
          };

          res.json(resp);
        },
        (error) => {
          console.log('ML Product description: GET - ERROR: ' + JSON.stringify(error));
          const statusCode = (error !== null && error.statusCode !== null ? error.statusCode : 500);
          res.sendStatus(statusCode);
        }
      );
    },
    (error) => {
      console.log('ML Product: GET - ERROR: ' + JSON.stringify(error));
      const statusCode = (error !== null && error.statusCode !== null ? error.statusCode : 500);
      res.sendStatus(statusCode);
    }
  );
};
