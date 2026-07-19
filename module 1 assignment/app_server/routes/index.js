const express = require('express');
const router = express.Router();
const controllerMain = require('../controllers/main');

router.get('/', controllerMain.index);
router.get('/travel', controllerMain.travel);

module.exports = router;
