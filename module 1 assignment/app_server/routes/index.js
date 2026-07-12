// when someones visits / send the request to the controllerMain.index function

const express = require('express');
const router = express.Router();

const controllerMain = require('../controllers/main');

router.get('/', controllerMain.index);

module.exports = router;