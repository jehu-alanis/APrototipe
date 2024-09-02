const express = require('express');
const router = express.Router();
const myController = require('../controllers/mycontroller');

router.get('/documents', myController.getDocuments);

module.exports = router;