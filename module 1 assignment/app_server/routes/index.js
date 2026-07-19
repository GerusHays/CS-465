const express = require('express');
const router = express.Router();

const controllerMain = require('../controllers/main');
const controllerTravel = require('../controllers/travel');

router.get('/', controllerMain.index);
router.get('/travel', controllerTravel.travel);

module.exports = router;
