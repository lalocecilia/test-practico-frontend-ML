const express = require('express');

const router = express.Router();

const searchController = function (req, res) {
  res.render('home');
};

router.get(['/'], searchController);
router.get(['/items'], searchController);
router.get(['/items/:id'], searchController);

module.exports = router;
