const express = require('express');
const search = require('./search');

const router = express.Router();

router.get(['/api/items'], search.getSearch);
router.get(['/api/items/:id'], search.getProductDetail);

module.exports = router;
